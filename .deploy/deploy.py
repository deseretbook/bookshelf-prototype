#!/usr/bin/env python3
"""Deploy a Claude artifact prototype to this repo's GitHub Pages site.

Steps (each is a subcommand, run in order by the deploy-prototype skill):
  build  copy a downloaded artifact into <repo>/<slug>/, bake saved Tweaks values
         into TWEAK_DEFAULTS, hide the Tweaks launcher (?tweaks=1 shows it)
  qa     load a page headless, report console errors and failed requests
  push   commit only <slug>/ (and .deploy/) and push to main
  wait   poll the live URL until the new build is served

Stdlib only, plus Playwright for `qa`.
"""
import argparse, json, os, re, shutil, subprocess, sys, time, urllib.parse, urllib.request

PAGES = "https://deseretbook.github.io/bookshelf-prototype/"
# Artifact bookkeeping files that never belong on the public site.
SKIP_FILES = {"CLAUDE.md", "compat.json", "preflight.js"}
SKIP_DIRS = {"archive"}
EDIT_RE = re.compile(r"(/\*EDITMODE-BEGIN\*/)(\{.*?\})(/\*EDITMODE-END\*/)", re.S)
PILL_OLD = r"if (/[?&]tweaks=0\b/.test(location.search)) return null;"
PILL_NEW = r"if (!/[?&]tweaks=1\b/.test(location.search)) return null; /* deploy: launcher hidden unless ?tweaks=1 */"


def sh(*cmd, cwd=None, check=True):
    r = subprocess.run(cmd, cwd=cwd, text=True, capture_output=True)
    if check and r.returncode:
        sys.exit(f"$ {' '.join(cmd)}\n{r.stdout}{r.stderr}")
    return r.stdout.strip()


def build(a):
    src, dst = os.path.abspath(a.src), os.path.join(a.repo, a.slug)
    if not os.path.isfile(os.path.join(src, a.entry)):
        sys.exit(f"entry page {a.entry} not found in {src}")
    # Add and update only: files already in the folder that the artifact no longer has are kept,
    # because the repo is shared and older pages may be linked from tickets. --prune removes them.
    if a.prune and os.path.isdir(dst):
        shutil.rmtree(dst)
    n = 0
    for root, dirs, files in os.walk(src):
        rel = os.path.relpath(root, src)
        dirs[:] = [d for d in dirs if not (rel == "." and d in SKIP_DIRS)]
        for f in files:
            if rel == "." and f in SKIP_FILES:
                continue
            out = os.path.join(dst, rel, f)
            os.makedirs(os.path.dirname(out), exist_ok=True)
            shutil.copy2(os.path.join(root, f), out)
            n += 1
    entry = os.path.join(dst, a.entry)
    if a.entry != "index.html":  # so <slug>/ opens the prototype
        shutil.copy2(entry, os.path.join(dst, "index.html"))
    notes = [f"{n} files copied"]

    if a.tweaks:
        saved = json.load(open(a.tweaks))
        saved = saved.get("values", saved)
        for root, _, files in os.walk(dst):
            for f in files:
                if not f.endswith(".html"):
                    continue
                p = os.path.join(root, f)
                html = open(p, encoding="utf-8").read()
                m = EDIT_RE.search(html)
                if not m:
                    continue
                defaults = json.loads(m.group(2))
                merged = {**defaults, **saved}
                html = html[: m.start(2)] + json.dumps(merged, indent=2) + html[m.end(2):]
                open(p, "w", encoding="utf-8").write(html)
                notes.append(f"Tweaks baked into {os.path.relpath(p, dst)} ({len(saved)} saved values)")

    if not a.keep_tweaks_pill:
        hit = False
        for root, _, files in os.walk(dst):
            for f in files:
                if f.endswith((".jsx", ".js", ".html")):
                    p = os.path.join(root, f)
                    t = open(p, encoding="utf-8", errors="surrogateescape").read()
                    if PILL_OLD in t:
                        open(p, "w", encoding="utf-8", errors="surrogateescape").write(t.replace(PILL_OLD, PILL_NEW))
                        hit = True
        notes.append("Tweaks launcher hidden (add ?tweaks=1 to show it)" if hit else "no Tweaks launcher found")
    print("\n".join(notes))


def qa(a):
    from playwright.sync_api import sync_playwright
    errs, fails = [], []
    with sync_playwright() as p:
        b = p.chromium.launch()
        for w, h, label in [(1440, 900, "desktop"), (390, 844, "mobile")]:
            pg = b.new_page(viewport={"width": w, "height": h})
            pg.on("console", lambda m, l=label: m.type == "error" and errs.append(f"[{l}] {m.text[:200]}"))
            pg.on("pageerror", lambda e, l=label: errs.append(f"[{l}] {str(e)[:200]}"))
            pg.on("response", lambda r, l=label: r.status >= 400 and fails.append(f"[{l}] {r.status} {r.url}"))
            for route in [""] + (a.routes or []):
                pg.goto(a.url + route, wait_until="networkidle", timeout=90000)
                pg.wait_for_timeout(1500)
                if a.shots:
                    os.makedirs(a.shots, exist_ok=True)
                    name = (route.strip("#/").replace("/", "_") or "home") + f"-{label}.png"
                    pg.screenshot(path=os.path.join(a.shots, name))
            pg.close()
        b.close()
    # External hosts (fonts, analytics) are not ours to fix; report them separately.
    own = [f for f in fails if a.url.split("/")[2] in f]
    other = [f for f in fails if f not in own]
    print(json.dumps({"console_errors": sorted(set(errs)), "failed_own": sorted(set(own)),
                      "failed_external": sorted(set(other))}, indent=2))
    sys.exit(1 if errs or own else 0)


def push(a):
    r = a.repo
    sh("git", "fetch", "origin", "main", cwd=r)
    sh("git", "add", "-A", a.slug, ".deploy", cwd=r)
    if not sh("git", "diff", "--cached", "--name-only", cwd=r):
        print("nothing changed since the last deploy")
        return
    changed = sh("git", "diff", "--cached", "--stat", cwd=r).splitlines()[-1]
    msg = f"{a.message}\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
    if a.session:
        msg += f"\nClaude-Session: {a.session}"
    sh("git", "commit", "-q", "-m", msg, cwd=r)
    sh("git", "rebase", "-q", "origin/main", cwd=r)
    for i in range(3):
        if subprocess.run(["git", "push", "-q", "origin", "HEAD:main"], cwd=r).returncode == 0:
            print(f"pushed {sh('git', 'rev-parse', '--short', 'HEAD', cwd=r)} ({changed})")
            return
        time.sleep(3)
        sh("git", "pull", "-q", "--rebase", "origin", "main", cwd=r)
    sys.exit("push failed three times")


def wait(a):
    """Poll until the live copy of a file matches the local one."""
    want = open(os.path.join(a.repo, a.slug, a.file), "rb").read()
    url = PAGES + urllib.parse.quote(a.slug + "/" + a.file)
    for i in range(a.tries):
        try:
            got = urllib.request.urlopen(f"{url}?v={time.time()}", timeout=30).read()
            if got == want:
                print(f"live after ~{i * a.every}s: {PAGES}{a.slug}/")
                return
        except Exception:
            pass
        time.sleep(a.every)
    sys.exit(f"not live after {a.tries * a.every}s; Pages may still be building")


ap = argparse.ArgumentParser()
sp = ap.add_subparsers(dest="cmd", required=True)
b = sp.add_parser("build"); b.add_argument("--src", required=True); b.add_argument("--slug", required=True)
b.add_argument("--repo", default="."); b.add_argument("--entry", default="index.html")
b.add_argument("--tweaks"); b.add_argument("--keep-tweaks-pill", action="store_true")
b.add_argument("--prune", action="store_true", help="delete files the artifact no longer has (ask first)")
q = sp.add_parser("qa"); q.add_argument("--url", required=True); q.add_argument("--routes", nargs="*")
q.add_argument("--shots")
p_ = sp.add_parser("push"); p_.add_argument("--slug", required=True); p_.add_argument("--repo", default=".")
p_.add_argument("--message", required=True); p_.add_argument("--session")
w = sp.add_parser("wait"); w.add_argument("--slug", required=True); w.add_argument("--repo", default=".")
w.add_argument("--file", default="index.html"); w.add_argument("--tries", type=int, default=40)
w.add_argument("--every", type=int, default=15)
a = ap.parse_args()
{"build": build, "qa": qa, "push": push, "wait": wait}[a.cmd](a)
