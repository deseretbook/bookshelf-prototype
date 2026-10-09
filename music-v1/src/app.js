// Music V1 — clickable iPhone prototype. Vanilla JS, no build step.
(() => {
  const { artists, albums, songs, books, audiobooks } = window.CATALOG;
  const I = window.ICON;
  const $ = (sel, el = document) => el.querySelector(sel);
  const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = (secs) => { secs = Math.max(0, Math.round(secs)); return `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}`; };
  const BP = '<img class="bp-logo" src="assets/bookshelf-wordmark.svg" alt="bookshelf+">';

  // ---------- state ----------
  const STORE = 'bookshelf-music-v1';
  const defaults = () => ({
    libAlbums: ['this-new-day', 'redeemer', 'hymns-ii', 'love-like-you', 'jenny-oaks', 'messiah'],
    libSongs: [...albums['this-new-day'].songIds, ...albums['love-like-you'].songIds.slice(4), ...albums['hymns-ii'].songIds.slice(0, 2)],
    downloads: ['this-new-day'],
    playlists: [],
    offline: false,
  });
  let lib = defaults();
  try { const saved = JSON.parse(localStorage.getItem(STORE)); if (saved) lib = { ...lib, ...saved }; } catch (e) { /* storage unavailable */ }
  const save = () => { try { localStorage.setItem(STORE, JSON.stringify(lib)); } catch (e) { /* ignore */ } };

  const roots = { home: 'home', library: 'library', discover: 'discover', search: 'search', account: 'account' };
  const S = {
    tab: 'library',
    stacks: Object.fromEntries(Object.keys(roots).map((t) => [t, [{ name: roots[t] }]])),
    libFilter: 'music',
    discoverFilter: 'Music',
    query: '',
    searchScope: 'Music',
    listQuery: '',
  };
  const P = { queue: [], idx: -1, playing: false, pos: 0, shuffle: false, repeat: 'off', sleep: 0, open: false, upnext: false };

  const inLibAlbum = (id) => lib.libAlbums.includes(id);
  const inLibSong = (id) => lib.libSongs.includes(id) || inLibAlbum(songs[id].album);
  const isDownloaded = (songId) => lib.downloads.includes(songs[songId].album) || lib.downloads.includes(songId);
  const librarySongIds = () => Object.keys(songs).filter(inLibSong);
  const libraryArtistIds = () => [...new Set(librarySongIds().map((id) => songs[id].artist))];
  const playable = (id) => !lib.offline || isDownloaded(id);

  // ---------- navigation ----------
  const device = $('#device');
  const screensEl = $('#screens');
  const stack = () => S.stacks[S.tab];
  const top = () => stack()[stack().length - 1];

  function rememberScroll() {
    const cur = $('.screen', screensEl);
    if (cur) top().scroll = cur.scrollTop;
  }
  function push(name, id, extra = {}) {
    rememberScroll();
    S.listQuery = '';
    stack().push({ name, id, ...extra });
    render('enter');
  }
  function back() {
    if (stack().length < 2) return;
    stack().pop();
    S.listQuery = '';
    render('enter-back');
  }
  function switchTab(t) {
    rememberScroll();
    if (S.tab === t) { if (stack().length > 1) { S.stacks[t] = [stack()[0]]; render('enter-back'); } else { const sc = $('.screen'); sc && sc.scrollTo({ top: 0, behavior: 'smooth' }); } return; }
    S.tab = t;
    render('fade');
  }

  // ---------- shared fragments ----------
  const navbar = (opts = {}) => `
    <div class="navbar">
      ${stack().length > 1 ? `<button class="glass back" data-act="back" aria-label="Back">${I.chevL()}</button>` : ''}
      ${opts.title ? `<div class="navtitle">${esc(opts.title)}</div>` : ''}
      ${opts.more ? `<button class="glass more" data-act="${opts.more}" ${opts.moreData || ''} aria-label="More">${I.dots()}</button>` : ''}
    </div>`;
  const pageTitle = (title, sub) => `<div class="page-title"><h1>${title}</h1>${sub ? `<div class="sub">${sub}</div>` : ''}</div>`;
  const sectionH = (title, sub, seeAll) => `
    <div class="section-h"><div><h2>${title}</h2>${sub ? `<div class="sub">${sub}</div>` : ''}</div>
    ${seeAll ? `<button class="seeall" data-act="push" data-to="seeall" data-id="${seeAll}">See All ${I.chevR(12)}</button>` : ''}</div>`;
  const avatar = (artistId, cls = '') => {
    const a = artists[artistId];
    return a.img ? `<img class="avatar ${cls}" src="${a.img}" alt="">` : `<div class="avatar ${cls}">${I.personFill(18)}</div>`;
  };
  const albumCard = (id, cls = '') => {
    const a = albums[id];
    return `<button class="card ${cls}" data-act="push" data-to="album" data-id="${id}">
      <img class="cover" src="${a.cover}" alt="" loading="lazy">
      <div class="ct">${esc(a.title)}</div><div class="cs">${esc(a.desc)}</div>
      <div class="bp">${a.plus ? BP : ''}</div></button>`;
  };
  const trackRow = (id, ctx, opts = {}) => {
    const s = songs[id]; const a = albums[s.album];
    const now = P.queue[P.idx] === id;
    const dim = !playable(id) ? 'dim' : '';
    const trail = opts.add
      ? `<button class="addbtn ${opts.added ? 'done' : ''}" data-act="${opts.added ? 'noop' : 'addToPlaylistDirect'}" data-id="${id}" data-pl="${opts.pl}" aria-label="Add">${opts.added ? I.check(14) : I.plus(14)}</button>`
      : opts.chev ? `<span class="chev">${I.chevR()}</span>`
      : `<button class="dots" data-act="songMenu" data-id="${id}" data-ctx="${ctx}" aria-label="More">${I.dots(16)}</button>`;
    return `<div class="track ${opts.compact ? 'compact' : ''} ${now ? 'playing' : ''} ${dim}" data-act="play" data-id="${id}" data-ctx="${ctx}" role="button">
      ${opts.num ? `<span class="num">${opts.num}</span>` : ''}
      <img class="art" src="${a.cover}" alt="" loading="lazy">
      <div class="body"><div class="meta"><div class="t">${esc(s.title)}</div>${opts.noSub ? '' : `<div class="s">${esc(artists[s.artist].name)}</div>`}</div>
      ${opts.dur ? `<span class="dur">${s.dur}</span>` : ''}
      ${isDownloaded(id) && opts.showDl ? `<span style="color:#8e8e93">${I.downloaded(14)}</span>` : ''}
      ${trail}</div></div>`;
  };
  const listSearch = (ph = 'Search') => `
    <label class="searchbar">${I.search(18)}<input data-input="listQuery" placeholder="${ph}" value="${esc(S.listQuery)}"></label>`;
  const filterQ = (txt) => !S.listQuery || txt.toLowerCase().includes(S.listQuery.toLowerCase());

  // ---------- screens ----------
  const screens = {
    home() {
      const cont = P.idx >= 0 ? [P.queue[P.idx]] : [];
      const contIds = [...cont, 'hymns-ii:4', 'this-new-day:2'].filter((v, i, arr) => arr.indexOf(v) === i).slice(0, 3);
      return `
      <div class="root-head" style="border-bottom:0;background:#fff">
        <div class="brand-title" style="padding-top:34px"><img src="assets/emblem.png" alt="">Home</div>
      </div>
      <div class="continue"><div class="eyebrow">CONTINUE</div>
        <div class="hscroll" style="padding:0 12px 0 0">
          ${contIds.map((id, i) => { const s = songs[id]; const a = albums[s.album]; const pct = i === 0 && P.idx >= 0 ? P.pos / s.secs : [0, .62, .35][i];
            return `<button class="cont-card" data-act="play" data-id="${id}" data-ctx="album:${s.album}">
              <div class="left"><img class="art" src="${a.cover}" alt=""><span class="kind">${I.note(12)}</span></div>
              <div style="flex:1;min-width:0"><div class="t">${esc(s.title)}</div><div class="s">${esc(artists[s.artist].name)}</div>
              <div class="r">${fmt(s.secs * (1 - pct)).split(':')[0]} Min Left</div><div class="prog"><i style="width:${Math.round(pct * 100)}%"></i></div></div></button>`; }).join('')}
        </div></div>
      ${sectionH('New Music', 'Based on what you listen to', 'new-music')}
      <div class="hscroll">${['this-new-day', 'peaceful-piano', 'redeemer', 'limitless', 'sing-thy-grace'].map((id) => `
        <button class="card sm" data-act="push" data-to="album" data-id="${id}"><div class="bp-tag">${I.note(14)}${BP}</div>
        <img class="cover" src="${albums[id].cover}" alt=""></button>`).join('')}</div>
      ${sectionH('New Audiobooks', 'Checkout the latest titles')}
      <div class="hscroll">${audiobooks.map((b) => `
        <button class="card sm" data-act="toast" data-msg="Audiobooks are outside this prototype"><div class="bp-tag">${I.headphones(16)}${BP}</div>
        <img class="cover" src="${b.cover}" alt="" style="object-fit:cover"></button>`).join('')}</div>`;
    },

    library() {
      const head = `
      <div class="root-head">
        <button class="select" data-act="toast" data-msg="Select mode isn’t part of this prototype">Select</button>
        <div class="brand-title"><img src="assets/emblem.png" alt="">My Library</div>
        <div class="chips">${S.libFilter === 'music'
          ? `<button class="chip icon" data-act="libFilter" data-id="all" aria-label="Clear filter">${I.xmark(16)}</button><button class="chip on">Music</button>`
          : ['All', 'Audiobooks', 'Music', 'eBooks', 'Podcasts'].map((c) => `<button class="chip ${c.toLowerCase() === S.libFilter ? 'on' : ''}" data-act="libFilter" data-id="${c.toLowerCase()}">${c}</button>`).join('')}</div>
      </div>
      <div style="background:#fbfbfb;padding-bottom:2px">
        <button class="searchbar" style="width:calc(100% - 28px)" data-act="tab" data-id="search">${I.search(18)}<span>Search your library</span></button>
        <div class="sortrow"><span>${I.sort(16)} Recently Opened</span>${I.listview(18)}</div>
      </div>`;
      if (S.libFilter !== 'music') {
        return head + `<div class="bookgrid">${books.map((b) => `
          <div class="book"><div class="ic">${b.plus ? `<span style="display:flex;gap:8px;align-items:center">${I.book()} ${BP}</span>` : I.book()}</div>
          <img class="cover" src="${b.cover}" alt="">
          <div class="foot">${b.finished ? `<span class="badge">✓ FINISHED</span>` : '<span></span>'}${I.dots(16)}</div></div>`).join('')}</div>`;
      }
      const rows = [
        ['artists', I.person(20), 'Artists'], ['albums', I.albums(20), 'Albums'], ['songs', I.note(18), 'Songs'],
        ['playlists', I.noteList(20), 'Playlists'], ['downloaded', I.download(20), 'Downloaded'],
      ];
      const recent = [...lib.libAlbums].reverse().slice(0, 6);
      return head + `
        <div class="list" style="padding:6px 16px 0">${rows.map(([to, ic, label]) => `
          <button class="row" data-act="push" data-to="${to}"><span class="lead">${ic}</span>
          <span class="body"><span class="title">${label}</span><span class="chev">${I.chevR()}</span></span></button>`).join('')}</div>
        <div class="section-h sans" style="padding-top:18px"><h2>Recently Added</h2></div>
        <div class="hscroll">${recent.map((id) => albumCard(id)).join('')}</div>`;
    },

    artists() {
      const ids = libraryArtistIds().filter((id) => filterQ(artists[id].name)).sort((a, b) => artists[a].name.replace(/^The /, '').localeCompare(artists[b].name.replace(/^The /, '')));
      const groups = {};
      ids.forEach((id) => { const L = artists[id].name.replace(/^The /, '')[0].toUpperCase(); (groups[L] = groups[L] || []).push(id); });
      return navbar() + pageTitle('Artists', `${libraryArtistIds().length} Artists in your library`) + listSearch() +
        Object.entries(groups).map(([L, list]) => `<div class="letter">${L}</div>` + list.map((id) => `
          <button class="artist-row" data-act="push" data-to="artist" data-id="${id}">${avatar(id)}
          <span class="body"><span>${esc(artists[id].name)}</span><span class="chev">${I.chevR()}</span></span></button>`).join('')).join('') +
        `<div class="az">${Object.keys(groups).map((l) => `<span>${l}</span>`).join('')}</div>`;
    },

    albums() {
      const ids = [...lib.libAlbums].filter((id) => filterQ(albums[id].title + artists[albums[id].artist].name));
      return navbar() + pageTitle('Albums', `${lib.libAlbums.length} albums in your library`) + listSearch() +
        (ids.length ? `<div class="grid2">${ids.map((id) => albumCard(id)).join('')}</div>` : emptyState(I.albums(22), 'No Albums Yet', 'Albums you add from Discover will show up here.'));
    },

    songs() {
      const ids = librarySongIds().filter((id) => filterQ(songs[id].title + artists[songs[id].artist].name));
      return navbar() + pageTitle('Songs', `${librarySongIds().length} Songs in your library`) + listSearch() +
        `<div style="padding-top:14px">${ids.map((id) => trackRow(id, 'songs', { showDl: true })).join('')}</div>`;
    },

    playlists() {
      const pls = lib.playlists.filter((p) => filterQ(p.name));
      return navbar() + pageTitle('Playlists', `${lib.playlists.length} Playlist${lib.playlists.length === 1 ? '' : 's'} in your library`) + listSearch() + `
        <div style="padding-top:20px">
          <button class="track" data-act="newPlaylist"><span class="newtile">${I.bigPlus()}</span>
          <span class="body"><span class="meta"><div class="t">New Playlist</div><div class="s">Start a Collection of your own</div></span><span class="chev">${I.chevR()}</span></span></button>
          ${pls.map((p) => `<button class="track" data-act="push" data-to="playlist" data-id="${p.id}">${playlistArt(p)}
            <span class="body"><span class="meta"><div class="t">${esc(p.name)}</div><div class="s">${p.songs.length} song${p.songs.length === 1 ? '' : 's'}</div></span><span class="chev">${I.chevR()}</span></span></button>`).join('')}
        </div>
        ${lib.playlists.length ? '' : emptyState(I.noteList(22), 'No Playlist Added Yet', 'Create your first playlist to start building a collection of your own.', 'padding-top:150px')}`;
    },

    downloaded() {
      const ids = Object.keys(songs).filter((id) => inLibSong(id) && isDownloaded(id));
      return navbar() + pageTitle('Downloaded', `${ids.length} Songs available offline`) +
        (ids.length ? `<div style="padding-top:14px">${ids.map((id) => trackRow(id, 'downloaded', { showDl: true })).join('')}</div>`
          : emptyState(I.download(22), 'Nothing Downloaded', 'Download albums to listen without a connection.'));
    },

    album(id) {
      const a = albums[id];
      const dl = lib.downloads.includes(id);
      const more = Object.keys(albums).filter((x) => x !== id && (albums[x].artist === a.artist || ['this-new-day', 'redeemer', 'hymns-ii', 'love-like-you'].includes(x))).slice(0, 6);
      return navbar({ more: 'albumMenu', moreData: `data-id="${id}"` }) + pageTitle(esc(a.title)) + `
        <img class="detail-art" src="${a.cover}" alt="">
        <button class="byline" style="width:100%" data-act="push" data-to="artist" data-id="${a.artist}">${avatar(a.artist)}${esc(artists[a.artist].name)}</button>
        <div class="metaline">Album · ${a.songs.length} Songs · ${a.year} released ${dl ? `<span style="color:var(--tint)">· ${I.downloaded(12)}</span>` : ''}</div>
        <div class="cta"><button data-act="playCtx" data-ctx="album:${id}">${I.play(13)} Play</button><button data-act="playCtx" data-ctx="album:${id}" data-shuffle="1">${I.shuffle(16)} Shuffle</button></div>
        <div class="lib-toggle"><button class="${inLibAlbum(id) ? 'in' : ''}" data-act="toggleAlbum" data-id="${id}">${inLibAlbum(id) ? I.check(14) + ' In Library' : I.plus(14) + ' Add to Library'}</button></div>
        <div class="section-h" style="padding-bottom:4px"><h2>Songs</h2></div>
        <div style="padding-right:0">${a.songIds.map((sid) => trackRow(sid, `album:${id}`, { compact: true, noSub: true })).join('').replaceAll('class="track compact', 'style="padding-left:16px" class="track compact')}</div>
        <div class="section-h"><h2>More Albums</h2></div>
        <div class="hscroll">${more.map((x) => albumCard(x, 'sm')).join('')}</div>`;
    },

    artist(id) {
      const ar = artists[id];
      const als = Object.values(albums).filter((a) => a.artist === id);
      const sids = als.flatMap((a) => a.songIds).slice(0, 5);
      const pic = ar.img ? `<img class="detail-art round" src="${ar.img}" alt="">` : `<div class="detail-art round ph" style="display:grid;place-items:center;margin:18px auto 0;color:#8e8e93">${I.personFill(70)}</div>`;
      return navbar({ more: 'artistMenu', moreData: `data-id="${id}"` }) + pageTitle(esc(ar.name)) + pic + `
        <div class="metaline">${als.length} album${als.length === 1 ? '' : 's'} · ${als.reduce((n, a) => n + a.songs.length, 0)} Songs</div>
        <div class="cta"><button data-act="playCtx" data-ctx="artist:${id}">${I.play(13)} Play</button><button data-act="playCtx" data-ctx="artist:${id}" data-shuffle="1">${I.shuffle(16)} Shuffle</button></div>
        <div class="section-h" style="padding-bottom:4px"><h2>Recent Songs</h2></div>
        <div style="padding-left:16px">${sids.map((sid, i) => trackRow(sid, `artist:${id}`, { compact: true, noSub: true, num: i + 1 })).join('')}</div>
        <div class="section-h"><h2>Albums</h2></div>
        <div class="grid3">${als.map((a) => albumCard(a.id)).join('')}</div>`;
    },

    playlist(id) {
      const p = lib.playlists.find((x) => x.id === id);
      if (!p) return navbar() + emptyState(I.noteList(22), 'Playlist Removed', '', 'padding-top:260px');
      const suggestions = librarySongIds().filter((sid) => !p.songs.includes(sid)).slice(0, 8);
      return navbar({ more: 'playlistMenu', moreData: `data-id="${id}"` }) + pageTitle(`${esc(p.name)}`) + `
        ${p.songs.length ? `<div style="margin:18px auto 0;width:202px">${playlistArt(p, 'detail')}</div>` : `<div class="detail-art ph">${I.bigNote(84)}</div>`}
        ${p.songs.length ? `<div class="metaline">Playlist · ${p.songs.length} Song${p.songs.length === 1 ? '' : 's'}</div>
          <div class="cta"><button data-act="playCtx" data-ctx="playlist:${id}">${I.play(13)} Play</button><button data-act="playCtx" data-ctx="playlist:${id}" data-shuffle="1">${I.shuffle(16)} Shuffle</button></div>` : ''}
        <div style="padding-top:16px">
          <button class="track" data-act="push" data-to="addMusic" data-id="${id}"><span class="newtile">${I.bigPlus()}</span>
          <span class="body"><span class="meta"><div class="t">Add Music</div></span><span class="chev">${I.chevR()}</span></span></button>
          ${p.songs.map((sid) => trackRow(sid, `playlist:${id}`, { dur: true })).join('')}
        </div>
        ${suggestions.length ? `<div class="section-h sans"><h2>From Your Library</h2></div>
          ${suggestions.map((sid) => trackRow(sid, `playlist:${id}`, { dur: true, add: true, pl: id })).join('')}` : ''}`;
    },

    addMusic(id) {
      const p = lib.playlists.find((x) => x.id === id);
      const ids = Object.keys(songs).filter((sid) => filterQ(songs[sid].title + artists[songs[sid].artist].name));
      return navbar({ title: 'Add Music' }) + `<div style="height:56px"></div>` + listSearch('Search songs') +
        `<div style="padding-top:14px">${ids.map((sid) => trackRow(sid, `playlist:${id}`, { dur: true, add: true, pl: id, added: p.songs.includes(sid) })).join('')}</div>`;
    },

    seeall(kind) {
      const map = {
        'new-music': ['New Music', ['this-new-day', 'peaceful-piano', 'redeemer', 'limitless', 'sing-thy-grace', 'vocal-point', 'messiah', 'scripture-scouts']],
        'new-albums': ['New Albums', ['love-like-you', 'hymns-ii', 'jericho-road', 'sandra-turley', 'justin-cash', 'jenny-oaks']],
        'in-library': ['In Your Library', searchResults().albums.filter(inLibAlbum)],
      };
      if (kind === 'songs-start') return navbar() + pageTitle('Songs to Start With') + `<div style="padding-top:14px">${startSongs().map((sid) => trackRow(sid, 'list:start')).join('')}</div>`;
      if (kind === 'artists') return navbar() + pageTitle('Artists') + `<div style="padding-top:10px">${Object.keys(artists).map((aid) => `
        <button class="artist-row" data-act="push" data-to="artist" data-id="${aid}">${avatar(aid)}<span class="body"><span>${esc(artists[aid].name)}</span><span class="chev">${I.chevR()}</span></span></button>`).join('')}</div>`;
      const [title, ids] = map[kind];
      return navbar() + pageTitle(title) + `<div class="grid2">${ids.map((id) => albumCard(id)).join('')}</div>`;
    },

    discover() {
      const chips = ['All', 'Audiobooks', 'Music', 'Summer Reading', 'eBooks'];
      return `
      <div class="root-head" style="border-bottom:0;background:#fff">
        <div class="brand-title" style="padding-top:34px"><img src="assets/emblem.png" alt="">Discover</div>
        <div class="chips">${chips.map((c) => `<button class="chip ${c === S.discoverFilter ? 'on' : ''}" data-act="discoverFilter" data-id="${c}">${c}</button>`).join('')}</div>
      </div>
      ${S.discoverFilter !== 'Music' ? `<div class="empty" style="padding-top:120px"><div class="ic">${I.compass(24)}</div><h3>${esc(S.discoverFilter)}</h3><p style="font-size:15px">This prototype covers Music. <button style="color:var(--tint)" data-act="discoverFilter" data-id="Music">Go to Music</button></p></div>` : `
      <button class="hero" style="display:block;width:100%" data-act="push" data-to="album" data-id="this-new-day">
        <img src="${albums['this-new-day'].cover}" alt=""><h3>Music for a reverent home</h3><p>This New Day · Deseret Music</p></button>
      ${sectionH('New Music', 'Based on what you listen to', 'new-music')}
      <div class="hscroll">${['this-new-day', 'redeemer', 'peaceful-piano', 'limitless', 'messiah'].map((id) => albumCard(id)).join('')}</div>
      <div class="section-h"><h2>Top Albums</h2></div>
      <div class="hscroll" style="padding:0 34px">
        ${[['messiah', 'The Tabernacle Choir', 'Handel’s Messiah'], ['sing-thy-grace', 'New from Eclipse 6', 'Sing Thy Grace'], ['jenny-oaks', 'Jenny Oaks Baker', 'Classic: The Rock Album']].map(([id, k, t], i) => `
        <button class="banner" data-act="push" data-to="album" data-id="${id}"><img src="${albums[id].cover}" alt="">
          <span class="txt" style="background:${['#7d1d21', '#2c4a52', '#3b3b3b'][i]}"><small>${esc(k)}</small><b>${esc(t)}</b></span></button>`).join('')}
      </div>
      ${sectionH('New Albums', 'Checkout the latest releases', 'new-albums')}
      <div class="hscroll">${['love-like-you', 'hymns-ii', 'jericho-road', 'sandra-turley', 'justin-cash'].map((id) => albumCard(id)).join('')}</div>
      ${sectionH('Songs to Start With', '', 'songs-start')}
      <div class="songs-card">${startSongs().slice(0, 3).map((sid) => { const s = songs[sid];
        return `<div class="track ${P.queue[P.idx] === sid ? 'playing' : ''}" data-act="play" data-id="${sid}" data-ctx="list:start" role="button"><img class="art" src="${albums[s.album].cover}" alt="">
        <div class="body"><div class="meta"><div class="t" style="font-size:15px">${esc(s.title)}</div><div class="s" style="font-size:14px">${esc(artists[s.artist].name)}</div></div>
        <span class="playdot">${P.queue[P.idx] === sid && P.playing ? I.pause(8) : I.play(8)}</span></div></div>`; }).join('')}</div>
      ${sectionH('Explore Artists', '', 'artists')}
      <div class="artists-row">${['deseret-music', 'emma-nissen', 'gentri', 'jenny-oaks-baker', 'justin-cash', 'sandra-turley', 'eclipse-6', 'jericho-road'].map((aid) => `
        <button class="artist-chip" data-act="push" data-to="artist" data-id="${aid}">${avatar(aid)}${esc(artists[aid].name)}</button>`).join('')}</div>`}`;
    },

    search() {
      const r = searchResults();
      const q = S.query.trim();
      const libAlbums = r.albums.filter(inLibAlbum);
      return `
      <div style="padding-top:62px"></div>
      <label class="searchbar" style="margin-top:16px">${I.search(20)}<input data-input="query" placeholder="Artists, albums, songs" value="${esc(S.query)}" autocomplete="off">
        ${S.query ? `<button class="clear" data-act="clearQuery" aria-label="Clear">${I.xmark(10)}</button>` : ''}</label>
      <div class="chips" style="padding-top:22px">${['Music', 'Bookshelf+'].map((c) => `<button class="chip ${S.searchScope === c ? 'on' : 'outline'}" data-act="searchScope" data-id="${c}">${c === 'Bookshelf+' ? 'Bookshelf +' : c}</button>`).join('')}</div>
      ${!q ? `
        <div class="section-h"><h2 style="font-size:24px">Browse</h2></div>
        <div class="grid2" style="padding-top:0">${[['Hymns', '#0f8079', 'hymn'], ['Classical', '#7d1d21', 'messiah'], ['Piano', '#2c4a52', 'piano'], ['Broadway', '#9a5b00', 'broadway'], ['A Cappella', '#3a3f6b', 'vocal'], ['Kids', '#b8452b', 'scouts']].map(([t, c, k]) => `
          <button data-act="setQuery" data-id="${k}" style="height:96px;border-radius:12px;background:${c};color:#fff;font-weight:700;font-size:17px;text-align:left;padding:12px;display:flex;align-items:flex-end">${t}</button>`).join('')}</div>` : `
        ${libAlbums.length ? `${sectionH('<span style="font-size:24px">In your library</span>', '', 'in-library')}
          <div class="hscroll" style="gap:12px;padding:0 16px">${libAlbums.map((id) => `<button data-act="push" data-to="album" data-id="${id}"><img src="${albums[id].cover}" style="width:64px;height:64px;border-radius:6px;object-fit:cover" alt=""></button>`).join('')}</div>
          <hr style="border:0;border-top:1px solid var(--sep);margin:30px 24px 0">` : ''}
        <div class="section-h"><h2 style="font-size:24px">All Results</h2></div>
        ${!r.count ? `<div class="empty" style="padding-top:40px"><h3>No Results</h3><p style="font-size:15px">Try a different search.</p></div>` : ''}
        ${r.artists.map((aid) => `<button class="artist-row" style="padding-left:16px;height:84px" data-act="push" data-to="artist" data-id="${aid}">${avatar(aid, '').replace('class="avatar ', 'style="width:56px;height:56px" class="avatar ')}<span class="body"><span>${esc(artists[aid].name)}</span><span class="chev">${I.chevR()}</span></span></button>`).join('')}
        ${r.albums.map((id) => { const a = albums[id]; return `<button class="track" style="height:108px" data-act="push" data-to="album" data-id="${id}"><img class="art" src="${a.cover}" alt="">
          <span class="body" style="align-items:center"><span class="meta"><div class="t" style="font-weight:600">${esc(a.title)}</div><div class="s" style="font-size:13px">${esc(a.desc)}</div>
          <div style="display:flex;gap:6px;align-items:center;margin-top:4px">${I.note(13)}${a.plus ? BP : ''}</div></span><span class="dots">${I.dots(14)}</span></span></button>`; }).join('')}
        ${r.songs.map((sid) => trackRow(sid, 'list:search')).join('')}`}`;
    },

    account() {
      return `${pageTitle('Account')}
        <div class="account-card"><div class="avatar">KR</div><div><div style="font-weight:600;font-size:17px">Bookshelf+ Member</div><div style="color:#6c6c70;font-size:14px">Music, audiobooks, and eBooks</div></div></div>
        <div class="group">
          <div class="row"><span class="lead">${I.wifiOff(20)}</span><span class="body"><span class="title">Offline Mode</span><button class="switch ${lib.offline ? 'on' : ''}" data-act="toggleOffline" aria-label="Offline mode"></button></span></div>
          <button class="row" data-act="tab" data-id="library"><span class="lead">${I.download(20)}</span><span class="body"><span class="title">Downloads</span><span style="color:#8e8e93">${lib.downloads.length}</span><span class="chev">${I.chevR()}</span></span></button>
        </div>
        <div class="group">
          <button class="row" data-act="resetDemo"><span class="lead">${I.trash(20)}</span><span class="body"><span class="title" style="color:#ff3b30">Reset Prototype Data</span></span></button>
        </div>
        <p style="padding:0 32px;color:#8e8e93;font-size:13px;line-height:18px">Turn on Offline Mode to see how songs that aren’t downloaded behave.</p>`;
    },
  };

  function emptyState(icon, title, text, style = '') {
    return `<div class="empty" style="${style}"><div class="ic">${icon}</div><h3>${title}</h3><p>${text}</p></div>`;
  }
  function playlistArt(p, size) {
    const covers = [...new Set(p.songs.map((sid) => albums[songs[sid].album].cover))].slice(0, 4);
    const dim = size === 'detail' ? 202 : 68;
    const r = size === 'detail' ? 14 : 6;
    if (!covers.length) return `<span class="art ph" style="width:${dim}px;height:${dim}px;border-radius:${r}px;background:var(--bg-grouped);display:grid;place-items:center;color:#8e8e93;flex:none">${I.note(dim / 3)}</span>`;
    if (covers.length < 4) return `<img class="art" src="${covers[0]}" style="width:${dim}px;height:${dim}px;border-radius:${r}px;object-fit:cover;flex:none" alt="">`;
    return `<span style="width:${dim}px;height:${dim}px;border-radius:${r}px;overflow:hidden;display:grid;grid-template-columns:1fr 1fr;flex:none">${covers.map((c) => `<img src="${c}" style="width:100%;height:100%;object-fit:cover" alt="">`).join('')}</span>`;
  }
  function startSongs() { return ['this-new-day:0', 'this-new-day:1', 'this-new-day:2', 'hymns-ii:0', 'love-like-you:0', 'peaceful-piano:1']; }
  function searchResults() {
    const aliases = { hymn: ['hymns', 'abide', 'amazing', 'thou'], messiah: ['messiah', 'handel'], piano: ['piano', 'cardall'], broadway: ['broadway', 'turley'], vocal: ['vocal', 'jericho', 'eclipse', 'gentri'], scouts: ['scouts'] };
    const q = S.query.trim().toLowerCase();
    if (!q) return { artists: [], albums: [], songs: [], count: 0 };
    const terms = aliases[q] || [q === 'music' ? '' : q];
    const hit = (t) => terms.some((x) => t.toLowerCase().includes(x));
    let als = Object.keys(albums).filter((id) => hit(albums[id].title + ' ' + albums[id].desc + ' ' + artists[albums[id].artist].name));
    if (S.searchScope === 'Bookshelf+') als = als.filter((id) => albums[id].plus);
    const ars = Object.keys(artists).filter((id) => hit(artists[id].name)).slice(0, 3);
    const sgs = Object.keys(songs).filter((id) => hit(songs[id].title) && (S.searchScope !== 'Bookshelf+' || albums[songs[id].album].plus)).slice(0, 12);
    return { artists: ars, albums: als, songs: sgs, count: ars.length + als.length + sgs.length };
  }

  // ---------- render ----------
  function render(anim) {
    const t = top();
    const html = screens[t.name](t.id);
    const el = document.createElement('div');
    el.className = 'screen' + (anim ? ' ' + anim : '');
    el.innerHTML = html;
    screensEl.replaceChildren(el);
    if (t.scroll && anim !== 'enter') el.scrollTop = t.scroll;
    renderChrome();
  }
  function rerender() { // keep scroll + focus, no animation
    const cur = $('.screen', screensEl);
    const sc = cur ? cur.scrollTop : 0;
    const focused = document.activeElement && document.activeElement.dataset.input;
    const caret = focused ? document.activeElement.selectionStart : 0;
    const t = top(); t.scroll = sc;
    render();
    const ne = $('.screen', screensEl); ne.scrollTop = sc;
    if (focused) { const inp = $(`[data-input="${focused}"]`, ne); if (inp) { inp.focus(); inp.setSelectionRange(caret, caret); } }
  }

  function renderChrome() {
    const tabs = [['home', 'Home', I.home(), I.homeFill()], ['library', 'My Library', I.library(), I.libraryFill()], ['discover', 'Discover', I.compass(), I.compass()], ['search', 'Search', I.search(22), I.search(22)], ['account', 'Account', I.account(), I.account()]];
    $('#tabbar').innerHTML = tabs.map(([id, label, ic, icOn]) => `<button class="tab ${S.tab === id ? 'on' : ''}" data-act="tab" data-id="${id}">${S.tab === id ? icOn : ic}<span>${label}</span></button>`).join('');
    renderMini();
  }
  function renderMini() {
    const m = $('#mini');
    const id = P.queue[P.idx];
    if (!id) { m.hidden = true; return; }
    const s = songs[id];
    m.hidden = false;
    m.innerHTML = `<button style="display:contents" data-act="openPlayer" aria-label="Open player"><img class="art" src="${albums[s.album].cover}" alt="">
      <span class="meta"><div class="t">${esc(s.title)}</div><div class="s">${esc(artists[s.artist].name)}</div></span></button>
      <button class="ctl" data-act="toggle" aria-label="${P.playing ? 'Pause' : 'Play'}">${P.playing ? I.pause(20) : I.play(20)}</button>
      <button class="ctl" data-act="next" aria-label="Next">${I.next(22)}</button>
      <span class="bar"><i style="width:${(P.pos / s.secs) * 100}%"></i></span>`;
  }

  // ---------- player ----------
  function contextQueue(ctx) {
    const [kind, id] = ctx.split(':');
    if (kind === 'album') return albums[id].songIds;
    if (kind === 'artist') return Object.values(albums).filter((a) => a.artist === id).flatMap((a) => a.songIds);
    if (kind === 'playlist') return (lib.playlists.find((p) => p.id === id) || { songs: [] }).songs;
    if (kind === 'songs') return librarySongIds();
    if (kind === 'downloaded') return Object.keys(songs).filter((x) => inLibSong(x) && isDownloaded(x));
    if (ctx === 'list:start') return startSongs();
    if (ctx === 'list:search') return searchResults().songs;
    return [];
  }
  function startPlayback(queue, startId, shuffle) {
    queue = queue.filter(playable);
    if (!queue.length) { offlineToast(); return; }
    if (shuffle) {
      queue = [...queue];
      for (let i = queue.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [queue[i], queue[j]] = [queue[j], queue[i]]; }
    }
    P.queue = queue; P.shuffle = !!shuffle;
    P.idx = startId ? Math.max(0, queue.indexOf(startId)) : 0;
    P.pos = 0; P.playing = true;
    afterTrackChange(true);
  }
  function afterTrackChange(openPlayer) {
    renderMini();
    if (P.open) renderPlayer(); else if (openPlayer && !P.open) openPlayerSheet();
    if (P.upnext) renderUpNext();
    rerender();
  }
  function go(delta) {
    if (!P.queue.length) return;
    if (delta < 0 && P.pos > 3) { P.pos = 0; return updateProgress(); }
    let n = P.idx + delta;
    if (n >= P.queue.length) { if (P.repeat === 'all') n = 0; else { P.playing = false; P.pos = 0; afterTrackChange(); return; } }
    if (n < 0) n = 0;
    P.idx = n; P.pos = 0;
    afterTrackChange();
  }
  let last = performance.now();
  setInterval(() => {
    const now = performance.now(); const dt = (now - last) / 1000; last = now;
    if (!P.playing || P.idx < 0) return;
    const s = songs[P.queue[P.idx]];
    P.pos += dt;
    if (P.sleep) { P.sleepLeft -= dt; if (P.sleepLeft <= 0) { P.playing = false; P.sleep = 0; showToast({ msg: 'Sleep timer ended — playback paused', icon: I.timer(18) }); afterTrackChange(); return; } }
    if (P.pos >= s.secs) {
      if (P.repeat === 'one') { P.pos = 0; } else { go(1); return; }
    }
    updateProgress();
  }, 250);
  function updateProgress() {
    const id = P.queue[P.idx]; if (!id) return;
    const s = songs[id];
    const pct = Math.min(1, P.pos / s.secs) * 100;
    const bar = $('#mini .bar i'); if (bar) bar.style.width = pct + '%';
    const pl = $('.player');
    if (pl) {
      $('.scrub .fill', pl).style.width = pct + '%';
      $('.scrub .knob', pl).style.left = pct + '%';
      $('.times .el', pl).textContent = fmt(P.pos);
      $('.times .rem', pl).textContent = '-' + fmt(s.secs - P.pos);
      const st = $('.badge-t', pl); if (st && P.sleep) st.textContent = fmt(P.sleepLeft);
    }
  }

  const layer = $('#overlays');
  function openPlayerSheet() { P.open = true; renderPlayer(); }
  function closePlayer() {
    const pl = $('.player'); if (!pl) return;
    pl.classList.add('closing');
    P.open = false; P.upnext = false;
    setTimeout(() => { pl.remove(); const u = $('.upnext'); u && u.remove(); }, 250);
    rerender();
  }
  function renderPlayer() {
    const id = P.queue[P.idx]; if (!id) return;
    const s = songs[id]; const a = albums[s.album];
    let pl = $('.player');
    const fresh = !pl;
    if (fresh) { pl = document.createElement('div'); pl.className = 'player'; layer.appendChild(pl); }
    pl.classList.toggle('paused', !P.playing);
    const pct = (P.pos / s.secs) * 100;
    pl.innerHTML = `
      <div class="top"><button class="glass" data-act="closePlayer" aria-label="Close">${I.chevDown()}</button>
        <button class="glass" data-act="playerMenu" aria-label="More">${I.dots()}</button></div>
      <div class="ttl"><h2>${esc(s.title)}</h2><button data-act="viewAlbum" data-id="${s.album}">${esc(a.title)}</button></div>
      <img class="art" src="${a.cover}" alt="">
      <div class="pills"><button class="${P.shuffle ? 'on' : ''}" data-act="shuffle">${I.shuffle(20)} Shuffle</button><button data-act="upnext">${I.upnext(20)} Up Next</button></div>
      <div class="scrub" data-scrub><div class="track-bg"><div class="fill" style="width:${pct}%"></div></div><div class="knob" style="left:${pct}%"></div></div>
      <div class="times"><span class="el">${fmt(P.pos)}</span><span>Track ${P.idx + 1} of ${P.queue.length}</span><span class="rem">-${fmt(s.secs - P.pos)}</span></div>
      <div class="transport"><button data-act="prev" aria-label="Previous">${I.prev()}</button>
        <button class="play" data-act="toggle" aria-label="${P.playing ? 'Pause' : 'Play'}">${P.playing ? I.bigPause(54) : I.bigPlay(60)}</button>
        <button data-act="next" aria-label="Next">${I.next()}</button></div>
      <div class="extras">
        <button class="${P.repeat !== 'off' ? 'on' : ''}" data-act="repeat" aria-label="Repeat: ${P.repeat}">${I.repeat()}${P.repeat === 'one' ? '<span class="one">1</span>' : ''}</button>
        <button data-act="airplay" aria-label="AirPlay">${I.airplay()}</button>
        <button class="${P.sleep ? 'on' : ''}" data-act="sleep" aria-label="Sleep timer">${I.timer()}${P.sleep ? `<span class="badge-t">${fmt(P.sleepLeft)}</span>` : ''}</button>
      </div>`;
  }
  function renderUpNext() {
    let u = $('.upnext');
    if (!u) { u = document.createElement('div'); u.className = 'upnext'; layer.appendChild(u); }
    u.innerHTML = `<div class="head"><button class="glass" data-act="closeUpNext" aria-label="Back">${I.chevL()}</button>Up Next</div>
      ${P.queue.map((sid, i) => { const s = songs[sid]; if (i < P.idx) return '';
        return `<div class="qrow" data-act="qjump" data-idx="${i}" data-qidx="${i}" role="button"><div class="meta"><div class="t">${esc(s.title)}</div>
        ${i === P.idx ? '<div class="s now">Now Playing</div>' : `<div class="s">${esc(artists[s.artist].name)}</div>`}</div>
        <span class="dur">${s.dur}</span>${i === P.idx ? '<span style="width:28px"></span>' : `<span class="grip" data-grip="${i}">${I.grip()}</span>`}</div>`; }).join('')}
      <div style="height:40px"></div>`;
  }

  // ---------- menus, sheets, toasts ----------
  function scale() { return device.getBoundingClientRect().width / device.offsetWidth; }
  function openMenu(anchor, items) {
    closeMenu();
    const k = scale(); const d = device.getBoundingClientRect(); const r = anchor.getBoundingClientRect();
    const wrap = document.createElement('div'); wrap.className = 'menu-layer'; wrap.dataset.act = 'closeMenu';
    const top = (r.bottom - d.top) / k + 6;
    const right = (d.right - r.right) / k;
    const m = document.createElement('div'); m.className = 'menu';
    m.innerHTML = items.map((it) => it === '-' ? '<hr>' : `<button class="${it.danger ? 'danger' : ''}" data-act="${it.act}" ${Object.entries(it.data || {}).map(([k2, v]) => `data-${k2}="${esc(v)}"`).join(' ')}>${it.icon}<span>${esc(it.label)}</span></button>`).join('');
    wrap.appendChild(m); layer.appendChild(wrap);
    const h = m.offsetHeight;
    const maxTop = device.offsetHeight - h - 24;
    m.style.top = Math.min(top, maxTop) + 'px';
    m.style.right = Math.max(12, Math.min(right, 200)) + 'px';
    if (top > maxTop) m.style.transformOrigin = 'bottom right';
  }
  function closeMenu() { const m = $('.menu-layer'); m && m.remove(); }

  function songMenuItems(id, ctx) {
    const s = songs[id];
    const items = [
      { act: 'playNext', icon: I.playNext(), label: 'Play Next', data: { id } },
      { act: 'addToPlaylist', icon: I.noteList(), label: 'Add to Playlist', data: { id } },
      inLibSong(id) ? { act: 'toggleSong', icon: I.trash(), label: 'Remove from Library', data: { id }, danger: !ctx.startsWith('playlist') }
        : { act: 'toggleSong', icon: I.plus(20), label: 'Add to Library', data: { id } },
      '-',
      { act: 'viewAlbum', icon: I.albums(20), label: 'View Album', data: { id: s.album } },
      { act: 'viewArtist', icon: I.person(), label: 'View Artist', data: { id: s.artist } },
    ];
    if (ctx.startsWith('playlist:')) items.push('-', { act: 'removeFromPlaylist', icon: I.xmark(18), label: 'Remove from Playlist', data: { id, pl: ctx.split(':')[1] }, danger: true });
    return items;
  }

  function openSheet(html) {
    closeSheet();
    const bd = document.createElement('div'); bd.className = 'sheet-backdrop'; bd.dataset.act = 'closeSheet';
    const sh = document.createElement('div'); sh.className = 'sheet'; sh.innerHTML = `<div class="grabber"></div>${html}`;
    layer.append(bd, sh);
  }
  function closeSheet() { $('.sheet-backdrop')?.remove(); $('.sheet')?.remove(); }

  function addToPlaylistSheet(songIds) {
    const s = songs[songIds[0]];
    openSheet(`<div class="shead"><h3>Add to Playlist</h3><button class="glass" data-act="closeSheet" aria-label="Close">${I.xmark(14)}</button></div>
      <div class="context"><img src="${albums[s.album].cover}" alt=""><div><div class="t">${songIds.length > 1 ? esc(albums[s.album].title) : esc(s.title)}</div><div class="s">${songIds.length > 1 ? songIds.length + ' songs' : esc(artists[s.artist].name)}</div></div></div>
      <button class="track" data-act="newPlaylist" data-songs="${songIds.join(',')}"><span class="newtile">${I.bigPlus()}</span><span class="body"><span class="meta"><div class="t">New Playlist</div><div class="s">Start a Collection of your own</div></span></span></button>
      ${lib.playlists.map((p) => { const has = songIds.every((x) => p.songs.includes(x));
        return `<button class="track" data-act="${has ? 'noop' : 'addToExisting'}" data-pl="${p.id}" data-songs="${songIds.join(',')}">${playlistArt(p)}
        <span class="body"><span class="meta"><div class="t">${esc(p.name)}</div><div class="s">${p.songs.length} songs</div></span>${has ? `<span style="color:var(--tint)">${I.check()}</span>` : ''}</span></button>`; }).join('')}`);
  }

  function dialog({ title, text, input, okLabel = 'Save', danger, onOk }) {
    const w = document.createElement('div'); w.className = 'dialog-wrap';
    w.innerHTML = `<form class="dialog"><h3>${esc(title)}</h3>${text ? `<p>${esc(text)}</p>` : ''}
      ${input !== undefined ? `<input name="v" value="${esc(input)}" placeholder="Playlist name" maxlength="40" autocomplete="off">` : ''}
      <div class="btns"><button type="button" data-x>Cancel</button><button type="submit" class="${danger ? 'danger' : 'primary'}">${esc(okLabel)}</button></div></form>`;
    layer.appendChild(w);
    const inp = $('input', w); if (inp) { inp.focus(); inp.select(); }
    $('[data-x]', w).onclick = () => w.remove();
    $('form', w).onsubmit = (e) => { e.preventDefault(); const v = inp ? inp.value.trim() : true; if (inp && !v) { inp.focus(); return; } w.remove(); onOk(v); };
  }

  let toastTimer;
  function showToast({ msg, img, icon, action, actionLabel = 'View' }) {
    $('.toast')?.remove(); clearTimeout(toastTimer);
    const t = document.createElement('div'); t.className = 'toast' + (P.open ? ' top' : '');
    t.innerHTML = `${img ? `<img src="${img}" alt="">` : icon ? `<span class="ic">${icon}</span>` : ''}<span class="msg">${esc(msg)}</span>${action ? `<button data-act="${action.act}" data-id="${action.id || ''}" data-to="${action.to || ''}">${actionLabel}</button>` : ''}`;
    layer.appendChild(t);
    toastTimer = setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 250); }, 2800);
  }
  function offlineToast() { showToast({ msg: 'Offline: download to listen', icon: I.wifiOff(18) }); }

  function createPlaylist(name, songIds = []) {
    const p = { id: 'pl' + Date.now().toString(36), name, songs: [...songIds] };
    lib.playlists.push(p); save();
    return p;
  }
  function addSongsTo(plId, songIds) {
    const p = lib.playlists.find((x) => x.id === plId);
    songIds.forEach((x) => { if (!p.songs.includes(x)) p.songs.push(x); });
    save();
    showToast({ msg: `Added to “${p.name}”`, img: albums[songs[songIds[0]].album].cover, action: { act: 'gotoPlaylist', id: p.id } });
  }

  // ---------- scrubbing + queue drag ----------
  device.addEventListener('pointerdown', (e) => {
    const sc = e.target.closest('[data-scrub]');
    if (sc) {
      const s = songs[P.queue[P.idx]];
      const seek = (ev) => { const r = sc.getBoundingClientRect(); P.pos = Math.min(1, Math.max(0, (ev.clientX - r.left) / r.width)) * s.secs; updateProgress(); };
      seek(e); sc.setPointerCapture(e.pointerId);
      sc.onpointermove = seek;
      sc.onpointerup = () => { sc.onpointermove = null; };
      return;
    }
    const grip = e.target.closest('[data-grip]');
    if (grip) {
      e.preventDefault();
      const row = grip.closest('.qrow'); const from = +grip.dataset.grip;
      const k = scale(); const startY = e.clientY; const h = row.offsetHeight;
      row.classList.add('dragging'); grip.setPointerCapture(e.pointerId);
      let to = from;
      grip.onpointermove = (ev) => {
        const dy = (ev.clientY - startY) / k;
        row.style.transform = `translateY(${dy}px)`;
        to = Math.min(P.queue.length - 1, Math.max(P.idx + 1, from + Math.round(dy / h)));
      };
      grip.onpointerup = () => {
        grip.onpointermove = null;
        if (to !== from) { const [x] = P.queue.splice(from, 1); P.queue.splice(to, 0, x); }
        renderUpNext(); if (P.open) renderPlayer();
      };
    }
  });

  // ---------- inputs ----------
  device.addEventListener('input', (e) => {
    const key = e.target.dataset.input; if (!key) return;
    S[key] = e.target.value;
    rerender();
  });

  // ---------- click actions ----------
  const actions = {
    noop() {},
    back,
    tab: (el) => { closePlayerIfOpen(); switchTab(el.dataset.id); },
    push: (el) => { closeMenu(); push(el.dataset.to, el.dataset.id); },
    libFilter: (el) => { S.libFilter = el.dataset.id; rerender(); },
    discoverFilter: (el) => { S.discoverFilter = el.dataset.id; rerender(); },
    searchScope: (el) => { S.searchScope = el.dataset.id; rerender(); },
    setQuery: (el) => { S.query = el.dataset.id; rerender(); },
    clearQuery: () => { S.query = ''; rerender(); $('[data-input="query"]')?.focus(); },
    toast: (el) => showToast({ msg: el.dataset.msg, icon: I.note(16) }),

    play: (el) => {
      const id = el.dataset.id;
      if (!playable(id)) return offlineToast();
      if (P.queue[P.idx] === id) { openPlayerSheet(); return; }
      startPlayback(contextQueue(el.dataset.ctx), id, false);
    },
    playCtx: (el) => startPlayback(contextQueue(el.dataset.ctx), null, !!el.dataset.shuffle),
    toggle: () => { if (!playable(P.queue[P.idx])) return offlineToast(); P.playing = !P.playing; renderMini(); if (P.open) renderPlayer(); if (top().name === 'discover') rerender(); },
    next: () => go(1),
    prev: () => go(-1),
    openPlayer: openPlayerSheet,
    closePlayer,
    shuffle: () => {
      const cur = P.queue[P.idx];
      if (!P.shuffle) { const rest = P.queue.filter((x, i) => i !== P.idx); for (let i = rest.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [rest[i], rest[j]] = [rest[j], rest[i]]; } P.queue = [cur, ...rest]; P.idx = 0; }
      P.shuffle = !P.shuffle; renderPlayer(); if (P.upnext) renderUpNext();
    },
    repeat: () => { P.repeat = { off: 'all', all: 'one', one: 'off' }[P.repeat]; renderPlayer(); showToast({ msg: { off: 'Repeat off', all: 'Repeat all', one: 'Repeat one' }[P.repeat], icon: I.repeat(18) }); },
    sleep: (el) => openMenu(el, [
      { act: 'setSleep', icon: I.timer(20), label: 'Off', data: { m: 0 } }, { act: 'setSleep', icon: I.timer(20), label: '5 Minutes', data: { m: 5 } },
      { act: 'setSleep', icon: I.timer(20), label: '15 Minutes', data: { m: 15 } }, { act: 'setSleep', icon: I.timer(20), label: '30 Minutes', data: { m: 30 } },
      { act: 'setSleep', icon: I.note(18), label: 'End of Song', data: { m: -1 } }]),
    setSleep: (el) => { closeMenu(); const m = +el.dataset.m; const s = songs[P.queue[P.idx]];
      P.sleep = m; P.sleepLeft = m === -1 ? s.secs - P.pos : m * 60; renderPlayer();
      showToast({ msg: m ? `Sleep timer set${m > 0 ? ' for ' + m + ' min' : ' for end of song'}` : 'Sleep timer off', icon: I.timer(18) }); },
    airplay: (el) => openMenu(el, [{ act: 'airplayPick', icon: I.check(), label: 'iPhone', data: {} }, { act: 'airplayPick', icon: '<span style="width:22px"></span>', label: 'Living Room', data: { d: 'Living Room' } }, { act: 'airplayPick', icon: '<span style="width:22px"></span>', label: 'Kitchen Speaker', data: { d: 'Kitchen Speaker' } }]),
    airplayPick: (el) => { closeMenu(); if (el.dataset.d) showToast({ msg: `Playing on ${el.dataset.d}`, icon: I.airplay(18) }); },
    upnext: () => { P.upnext = true; renderUpNext(); },
    closeUpNext: () => { P.upnext = false; const u = $('.upnext'); if (u) { u.style.animation = 'sheetDown .25s ease forwards'; u.style.setProperty('--x', 1); setTimeout(() => u.remove(), 240); } },
    qjump: (el) => { P.idx = +el.dataset.idx; P.pos = 0; P.playing = true; afterTrackChange(); },
    playerMenu: (el) => { const id = P.queue[P.idx]; openMenu(el, [
      { act: 'addToPlaylist', icon: I.noteList(), label: 'Add to Playlist', data: { id } },
      inLibSong(id) ? { act: 'toggleSong', icon: I.check(20), label: 'In Library', data: { id } } : { act: 'toggleSong', icon: I.plus(20), label: 'Add To Library', data: { id } },
      { act: 'viewAlbum', icon: I.albums(20), label: 'View Album', data: { id: songs[id].album } }]); },
    viewAlbum: (el) => { closeMenu(); const id = el.dataset.id; const wasOpen = P.open; if (wasOpen) closePlayer(); setTimeout(() => push('album', id), wasOpen ? 120 : 0); },
    viewArtist: (el) => { closeMenu(); const id = el.dataset.id; if (P.open) closePlayer(); push('artist', id); },

    songMenu: (el) => openMenu(el, songMenuItems(el.dataset.id, el.dataset.ctx)),
    albumMenu: (el) => { const id = el.dataset.id; const dl = lib.downloads.includes(id); openMenu(el, [
      { act: 'playNextAlbum', icon: I.playNext(), label: 'Play Next', data: { id } },
      { act: 'addAlbumToPlaylist', icon: I.noteList(), label: 'Add to Playlist', data: { id } },
      { act: 'toggleAlbum', icon: inLibAlbum(id) ? I.trash() : I.plus(20), label: inLibAlbum(id) ? 'Remove from Library' : 'Add to Library', data: { id }, danger: inLibAlbum(id) },
      { act: 'toggleDownload', icon: dl ? I.xmark(18) : I.cloudDown(20), label: dl ? 'Remove Download' : 'Download', data: { id } },
      '-', { act: 'viewArtist', icon: I.person(), label: 'View Artist', data: { id: albums[id].artist } }]); },
    artistMenu: (el) => openMenu(el, [{ act: 'playCtxMenu', icon: I.play(16), label: 'Play All', data: { ctx: 'artist:' + el.dataset.id } }, { act: 'playCtxMenu', icon: I.shuffle(18), label: 'Shuffle', data: { ctx: 'artist:' + el.dataset.id, shuffle: 1 } }]),
    playlistMenu: (el) => openMenu(el, [
      { act: 'renamePlaylist', icon: I.pencil(), label: 'Edit Name', data: { id: el.dataset.id } },
      { act: 'gotoAddMusic', icon: I.plus(20), label: 'Add Music', data: { id: el.dataset.id } },
      '-', { act: 'deletePlaylist', icon: I.trash(), label: 'Remove Playlist', data: { id: el.dataset.id }, danger: true }]),
    closeMenu,
    playCtxMenu: (el) => { closeMenu(); startPlayback(contextQueue(el.dataset.ctx), null, !!el.dataset.shuffle); },
    playNext: (el) => { closeMenu(); const id = el.dataset.id; if (!P.queue.length) { startPlayback([id], id); return; }
      P.queue = P.queue.filter((x, i) => x !== id || i === P.idx); P.queue.splice(P.idx + 1, 0, id); showToast({ msg: `“${songs[id].title}” will play next`, img: albums[songs[id].album].cover }); if (P.open) renderPlayer(); },
    playNextAlbum: (el) => { closeMenu(); const ids = albums[el.dataset.id].songIds; if (!P.queue.length) return startPlayback(ids); P.queue.splice(P.idx + 1, 0, ...ids.filter((x) => !P.queue.includes(x))); showToast({ msg: `${albums[el.dataset.id].title} will play next`, img: albums[el.dataset.id].cover }); },
    addToPlaylist: (el) => { closeMenu(); addToPlaylistSheet([el.dataset.id]); },
    addAlbumToPlaylist: (el) => { closeMenu(); addToPlaylistSheet(albums[el.dataset.id].songIds); },
    addToExisting: (el) => { closeSheet(); addSongsTo(el.dataset.pl, el.dataset.songs.split(',')); rerender(); },
    addToPlaylistDirect: (el) => { const p = lib.playlists.find((x) => x.id === el.dataset.pl); if (!p.songs.includes(el.dataset.id)) p.songs.push(el.dataset.id); save(); rerender(); },
    removeFromPlaylist: (el) => { closeMenu(); const p = lib.playlists.find((x) => x.id === el.dataset.pl); p.songs = p.songs.filter((x) => x !== el.dataset.id); save(); rerender(); },
    newPlaylist: (el) => {
      closeSheet();
      const ids = el.dataset.songs ? el.dataset.songs.split(',') : [];
      dialog({ title: 'New Playlist', text: 'Give your playlist a name.', input: '', okLabel: 'Create', onOk: (name) => {
        const p = createPlaylist(name, ids);
        if (ids.length) { showToast({ msg: `Added to “${p.name}”`, img: albums[songs[ids[0]].album].cover, action: { act: 'gotoPlaylist', id: p.id } }); rerender(); }
        else push('playlist', p.id);
      } });
    },
    gotoPlaylist: (el) => { $('.toast')?.remove(); if (P.open) closePlayer(); S.tab = 'library'; S.libFilter = 'music'; S.stacks.library = [{ name: 'library' }, { name: 'playlists' }]; push('playlist', el.dataset.id); },
    gotoAddMusic: (el) => { closeMenu(); push('addMusic', el.dataset.id); },
    renamePlaylist: (el) => { closeMenu(); const p = lib.playlists.find((x) => x.id === el.dataset.id);
      dialog({ title: 'Edit Name', input: p.name, onOk: (v) => { p.name = v; save(); rerender(); } }); },
    deletePlaylist: (el) => { closeMenu(); const p = lib.playlists.find((x) => x.id === el.dataset.id);
      dialog({ title: `Remove “${p.name}”?`, text: 'This playlist will be removed from your library.', okLabel: 'Remove', danger: true, onOk: () => {
        lib.playlists = lib.playlists.filter((x) => x.id !== p.id); save(); back(); showToast({ msg: 'Playlist removed', icon: I.trash(18) }); } }); },
    toggleAlbum: (el) => { closeMenu(); const id = el.dataset.id;
      if (inLibAlbum(id)) { lib.libAlbums = lib.libAlbums.filter((x) => x !== id); lib.libSongs = lib.libSongs.filter((x) => songs[x].album !== id); showToast({ msg: 'Removed from Library', img: albums[id].cover }); }
      else { lib.libAlbums.push(id); showToast({ msg: 'Added to Library', img: albums[id].cover, action: { act: 'push', to: 'albums' } }); }
      save(); rerender(); },
    toggleSong: (el) => { closeMenu(); const id = el.dataset.id; const s = songs[id];
      if (inLibSong(id)) { lib.libSongs = lib.libSongs.filter((x) => x !== id); if (inLibAlbum(s.album)) { lib.libAlbums = lib.libAlbums.filter((x) => x !== s.album); lib.libSongs.push(...albums[s.album].songIds.filter((x) => x !== id)); } showToast({ msg: 'Removed from Library', img: albums[s.album].cover }); }
      else { lib.libSongs.push(id); showToast({ msg: 'Added to Library', img: albums[s.album].cover, action: { act: 'push', to: 'songs' } }); }
      save(); rerender(); if (P.open) renderPlayer(); },
    toggleDownload: (el) => { closeMenu(); const id = el.dataset.id;
      if (lib.downloads.includes(id)) { lib.downloads = lib.downloads.filter((x) => x !== id); showToast({ msg: 'Download removed', img: albums[id].cover }); }
      else { lib.downloads.push(id); if (!inLibAlbum(id)) lib.libAlbums.push(id); showToast({ msg: 'Downloaded — available offline', img: albums[id].cover, action: { act: 'push', to: 'downloaded' } }); }
      save(); rerender(); },
    toggleOffline: () => { lib.offline = !lib.offline; save(); rerender();
      if (lib.offline) { showToast({ msg: 'Offline Mode on: downloads only', icon: I.wifiOff(18) }); if (P.playing && !playable(P.queue[P.idx])) { P.playing = false; renderMini(); } } },
    resetDemo: () => dialog({ title: 'Reset prototype?', text: 'Restores the starting library and clears playlists.', okLabel: 'Reset', danger: true, onOk: () => {
      lib = defaults(); save(); P.queue = []; P.idx = -1; P.playing = false; S.stacks = Object.fromEntries(Object.keys(roots).map((t) => [t, [{ name: roots[t] }]])); S.tab = 'library'; render('fade'); } }),
    closeSheet,
  };
  function closePlayerIfOpen() { if (P.open) closePlayer(); closeSheet(); closeMenu(); }

  device.addEventListener('click', (e) => {
    const el = e.target.closest('[data-act]');
    if (!el || !device.contains(el)) return;
    if (el.classList.contains('menu-layer') && e.target !== el) return;
    const fn = actions[el.dataset.act];
    if (fn) { e.preventDefault(); e.stopPropagation(); fn(el); }
  });
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.key === ' ' && P.idx >= 0) { e.preventDefault(); actions.toggle(); }
    if (e.key === 'Escape') { if ($('.menu-layer')) closeMenu(); else if ($('.sheet')) closeSheet(); else if (P.upnext) actions.closeUpNext(); else if (P.open) closePlayer(); else back(); }
  });
  $('#resetBtn')?.addEventListener('click', () => actions.resetDemo());

  // clock
  const clock = () => { const d = new Date(); $('#clock').textContent = `${d.getHours() % 12 || 12}:${String(d.getMinutes()).padStart(2, '0')}`; };
  clock(); setInterval(clock, 15000);
  $('#levels').innerHTML = I.cellular() + I.wifi() + I.battery();

  render();
})();
