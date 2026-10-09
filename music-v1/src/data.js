// Catalog data for the Music V1 prototype. Titles and pairings follow the Figma file.
window.CATALOG = (() => {
  const C = 'assets/covers/';
  const A = 'assets/artists/';

  const artists = {
    'deseret-music':        { name: 'Deseret Music', img: null },
    'gentri':               { name: 'Gentri', img: A + 'gentri.jpg' },
    'nashville-tribute':    { name: 'Nashville Tribute Band', img: null },
    'emma-nissen':          { name: 'Emma Nissen', img: A + 'emma-nissen.jpg' },
    'jericho-road':         { name: 'Jericho Road', img: A + 'jericho-road.jpg' },
    'sandra-turley':        { name: 'Sandra Turley', img: A + 'sandra-turley.jpg' },
    'justin-cash':          { name: 'Justin Cash', img: A + 'justin-cash.jpg' },
    'jenny-oaks-baker':     { name: 'Jenny Oaks Baker', img: A + 'jenny-oaks-baker.jpg' },
    'eclipse-6':            { name: 'Eclipse 6', img: A + 'eclipse-6.jpg' },
    'piano-guys':           { name: 'The Piano Guys', img: null },
    'byu-vocal-point':      { name: 'BYU Vocal Point', img: null },
    'paul-cardall':         { name: 'Paul Cardall', img: null },
    'tabernacle-choir':     { name: 'The Tabernacle Choir', img: null },
  };

  // [title, duration]
  const albums = {
    'this-new-day': {
      title: 'This New Day', desc: 'Reflection and Devotion', artist: 'deseret-music', cover: C + 'this-new-day.jpg', year: 2026, plus: true,
      songs: [['This New Day', '3:12'], ['Come, Thou Fount of Every Blessing', '4:05'], ['Meditation', '3:18'], ['Peace Be Mine', '3:44'],
              ['Amazing Grace, How Sweet the Sound', '3:12'], ['How Great Thou Art', '4:31'], ['Be Thou My Vision', '3:02'], ['It Is Well with My Soul', '3:56'],
              ['Blessed Assurance, Jesus Is Mine', '3:27'], ['Holy, Holy, Holy', '2:58'], ['Morning Has Broken', '3:12'], ['I Am a Child of God', '2:41']],
    },
    'redeemer': {
      title: 'Redeemer', desc: 'A Nashville Tribute to Jesus Christ', artist: 'nashville-tribute', cover: C + 'redeemer.jpg', year: 2025, plus: true,
      songs: [['Redeemer', '4:12'], ['Mary’s Lullaby', '3:48'], ['The Healer', '3:55'], ['Gethsemane', '5:02'], ['He Is Risen', '3:39'], ['Come Unto Me', '4:20']],
    },
    'hymns-ii': {
      title: 'Hymns II', desc: 'Gentri', artist: 'gentri', cover: C + 'hymns-ii.jpg', year: 2024, plus: true,
      songs: [['For the Beauty of the Earth', '3:12'], ['A Mighty Fortress Is Our God', '3:40'], ['Abide with Me', '4:02'], ['Nearer, My God, to Thee', '3:51'], ['Lead, Kindly Light', '4:14'], ['Be Still, My Soul', '3:33']],
    },
    'love-like-you': {
      title: 'Love Like You', desc: 'Nissen, Emma', artist: 'emma-nissen', cover: C + 'love-like-you.jpg', year: 2026, plus: true,
      songs: [['Like You Love', '3:24'], ['Imagine', '3:01'], ['Heaven', '8:02'], ['Feel the Rhythm', '2:57'], ['Hallelujah Chorus', '3:36'], ['Amazing Grace', '3:12']],
    },
    'messiah': {
      title: 'Messiah Highlights', desc: 'George Frideric Handel', artist: 'tabernacle-choir', cover: C + 'messiah.jpg', year: 2023, plus: true,
      songs: [['Overture', '3:05'], ['Comfort Ye', '2:58'], ['For unto Us a Child Is Born', '4:01'], ['Glory to God', '1:52'], ['Hallelujah', '3:58'], ['Worthy Is the Lamb', '3:28']],
    },
    'jericho-road': {
      title: 'The Best of Jericho Road', desc: 'Jericho Road', artist: 'jericho-road', cover: C + 'jericho-road.jpg', year: 2019, plus: true,
      songs: [['Nothing Is As Wonderful', '3:47'], ['Bring Him Home', '4:10'], ['Somewhere Over the Rainbow', '3:21'], ['Shine', '3:39']],
    },
    'sandra-turley': {
      title: 'On Broadway', desc: 'Sandra Turley', artist: 'sandra-turley', cover: C + 'sandra-turley.jpg', year: 2018, plus: false,
      songs: [['On My Own', '3:56'], ['I Dreamed a Dream', '4:15'], ['Somewhere', '3:12'], ['Defying Gravity', '4:41']],
    },
    'justin-cash': {
      title: 'Beautiful World', desc: 'Justin Cash', artist: 'justin-cash', cover: C + 'justin-cash.jpg', year: 2017, plus: true,
      songs: [['Beautiful World', '3:33'], ['Walk with Me', '3:48'], ['Every Step', '3:15'], ['Home', '4:02']],
    },
    'jenny-oaks': {
      title: 'Classic: The Rock Album', desc: 'Jenny Oaks Baker', artist: 'jenny-oaks-baker', cover: C + 'jenny-oaks.jpg', year: 2020, plus: true,
      songs: [['Bohemian Rhapsody', '5:44'], ['Don’t Stop Believin’', '4:08'], ['Hey Jude', '4:31'], ['Bridge over Troubled Water', '4:12']],
    },
    'sing-thy-grace': {
      title: 'Sing Thy Grace', desc: 'Eclipse 6', artist: 'eclipse-6', cover: C + 'sing-thy-grace.jpg', year: 2022, plus: true,
      songs: [['Sing Thy Grace', '3:18'], ['Come Thou Fount', '3:42'], ['I Need Thee Every Hour', '3:27'], ['Praise to the Man', '3:05']],
    },
    'limitless': {
      title: 'Limitless', desc: 'The Piano Guys', artist: 'piano-guys', cover: C + 'limitless.jpg', year: 2021, plus: true,
      songs: [['Limitless', '3:52'], ['Let It Go', '3:44'], ['Fight Song', '3:29'], ['A Thousand Years', '4:31']],
    },
    'vocal-point': {
      title: 'Music Video Hits, Vol. 2', desc: 'BYU Vocal Point', artist: 'byu-vocal-point', cover: C + 'vocal-point.jpg', year: 2021, plus: false,
      songs: [['Nearer My God to Thee', '3:22'], ['Bring Him Home', '3:59'], ['Be Our Guest', '3:38']],
    },
    'peaceful-piano': {
      title: 'Peaceful Piano', desc: 'Paul Cardall', artist: 'paul-cardall', cover: C + 'peaceful-piano.jpg', year: 2020, plus: true,
      songs: [['The Gift', '3:45'], ['Redeemer of Israel', '4:11'], ['Sweet Hour of Prayer', '3:58'], ['Peace', '4:27']],
    },
    'scripture-scouts': {
      title: 'Scripture Scouts', desc: 'Musical Adventures in the Book of Mormon', artist: 'deseret-music', cover: C + 'scripture-scouts.jpg', year: 2019, plus: true,
      songs: [['Scripture Scouts Theme', '2:21'], ['Nephi’s Courage', '2:48'], ['Stripling Warriors', '3:05']],
    },
  };

  // flatten songs
  const songs = {};
  for (const [aid, al] of Object.entries(albums)) {
    al.id = aid;
    al.songIds = al.songs.map(([title, dur], i) => {
      const id = `${aid}:${i}`;
      const [m, s] = dur.split(':').map(Number);
      songs[id] = { id, title, dur, secs: m * 60 + s, album: aid, artist: al.artist, n: i + 1 };
      return id;
    });
  }
  for (const [id, ar] of Object.entries(artists)) ar.id = id;

  const books = [
    { title: 'Gospel Doctrine', cover: C + 'bk-gospel-doctrine.jpg', kind: 'ebook', dl: true },
    { title: 'The Joseph Smith Papers', cover: C + 'bk-joseph-smith-papers.jpg', kind: 'ebook', finished: true },
    { title: 'The Power of Everyday Missionaries', cover: C + 'bk-everyday-missionaries.jpg', kind: 'ebook', plus: true },
    { title: 'Jesus the Christ', cover: C + 'bk-jesus-the-christ.jpg', kind: 'ebook' },
  ];
  const audiobooks = [
    { title: 'The Duke’s Bargain', cover: C + 'ab-dukes-bargain.jpg' },
    { title: 'Faithful Tides', cover: C + 'ab-faithful-tides.jpg' },
    { title: 'I Will Lead You Along', cover: C + 'ab-i-will-lead-you-along.jpg' },
  ];

  return { artists, albums, songs, books, audiobooks };
})();
