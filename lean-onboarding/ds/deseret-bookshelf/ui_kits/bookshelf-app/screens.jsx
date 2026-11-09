/* Deseret Bookshelf+ — app screens for the UI kit. Composes design-system primitives.
   Exposes window.BookshelfScreens = { Library, Discover, Reader, Player, Account }. */
const NS = window.DeseretBookshelfDesignSystem_2ad643;
const { NavigationBar, TabBar, Toolbar, SearchField, SegmentedControl, Button, IconButton, Icon,
  Card, ListRow, Tag, Avatar, ProgressBar, Slider, Toggle, StatusBar, LogoDeseretBrandMark } = NS;
const D = window.BOOKSHELF_DATA;

function BookCover({ book, w = 116, h = 174 }) {
  return (
    <div style={{ width: w, height: h, borderRadius: 8, background: book.cover, position: 'relative',
      boxShadow: '0 6px 16px rgba(0,0,0,0.22)', overflow: 'hidden', flex: '0 0 auto',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 12, boxSizing: 'border-box' }}>
      <div style={{ fontFamily: 'var(--font-serif)', color: 'rgba(255,255,255,0.96)', fontSize: w * 0.135, lineHeight: 1.15, fontWeight: 600 }}>{book.title}</div>
      <div style={{ fontFamily: 'var(--font-text)', color: 'rgba(255,255,255,0.7)', fontSize: w * 0.085 }}>{book.author}</div>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: 'rgba(0,0,0,0.22)' }} />
      {book.audio && <div style={{ position: 'absolute', right: 8, top: 8, width: 22, height: 22, borderRadius: '50%',
        background: 'rgba(0,0,0,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="headphones" size={13} color="#fff" /></div>}
    </div>
  );
}

function Shelf({ shelf, onOpen }) {
  return (
    <div style={{ marginBottom: 26 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px 10px' }}>
        <span className="ds-title-3" style={{ color: 'var(--label-primary)' }}>{shelf.name}</span>
        <span style={{ fontSize: 15, color: 'var(--brand)', fontWeight: 500 }}>See All</span>
      </div>
      <div style={{ display: 'flex', gap: 14, overflowX: 'auto', padding: '0 16px 6px' }}>
        {shelf.books.map((b, i) => (
          <div key={i} onClick={() => onOpen && onOpen(b)} style={{ cursor: 'pointer', width: 116 }}>
            <BookCover book={b} />
            <div style={{ marginTop: 8, fontFamily: 'var(--font-text)', fontSize: 13, fontWeight: 600, color: 'var(--label-primary)',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{b.title}</div>
            {b.progress != null
              ? <div style={{ marginTop: 5 }}><ProgressBar value={b.progress * 100} height={3} /></div>
              : <div style={{ fontSize: 12, color: 'var(--label-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{b.author}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function Library({ onOpen }) {
  const cr = D.continueReading;
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg-secondary)' }}>
      <div style={{ background: 'var(--bg-primary)' }}>
        <StatusBar theme="dark" />
        <NavigationBar title="Library" largeTitle blurred={false}
          trailing={<><IconButton icon="magnifyingglass" variant="plain" /><IconButton icon="ellipsis" variant="plain" /></>} />
      </div>
      <div style={{ flex: 1, overflowY: 'auto', paddingTop: 18, paddingBottom: 24 }}>
        <div style={{ padding: '0 16px 26px' }} onClick={() => onOpen && onOpen(cr, 'read')}>
          <Card padding={0} elevation="md" style={{ cursor: 'pointer' }}>
            <div style={{ display: 'flex', gap: 16, padding: 16 }}>
              <BookCover book={cr} w={92} h={138} />
              <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
                <Tag color="brand" size="sm" style={{ alignSelf: 'flex-start' }}>Continue Reading</Tag>
                <div className="ds-headline" style={{ color: 'var(--label-primary)', marginTop: 10 }}>{cr.title}</div>
                <div style={{ fontSize: 14, color: 'var(--label-secondary)', marginTop: 2 }}>{cr.author}</div>
                <div style={{ fontSize: 13, color: 'var(--label-tertiary)', marginTop: 8 }}>{cr.chapter}</div>
                <div style={{ flex: 1 }} />
                <ProgressBar value={cr.progress * 100} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 12, color: 'var(--label-secondary)' }}>
                  <span>{Math.round(cr.progress * 100)}%</span><span>18 min left</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
        {D.shelves.map((s, i) => <Shelf key={i} shelf={s} onOpen={(b) => onOpen && onOpen(b)} />)}
      </div>
    </div>
  );
}

function Discover({ onOpen }) {
  const [seg, setSeg] = React.useState('featured');
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg-secondary)' }}>
      <div style={{ background: 'var(--bg-primary)' }}>
        <StatusBar theme="dark" />
        <div style={{ padding: '4px 16px 0' }}><span className="ds-large-title" style={{ color: 'var(--label-primary)' }}>Discover</span></div>
        <div style={{ padding: '12px 16px' }}><SearchField placeholder="Titles, authors, topics" /></div>
        <div style={{ padding: '0 16px 12px' }}>
          <SegmentedControl value={seg} onChange={setSeg}
            options={[{ label: 'Featured', value: 'featured' }, { label: 'Categories', value: 'cat' }, { label: 'Bestsellers', value: 'best' }]} />
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '18px 0 24px' }}>
        <div style={{ margin: '0 16px 22px', borderRadius: 16, overflow: 'hidden', background: 'linear-gradient(135deg, var(--brand-600), var(--brand-800))',
          padding: 22, color: '#fff' }}>
          <Tag color="neutral" variant="solid" size="sm" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>Editor's Pick</Tag>
          <div className="ds-title-1" style={{ color: '#fff', marginTop: 12 }}>The God Who Weeps</div>
          <div style={{ opacity: 0.85, fontSize: 15, marginTop: 4 }}>Terryl & Fiona Givens</div>
          <div style={{ marginTop: 16 }}><Button variant="filled" style={{ background: '#fff', color: 'var(--brand-700)' }} icon="book.fill">Start Reading</Button></div>
        </div>
        <div style={{ padding: '0 16px 8px' }}><span className="ds-title-3" style={{ color: 'var(--label-primary)' }}>Browse by Category</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: '8px 16px' }}>
          {D.categories.map((c, i) => (
            <div key={c} style={{ height: 68, borderRadius: 12, padding: 14, color: '#fff', display: 'flex', alignItems: 'flex-end',
              fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700,
              background: ['#0c958b', '#164e63', '#7c3a12', '#5b21b6', '#166534', '#9a3412', '#155e75', '#3f3f46'][i % 8] }}>{c}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Reader({ onClose, onPlay }) {
  const r = D.reader; const [size, setSize] = React.useState(50);
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#f7f3ec' }}>
      <div style={{ background: 'rgba(247,243,236,0.9)', backdropFilter: 'blur(10px)' }}>
        <StatusBar theme="dark" />
        <NavigationBar blurred={false} backLabel="Library" onBack={onClose} title={r.chapter}
          trailing={<><IconButton icon="textformat.size" variant="plain" /><IconButton icon="bookmark" variant="plain" /><IconButton icon="headphones" variant="plain" onClick={onPlay} /></>}
          style={{ background: 'transparent', borderBottom: 'none' }} />
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 26px 30px' }}>
        <div className="ds-title-1 ds-serif" style={{ color: '#2b2620', marginBottom: 18 }}>{r.heading}</div>
        {r.paragraphs.map((p, i) => (
          <p key={i} className="ds-serif" style={{ fontSize: 15 + size * 0.06, lineHeight: 1.62, color: '#2b2620', margin: '0 0 18px', textIndent: i ? '1.4em' : 0 }}>{p}</p>
        ))}
        <div style={{ textAlign: 'center', color: '#9c948a', fontSize: 13, marginTop: 8 }}>· · ·</div>
      </div>
      <div style={{ background: 'rgba(247,243,236,0.94)', borderTop: '0.5px solid rgba(0,0,0,0.1)', padding: '10px 20px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Icon name="textformat.size" size={16} color="#9c948a" />
          <Slider value={size} onChange={setSize} tint="#8a7a5a" />
          <Icon name="textformat.size" size={24} color="#9c948a" />
        </div>
        <div style={{ textAlign: 'center', marginTop: 8, fontSize: 12, color: '#9c948a' }}>Page 214 of 388 · 62%</div>
      </div>
    </div>
  );
}

function Player({ onClose }) {
  const [playing, setPlaying] = React.useState(true); const [pos, setPos] = React.useState(38);
  const book = D.shelves[2].books[1];
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'linear-gradient(180deg, #123f3b, #0a2825)' }}>
      <StatusBar theme="light" />
      <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0 8px' }}>
        <IconButton icon="chevron.down" variant="plain" onClick={onClose} style={{ color: 'rgba(255,255,255,0.8)' }} />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 32px' }}>
        <div style={{ transform: 'scale(1.55)', marginBottom: 54 }}><BookCover book={book} w={150} h={225} /></div>
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div className="ds-title-2" style={{ color: '#fff' }}>{book.title}</div>
          <div style={{ opacity: 0.7, fontSize: 15, marginTop: 4 }}>{book.author}</div>
        </div>
        <div style={{ width: '100%', marginTop: 34 }}>
          <Slider value={pos} onChange={setPos} tint="#fff" />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>
            <span>2:14:07</span><span>-1:52:31</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 30, marginTop: 24 }}>
          <Icon name="gobackward" size={30} color="#fff" />
          <button onClick={() => setPlaying(!playing)} style={{ width: 74, height: 74, borderRadius: '50%', border: 'none',
            background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Icon name={playing ? 'pause.fill' : 'play.fill'} size={34} color="#123f3b" /></button>
          <Icon name="goforward" size={30} color="#fff" />
        </div>
      </div>
    </div>
  );
}

function Account() {
  const [downloads, setDownloads] = React.useState(true); const [cellular, setCellular] = React.useState(false);
  const tile = (icon, c) => <span style={{ width: 29, height: 29, borderRadius: 7, background: c, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={17} color="#fff" fill /></span>;
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg-secondary)' }}>
      <div style={{ background: 'var(--bg-primary)' }}><StatusBar theme="dark" /><NavigationBar title="Account" largeTitle blurred={false} /></div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '18px 16px 24px' }}>
        <Card padding={16} style={{ marginBottom: 22, display: 'flex', alignItems: 'center', gap: 14 }}>
          <Avatar name="Sariah Young" size="lg" color="var(--brand-tint-14)" />
          <div style={{ flex: 1 }}>
            <div className="ds-headline" style={{ color: 'var(--label-primary)' }}>Sariah Young</div>
            <div style={{ fontSize: 14, color: 'var(--label-secondary)' }}>Bookshelf+ Member</div>
          </div>
          <Tag color="brand" variant="solid" size="sm" icon="star.fill">VIP</Tag>
        </Card>
        <Card padding={0} style={{ marginBottom: 22 }}>
          <ListRow first title="Downloads" value="24" leading={tile('square.and.arrow.down', 'var(--system-blue)')} chevron />
          <ListRow title="Reading Goals" value="12 / 20" leading={tile('chart.bar.fill', 'var(--system-green)')} chevron />
          <ListRow last title="Highlights & Notes" leading={tile('bookmark', 'var(--system-orange)')} chevron />
        </Card>
        <div style={{ padding: '0 4px 6px', fontSize: 13, color: 'var(--label-secondary)', textTransform: 'uppercase', letterSpacing: 0.4 }}>Preferences</div>
        <Card padding={0}>
          <ListRow first title="Auto-Download New" leading={tile('arrow.down.circle', 'var(--brand)')} trailing={<Toggle checked={downloads} onChange={setDownloads} />} />
          <ListRow title="Download over Cellular" leading={tile('antenna.radiowaves.left.and', 'var(--system-teal)')} trailing={<Toggle checked={cellular} onChange={setCellular} />} />
          <ListRow last title="Notifications" leading={tile('bell.fill', 'var(--system-red)')} chevron />
        </Card>
      </div>
    </div>
  );
}

window.BookshelfScreens = { Library, Discover, Reader, Player, Account, BookCover };
