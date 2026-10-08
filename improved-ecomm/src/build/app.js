/* Generated from src/catalog.js, src/ui.jsx, src/screens.jsx, src/checkout.jsx, src/subscriptions.jsx, src/app.jsx. Files share one top-level scope, as separate classic scripts would. Rebuild after editing (see src/build/README.md). */
/* src/catalog.js */
/* Real Deseret Book product data + image URLs (deseretbook.com / images.deseretbook.io) */
(function () {
  const IB = "https://images.deseretbook.io/api/v1.1/rn/public_files/pim/assets/3e/1e/de/64/64de1e3e6974570001d45a2c/images/";
  const FB = IB; /* same CDN host: plytix-backed assets serve from images.deseretbook.io too */
  const I = (p) => IB + p + "?s=1000x1000&t=JPEG&v=2";
  const F = (p) => FB + p + "?s=1000x1000&t=JPEG&v=2";
  const dbl = (n) => n + "/" + n;

  const SS_IMG = [I("4f/cf/c6/69/69c6cf4fe1d7ade0a65677a5/" + dbl("6088361_HERO_Silent-Strike_HARDBACK.jpg")), I("4c/cf/c6/69/69c6cf4ce1d7ade0a65677a3/" + dbl("6088361_FEATURE_Silent-Strike_HARDBACK_FLAP1.jpg")), I("4d/cf/c6/69/69c6cf4de1d7ade0a65677a4/" + dbl("6088361_FEATURE_Silent-Strike_HARDBACK_FLAP2.jpg")), I("13/bf/ef/69/69efbf134fcae523f31c953f/6088361_FEATURE_SILENT-STRIKE_HARDBACK_INTERIOR.png/6088361_FEATURE_SILENT-STRIKE_HARDBACK_INTERIOR.jpg"), I("4a/cf/c6/69/69c6cf4ae1d7ade0a65677a2/" + dbl("6088361_BACK_Silent-Strike_HARDBACK.jpg")), I("91/1f/4c/6a/6a4c1f911a4cf7e9be57409e/" + dbl("6088361_PRODGALLERY_SILENT-STRIKE-LUKE-STEEL-BOOK-3_UP.jpg"))];
  const SS = { t: "Silent Strike (Luke Steele, Book 3)", by: "Abramson, Traci Hunter", r: 5, rc: 18, cat: "books_fiction_mystery-and-suspense", parent: "PR00001543" };
  const VARIANTS = [
    Object.assign({ id: "6088361", price: 32.99, fmt: "Hardcover", img: SS_IMG }, SS),
    Object.assign({ id: "PR00001543-EB", price: 27.99, fmt: "eBook", digital: true, img: [SS_IMG[0]] }, SS),
    Object.assign({ id: "PR00001543-AB", price: 29.99, fmt: "Audiobook (Digital)", digital: true, img: [SS_IMG[0]] }, SS)
  ];
  const P = [
    { id: "PR00001543", t: "Silent Strike (Luke Steele, Book 3)", by: "Abramson, Traci Hunter", price: 27.99, priceHigh: 32.99, r: 5, rc: 18, cat: "books_fiction_mystery-and-suspense", fmt: "Hardcover",
      formats: ["6088361", "PR00001543-EB", "PR00001543-AB"], img: SS_IMG,
      d: "A military aide to the president and an FBI agent follow a trail of Cold War secrets from Washington to Eastern Europe." },
    { id: "6017019", t: "The Candy Shop War Complete Boxed Set", by: "Mull, Brandon", price: 15.00, r: 4.8, rc: 176, cat: "books_fiction_teen-fiction", fmt: "Paperback",
      img: [I("26/5b/21/66/66215b26b1dea3bbbe48c291/6017019_The_Candy_Shop_War_Complete_Boxed_Set.png/6017019_The_Candy_Shop_War_Complete_Boxed_Set.jpg")],
      d: "All three Candy Shop War novels in one boxed set. Clearance price, while supplies last." },
    { id: "5254477", t: "And These Words Scripture Study Journal", by: "Deseret Book", price: 6.25, r: 4.1, rc: 58, cat: "church-resources_scriptures_scripture-journal-editions", fmt: "Hardcover",
      img: [I("6a/5b/21/66/66215b6ab1dea3bbbe48c904/5254477_5254477_none_base_8d114ae9.png/5254477_5254477_none_base_8d114ae9.jpg"), I("6a/5b/21/66/66215b6ab1dea3bbbe48c902/5254477_and-these-words-lifestyle.png/5254477_and-these-words-lifestyle.jpg")],
      d: "A guided journal for daily scripture study, with prompts and room to write." },
    { id: "5212882", t: "The Book of Mormon Legacy Edition", by: "Deseret Book", price: 49.99, r: 5.0, rc: 91, cat: "church-resources_scriptures", fmt: "Hardcover",
      img: [I("f5/0f/35/66/66350ff54a47d8ad45efa9f6/5212882_5212882_none_base_bbd468fc.png/5212882_5212882_none_base_bbd468fc.jpg"), I("f5/0f/35/66/66350ff54a47d8ad45efa9f9/5212882_Book_of_Mormon_Legacy_Edition.png/5212882_Book_of_Mormon_Legacy_Edition.jpg")],
      d: "A keepsake edition of the Book of Mormon, printed on heavier stock with wide margins." },
    { id: "6070661", t: "The Love of God (18x22 Framed Canvas Print)", by: "Deseret Book", price: 114.50, r: 3.9, rc: 24, cat: "home_fine-art", fmt: "Framed Canvas Print", size: "18\" x 22\"",
      img: [I("44/a6/cf/67/67cfa6449ab7822b03cba060/6070661_6070661_none_base_ba804e01.png/6070661_6070661_none_base_ba804e01.jpg"), I("43/a6/cf/67/67cfa6439ab7822b03cba057/6070661_6070661_none_base_f7479931.png/6070661_6070661_none_base_f7479931.jpg")],
      d: "Canvas print in a wood frame, ready to hang. Half off during clearance." },
    { id: "5255079", t: "The Old Testament, Journal Edition, Patterned Unlined", by: "Deseret Book", price: 5.00, r: 4.6, rc: 143, cat: "church-resources_scriptures_scripture-journal-editions", fmt: "Paperback",
      img: [I("26/3f/16/69/69163f26c97833c19f56bead/" + dbl("5255079_HERO_OLD-TESTAMENT-JOURNAL-EDITION-PATTERNED-UNLINED.jpg")), I("29/3f/16/69/69163f29b4b73250f42334e9/" + dbl("5255079_PRODGALLERY_OLD-TESTAMENT-JOURNAL-EDITION-PATTERNED-UNLINED.jpg"))],
      d: "Wide unlined margins for notes and sketches. No index." },
    { id: "6024672", t: "Cable Knit Blessing Blanket", by: "Deseret Book", price: 6.25, r: 4.3, rc: 67, cat: "baptism", fmt: "Knit Cotton",
      img: [I("aa/70/21/66/662170aa4d8f8419f6bef5d6/6024672_6024672_none_base_42b715b0.png/6024672_6024672_none_base_42b715b0.jpg")],
      d: "A soft cable-knit blanket for a blessing day keepsake." },
    { id: "6095538", t: "Seeking Persephone (Movie Tie-in Edition)", by: "Eden, Sarah M.", price: 18.99, r: 4.8, rc: 214, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("63/79/6b/6a/6a6b7963aecf6cfadd773d25/" + dbl("6095538_HERO_SEEKING-PERSEPHONE-MOVIE-TIE-IN-EDITION_PAPERBACK_1.jpg")), I("7b/22/d9/69/69d9227b974f08152f873bca/" + dbl("5068623_HERO_SEEKING-PERSEPHONE.jpg"))],
      d: "The movie tie-in edition of Sarah M. Eden\u2019s beloved Regency romance. Persephone Lancaster marries a stranger to save her family \u2014 and finds a quiet, guarded man who needs her more than he knows." },
    { id: "P5068623", t: "Seeking Persephone (The Lancaster Family, Book 1)", by: "Eden, Sarah M.", price: 11.99, priceHigh: 17.99, r: 4.2, rc: 386, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("7b/22/d9/69/69d9227b974f08152f873bca/" + dbl("5068623_HERO_SEEKING-PERSEPHONE.jpg")), I("fe/21/d9/69/69d921fe778e76271e56f640/" + dbl("5068623_FEATURE_SEEKING-PERSEPHONE_INTERIOR1.jpg"))],
      d: "Book one of the Lancaster Family series. A marriage of convenience becomes something neither of them expected." },
    { id: "P5043081", t: "Courting Miss Lancaster (The Lancaster Family, Book 2)", by: "Eden, Sarah M.", price: 11.99, priceHigh: 15.99, r: 3.9, rc: 241, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("97/1d/d9/69/69d91d972877f3aacd15491d/" + dbl("5043081_HERO_COURTING-MISS-LANCASTER.jpg")), I("a1/1d/d9/69/69d91da1eabe6d00111fdaf4/" + dbl("5043081_FEATURE_COURTING-MISS-LANCASTER_INTERIOR1.jpg"))],
      d: "Athena Lancaster wants a romantic suitor. Her guardian asks his closest friend to help her find one \u2014 a plan with one obvious flaw." },
    { id: "P5183500", t: "Romancing Daphne (The Lancaster Family, Book 3)", by: "Eden, Sarah M.", price: 9.99, priceHigh: 17.99, r: 4.6, rc: 178, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("07/50/27/69/69275007869d9d2aed915ea2/P5183500_HERO_ROMANCING-DAPHNE-THE-LANCASTER-FAMILY.png/P5183500_HERO_ROMANCING-DAPHNE-THE-LANCASTER-FAMILY.jpg")],
      d: "The quietest Lancaster sister steps into a London season she never wanted." },
    { id: "P5197705", t: "Loving Lieutenant Lancaster (The Lancaster Family, Book 4)", by: "Eden, Sarah M.", price: 9.99, priceHigh: 16.99, r: 5, rc: 143, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("b2/23/d9/69/69d923b24ad2ea64df99c5f3/" + dbl("5197705_HERO_LOVING-LIEUTENANT-LANCASTER.jpg"))],
      d: "A soldier returns from war to a woman who remembers who he was before." },
    { id: "P5258117", t: "Charming Artemis (The Lancaster Family, Book 5)", by: "Eden, Sarah M.", price: 9.99, priceHigh: 18.99, r: 4.4, rc: 132, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("d9/1b/d9/69/69d91bd9b9ba62fc50204cd0/" + dbl("5258117_HERO_CHARMING-ARTEMIS.jpg"))],
      d: "The last Lancaster sister and the Jonquil brother who has always exasperated her." },
    { id: "PR00001380", t: "Every Beat After", by: "Various", price: 18.99, priceHigh: 32.99, r: 3.7, rc: 27, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("c6/eb/c6/69/69c6ebc6bcb2c7b68da50814/6087090_HERO_EVERY-BEAT-AFTER_PAPERBACK-KAL.png/6087090_HERO_EVERY-BEAT-AFTER_PAPERBACK-KAL.jpg"), I("29/b8/ca/69/69cab829eff20acca1da5cf9/" + dbl("6087090_FEATURE_EVERY-BEAT-AFTER_PAPERBACK_INTERIOR1.jpg"))],
      d: "A new release for the reader who needs a steady hour." },
    { id: "6073624", t: "Wendy\u2019s Ever After", by: "Wright, Julie", price: 19.99, r: 4.5, cat: "books_fiction_teen-fiction", fmt: "Hardcover",
      img: [I("10/71/3f/68/683f7110096dff25dda260d2/" + dbl("6073624_HERO_WENDYS-EVER-AFTER_HARDBACK.jpg"))],
      d: "Wendy Darling is grown, and her days are full of balls and social calls, but Neverland still pulls at her. A Junior Library Guild Gold Standard Selection from Shadow Mountain. 272 pages." },
    { id: "P6054216", t: "Casters and Crowns (Casters & Crowns Book 1)", by: "Lowham, Elizabeth", price: 12.99, priceHigh: 26.99, r: 5.0, cat: "books_fiction_teen-fiction", fmt: "Hardcover",
      img: [I("b3/e6/07/67/6707e6b3450e244009863e4e/P6054216_CASTERS_AND_CROWNS.png/P6054216_CASTERS_AND_CROWNS.jpg")],
      d: "Cursed after failed peace talks with the most dangerous Caster in the realm, Crown Princess Aria turns to the charming Baron Reeves for help before the curse runs its hundred days. 384 pages." },
    { id: "6054221", t: "The Art of Us", by: "Wright, Julie", price: 19.99, cat: "books_fiction_teen-fiction", fmt: "Hardcover",
      img: [I("e4/a3/cf/67/67cfa3e49ab7822b03cb64b1/P6054221_P6054221_none_base_319fd634.png/P6054221_P6054221_none_base_319fd634.jpg")],
      d: "High school senior Ireland Raine is keeping a secret: she\u2019s homeless. When Kal Ellis asks her out and they team up on the school mural, both of them have something to hide. A Junior Library Guild Gold Standard Selection. 272 pages." },
    { id: "PR00001397", t: "The Duke\u2019s Bargain", by: "Various", price: 18.99, priceHigh: 32.99, r: 4.9, rc: 31, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("4f/eb/cb/69/69cbeb4f1697b5a856e37127/PR00001397_HERO_THE-DUKES-BARGAIN.png/PR00001397_HERO_THE-DUKES-BARGAIN.jpg")],
      d: "A bargain struck in good faith, and the season that tests it." },
    { id: "P5244938", t: "Forget Me Not (The Gents, Book 1)", by: "Eden, Sarah M.", price: 9.99, priceHigh: 17.99, r: 4.5, rc: 96, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("3c/44/0b/6a/6a0b443c186a973efff1c49c/" + dbl("5244938_HERO_FORGET-ME-NOT_PAPERBACK.jpg"))],
      d: "The first of the Gents \u2014 friends bound by school, scandal, and loyalty." },
    { id: "P6001424", t: "Lily of the Valley (The Gents, Book 2)", by: "Eden, Sarah M.", price: 9.99, priceHigh: 17.99, r: 4.1, rc: 84, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("27/45/0b/6a/6a0b4527ad820a67a64ae936/" + dbl("6001424_HERO_LILY-OF-THE-VALLEY_PAPERBACK.jpg"))],
      d: "Book two of the Gents." },
    { id: "P6087437", t: "Love in a Mist (The Gents, Book 5)", by: "Eden, Sarah M.", price: 17.99, priceHigh: 19.99, r: 4.7, rc: 44, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("80/02/0e/6a/6a0e02809a628cfe734712de/" + dbl("6087437_HERO_LOVE-IN-A-MIST_PAPERBACK.jpg"))],
      d: "Book five of the Gents." },
    { id: "P5226193", t: "The Heart of a Vicar (The Jonquil Brothers, Book 6)", by: "Eden, Sarah M.", price: 11.99, priceHigh: 17.99, r: 3.5, rc: 118, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("21/27/d9/69/69d92721d03449848d30e4e8/" + dbl("5226516_HERO_HEART-OF-A-VICAR.jpg"))],
      d: "A vicar, a childhood friend, and the version of himself he left behind." },
    { id: "P5076966", t: "Friends and Foes (The Jonquil Brothers, Book 1)", by: "Eden, Sarah M.", price: 9.99, priceHigh: 15.99, r: 4.3, rc: 165, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("01/28/d9/69/69d9280125a976d06b27952a/" + dbl("5076966_HERO_FRIENDS-AND-FOES.jpg"))],
      d: "Where the Jonquil Brothers begin." },
    { id: "P5117030", t: "As You Are (The Jonquil Brothers, Book 3)", by: "Eden, Sarah M.", price: 9.99, priceHigh: 17.99, r: 5, rc: 121, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("fd/19/d9/69/69d919fdae261ce908d615ae/" + dbl("5117030_HERO_AS-YOU-ARE-JONQUIL-BROTHERS.jpg"))],
      d: "Book three of the Jonquil Brothers." },
    { id: "P6027265", t: "Christmas at Falstone Castle", by: "Eden, Sarah M.", price: 3.99, priceHigh: 7.99, r: 4, rc: 73, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("b3/1c/d9/69/69d91cb3eabe6d00111fdac7/" + dbl("6027265_HERO_CHRISTMAS-FALSTONE-CASTLE.jpg"))],
      d: "A short Christmas visit with the Lancasters." },
    { id: "P5127561", t: "For Elise", by: "Eden, Sarah M.", price: 9.99, priceHigh: 17.99, r: 4.6, rc: 88, cat: "books_fiction_romance", fmt: "Paperback",
      img: [I("90/08/0e/6a/6a0e089008d1587f906d201b/" + dbl("5127561_HERO_FOR-ELISE_PAPERBACK.jpg"))],
      d: "A promise made years ago, kept at cost." },

    { id: "P6073551", t: "Anne Regular Scripture Tote", by: "Deseret Book", price: 39.99, r: 5.0, rc: 12, cat: "church-resources_scriptures_scripture-totes", fmt: "Vegan Leather", size: "13\" x 12\" x 5\"",
      colors: [
        { n: "Gray", sw: "#9b958f", img: F("15/34/d3/67/67d33415eb1441e50565866f/anne-scripture-tote-gray.png/anne-scripture-tote-gray.jpg") },
        { n: "Cream", sw: "#e9dfcc", img: F("15/34/d3/67/67d334153b069b58ad1a2d38/anne-scripture-tote-cream.png/anne-scripture-tote-cream.jpg") },
        { n: "Olive", sw: "#77744c", img: F("16/34/d3/67/67d334164e29dc485478b43c/anne-scripture-tote-olive.png/anne-scripture-tote-olive.jpg") },
        { n: "Pink", sw: "#dcaaa6", img: F("16/34/d3/67/67d33416b14197a2b98a7e95/anne-scripture-tote-pink.png/anne-scripture-tote-pink.jpg") }],
      img: [F("01/34/d3/67/67d33401efc1b21517ca92f1/anne-scripture-tote.png/anne-scripture-tote.jpg"), F("c7/a3/cf/67/67cfa3c79ab7822b03cb620d/P6073551_P6073551_none_base_57381da8.png/P6073551_P6073551_none_base_57381da8.jpg"), F("cf/91/ed/67/67ed91cfe6defc243ec75726/6073553-interior-pink-anne-regular-scripture-tote.png/6073553-interior-pink-anne-regular-scripture-tote.jpg")],
      d: "Smooth vegan leather with gold accents. A spacious interior with two pockets and a leather strap pinch lock closure holds all your Church essentials. Tote dimensions: 13\"L x 12\"W x 5\"H." },
    { id: "P6096125", t: "Quad Combination Simulated Leather, Regular, Indexed (Limited Edition Color)", by: "Deseret Book", price: 79, r: 3.8, rc: 58, cat: "church-resources_scriptures_scripture-essentials", fmt: "Faux-Leather", size: "5.25\" x 7.25\"", online: true,
      colors: [
        { n: "Rosewood", sw: "#b98f92", img: I("9e/9b/03/6a/6a039b9e083e55fa84334fdb/" + dbl("6096125_PRODGALLERY_SIMULATED-LEATHER-QUAD-COMBINATION-REGULAR-ROSEWOOD_4oheo8.jpg")) },
        { n: "Teal", sw: "#79c4bd", img: I("a4/9b/03/6a/6a039ba4fbcf04ee5222ec7e/" + dbl("6096126_PRODGALLERY_SIMULATED-LEATHER-QUAD-COMBINATION-REGULAR-TEAL_8blt92.jpg")) },
        { n: "Taupe Pearl", sw: "#cdb6a4", img: I("a6/9b/03/6a/6a039ba6083e55fa84334fdd/" + dbl("6096127_PRODGALLERY_SIMULATED-LEATHER-QUAD-COMBINATION-REGULAR-TAUPE-PEARL_ybbc0g.jpg")) }],
      img: [I("7f/a3/03/6a/6a03a37ffbcf04ee5222edbf/" + dbl("P6096125_HERO_SIMULATED-LEATHER-QUAD-COMBINATION-REGULAR_exl7om.jpg")), I("a5/9b/03/6a/6a039ba5fbcf04ee5222ec7f/" + dbl("6096125_PRODGALLERY_SIMULATED-LEATHER-QUAD-COMBINATION-REGULAR-ROSEWOOD_INSIDE_hnyn87.jpg")), I("a1/9b/03/6a/6a039ba1fbcf04ee5222ec7c/" + dbl("6096126_PRODGALLERY_SIMULATED-LEATHER-QUAD-COMBINATION-REGULAR-TEAL_INSIDE_tylgkp.jpg")), I("a3/9b/03/6a/6a039ba3fbcf04ee5222ec7d/" + dbl("6096127_PRODGALLERY_SIMULATED-LEATHER-QUAD-COMBINATION-REGULAR-TAUPE-PEARL_INSIDE_imuug2.jpg")), I("db/a4/fb/69/69fba4db4d575ecc21aac7fb/" + dbl("MULTIPLE_PRODGALLERY_SIMULATED-LEATHER-QUAD-COMBINATIONS-REGULAR.jpg"))],
      d: "Limited quantities, while supplies last. These standard-size, simulated leather quadruple combination scriptures are an online exclusive, available in three limited-edition colors: Rosewood, Teal, and Taupe. Each set comes indexed for easy navigation and features gilded edges and a satin ribbon bookmark." },
    { id: "P6074927", personalize: true, t: "Simulated Leather Quad Combination, Regular (Color Options)", by: "Deseret Book", price: 79, r: 4.9, rc: 402, cat: "church-resources_scriptures_scripture-essentials", fmt: "Faux-Leather", size: "5.25\" x 7.25\"",
      colors: [
        { n: "Dusty Rose", sw: "#c39ba0", gallery: [F("bc/a3/cf/67/67cfa3bc9ab7822b03cb60fa/P6074927_P6074927_none_base_f13bac11.jpg/P6074927_P6074927_none_base_f13bac11.jpg"), F("bd/a3/cf/67/67cfa3bd9ab7822b03cb6110/P6074927_P6074927_none_base_76a3b780.jpg/P6074927_P6074927_none_base_76a3b780.jpg"), F("bc/a3/cf/67/67cfa3bc9ab7822b03cb610b/P6074927_P6074927_none_base_822235c8.jpg/P6074927_P6074927_none_base_822235c8.jpg")] },
        { n: "Pacific Blue", sw: "#4d6f8c", gallery: [F("bc/a3/cf/67/67cfa3bc9ab7822b03cb6102/P6074927_P6074927_none_base_b2b31640.jpg/P6074927_P6074927_none_base_b2b31640.jpg"), F("bc/a3/cf/67/67cfa3bc9ab7822b03cb60fd/P6074927_P6074927_none_base_d77abcce.jpg/P6074927_P6074927_none_base_d77abcce.jpg"), F("bd/a3/cf/67/67cfa3bd9ab7822b03cb6112/P6074927_P6074927_none_base_6f7972e5.jpg/P6074927_P6074927_none_base_6f7972e5.jpg")] },
        { n: "Forest Green", sw: "#3f5a45", gallery: [F("bd/a3/cf/67/67cfa3bd9ab7822b03cb610d/P6074927_P6074927_none_base_7e4bc496.jpg/P6074927_P6074927_none_base_7e4bc496.jpg"), F("bd/a3/cf/67/67cfa3bd9ab7822b03cb6114/P6074927_P6074927_none_base_6cd4f029.jpg/P6074927_P6074927_none_base_6cd4f029.jpg")] },
        { n: "Walnut Brown", sw: "#7b5b42", gallery: [F("bc/a3/cf/67/67cfa3bc9ab7822b03cb60ff/P6074927_P6074927_none_base_c918eeef.jpg/P6074927_P6074927_none_base_c918eeef.jpg"), F("bd/a3/cf/67/67cfa3bd9ab7822b03cb6115/P6074927_P6074927_none_base_65d95cdd.jpg/P6074927_P6074927_none_base_65d95cdd.jpg"), F("bc/a3/cf/67/67cfa3bc9ab7822b03cb6100/P6074927_P6074927_none_base_a2159194.jpg/P6074927_P6074927_none_base_a2159194.jpg")] }],
      img: [F("02/f8/42/69/6942f802f89a3d2d3c62b42f/P6074927_HERO_SIMULATED-LEATHER-QUAD-REGULAR-COLOR-OPTIONS.png/P6074927_HERO_SIMULATED-LEATHER-QUAD-REGULAR-COLOR-OPTIONS.jpg"), F("f6/8c/b0/69/69b08cf6e18979a989b316f1/" + dbl("scriptureComparison.jpg")), F("bd/a3/cf/67/67cfa3bd9ab7822b03cb6117/P6074927_P6074927_none_base_66af756b.png/P6074927_P6074927_none_base_66af756b.jpg"), F("bd/a3/cf/67/67cfa3bd9ab7822b03cb611c/P6074927_P6074927_none_base_17d67ed0.png/P6074927_P6074927_none_base_17d67ed0.jpg"), F("bc/a3/cf/67/67cfa3bc9ab7822b03cb60fb/P6074927_P6074927_none_base_f6af96fd.png/P6074927_P6074927_none_base_f6af96fd.jpg")],
      d: "All four standard works in one indexed volume, in four everyday colors. Gilded edges and a satin ribbon bookmark." },
    { id: "P6079208", personalize: true, t: "Simulated Leather Triple Combination, Regular (Color Options)", by: "Deseret Book", price: 45, r: 4.4, rc: 236, cat: "church-resources_scriptures_scripture-essentials", fmt: "Faux-Leather",
      colors: [
        { n: "Dusty Rose", sw: "#c39ba0", gallery: [F("b3/a3/cf/67/67cfa3b39ab7822b03cb601c/P6079208_P6079208_none_base_316ae9cf.png/P6079208_P6079208_none_base_316ae9cf.jpg"), F("b3/a3/cf/67/67cfa3b39ab7822b03cb601a/P6079208_P6079208_none_base_1da2fffd.png/P6079208_P6079208_none_base_1da2fffd.jpg")] },
        { n: "Pacific Blue", sw: "#4d6f8c", gallery: [F("b3/a3/cf/67/67cfa3b39ab7822b03cb6017/P6079208_P6079208_none_base_b6e94ac5.png/P6079208_P6079208_none_base_b6e94ac5.jpg"), F("b3/a3/cf/67/67cfa3b39ab7822b03cb6018/P6079208_P6079208_none_base_6e5f5264.png/P6079208_P6079208_none_base_6e5f5264.jpg")] },
        { n: "Forest Green", sw: "#3f5a45", gallery: [F("b3/a3/cf/67/67cfa3b39ab7822b03cb6014/P6079208_P6079208_none_base_eaf9503b.png/P6079208_P6079208_none_base_eaf9503b.jpg"), F("b3/a3/cf/67/67cfa3b39ab7822b03cb601f/P6079208_P6079208_none_base_3fb27616.png/P6079208_P6079208_none_base_3fb27616.jpg")] },
        { n: "Walnut Brown", sw: "#7b5b42", gallery: [F("b4/a3/cf/67/67cfa3b49ab7822b03cb6028/P6079208_P6079208_none_base_00e48287.png/P6079208_P6079208_none_base_00e48287.jpg")] }],
      img: [F("7f/f8/42/69/6942f87ff89a3d2d3c62b431/P6079208_HERO_SIMULATED-LEATHER-TRIPLE-REGULAR-COLOR-OPTIONS.png/P6079208_HERO_SIMULATED-LEATHER-TRIPLE-REGULAR-COLOR-OPTIONS.jpg"), F("b3/a3/cf/67/67cfa3b39ab7822b03cb6023/P6079208_P6079208_none_base_0ed65b28.png/P6079208_P6079208_none_base_0ed65b28.jpg"), F("b3/a3/cf/67/67cfa3b39ab7822b03cb6022/P6079208_P6079208_none_base_493ca769.png/P6079208_P6079208_none_base_493ca769.jpg"), F("b3/a3/cf/67/67cfa3b39ab7822b03cb6020/P6079208_P6079208_none_base_0505c7ed.png/P6079208_P6079208_none_base_0505c7ed.jpg"), F("b2/a3/cf/67/67cfa3b29ab7822b03cb600f/P6079208_P6079208_none_base_f5a57e52.png/P6079208_P6079208_none_base_f5a57e52.jpg")],
      d: "The Book of Mormon, Doctrine and Covenants, and Pearl of Great Price in one indexed volume." },
    { id: "P6079204", personalize: true, t: "Simulated Leather Holy Bible, Regular (Color Options)", by: "Deseret Book", price: 55, r: 4.2, rc: 194, cat: "church-resources_scriptures_scripture-essentials", fmt: "Faux-Leather",
      colors: [
        { n: "Dusty Rose", sw: "#c39ba0", gallery: [F("b4/a3/cf/67/67cfa3b49ab7822b03cb602f/P6079204_P6079204_none_base_a78cc42b.png/P6079204_P6079204_none_base_a78cc42b.jpg"), F("b4/a3/cf/67/67cfa3b49ab7822b03cb6029/P6079204_P6079204_none_base_bad77c7b.png/P6079204_P6079204_none_base_bad77c7b.jpg")] },
        { n: "Pacific Blue", sw: "#4d6f8c", gallery: [F("b4/a3/cf/67/67cfa3b49ab7822b03cb602d/P6079204_P6079204_none_base_a7fb881c.png/P6079204_P6079204_none_base_a7fb881c.jpg"), F("b5/a3/cf/67/67cfa3b59ab7822b03cb603d/P6079204_P6079204_none_base_49398337.png/P6079204_P6079204_none_base_49398337.jpg")] },
        { n: "Forest Green", sw: "#3f5a45", gallery: [F("b4/a3/cf/67/67cfa3b49ab7822b03cb6032/P6079204_P6079204_none_base_9a6bf4d6.png/P6079204_P6079204_none_base_9a6bf4d6.jpg")] },
        { n: "Walnut Brown", sw: "#7b5b42", gallery: [F("b4/a3/cf/67/67cfa3b49ab7822b03cb6038/P6079204_P6079204_none_base_9223466f.png/P6079204_P6079204_none_base_9223466f.jpg"), F("b5/a3/cf/67/67cfa3b59ab7822b03cb6043/P6079204_P6079204_none_base_03c91d53.png/P6079204_P6079204_none_base_03c91d53.jpg")] }],
      img: [F("2b/f9/42/69/6942f92bfd4ca9120beb5e5e/P6079204_HERO_SIMULATED-LEATHER-HOLY-BIBLE-REGULAR-COLOR-OPTIONS.png/P6079204_HERO_SIMULATED-LEATHER-HOLY-BIBLE-REGULAR-COLOR-OPTIONS.jpg"), F("b5/a3/cf/67/67cfa3b59ab7822b03cb6040/P6079204_P6079204_none_base_70571088.png/P6079204_P6079204_none_base_70571088.jpg"), F("b4/a3/cf/67/67cfa3b49ab7822b03cb603c/P6079204_P6079204_none_base_706fbcae.png/P6079204_P6079204_none_base_706fbcae.jpg"), F("b4/a3/cf/67/67cfa3b49ab7822b03cb6034/P6079204_P6079204_none_base_963b95a3.png/P6079204_P6079204_none_base_963b95a3.jpg"), F("b4/a3/cf/67/67cfa3b49ab7822b03cb6031/P6079204_P6079204_none_base_cd641a8f.png/P6079204_P6079204_none_base_cd641a8f.jpg"), F("b4/a3/cf/67/67cfa3b49ab7822b03cb6037/P6079204_P6079204_none_base_89d373e6.png/P6079204_P6079204_none_base_89d373e6.jpg")],
      d: "The King James Version in simulated leather, indexed, with gilded edges." },
    { id: "5111165", t: "Quad Combination, Simulated Leather, Regular, Indexed", by: "Church Distribution", price: 56, r: 5, rc: 511, cat: "church-resources_scriptures_scripture-essentials", fmt: "Faux-Leather",
      img: [F("20/10/35/66/663510204a47d8ad45efb7ca/5111165_5111165_none_base_16dac670.png/5111165_5111165_none_base_16dac670.jpg"), F("20/10/35/66/663510204a47d8ad45efb7cb/5111165_5111165_none_base_8207fa2a.png/5111165_5111165_none_base_8207fa2a.jpg")],
      d: "The standard black simulated leather quad, indexed." },
    { id: "P6088525", t: "Simulated Leather Quad Combination, Compact (Color Options)", by: "Deseret Book", price: 59, r: 3.6, rc: 87, cat: "church-resources_scriptures_scripture-essentials", fmt: "Faux-Leather",
      img: [F("ae/83/5d/69/695d83ae9d83b1010ade6bad/" + dbl("P6088525_HERO_SIMULATED-LEATHER-QUAD-COMBINATION-COMPACT-COLORS.jpg"))],
      d: "The compact quad, about 4.25 by 6 inches, for a bag or a coat pocket." },
    { id: "5111190", t: "Quad Combination, Genuine Leather, Regular Indexed", by: "Church Distribution", price: 66, r: 4.7, rc: 121, cat: "church-resources_scriptures_genuine-leather-scriptures", fmt: "Genuine Leather",
      img: [F("8f/7d/21/66/66217d8f4d8f8419f6bf5ffb/5111190_5111190_none_base_47c23503.png/5111190_5111190_none_base_47c23503.jpg"), F("8f/7d/21/66/66217d8f4d8f8419f6bf6001/5111190_5111190_none_base_68311a6f.png/5111190_5111190_none_base_68311a6f.jpg")],
      d: "Genuine leather, indexed, gilded edges \u2014 a keepsake set." },
    { id: "5111199", t: "Holy Bible, Genuine Leather, Regular, Indexed", by: "Church Distribution", price: 55, r: 4.3, rc: 143, cat: "church-resources_scriptures_genuine-leather-scriptures", fmt: "Genuine Leather",
      img: [F("70/5c/21/66/66215c70b1dea3bbbe48e4dd/5111199_5111199_none_base_d854a4fa.png/5111199_5111199_none_base_d854a4fa.jpg"), F("70/5c/21/66/66215c70b1dea3bbbe48e4e0/5111199_5111199_none_base_4c088b17.png/5111199_5111199_none_base_4c088b17.jpg")],
      d: "The King James Version in genuine leather, indexed." },
    { id: "5034651", t: "Book of Mormon, Regular, Blue", by: "Church Distribution", price: 4.5, r: 4.8, rc: 902, cat: "church-resources_scriptures_scripture-essentials", fmt: "Softcover",
      img: [F("0b/14/35/66/6635140bfbbba6833042359a/5034651_5034651_none_base_2293f28c.png/5034651_5034651_none_base_2293f28c.jpg")],
      d: "The softcover Book of Mormon \u2014 the copy to give away." },
    { id: "5130963", t: "Pocket-size Scripture Set", by: "Church Distribution", price: 17.5, r: 4.1, rc: 208, cat: "church-resources_scriptures_scripture-essentials", fmt: "Softcover",
      img: [F("c4/13/35/66/663513c4fbbba6833042250d/5130963_5130963_none_base_f1f69597.png/5130963_5130963_none_base_f1f69597.jpg")],
      d: "A pocket set for travel and for the days you carry little." },
    { id: "6020732", t: "The Book of Mormon, Journal Edition, Aqua Floral (No Index)", by: "Deseret Book", price: 24.99, r: 3.9, rc: 164, cat: "church-resources_scriptures_scripture-journal-editions", fmt: "Hardcover",
      img: [F("41/06/35/66/663506414a47d8ad45ef6791/6020732_6020732_none_base_b0c63f9c.png/6020732_6020732_none_base_b0c63f9c.jpg")],
      d: "Wide margins for study notes, in a hardcover journal edition." },
    { id: "5230632", t: "The Old Testament, Journal Edition, Green Floral (No Index)", by: "Deseret Book", price: 27.99, r: 4.5, rc: 62, cat: "church-resources_scriptures_scripture-journal-editions", fmt: "Hardcover",
      img: [F("eb/99/24/69/692499eb97bba44561e049ca/" + dbl("5230632_HERO_OLD-TESTAMENT-JOURNAL-EDITION_GREEN-FLORAL_.jpg"))],
      d: "The Old Testament with room to write." },
    { id: "5034652", t: "The Book of Mormon, Regular Paperback", by: "Church Distribution", price: 4, r: 4.6, rc: 640, cat: "church-resources_scriptures_scripture-essentials", fmt: "Paperback",
      img: [F("ab/79/d4/68/68d479ab84ab5368d6f4b9f8/5034652_HERO_THE-BOOK-OF-MORMON-REGULAR-PAPERBACK.png/5034652_HERO_THE-BOOK-OF-MORMON-REGULAR-PAPERBACK.jpg")],
      d: "The regular paperback edition." },

    { id: "P6026445", t: "Regular Scripture Tote Backpack", by: "Wings Bags", price: 29.99, priceHigh: 39.99, r: 5, rc: 96, cat: "church-resources_scriptures_scripture-totes", fmt: "Tote",
      img: [F("f3/19/d7/68/68d719f3fc37617729177f30/" + dbl("MULTIPLE_PRODGALLERY_REGULAR-SCRIPTURE-TOTE-BACKPACK_FRONT.jpg")), F("2f/66/b7/68/68b7662f97916ebba8a2362f/" + dbl("6079787_PRODGALLERY_REG-TOTE-LIGHT-PURPLE-BACKPACK_INSIDE.jpg"))],
      d: "A regular-size scripture tote that wears as a backpack, with a zip pocket for a pen and a recommend." },
    { id: "PR00001434", t: "Enoch Large Scripture Tote", by: "Wings Bags", price: 29.99, r: 4, rc: 41, cat: "church-resources_scriptures_scripture-totes", fmt: "Tote",
      img: [F("ce/b9/d5/68/68d5b9ce80b1eb10eb351f24/" + dbl("MULTIPLE_PRODGALLERY_ENOCH-LARGE-SCRIPTURE-TOTES_FRONT.jpg")), F("1e/66/b7/68/68b7661e97916ebba8a2362b/" + dbl("6079784_PRODGALLERY_TOTE-LG-ENOCH-BLACK_INSIDE.jpg"))],
      d: "Room for a large quad, a manual, and a notebook." },
    { id: "P6087552", t: "Regular Bow Scripture Tote", by: "Wings Bags", price: 27.99, r: 4.4, rc: 34, cat: "church-resources_scriptures_scripture-totes", fmt: "Tote",
      img: [F("5a/c3/84/69/6984c35a480b84f2b0d672af/" + dbl("P6087552_HERO_REGULAR-BOW-SCRIPTURE-TOTES.jpg")), F("6d/66/b7/68/68b7666d3e051ae44c7db673/" + dbl("6087552_PRODGALLERY_TOTE-REG-NAVY-BOW_INSIDE.jpg"))],
      d: "A regular tote with a soft bow at the handle." },
    { id: "P6085110", t: "Double Zipper with Strap Regular Scripture Tote", by: "Wings Bags", price: 37.99, priceHigh: 39.99, r: 3.8, rc: 58, cat: "church-resources_scriptures_scripture-totes", fmt: "Tote",
      img: [F("52/5c/26/68/68265c52be7f75eaa250223a/6085110_HERO_DOUBLE-ZIPPER-TOTE_VIOLET.png/6085110_HERO_DOUBLE-ZIPPER-TOTE_VIOLET.jpg"), F("84/5c/26/68/68265c848e5a034447f711bf/6085110_FEATURE_DOUBLE-ZIPPER-TOTE_VIOLET.png/6085110_FEATURE_DOUBLE-ZIPPER-TOTE_VIOLET.jpg")],
      d: "Two zippered compartments and a shoulder strap." },
    { id: "6021463", t: "Blue on Blue Regular Scripture Tote", by: "Wings Bags", price: 16.99, r: 4.9, rc: 27, cat: "church-resources_scriptures_scripture-totes", fmt: "Tote",
      img: [F("e4/60/21/66/662160e44d8f8419f6be3c38/6021463_6021463_none_base_fce7820f.png/6021463_6021463_none_base_fce7820f.jpg")],
      d: "A simple regular-size tote in two blues." }
  ];

  /* Gospel Voices — page 1 of deseretbook.com/category/books/books_gospel-voices/ (Featured), in site order */
  const GVD = [
    ["PR00001860", "Learning the Great Fundamentals", "Oaks, Dallin H.", 25.99, 39.99, 5, 34, "Hardcover", "3b/cd/84/69/6984cd3bbb2c6dd41cbb0abd/PR00001860_HERO_LEARNING-THE-GREAT-FUNDAMENTALS_HARDBACK.png/PR00001860_HERO_LEARNING-THE-GREAT-FUNDAMENTALS_HARDBACK.jpg"],
    ["PR00001661", "Direct Messages", "Various", 11.39, 18.99, 5, 52, "Paperback", "ab/55/9f/68/689f55ab0081f4581b2994a9/6088963_HERO_DIRECT-MESSAGES_PAPERBACK.png/6088963_HERO_DIRECT-MESSAGES_PAPERBACK.jpg"],
    ["PR00001662", "Words Matter", "Rasband, Ronald A.", 18.99, 24.99, 4, 41, "Hardcover", "d5/c7/ca/69/69cac7d54f71c64afe2955a8/PR00001662_HERO_WORDS-MATTER_HARDBACK.png/PR00001662_HERO_WORDS-MATTER_HARDBACK.jpg"],
    ["6080309", "Expressions of Jesus", "Various", 59, null, 5, 46, "Hardcover", "de/bf/0b/69/690bbfde3d63149464a7beb2/expressions-of-jesus.png/expressions-of-jesus.jpg"],
    ["P5232737", "The Divine Gift of Forgiveness", "Oaks, Dallin H.", 8.99, 34.99, 5, 214, "Paperback", "8d/a4/cf/67/67cfa48d9ab7822b03cb74da/P5232737_P5232737_none_base_1492c0b2.png/P5232737_P5232737_none_base_1492c0b2.jpg"],
    ["PR00001477", "Learning to Listen", "Various", 12.99, 24.99, 5, 63, "Paperback", "c0/19/91/68/689119c007e8dc6f96f0d81e/6083999_HERO_LEARNING-TO-LISTEN_PAPERBACK__05ih8l.png/6083999_HERO_LEARNING-TO-LISTEN_PAPERBACK__05ih8l.jpg"],
    ["P3941679", "The Infinite Atonement", "Callister, Tad R.", 12.99, 24.99, 5, 402, "Hardcover", "71/e9/66/68/6866e971f416e9f1f400f0d4/3941679_HERO_THE-INFINITE-ATONEMENT_HARDCOVER.png/3941679_HERO_THE-INFINITE-ATONEMENT_HARDCOVER.jpg"]
  ].map((a) => ({ id: a[0], t: a[1], by: a[2], price: a[3], priceHigh: a[4] || undefined, r: a[5], rc: a[6], cat: "books_gospel-voices", fmt: a[7], img: [I(a[8])], d: "From the Gospel Voices collection at Deseret Book." }));
  P.push.apply(P, GVD);
  const GV_ORDER = ["PR00001860", "PR00001661", "PR00001662", "5254477", "6080309", "P5232737", "PR00001477", "P3941679"];

  /* Real products from deseretbook.com category pages (Art, Missionary, Temple Worship). No ratings shown: none were published on the listing pages. */
  const XD = [
    ["6096268","Cats Knocking Things Off Ledges Game",19.99,0,"games-puzzles","Game","bc/ae/bd/69/69bdaebc0599194b281fd78e/6096268_HERO_CATS-KNOCKING-THINGS-OFF-LEDGES-GAME.png/6096268_HERO_CATS-KNOCKING-THINGS-OFF-LEDGES-GAME.jpg"],
    ["6091852","Things in Rings Game",19.99,0,"games-puzzles","Game","01/43/c4/69/69c443010fa8ad54e102f2e3/6091852_HERO_THINGS-IN-RINGS-GAME.jpg/6091852_HERO_THINGS-IN-RINGS-GAME.jpg"],
    ["6091227","General Conference Bingo",15.99,0,"games-puzzles","Game","25/3c/c4/69/69c43c25979485534cd15615/6091227_HERO_GENERAL-CONFERENCE-BINGO.jpg/6091227_HERO_GENERAL-CONFERENCE-BINGO.jpg"],
    ["5230997","Puzzle He Leadeth Me 500 Pieces",7.47,0,"games-puzzles","500 Piece Puzzle","1e/f7/79/6a/6a79f71e6e4d856d6657ddeb/5230997_HERO_PUZZLE-HE-LEADETH-ME-500-PIECES.png/5230997_HERO_PUZZLE-HE-LEADETH-ME-500-PIECES.jpg"],
    ["5230982","From Fear to Faith 500 Piece Puzzle",7.47,0,"games-puzzles","500 Piece Puzzle","91/61/21/66/662161914d8f8419f6be4a19/5230982_From_Fear_to_Faith_Puzzle.jpeg/5230982_From_Fear_to_Faith_Puzzle.jpg"],
    ["6087246","The Love of God 1000 Piece Puzzle",19.99,0,"games-puzzles","1000 Piece Puzzle","4d/69/e5/68/68e5694d4677aa86f0b7c2a1/6087246_HERO_LOVE-OF-GOD-PUZZLE.jpg/6087246_HERO_LOVE-OF-GOD-PUZZLE.jpg"],
    ["5254872","United in Love 100 Piece Puzzle",3.75,0,"games-puzzles","100 Piece Puzzle","51/06/35/66/663506514a47d8ad45ef6cbe/5254872_Puzzle_United_in_Love.png/5254872_Puzzle_United_in_Love.jpg"],
    ["6087108","Do You Even Know Me? Card Game",25.99,0,"games-puzzles","Card Game","09/09/2e/68/682e0909026296fd76afbf01/6087108_HERO_DO-YOU-EVEN-KNOW-ME-CARD-GAME_.png/6087108_HERO_DO-YOU-EVEN-KNOW-ME-CARD-GAME_.jpg"],
    ["6058448","Advent 1000 Piece Puzzle",34.99,0,"games-puzzles","1000 Piece Puzzle","3c/3a/9e/68/689e3a3c15edd1f44d61abe9/6058448_6058448_PRODGALLERY_ADVENT-1000-PIECE-PUZZLE.jpg/6058448_6058448_PRODGALLERY_ADVENT-1000-PIECE-PUZZLE.jpg"],
    ["6020271","For Such is the Kingdom 100 Piece Puzzle",14.99,0,"games-puzzles","100 Piece Puzzle","1c/5b/21/66/66215b1cb1dea3bbbe48c1aa/6020271_For_Such_is_the_Kingdom_100_Piece_Puzzle.png/6020271_For_Such_is_the_Kingdom_100_Piece_Puzzle.jpg"],
    ["5259557","Doctrine and Covenants Crosswords: Sections 71\u2013138",2.50,0,"games-puzzles","Paperback","43/61/21/66/662161434d8f8419f6be437e/5259557_5259557_none_base_12a7bd54.png/5259557_5259557_none_base_12a7bd54.jpg"],
    ["6089780","Christ Blesses the Children 12 Piece Tray Puzzle",4.99,0,"games-puzzles","Tray Puzzle","df/e0/c2/69/69c2e0df666df333dbe8e113/6089780_PRODGALLERY_CHRIST-BLESSES-THE-CHILDREN-12-PIECE-TRAY-PUZZLE_SILO.jpg/6089780_PRODGALLERY_CHRIST-BLESSES-THE-CHILDREN-12-PIECE-TRAY-PUZZLE_SILO.jpg"],
    ["5230977","I Am a Child of God 100 Piece Puzzle",9.95,0,"games-puzzles","100 Piece Puzzle","4d/78/21/66/6621784db1dea3bbbe495ac7/5230977_I_Am_a_Child_of_God_Puzzle.png/5230977_I_Am_a_Child_of_God_Puzzle.jpg"],
    ["6087244","Walk in the Light 1000 Piece Puzzle",19.99,0,"games-puzzles","1000 Piece Puzzle","d3/32/e5/68/68e532d3351c3ab8d1253068/6087244_HERO_WALK-IN-THE-LIGHT-PUZZLE.jpg/6087244_HERO_WALK-IN-THE-LIGHT-PUZZLE.jpg"],
    ["6073642","Precious in His Sight 35 Piece Tray Puzzle",9.99,0,"games-puzzles","Tray Puzzle","06/a6/cf/67/67cfa6069ab7822b03cb9a99/6073642_HERO_PRECIOUS-IN-HIS-SIGHT-PUZZLE.png/6073642_HERO_PRECIOUS-IN-HIS-SIGHT-PUZZLE.jpg"],
    ["5230967","Good Shepherd 100 Piece Puzzle",9.95,0,"games-puzzles","100 Piece Puzzle","14/6c/21/66/66216c144d8f8419f6bec33d/5230967_Good_Shepherd_100_Piece_Puzzle.png/5230967_Good_Shepherd_100_Piece_Puzzle.jpg"],
    ["5201866","Book of Mormon Memory Match Game",11.99,0,"games-puzzles","Game","d6/61/21/66/662161d64d8f8419f6be5050/5201866_Book_of_Mormon_Memory_Match_Game.png/5201866_Book_of_Mormon_Memory_Match_Game.jpg"],
    ["5243682","Temples of the United States 1000 Piece Puzzle",24.99,0,"games-puzzles","1000 Piece Puzzle","87/5b/21/66/66215b87b1dea3bbbe48cbce/5243682_Temples_of_the_United_States_Puzzle.png/5243682_Temples_of_the_United_States_Puzzle.jpg"],
    ["6099041","The Ticket Booth Card Game",19.99,0,"games-puzzles","Card Game","a3/3c/6a/6a/6a6a3ca371b08a0a2db57a6f/6099041_HERO_TICKET-BOOTH-CARD-GAME.png/6099041_HERO_TICKET-BOOTH-CARD-GAME.jpg"],
    ["6073641","Take My Hand 35 Piece Tray Puzzle",9.99,0,"games-puzzles","Tray Puzzle","06/a6/cf/67/67cfa6069ab7822b03cb9a9a/6073641_6073641_none_base_d6c073a3.png/6073641_6073641_none_base_d6c073a3.jpg"],
    ["6097139","The First Witness (21x16 Framed Canvas Print)",249.99,0,"art_savior-art","Framed Canvas Print","1f/a1/fb/69/69fba11f847e68ab93a8c68d/6097139_HERO_THE-FIRST-WITNESS-16X21FRAMED.jpg/6097139_HERO_THE-FIRST-WITNESS-16X21FRAMED.jpg"],
    ["6097141","Welcome Home (21x16 Framed Canvas Print)",269.99,0,"art_savior-art","Framed Canvas Print","fb/a1/fb/69/69fba1fb1fae3e85334d36c7/6097141_HERO_WELCOME-HOME-16X21FRAMED.jpg/6097141_HERO_WELCOME-HOME-16X21FRAMED.jpg"],
    ["6097136","With Me In the Way (19x16 Framed Canvas Print)",149.99,0,"art_savior-art","Framed Canvas Print","da/82/fb/69/69fb82da1fae3e85334d309e/6097136_HERO_WITH-ME-IN-THE-WAY-16X19FRAMED.jpg/6097136_HERO_WITH-ME-IN-THE-WAY-16X19FRAMED.jpg"],
    ["6075171","The Tender Love of Christ (19x19 Framed Art)",59.00,0,"art_savior-art","Framed Art","59/81/dd/67/67dd81596e1cccd5b4268bef/6075171_THE-TENDER-LOVE-OF-CHRIST-WEB.png/6075171_THE-TENDER-LOVE-OF-CHRIST-WEB.jpg"],
    ["5161060","Grace and Truth (21x18 Framed Art)",139.99,0,"art_savior-art","Framed Art","d7/78/21/66/662178d7b1dea3bbbe49679d/5161060_5161060_none_base_cb3d8736.png/5161060_5161060_none_base_cb3d8736.jpg"],
    ["5180010","Marble Christus 3\"",6.99,0,"art_statues","Marble","90/19/37/69/69371990bdfb657abd862e63/5180010_HERO_MARBLE-CHRISTUS-3-INCH.png/5180010_HERO_MARBLE-CHRISTUS-3-INCH.jpg"],
    ["6012360","Captain Moroni Statue (Cultured Marble Resin)",199.99,0,"art_statues","Cultured Marble Resin","dc/77/21/66/662177dcb1dea3bbbe4950e7/6012360_6012360_none_base_fce1dca1.png/6012360_6012360_none_base_fce1dca1.jpg"],
    ["6081210","Sweet is the Work, Deseret Peak Temple (31.5x21.5 Framed Canvas)",449.99,0,"art_temple-art","Framed Canvas Print","52/84/d0/67/67d08452fc091f3289289b3b/6081210_0_DESERET-PEAK-TEMPLE_31X21-NATURAL-FRAMED-CANVAS-PRINT_1_WEB.jpg/6081210_0_DESERET-PEAK-TEMPLE_31X21-NATURAL-FRAMED-CANVAS-PRINT_1_WEB.jpg"],
    ["6086439","Respite (22.5x30 Framed Canvas Print)",149.00,0,"art_wall-art","Framed Canvas Print","22/15/0f/6a/6a0f15229a628cfe73476b37/6086439_HERO_RESPITE_22.5X30-FRAMED-CANVAS-PRINT_1.jpg/6086439_HERO_RESPITE_22.5X30-FRAMED-CANVAS-PRINT_1.jpg"],
    ["6096538","He Leadeth Me (23x38 Framed Art)",229.00,0,"art_wall-art","Framed Art","39/81/fb/69/69fb81391f178dc9ff94850d/6096538_HERO_HE-LEADETH-ME-38X23FRAMED.jpg/6096538_HERO_HE-LEADETH-ME-38X23FRAMED.jpg"],
    ["6096539","The Hand of God (23x38 Framed Art)",229.00,0,"art_wall-art","Framed Art","c4/81/fb/69/69fb81c4cc886a3ad8c3edae/6096539_HERO_THE-HAND-OF-GOD-38X23FRAMED.jpg/6096539_HERO_THE-HAND-OF-GOD-38X23FRAMED.jpg"],
    ["6027923","Awesome Wonder (21x26 Framed Art)",229.00,0,"art_wall-art","Framed Art","97/77/21/66/66217797b1dea3bbbe494b64/6027923_6027923_none_base_8604466e.png/6027923_6027923_none_base_8604466e.jpg"],
    ["5098123","Lead, Kindly Light (26x43 Framed Giclee Canvas)",399.99,0,"art_wall-art","Framed Giclee Canvas","91/72/21/66/662172914d8f8419f6bf21fa/5098123_5098123_none_base_001adae4.png/5098123_5098123_none_base_001adae4.jpg"],
    ["6088855","O Jerusalem, Small and Simple (2.75x3 Framed Art)",9.99,0,"art_wall-art","Framed Art","e8/55/f2/68/68f255e891a0efcbfb337c6a/6088855_HERO_O-JERUSALEM-SMALL-AND-SIMPLE-FRAME.jpg/6088855_HERO_O-JERUSALEM-SMALL-AND-SIMPLE-FRAME.jpg"],
    ["6016730","Abundance Vase",49.50,0,"art_decor","Ceramic","00/61/21/66/662161004d8f8419f6be3e1d/6016730_6016730_none_base_23d7303c.png/6016730_6016730_none_base_23d7303c.jpg"],
    ["4304303","Willow Tree Holy Family Resin Nativity Figurines",109.99,0,"art_decor","Resin","76/73/21/66/662173764d8f8419f6bf3f4e/4304303_HERO_WILLOW-TREE-HOLY-FAMILY-RESIN-NATIVITY-FIGURINES/4304303_HERO_WILLOW-TREE-HOLY-FAMILY-RESIN-NATIVITY-FIGURINES.jpg"],
    ["4304321","Willow Tree Wise Men Resin Nativity Figurines",99.99,0,"art_decor","Resin","74/f1/57/6a/6a57f174a6f6a41a4df65028/4304321_HERO_WISE-MEN-RESIN-NATIVITY-FIGURINES.jpeg/4304321_HERO_WISE-MEN-RESIN-NATIVITY-FIGURINES.jpg"],
    ["6091385","Expressions of Jesus Mini Print Collection",4.95,0,"church-resources_prints","Print Pack","79/e4/94/69/6994e4798e3b7790478c8c30/6091385_PRODGALLERY_PORTRAITS-OF-CHRIST-COLLECTION-HERO-1.jpg/6091385_PRODGALLERY_PORTRAITS-OF-CHRIST-COLLECTION-HERO-1.jpg",["art_savior-art"]],
    ["5166285","The Baptism - 5x7 Print",1.98,0,"church-resources_prints","5x7 Print","34/01/ae/68/68ae0134d5dce3ce615393f5/5166285_HERO_THE-BAPTISM.png/5166285_HERO_THE-BAPTISM.jpg",["baptism"]],
    ["PR00002121","Go and Do Missionary Bag",34.99,0,"missionary_bags","Bag","dc/9c/46/6a/6a469cdcbf3824f1ec17c800/PR00002121_HERO_GO-AND-DO-MISSIONARY-BAGS.jpg/PR00002121_HERO_GO-AND-DO-MISSIONARY-BAGS.jpg"],
    ["5158265","Tract Missionary Bag",79.99,0,"missionary_bags","Bag","7f/06/35/66/6635067f4a47d8ad45ef78a9/5158265_HERO_TRACT-MISSIONARY-BAG_1_WEB.png/5158265_HERO_TRACT-MISSIONARY-BAG_1_WEB.jpg"],
    ["6071156","Navigator Sling Missionary 6L Bag",129.99,0,"missionary_bags","Bag","31/a6/cf/67/67cfa6319ab7822b03cb9eb2/6071156_HERO_NAVIGATOR-SLING-MISSIONARY-6L-BAG_1_WEB.png/6071156_HERO_NAVIGATOR-SLING-MISSIONARY-6L-BAG_1_WEB.jpg"],
    ["P6024811","The Companion Bag 2.0",69.99,0,"missionary_bags","Bag","70/40/d7/68/68d74070fc37617729178423/MULTIPLE_PRODGALLERY_COMPANION-BAG_FRONT.jpg/MULTIPLE_PRODGALLERY_COMPANION-BAG_FRONT.jpg"],
    ["P6053198","Classic Missionary Journal",14.99,0,"missionary_journals","Journal","f3/a3/cf/67/67cfa3f39ab7822b03cb6610/P6053198_P6053198_none_base_dba0706f.png/P6053198_P6053198_none_base_dba0706f.jpg"],
    ["P6018191","Study Missionary Journal",24.99,0,"missionary_journals","Journal","17/a4/cf/67/67cfa4179ab7822b03cb6981/P6018191_P6018191_none_base_6bfb624f.png/P6018191_P6018191_none_base_6bfb624f.jpg"],
    ["6020726","The Book of Mormon, Journal Edition, Mountains (Lined)",14.99,0,"church-resources_scriptures_scripture-journal-editions","Paperback","d7/61/73/6a/6a7361d7722d08d9343f3a2e/6020726_HERO_THE_BOOK_OF_MORMON_JOURNAL_EDITION_MOUNTAINS_LINED.png/6020726_HERO_THE_BOOK_OF_MORMON_JOURNAL_EDITION_MOUNTAINS_LINED.jpg",["missionary_journals"]],
    ["6020732","The Book of Mormon, Journal Edition, Aqua Floral (No Index)",24.99,0,"church-resources_scriptures_scripture-journal-editions","Hardcover","41/06/35/66/663506414a47d8ad45ef6791/6020732_6020732_none_base_b0c63f9c.png/6020732_6020732_none_base_b0c63f9c.jpg",["missionary_journals"]],
    ["P6053751","Preach My Gospel (Second Edition)",6.35,10.20,"missionary_books","Paperback","eb/a3/cf/67/67cfa3eb9ab7822b03cb655b/P6053751_P6053751_none_base_d47d28fe.png/P6053751_P6053751_none_base_d47d28fe.jpg",["church-resources_church-distribution"]],
    ["PR00002126","The Next Ten Years",11.99,24.99,"missionary_books","Paperback","4c/44/7b/6a/6a7b444c12a2ce6a28676693/6096536_HERO_THE-NEXT-TEN-YEARS_PAPERBACK.jpg/6096536_HERO_THE-NEXT-TEN-YEARS_PAPERBACK.jpg",["books_nonfiction_self-improvement"]],
    ["6095629","General Conference Addresses, Journal Edition, April 2026",9.99,0,"church-resources_teaching-helps","Paperback","e9/dd/b2/69/69b2dde91c6bf5731609d174/2026-April-GenConf-Journal-1.png/2026-April-GenConf-Journal-1.jpg",["missionary_books"]],
    ["PR00002139","Preach My Gospel Mini Cover",12.99,0,"missionary_accessories","Cover","b7/c5/45/6a/6a45c5b73e83cdbea9076db8/6097642_PRODGALLERY_PREACH-MY-GOSPEL-COVERS_V5.jpg/6097642_PRODGALLERY_PREACH-MY-GOSPEL-COVERS_V5.jpg"],
    ["P5192615","MissionAid Scripture Inserts",15.99,17.99,"missionary_accessories","Inserts","d7/5b/21/66/66215bd7b1dea3bbbe48d416/5192615_mission-scripture-inserts.png/5192615_mission-scripture-inserts.jpg"],
    ["6017077","Elder Missionary Countdown Poster",19.99,0,"missionary_accessories","Poster","6c/13/35/66/6635136cfbbba68330420ed6/6017077_6017077_none_base_830ea402.png/6017077_6017077_none_base_830ea402.jpg"],
    ["6017078","Sister Missionary Countdown Poster",19.99,0,"missionary_accessories","Poster","84/6b/21/66/66216b844d8f8419f6beb707/6017078_6017078_none_base_6c4d64bd.png/6017078_6017078_none_base_6c4d64bd.jpg"],
    ["6011948","Called to Serve Pillowcase",3.25,0,"missionary_accessories","Cotton","3d/5b/21/66/66215b3db1dea3bbbe48c4a6/6011948_6011948_none_base_127172f4.png/6011948_6011948_none_base_127172f4.jpg"],
    ["6073204","MicroSD Instrumental Music for Missionaries",39.99,0,"missionary_accessories","MicroSD","15/a6/cf/67/67cfa6159ab7822b03cb9c12/6073204_6073204_none_base_f2f48319.png/6073204_6073204_none_base_f2f48319.jpg"],
    ["6001459","Let God Prevail Necklace",24.99,0,"missionary_jewelry","Necklace","33/61/21/66/662161334d8f8419f6be4220/6001459_6001459_none_base_8302184b.png/6001459_6001459_none_base_8302184b.jpg"],
    ["PR00001690","Your Guide to the Temple Endowment",3.60,22.50,"books_gospel-voices_temple-books","Booklet","e7/b1/c2/69/69c2b1e73b1d859bed279c26/6088507_HERO_Your-Guide-to-the-Temple-Endowment_BOOKLET.jpg/6088507_HERO_Your-Guide-to-the-Temple-Endowment_BOOKLET.jpg",["temple-worship"]],
    ["P6058665","Slim Fit Temple Pants",59.99,0,"temple-worship_temple-clothing","Pants","20/dc/84/6a/6a84dc20902eb2feb61f552f/P6058665_HERO_SLIM-FIT-TEMPLE-PANTS_1_WEB.png/P6058665_HERO_SLIM-FIT-TEMPLE-PANTS_1_WEB.jpg",["missionary_accessories"]],
    ["P6073269","Mia Temple Dress",89.99,0,"temple-worship_temple-clothing","Dress","ca/a3/cf/67/67cfa3ca9ab7822b03cb625a/P6073269_HERO_MIA-TEMPLE-DRESS.png/P6073269_HERO_MIA-TEMPLE-DRESS.jpg"],
    ["PR00001589","Men's White Leather Loafer Temple Shoe",69.99,0,"temple-worship_temple-clothing","Shoe","f6/53/96/68/689653f63bfdea83dde49706/6087522_PRODGALLERY_MENS-LOAFER-WHIT-LEATHER_V2.jpg/6087522_PRODGALLERY_MENS-LOAFER-WHIT-LEATHER_V2.jpg"],
    ["P6089266","Abigail Temple Dress",89.99,0,"temple-worship_temple-clothing","Dress","56/8c/84/6a/6a848c56af54cb6154fd32a1/PR00002075_HERO_ABIGAIL-TEMPLE-DRESS_M_1_WEB.jpg/PR00002075_HERO_ABIGAIL-TEMPLE-DRESS_M_1_WEB.jpg"],
    ["PR00002073","Grace Temple Skirt",54.99,0,"temple-worship_temple-clothing","Skirt","fe/66/83/6a/6a8366fe55f839e14e4d4cfa/PR00002073_HERO_GRACE-TEMPLE-SKIRT_M_1_WEB.png/PR00002073_HERO_GRACE-TEMPLE-SKIRT_M_1_WEB.jpg"],
    ["PR00002077","Tori Temple Blouse",39.99,0,"temple-worship_temple-clothing","Blouse","fd/48/83/6a/6a8348fd55f839e14e4d3531/PR00002077_HERO_TORI-TEMPLE-BLOUSE_M_1_WEB.png/PR00002077_HERO_TORI-TEMPLE-BLOUSE_M_1_WEB.jpg"],
    ["PR00002075","Jane Temple Skirt",54.99,0,"temple-worship_temple-clothing","Skirt","62/72/83/6a/6a83726255f839e14e4d507d/PR00002075_HERO_JANE-TEMPLE-SKIRT_M_1_WEB.png/PR00002075_HERO_JANE-TEMPLE-SKIRT_M_1_WEB.jpg"],
    ["P6088667","Maggie Temple Dress",79.99,0,"temple-worship_temple-clothing","Dress","4f/b8/94/69/6994b84ffdb06f623ae14695/6088667_HERO_DRESS-MAGGIE-TEMPLE_XS_40_WEB.jpg/6088667_HERO_DRESS-MAGGIE-TEMPLE_XS_40_WEB.jpg"],
    ["P6089261","Bridget Temple Dress",79.99,0,"temple-worship_temple-clothing","Dress","7d/ea/94/69/6994ea7d8e3b7790478c8ccc/6089268_HERO_DRESS-BRIDGET_XS_1_WEB.jpg/6089268_HERO_DRESS-BRIDGET_XS_1_WEB.jpg"],
    ["PR00001982","Joseph Vegan Leather Temple Bag",79.99,0,"temple-worship_temple-bags","Vegan Leather","8d/3e/c4/69/69c43e8d3b1d859bed27da76/PR00001982_HERO_JOSEPH-TEMPLE-BAG.jpg/PR00001982_HERO_JOSEPH-TEMPLE-BAG.jpg"],
    ["P6079793","Joshua Temple Bag",79.99,0,"temple-worship_temple-bags","Bag","b4/8c/ed/67/67ed8cb4413ba7b2cbf788a6/MULTIPLE_HERO_JOSHUA-TEMPLE-BAG_1_WEB.png/MULTIPLE_HERO_JOSHUA-TEMPLE-BAG_1_WEB.jpg"],
    ["P6073541","Natalie Temple Bag",79.99,0,"temple-worship_temple-bags","Bag","c8/a3/cf/67/67cfa3c89ab7822b03cb622d/MULTIPLE_HERO_NATALIE-TEMPLE-BAG_1_WEB.png/MULTIPLE_HERO_NATALIE-TEMPLE-BAG_1_WEB.jpg"],
    ["P6053838","Terra Temple Bag",69.99,0,"temple-worship_temple-bags","Bag","13/13/e7/67/67e7131331580dff8ac57be2/MULTIPLE_HERO_TERRA-TEMPLE-BAG_1_WEB.jpg/MULTIPLE_HERO_TERRA-TEMPLE-BAG_1_WEB.jpg"],
    ["PR00001451","Canvas Temple Bag",44.99,0,"temple-worship_temple-bags","Canvas","3f/24/d7/68/68d7243f536ca340d20f42ad/MULTIPLE_HERO_CANVAS-TEMPLE-BAG_1_WEB.jpg/MULTIPLE_HERO_CANVAS-TEMPLE-BAG_1_WEB.jpg"],
    ["P5135335","Grace Temple Bag",69.99,0,"temple-worship_temple-bags","Bag","21/79/21/66/66217921b1dea3bbbe496ecb/MULTIPLE_HERO_GRACE-TEMPLE-BAG_1_WEB.png/MULTIPLE_HERO_GRACE-TEMPLE-BAG_1_WEB.jpg"],
    ["PR00001514","Casey Temple Bag",49.99,0,"temple-worship_temple-bags","Bag","57/1f/0a/69/690a1f57808012c5064c94eb/PR00001514_HERO_CASEY-TEMPLE-BAG_1_WEB.jpg/PR00001514_HERO_CASEY-TEMPLE-BAG_1_WEB.jpg"],
    ["P5113580","Anna Temple Bag",59.99,0,"temple-worship_temple-bags","Bag","67/47/9f/69/699f4767212e0f5808c1152f/P5113580_HERO_ANNA-TEMPLE-BAGS.jpg/P5113580_HERO_ANNA-TEMPLE-BAGS.jpg"],
    ["P5209270","Edwin Temple Bag Backpack",39.99,0,"temple-worship_temple-bags","Backpack","c5/61/21/66/662161c54d8f8419f6be4ec7/MULTIPLE_HERO_EDWIN-TEMPLE-BAG-BACKPACK_1_WEB.png/MULTIPLE_HERO_EDWIN-TEMPLE-BAG-BACKPACK_1_WEB.jpg"],
    ["PR00001988","Mary Temple Bag",69.99,0,"temple-worship_temple-bags","Bag","ef/a5/ce/69/69cea5ef50b3ee92fa6d1eff/PR00001988_HERO_MARY-TEMPLE-BAGS_MULTIPLE.png/PR00001988_HERO_MARY-TEMPLE-BAGS_MULTIPLE.jpg"],
    ["P6070674","Ali Temple Bag Backpack",49.99,0,"temple-worship_temple-bags","Backpack","da/a3/cf/67/67cfa3da9ab7822b03cb63ba/P6070674_P6070674_none_base_26c806f7.png/P6070674_P6070674_none_base_26c806f7.jpg"],
    ["5158580","White Clothing Bag",14.99,0,"temple-worship_temple-bags","Bag","e9/71/21/66/662171e94d8f8419f6bf10ca/5158580_HERO_WHITE-CLOTHING-BAG_1_WEB.jpg/5158580_HERO_WHITE-CLOTHING-BAG_1_WEB.jpg"]
  ];
  XD.forEach((a) => { const ex = P.find((p) => p.id === a[0]); if (ex) { if (a[7]) ex.also = (ex.also || []).concat(a[7]); return; } P.push({ id: a[0], t: a[1], by: "Deseret Book", price: a[2], priceHigh: a[3] || undefined, r: 0, rc: 0, cat: a[4], fmt: a[5], img: [I(a[6])], also: a[7] }); });
  /* Gospel Voices subcategories, from each title's real shelf */
  const GVSUB = { PR00001860: "general-authority-books", PR00001662: "general-authority-books", P5232737: "general-authority-books", "6080309": "art-books", PR00001661: "inspiration", PR00001477: "inspiration", P3941679: "inspiration" };
  P.forEach((p) => { if (GVSUB[p.id]) p.cat = "books_gospel-voices_" + GVSUB[p.id]; });

  const NAV = [
    { id: "books", n: "Books", sub: [
      { id: "books_fiction", n: "Fiction", sub: [
        { id: "books_fiction_romance", n: "Romance" },
        { id: "books_fiction_historical-fiction", n: "Historical Fiction" },
        { id: "books_fiction_mystery-and-suspense", n: "Mystery and Suspense" },
        { id: "books_fiction_teen-fiction", n: "Teen Fiction" }] },
      { id: "books_gospel-voices", n: "Gospel Voices", sub: [
        { id: "books_gospel-voices_art-books", n: "Art Books" },
        { id: "books_gospel-voices_general-authority-books", n: "General Authority Books" },
        { id: "books_gospel-voices_inspiration", n: "Inspiration" },
        { id: "books_gospel-voices_temple-books", n: "Temple Books" }] },
      { id: "books_nonfiction", n: "Nonfiction", sub: [
        { id: "books_nonfiction_biography", n: "Biography" },
        { id: "books_nonfiction_family-and-parenting", n: "Family and Parenting" },
        { id: "books_nonfiction_history", n: "History" },
        { id: "books_nonfiction_self-improvement", n: "Self-Improvement" }] }] },
    { id: "church-resources_scriptures_scripture-essentials", n: "Scriptures" },
    { id: "baptism", n: "Baptism" },
    { id: "church-resources", n: "Church Resources", sub: [
      { id: "church-resources_scriptures", n: "Scriptures", sub: [
        { id: "church-resources_scriptures_genuine-leather-scriptures", n: "Genuine Leather Scriptures" },
        { id: "church-resources_scriptures_simulated-leather-scriptures", n: "Simulated Leather Scriptures" },
        { id: "church-resources_scriptures_scripture-journal-editions", n: "Scripture Journal Editions" },
        { id: "church-resources_scriptures_scripture-totes", n: "Scripture Totes" }] },
      { id: "church-resources_church-distribution", n: "Church Distribution" },
      { id: "church-resources_teaching-helps", n: "Teaching Helps" },
      { id: "church-resources_prints", n: "Prints" }] },
    { id: "games-puzzles", n: "Games & Puzzles" },
    { id: "art", n: "Art", sub: [
      { id: "art_wall-art", n: "Wall Art" },
      { id: "art_temple-art", n: "Temple Art" },
      { id: "art_statues", n: "Statues" },
      { id: "art_savior-art", n: "Savior Art" },
      { id: "art_decor", n: "D\u00e9cor" }] },
    { id: "missionary", n: "Missionary", sub: [
      { id: "missionary_accessories", n: "Accessories" },
      { id: "missionary_bags", n: "Bags" },
      { id: "missionary_books", n: "Books" },
      { id: "missionary_jewelry", n: "Jewelry" },
      { id: "missionary_journals", n: "Journals" }] },
    { id: "temple-worship", n: "Temple Worship", sub: [
      { id: "temple-worship_temple-accessories", n: "Temple Accessories" },
      { id: "temple-worship_temple-bags", n: "Temple Bags" },
      { id: "temple-worship_temple-clothing", n: "Temple Clothing" }] },
    { id: "all-categories", n: "Browse All" },
    { id: "clearance", n: "Clearance" }
  ];
  const CLR_NAME = "Summer Clearance";

  const AI = (p) => "https://images.deseretbook.io/api/v1.1/rn/public_files/pim/assets/3e/1e/de/64/64de1e3e6974570001d45a2c/images/" + p + "?s=1000x1000&t=JPEG&v=2";
  const FINE_ART = [
    { id: "P3753740", t: "Marble Christus Statue", by: "Deseret Book", price: 59.97, r: 4.9, rc: 312, cat: "home_fine-art", fmt: "Marble Resin",
      img: [AI("f7/3c/21/66/66213cf74d8f8419f6bdb33e/3753740_christus-2.png/3753740_christus-2.jpg"), AI("64/c1/d1/68/68d1c164dd14cdd9ca6842f0/P3753740_WEBGALLERY_MARBLE-CHRISTUS-STATUE_1.jpg/P3753740_WEBGALLERY_MARBLE-CHRISTUS-STATUE_1.jpg")],
      d: "A marble-resin reproduction of Thorvaldsen\u2019s Christus, cast for the home shelf or entry table." },
    { id: "6053323", t: "Come Follow Me (32x23 Framed Paper Print)", by: "Lee, Kate", price: 99, r: 4.2, rc: 64, cat: "home_fine-art", fmt: "Framed Paper Print", size: "32\" x 23\"",
      img: [AI("93/a6/cf/67/67cfa6939ab7822b03cba7b8/6053323_6053323_none_base_79d3da2f.png/6053323_6053323_none_base_79d3da2f.jpg"), AI("92/a6/cf/67/67cfa6929ab7822b03cba7b2/6053323_6053323_none_base_accef00b.png/6053323_6053323_none_base_accef00b.jpg")],
      d: "Framed paper print, ready to hang." },
    { id: "6087324", t: "Lamb of God (33x28 Framed Canvas Print)", by: "Kim, Yongsung", price: 149, r: 5.0, rc: 41, cat: "home_fine-art", fmt: "Framed Canvas Print", size: "33\" x 28\"",
      img: [AI("9c/33/96/68/6896339c5c02c2732bb7d0a6/6087324_PRODGALLERY_LAMB-OF-GOD-28X33_WHITE-FRAMED-CANVAS-PRINT.jpg/6087324_PRODGALLERY_LAMB-OF-GOD-28X33_WHITE-FRAMED-CANVAS-PRINT.jpg")],
      d: "Canvas print in a white frame." },
    { id: "6053281", t: "I See You (30x30 Framed Canvas Print)", by: "Nader, Annie Henrie", price: 129, r: 3.8, rc: 37, cat: "home_fine-art", fmt: "Framed Canvas Print", size: "30\" x 30\"",
      img: [AI("ce/60/21/66/662160ce4d8f8419f6be3a51/6053281_6053281_none_base_fb12cffa.png/6053281_6053281_none_base_fb12cffa.jpg"), AI("ce/60/21/66/662160ce4d8f8419f6be3a50/6053281_6053281_none_base_966e68de.png/6053281_6053281_none_base_966e68de.jpg")],
      d: "A square canvas print, framed." },
    { id: "P6000078", t: "Crystal Christus", by: "Crystal Christus", price: 127.99, r: 4.6, rc: 52, cat: "home_fine-art", fmt: "Crystal",
      img: [AI("db/7c/21/66/66217cdb4d8f8419f6bf4f01/6000078_Christus.jpg/6000078_Christus.jpg"), AI("db/7c/21/66/66217cdb4d8f8419f6bf4f07/6000078_Christus-2.jpg/6000078_Christus-2.jpg")],
      d: "The Christus rendered in cut crystal." },
    { id: "6027513", t: "Mother to Mother (19x16 Framed Textured Paper)", by: "Rast, Sandra", price: 79.99, r: 3.4, rc: 29, cat: "home_fine-art", fmt: "Framed Textured Paper", size: "19\" x 16\"",
      img: [AI("a7/c2/6b/6a/6a6bc2a7deeed6635e9579a9/6027513_HERO_MOTHER-TO-MOTHER-19X16-FRAMED-TEXTURED-PAPER.png/6027513_HERO_MOTHER-TO-MOTHER-19X16-FRAMED-TEXTURED-PAPER.jpg"), AI("d5/60/21/66/662160d54d8f8419f6be3b00/6027513_Framed_Art.jpg/6027513_Framed_Art.jpg")],
      d: "Textured paper print, framed." }
  ];
  P.push.apply(P, FINE_ART);

  const CAT_NAMES = { "all-categories": "Browse All Categories", clearance: "Summer Clearance", "books_gospel-voices": "Gospel Voices Conference" };
  (function walk(list, trail) {
    list.forEach((c) => { CAT_NAMES[c.id] = c.n; if (c.sub) walk(c.sub, trail.concat(c.n)); });
  })(NAV, []);
  CAT_NAMES.clearance = CLR_NAME;
  CAT_NAMES["home_fine-art"] = "Fine Art";
  CAT_NAMES["new-trending"] = "New & Trending";


  const SIZES_A = ["Scriptures come in four sizes.", ["Compact (8-point font): The smallest and most lightweight option at approximately 4.25 inches wide by 6 inches tall. Great for tossing in a bag or carrying while traveling. Keep in mind that the 8-point font is quite small and may not be comfortable for extended reading or for those who prefer larger text.", "Standard / Regular (10-point font): The most popular size at approximately 5.25 inches wide by 7.25 inches tall. It offers a good balance between portability and readability. It is the size most members use for church, seminary, and personal study.", "Large (12-point font): A bigger size at approximately 6.5 inches wide by 9.5 inches tall with a 12-point font. A favorite for anyone who finds standard print a little hard on the eyes, or who simply enjoys a more spacious reading experience.", "Extra Large (16-point font): The largest available option at approximately 8.25 inches wide by 10.75 inches tall. Designed for maximum readability and comfort. These are available in Hardcover and Paperback cover only."], "Compact, standard, and large size scriptures are printed on ultrathin, acid-free paper with reinforced binding for lasting durability. The pages are designed to be lightweight and easy to carry.", "If you\u2019re shopping for a gift and you\u2019re unsure of the recipient\u2019s preference, standard is the safest choice."];
  const FORMAT_A = ["The standard works of The Church of Jesus Christ of Latter-day Saints are available in two main formats:", ["Quadruple Combination: All four standard works in a single volume: the King James Version of the Holy Bible, the Book of Mormon, the Doctrine and Covenants, and the Pearl of Great Price. The quad is compact and convenient, making it easy to carry everything together.", "Triple Combination and Bible (sold separately): The triple combination contains the Book of Mormon, the Doctrine and Covenants, and the Pearl of Great Price, while the Holy Bible is its own volume. Many members prefer this two-book option for studying side by side, with one volume open to the Old or New Testament and the other open to the Book of Mormon or Doctrine and Covenants."], "There\u2019s no right or wrong choice. It comes down to personal preference. If you like having everything in one place, the Quad is a great option. If you like to cross-reference with both books open in front of you, the Triple and Bible pairing might feel more natural."];
  const scriptureFaq = (fmt, size, colors) => [
    { q: "What scripture formats are available?", a: [fmt].concat(FORMAT_A) },
    { q: "What sizes are available?", a: [size].concat(SIZES_A) },
    { q: "What does \u201cindexed\u201d mean?", a: ["This product is indexed.", "Indexed scriptures have thumb-cut tabs along the page edges. These small, labeled notches let you flip directly to each book or major section without searching through pages. It\u2019s one of the most popular features for anyone who wants to navigate quickly during lessons, talks, or personal study. Not all editions include indexing, so check the product details if that feature is important to you."] },
    { q: "Can I personalize these scriptures?", a: ["Yes. You can add an imprint to the cover in one of four lettering styles: large script, small script, large block, or small block. Select \u201cPersonalize This Product\u201d above to choose your style and get started. Please note that imprinting requires an additional business day to process, and because each imprint is unique to your order, personalized scriptures are non-returnable. Double-check your spelling before placing your order."] },
    { q: "How is simulated leather different from genuine leather?", a: ["This product is simulated leather.", "Simulated leather is a durable, animal-free material designed to look and feel like genuine leather. It resists cracking, is easy to wipe clean, and comes at a more accessible price point. Many members prefer it for everyday use, while genuine leather editions are often chosen as keepsakes or special-occasion gifts. Both options are built to hold up well over years of regular use."] },
    { q: "What colors are available?", a: [colors] },
    { q: "Are these scriptures available in Deseret Book stores?", a: ["Yes. If you are looking for other colors, sizes, or binding options, you can browse our full collection of scripture editions, including simulated leather and genuine leather options."] }
  ];
  const IMPRINT_NOTE = "Imprinted items require an additional business day to process and are non-returnable.";
  const EXTRA = {
    P6074927: { d: ["The scriptures you cherish, now come in four stunning new colors! Available in Dusty Rose, Pacific Blue, Forest Green, and Walnut Brown.", "Containing the standard works of The Church of Jesus Christ of Latter-day Saints: Holy Bible, Book of Mormon, Doctrine and Covenants, and Pearl of Great Price these standard-size, simulated leather quadruple combination scriptures come indexed and complete with gold-gilded edges and a ribbon bookmark.", "This edition features a generous 10 pt font designed for a clear, comfortable reading experience during extended study.", "Personalize your scriptures with customized imprint."], note: IMPRINT_NOTE, spec: [["Format", "Quadruple Combination"], ["Size", "Regular, 5.25\" x 7.25\""], ["Font size", "10 pt"], ["Cover", "Simulated leather"], ["Indexed", "Yes"], ["Edges", "Gold-gilded"], ["Bookmark", "Ribbon"]],
      faq: scriptureFaq("This product is the quadruple combination.", "This product is the Regular/Standard size.", "This quad comes in four colors: Dusty Rose, Pacific Blue, Walnut, and Forest Green.") },
    P6079208: { d: ["The scriptures you cherish, now come in four stunning new colors! Available in Dusty Rose, Pacific Blue, Forest Green, and Walnut Brown.", "These standard-size, simulated leather triple combination scriptures come indexed and complete with gold-gilded edges and a ribbon bookmark.", "Personalize your scriptures with customized imprint."], note: IMPRINT_NOTE, spec: [["Format", "Triple Combination"], ["Size", "Regular, 5.25\" x 7.25\""], ["Cover", "Simulated leather"], ["Indexed", "Yes"], ["Edges", "Gold-gilded"], ["Bookmark", "Ribbon"]],
      faq: scriptureFaq("This product is the Triple Combination.", "This product is the standard (regular) size.", "The simulated leather triple combination is available in Dusty Rose, Pacific Blue, Forest Green, Walnut Brown and Black.") },
    P6079204: { d: ["The scriptures you cherish, now come in four stunning new colors! Available in Dusty Rose, Pacific Blue, Forest Green, and Walnut Brown.", "Containing the Old Testament and New Testament, this simulated leather Bible comes indexed with a ribbon bookmark for ease locating your desired passage.", "Standard size scriptures are approximately 5.25 inches wide by 7.25 inches tall and have a font size of 10 point. These simulated leather bibles come indexed and complete with gold-gilded edges. These scriptures feature the finest ultrathin, acid-free paper.", "Personalize your scriptures with customized imprint."], note: IMPRINT_NOTE, spec: [["Format", "Holy Bible"], ["Size", "Regular, 5.25\" x 7.25\""], ["Font size", "10 pt"], ["Cover", "Simulated leather"], ["Indexed", "Yes"], ["Edges", "Gold-gilded"], ["Paper", "Ultrathin, acid-free"], ["Bookmark", "Ribbon"]],
      faq: scriptureFaq("This product is the Holy Bible.", "This product is the standard (regular) size.", "Simulated leather bibles are available in Dusty Rose, Pacific Blue, Forest Green, Walnut Brown and Black.") },
    P6073551: { d: ["The Anne Regular Scripture Tote combines smooth vegan leather with gold accents for a sleek, polished look. Featuring a spacious interior with two pockets and a leather strap pinch lock closure, this tote comfortably holds all your Church essentials."], spec: [["Dimensions", "13\"L x 12\"W x 5\"H"], ["Material", "Vegan leather with gold accents"], ["Interior", "Two pockets"], ["Closure", "Leather strap pinch lock"], ["Fits", "Regular-size scriptures"]] }
  };
  window.DB_DATA = {
    products: P,
    nav: NAV,
    extra: (id) => EXTRA[id] || null,
    catName: (id) => CAT_NAMES[id] || "Products",
    byId: (id) => P.find((p) => p.id === id) || VARIANTS.find((p) => p.id === id),
    inCat: (id) => (id === "books_gospel-voices" ? GV_ORDER.map((x) => P.find((p) => p.id === x)).filter(Boolean) : id === "new-trending" ? P.slice() : id === "clearance" ? P.filter((p, i) => i % 2 === 0) : P.filter((p) => [p.cat].concat(p.also || []).some((c) => c === id || c.indexOf(id + "_") === 0))),
    fineArt: ["P3753740", "6053323", "6087324", "6053281", "P6000078", "6027513"],
    trending: ["P6073551", "6017019", "5254477", "5212882", "6070661", "5255079", "6024672"],
    featuredCats: [
      { id: "temple-worship", n: "Temple Worship", img: "https://images.deseretbook.io/api/v1.1/rn/public_files/pim/assets/3e/1e/de/64/64de1e3e6974570001d45a2c/images/70/5c/21/66/66215c70b1dea3bbbe48e4dd/5111199_5111199_none_base_d854a4fa.png/5111199_5111199_none_base_d854a4fa.jpg?s=1000x1000&t=JPEG&v=2" },
      { id: "church-resources_scriptures_scripture-totes", n: "Scripture Totes", img: "https://images.deseretbook.io/api/v1.1/rn/public_files/pim/assets/3e/1e/de/64/64de1e3e6974570001d45a2c/images/f3/19/d7/68/68d719f3fc37617729177f30/MULTIPLE_PRODGALLERY_REGULAR-SCRIPTURE-TOTE-BACKPACK_FRONT.jpg/MULTIPLE_PRODGALLERY_REGULAR-SCRIPTURE-TOTE-BACKPACK_FRONT.jpg?s=1000x1000&t=JPEG&v=2" },
      { id: "church-resources_scriptures_scripture-journal-editions", n: "Journal Editions", img: "https://images.deseretbook.io/api/v1.1/rn/public_files/pim/assets/3e/1e/de/64/64de1e3e6974570001d45a2c/images/41/06/35/66/663506414a47d8ad45ef6791/6020732_6020732_none_base_b0c63f9c.png/6020732_6020732_none_base_b0c63f9c.jpg?s=1000x1000&t=JPEG&v=2" },
      { id: "books_fiction_romance", n: "Romance", img: "https://images.deseretbook.io/api/v1.1/rn/public_files/pim/assets/3e/1e/de/64/64de1e3e6974570001d45a2c/images/63/79/6b/6a/6a6b7963aecf6cfadd773d25/6095538_HERO_SEEKING-PERSEPHONE-MOVIE-TIE-IN-EDITION_PAPERBACK_1.jpg/6095538_HERO_SEEKING-PERSEPHONE-MOVIE-TIE-IN-EDITION_PAPERBACK_1.jpg?s=1000x1000&t=JPEG&v=2" },
      { id: "church-resources_scriptures_genuine-leather-scriptures", n: "Genuine Leather" },
      { id: "art_temple-art", n: "Fine Art" },
      { id: "missionary", n: "Missionary" },
      { id: "gift-cards", n: "eGift Cards" }
    ],
    featuredContent: [
      { title: "5 Ways to Embrace a Change in Christ", date: "August 29, 2025", url: "https://blog.deseretbook.com/blog/5-ways-to-embrace-a-change-in-christ", pid: "P6096125",
        img: "https://images.squarespace-cdn.com/content/v1/5abd66f64eddecafd225c12e/1756245615727-5IJF724VA7DY32SWXMF0/BlogCover-FallCampaign-2.png?format=1000w",
        x: "If you feel like fall is approaching quicker than you planned or wanted, you are not alone. Life often shifts at paces that might not be ideal or expected. However, just like the changing seasons, these transitions can be beautiful in their own unique ways." },
      { title: "Heartfelt Ministering Gifts for Mother\u2019s Day", date: "April 23, 2025", url: "https://blog.deseretbook.com/blog/2025/04/23/heartfelt-ministering-gifts-for-mothers-day", pid: "6027513",
        img: "https://images.squarespace-cdn.com/content/v1/5abd66f64eddecafd225c12e/1745421730900-98BCHUPV4W3M8EAZOM2K/DB_2025_MD_MinisteringGifts_BlogThumbnail_1080x1080.png?format=1000w",
        x: "Find the perfect Mother\u2019s Day gift for the sisters you minister to! These heartfelt gifts will help them find peace and strength in the Savior and in their divine identity as they navigate life." },
      { title: "Stunning Artwork of the Savior for Your Home", date: "March 12, 2025", url: "https://blog.deseretbook.com/blog/2025/03/12/stunning-artwork-of-the-savior-for-your-home", pid: "6087324",
        img: "https://images.squarespace-cdn.com/content/v1/5abd66f64eddecafd225c12e/ae05b463-ff55-4bf5-8361-888461e84d38/arise-come-forth-1.jpg?format=1000w",
        x: "Invite the Spirit into your life and your home by remembering the life and mission of Jesus Christ. These artistic depictions of the Savior can help you feel connected to Him and remember His role in God\u2019s plan and His love for you." }
    ],
    footer: {
      ACCOUNT: ["My Account", "Check Order", "Purchase an eGift Card", "Gift Card Balance", "Bookshelf Plus", "Platinum Rewards", "Request a Catalog"],
      "CUSTOMER SERVICE": ["Contact Us", "Questions & Support", "Shipping & Returns", "Do Not Sell My Information", "Deseret Book Store Locations"],
      ABOUT: ["About Deseret Book", "Careers", "Terms of Use", "Privacy Policy", "Deseret Book Events", "Deseret Book Blog", "Browse All Categories"]
    }
  };
})();

/* src/ui.jsx */
const DS = window.DeseretBookDesignSystem_609afa || {};
const {
  Icon
} = DS;
const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;
const D = window.DB_DATA;
const money = n => "$" + n.toFixed(2);
const priceLabel = p => p.priceHigh ? money(p.price) + " \u2013 " + money(p.priceHigh) : money(p.price);
/* One canonical transform per asset so every request hits the same cached response. */
const RES = u => {
  if (!u) return u;
  const ids = window.__urlIds;
  const id = ids && ids[u];
  return id && window.__resources && window.__resources[id] || u;
};
window.RES = RES;
const thumb = url => RES(url) || "";
/* The CDN ignores resize params, so every surface shares one canonical URL per asset: one fetch, one decode, cached thereafter. */

/* Icons: Material Symbols Rounded through the design system's Icon component (variable font, weight 300, inherits currentColor).
   ICON_MAP translates the site's names to Material names. "-fill" names and rating stars set FILL 1, which marks the selected state.
   Facebook and Instagram are brand marks, rendered by Icon from the SVGs in assets/icons/. */
const ICON_MAP = {
  menu: "menu",
  user: "person",
  "user-fill": "person",
  "shopping-bag": "shopping_bag",
  x: "close",
  "arrow-left": "arrow_back",
  "arrow-right": "arrow_forward",
  truck: "local_shipping",
  minus: "remove",
  plus: "add",
  heart: "favorite",
  "heart-fill": "favorite",
  check: "check",
  checkmark_alt: "check",
  "chevron-down": "keyboard_arrow_down",
  "chevron-up": "keyboard_arrow_up",
  "chevron-left": "chevron_left",
  chevron_left: "chevron_left",
  chevron_right: "chevron_right",
  store: "storefront",
  star: "star",
  search: "search",
  facebook: "facebook",
  instagram: "instagram",
  xmark_circle_fill: "cancel",
  info_circle: "info",
  exclamationmark_circle: "error",
  gift: "redeem",
  arrow_counterclockwise: "undo"
};
/* Material glyphs sit smaller in their box than the previous set; ICON_SCALE enlarges the glyph inside the same box so sizes match the earlier design. */
const ICON_SCALE = 1.5;
/* Per-glyph optical correction: shopping_bag draws taller than person, so it is reduced to match the account icon. */
const GLYPH_ADJ = {
  shopping_bag: 0.739
};
const GLYPH_WEIGHT = {
  shopping_bag: 400,
  local_shipping: 400
};
function Ico({
  name,
  size = 20,
  style
}) {
  const g = ICON_MAP[name] || name;
  const fill = /-fill$/.test(name) && name !== "xmark_circle_fill" || name === "star";
  return /*#__PURE__*/React.createElement(Icon, {
    name: g,
    size: size,
    filled: fill,
    weight: GLYPH_WEIGHT[g] || 300,
    className: "f7i" + (fill ? " ico-on" : ""),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "visible",
      fontSize: Math.round(size * ICON_SCALE * (GLYPH_ADJ[g] || 1)),
      ...style
    }
  });
}
window.DBIco = Ico;
function Stars({
  r,
  size = 11
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "stars",
    "aria-label": r + " out of 5"
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: i <= Math.round(r) ? "" : "off"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "star",
    size: size,
    sw: 1
  }))));
}

/* Cover renders the image directly; the title-text fallback is only for a broken asset. */
function Cover({
  p
}) {
  const [bad, setBad] = useState(false);
  const src = thumb(p.img[0]);
  if (bad || !src) return /*#__PURE__*/React.createElement("span", {
    className: "ph"
  }, p.t);
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: p.t,
    loading: "lazy",
    decoding: "async",
    draggable: false,
    onError: () => setBad(true)
  });
}
function ProductCardBase({
  p,
  onOpen,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pcard"
  }, /*#__PURE__*/React.createElement("button", {
    className: "cover",
    onClick: () => onOpen(p.id),
    "aria-label": p.t
  }, /*#__PURE__*/React.createElement(Cover, {
    p: p
  })), /*#__PURE__*/React.createElement("button", {
    className: "p-t",
    onClick: () => onOpen(p.id),
    style: {
      textAlign: "left"
    }
  }, p.t), p.rc ? /*#__PURE__*/React.createElement("div", {
    className: "p-rate"
  }, /*#__PURE__*/React.createElement(Stars, {
    r: p.r
  }), /*#__PURE__*/React.createElement("span", {
    className: "p-rc"
  }, "(", p.rc, ")")) : null, /*#__PURE__*/React.createElement("div", {
    className: "p-p"
  }, priceLabel(p)), /*#__PURE__*/React.createElement("button", {
    className: "btn-out",
    style: {
      alignSelf: "flex-start"
    },
    onClick: () => onAdd(p)
  }, "Add to Bag"));
}
const ProductCard = React.memo(ProductCardBase);

/* Horizontal rail that reports its page index to a dot indicator */
function useRailDots() {
  const ref = useRef(null);
  const [state, setState] = useState({
    i: 0,
    n: 1
  });
  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const n = Math.max(1, Math.ceil(el.scrollWidth / el.clientWidth));
    const i = Math.min(n - 1, Math.round(el.scrollLeft / el.clientWidth));
    /* Only commit real changes: scroll fires dozens of times per swipe and every setState re-rendered the rail. */
    setState(s => s.i === i && s.n === n ? s : {
      i,
      n
    });
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, {
      passive: true
    });
    window.addEventListener("resize", measure);
    /* Re-measure when slides change (e.g. a new color swaps the gallery) so dots and arrows stay in sync on touch. */
    const mo = new MutationObserver(measure);
    mo.observe(el, {
      childList: true
    });
    return () => {
      el.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      mo.disconnect();
    };
  }, [measure]);
  return [ref, state];
}
function Dots({
  i,
  n
}) {
  if (n < 2) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "dots"
  }, Array.from({
    length: n
  }).map((_, k) => /*#__PURE__*/React.createElement("i", {
    key: k,
    className: k === i ? "on" : ""
  })));
}
function colorImg(p, c) {
  const o = c && p.colors ? p.colors.find(x => x.n === c) : null;
  return o && (o.gallery ? o.gallery[0] : o.img) || p.img[0];
}
function Wordmark() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    className: "wm-e",
    src: window.__resources && window.__resources.emblem || "assets/emblem.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "wm-w",
    src: window.__resources && window.__resources.wordmark || "assets/wordmark.svg",
    alt: "Deseret Book"
  }));
}
function Header({
  noAnn,
  count,
  user,
  onMenu,
  onSearch,
  onHome,
  onBag,
  onAccount,
  search,
  onCloseSearch,
  onOpenProduct,
  shipMin,
  onGoCat
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, noAnn ? null : /*#__PURE__*/React.createElement("div", {
    className: "ann"
  }, "FREE SHIPPING on orders of $", shipMin || 49, " or more. Exclusions apply."), /*#__PURE__*/React.createElement("header", {
    className: "hdr" + (search ? " srch-on" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "hdr-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hdr-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hdr-ico hdr-burger"
  }, /*#__PURE__*/React.createElement("button", {
    className: "iconbtn",
    onClick: onMenu,
    "aria-label": "Open menu"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "menu",
    size: 22
  }))), /*#__PURE__*/React.createElement("button", {
    className: "wordmark",
    onClick: onHome,
    "aria-label": "Deseret Book home"
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("div", {
    className: "hdr-ico hdr-acts",
    style: {
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "iconbtn",
    onClick: onAccount,
    "aria-label": user ? "Account, " + user.name : "Account"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "user",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "ico-lab"
  }, user && user.name ? String(user.name).trim().split(/\s+/)[0] : "Account")), /*#__PURE__*/React.createElement("button", {
    className: "iconbtn",
    onClick: onBag,
    "aria-label": "Bag, " + count + " items"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bagpill" + (count > 0 ? " on" : "")
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "shopping-bag",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    className: "bagq",
    key: count,
    hidden: true
  }, count)), count > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, count) : null, /*#__PURE__*/React.createElement("span", {
    className: "ico-lab"
  }, "Bag")))), /*#__PURE__*/React.createElement("div", {
    className: "hdr-srch"
  }, /*#__PURE__*/React.createElement(HeaderSearch, {
    open: search,
    onOpen: onSearch,
    onClose: onCloseSearch,
    onOpenProduct: onOpenProduct
  }))), /*#__PURE__*/React.createElement(NavBar, {
    onGo: onGoCat,
    disabled: !!search
  })));
}

/* Desktop-only category bar with a hover mega panel. Hidden below 1024px. */
function NavBar({
  onGo,
  disabled
}) {
  const [open, setOpen] = useState(null);
  const go = id => {
    setOpen(null);
    onGo(id);
  };
  useEffect(() => {
    if (disabled) setOpen(null);
  }, [disabled]);
  return /*#__PURE__*/React.createElement("nav", {
    className: "dnav",
    onMouseLeave: () => setOpen(null),
    "aria-label": "Shop categories"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dnav-in"
  }, D.nav.map(n => {
    const has = n.sub && n.sub.length;
    return /*#__PURE__*/React.createElement("div", {
      className: "dnav-i",
      key: n.id,
      onMouseEnter: () => setOpen(has && !disabled ? n.id : null)
    }, /*#__PURE__*/React.createElement("button", {
      className: "dnav-b" + (open === n.id ? " on" : ""),
      onClick: () => go(n.id),
      "aria-expanded": open === n.id
    }, n.n), has && open === n.id && !disabled ? /*#__PURE__*/React.createElement("div", {
      className: "dmega"
    }, /*#__PURE__*/React.createElement("div", {
      className: "dmega-in"
    }, n.sub.map(s => /*#__PURE__*/React.createElement("div", {
      className: "dcol",
      key: s.id
    }, /*#__PURE__*/React.createElement("button", {
      className: "dcol-h",
      onClick: () => go(s.id)
    }, s.n), (s.sub || []).map(x => /*#__PURE__*/React.createElement("button", {
      className: "dcol-l",
      key: x.id,
      onClick: () => go(x.id)
    }, x.n)))), /*#__PURE__*/React.createElement("button", {
      className: "dmega-all",
      onClick: () => go(n.id)
    }, "Shop all ", n.n, /*#__PURE__*/React.createElement(Ico, {
      name: "arrow-right",
      size: 14
    })))) : null);
  })));
}
function NavNode({
  node,
  depth,
  onGo
}) {
  const [open, setOpen] = useState(false);
  const has = node.sub && node.sub.length;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "nav-row" + (depth ? " l" + (depth + 1) : ""),
    onClick: () => has ? setOpen(!open) : onGo(node.id)
  }, /*#__PURE__*/React.createElement("span", null, node.n), has ? /*#__PURE__*/React.createElement("span", {
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform 180ms",
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "chevron-down",
    size: 16
  })) : /*#__PURE__*/React.createElement(Ico, {
    name: "arrow-right",
    size: 14
  })), has && open ? node.sub.map(s => /*#__PURE__*/React.createElement(NavNode, {
    key: s.id,
    node: s,
    depth: depth + 1,
    onGo: onGo
  })) : null, has && open && depth === 0 ? /*#__PURE__*/React.createElement("button", {
    className: "nav-row l2",
    onClick: () => onGo(node.id)
  }, /*#__PURE__*/React.createElement("span", null, "Shop all ", node.n), /*#__PURE__*/React.createElement(Ico, {
    name: "arrow-right",
    size: 14
  })) : null);
}
function Drawer({
  open,
  onClose,
  onGo,
  onAccount,
  user
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "drawer" + (open ? " on" : ""),
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawer-h"
  }, /*#__PURE__*/React.createElement("span", {
    className: "wordmark"
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("button", {
    className: "iconbtn",
    onClick: onClose,
    "aria-label": "Close menu"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "x",
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    className: "drawer-b"
  }, D.nav.map(n => /*#__PURE__*/React.createElement(NavNode, {
    key: n.id,
    node: n,
    depth: 0,
    onGo: onGo
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav-foot"
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      fontSize: 13,
      color: "var(--teal)",
      textAlign: "left"
    },
    onClick: () => {
      onClose();
      onAccount();
    }
  }, user ? "My Account" : "Sign In"), /*#__PURE__*/React.createElement("a", {
    href: "#/wishlist",
    onClick: onClose
  }, "Wishlist"), /*#__PURE__*/React.createElement("a", {
    href: "#/stores",
    onClick: onClose
  }, "Find My Store"))));
}
function HeaderSearch({
  open,
  onOpen,
  onClose,
  onOpenProduct
}) {
  const [q, setQ] = useState("");
  const inputRef = useRef(null);
  const wrapRef = useRef(null);
  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
    if (!open) setQ("");
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const away = e => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        if (inputRef.current) inputRef.current.blur();
        onClose();
      }
    };
    document.addEventListener("pointerdown", away, true);
    return () => document.removeEventListener("pointerdown", away, true);
  }, [open, onClose]);
  const term = q.trim().toLowerCase();
  const hits = term.length < 2 ? [] : D.products.filter(p => (p.t + " " + p.by + " " + D.catName(p.cat)).toLowerCase().indexOf(term) > -1).slice(0, 12);
  const suggestions = ["Scriptures", "Sarah M. Eden", "Scripture totes", "Journal edition", "Quad combination"];
  return /*#__PURE__*/React.createElement("div", {
    className: "srch",
    ref: wrapRef,
    style: {
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "srch-row"
  }, open ? /*#__PURE__*/React.createElement("div", {
    className: "srch-f open"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "search",
    size: 20
  }), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search books, scriptures, gifts",
    "aria-label": "Search"
  })) : /*#__PURE__*/React.createElement("button", {
    className: "srch-f",
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("span", null, "Search"), /*#__PURE__*/React.createElement(Ico, {
    name: "search",
    size: 20
  })), open ? /*#__PURE__*/React.createElement("button", {
    className: "srch-cancel",
    onClick: onClose
  }, "Cancel") : null), /*#__PURE__*/React.createElement("div", {
    className: "srch-panel" + (open ? " on" : ""),
    "aria-hidden": !open
  }, term.length < 2 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lab",
    style: {
      marginBottom: 12
    }
  }, "Popular searches"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, suggestions.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: "chip",
    onClick: () => setQ(s)
  }, s)))) : hits.length ? hits.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    className: "srow",
    onClick: () => {
      onOpenProduct(p.id);
      onClose();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "th"
  }, /*#__PURE__*/React.createElement("img", {
    src: thumb(p.img[0]),
    alt: "",
    loading: "lazy",
    decoding: "async"
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "t"
  }, p.t), /*#__PURE__*/React.createElement("span", {
    className: "p"
  }, priceLabel(p))))) : /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("p", null, "No results for \u201C", q, "\u201D. Try a title, an author, or a category."))));
}
function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");
  const [ask, setAsk] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [nameErr, setNameErr] = useState("");
  const submit = e => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email)) {
      setErr("Enter a valid email address.");
      return;
    }
    setErr("");
    setAsk(true);
  };
  const finish = e => {
    e.preventDefault();
    if (!first.trim() || !last.trim()) {
      setNameErr("Enter your first and last name.");
      return;
    }
    setNameErr("");
    setAsk(false);
    setDone(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "band news-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band-card news-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "band-lab news-lab"
  }, /*#__PURE__*/React.createElement("span", {
    className: "news-h"
  }, "Sign up for discounts, news and limited-time offers")), done ? /*#__PURE__*/React.createElement("span", {
    className: "news-ok"
  }, "You\u2019re on the list. We send one email a week.") : /*#__PURE__*/React.createElement("div", {
    className: "news-field"
  }, /*#__PURE__*/React.createElement("form", {
    className: "news-form",
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    className: err ? "err" : "",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "Email address",
    "aria-label": "Email address",
    "aria-invalid": err ? true : undefined
  }), /*#__PURE__*/React.createElement("button", {
    className: "sub",
    type: "submit"
  }, "SUBSCRIBE")), err ? /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, err) : null)), /*#__PURE__*/React.createElement("div", {
    className: "pdlg news-dlg" + (ask ? " on" : ""),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Complete your subscription",
    "aria-hidden": !ask
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdlg-c"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pdlg-x",
    onClick: () => setAsk(false),
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "xmark_circle_fill",
    size: 24
  })), /*#__PURE__*/React.createElement("span", {
    className: "pdlg-eyebrow"
  }, "Almost There"), /*#__PURE__*/React.createElement("h2", null, "Complete Your Subscription"), /*#__PURE__*/React.createElement("p", null, "Tell us your name so we can address our emails to you."), /*#__PURE__*/React.createElement("form", {
    onSubmit: finish,
    noValidate: true
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: nameErr && !first.trim() ? "err" : "",
    value: first,
    onChange: e => setFirst(e.target.value),
    placeholder: "First name",
    "aria-label": "First name",
    autoComplete: "given-name"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: nameErr && !last.trim() ? "err" : "",
    value: last,
    onChange: e => setLast(e.target.value),
    placeholder: "Last name",
    "aria-label": "Last name",
    autoComplete: "family-name"
  }), nameErr ? /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, nameErr) : null, /*#__PURE__*/React.createElement("button", {
    className: "btn-gold",
    type: "submit",
    style: {
      height: 48,
      padding: "0 24px",
      fontSize: 16
    }
  }, "COMPLETE SUBSCRIPTION")))));
}
function FootAcc({
  title,
  items,
  onGo
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "acc"
  }, /*#__PURE__*/React.createElement("button", {
    className: "acc-h",
    onClick: () => setOpen(!open),
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement("span", {
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform 180ms",
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "chevron-down",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "acc-b" + (open ? " on" : "")
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#/page",
    onClick: e => {
      e.preventDefault();
      onGo(it);
    }
  }, it))));
}
function Footer({
  onGo,
  onStore
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "ftr"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-white",
    onClick: onStore
  }, "FIND MY STORE"), Object.keys(D.footer).map(k => /*#__PURE__*/React.createElement(FootAcc, {
    key: k,
    title: k,
    items: D.footer[k],
    onGo: onGo
  })), /*#__PURE__*/React.createElement("div", {
    className: "social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/page",
    onClick: e => {
      e.preventDefault();
      onGo("Facebook");
    },
    "aria-label": "Facebook",
    style: {
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "facebook",
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "#/page",
    onClick: e => {
      e.preventDefault();
      onGo("Instagram");
    },
    "aria-label": "Instagram",
    style: {
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "instagram",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("div", {
    className: "legal"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 1996\u20132025 Deseret Book Company. All Rights Reserved."), /*#__PURE__*/React.createElement("span", null, "Product Submission Guidelines\xA0\xA0 |\xA0\xA0 Manuscript Submissions\xA0\xA0 |\xA0\xA0 Legal")));
}
const PROMOS = {
  SHELF10: {
    off: 0.1,
    lab: "10% off"
  },
  FREESHIP: {
    ship: true,
    lab: "Free shipping"
  }
};
function BagDrawer({
  open,
  onClose,
  cart,
  setQty,
  remove,
  clear,
  go,
  ship,
  onViewBag,
  onCheckout
}) {
  const s = ship || {};
  const goal = s.threshold || 49;
  const [code, setCode] = useState("");
  const [promo, setPromo] = useState(null);
  const [err, setErr] = useState("");
  const [placed, setPlaced] = useState(false);
  useEffect(() => {
    if (open) setPlaced(false);
  }, [open]);
  const lines = cart.map(l => ({
    l,
    p: D.byId(l.id)
  })).filter(x => x.p);
  const sub = lines.reduce((s, x) => s + x.p.price * x.l.q, 0);
  const disc = promo && promo.off ? sub * promo.off : 0;
  const net = sub - disc;
  const left = Math.max(0, goal - net);
  const ok = net === 0 || net >= goal || promo && promo.ship;
  const shipCost = ok ? 0 : s.std || 5.99;
  const pct = Math.min(100, net / goal * 100);
  const apply = e => {
    e.preventDefault();
    const k = code.trim().toUpperCase();
    if (PROMOS[k]) {
      setPromo(Object.assign({
        code: k
      }, PROMOS[k]));
      setErr("");
      setCode("");
    } else {
      setPromo(null);
      setErr("That code isn\u2019t valid.");
    }
  };
  return /*#__PURE__*/React.createElement("aside", {
    className: "bagd" + (open ? " on" : ""),
    "aria-hidden": !open,
    "aria-label": "Shopping bag"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bagd-h"
  }, /*#__PURE__*/React.createElement("h2", null, "Shopping Bag", lines.length ? " (" + lines.reduce((s, x) => s + x.l.q, 0) + ")" : ""), /*#__PURE__*/React.createElement("button", {
    className: "iconbtn",
    onClick: onClose,
    "aria-label": "Close bag"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "x",
    size: 22
  }))), placed ? /*#__PURE__*/React.createElement("div", {
    className: "bagd-b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "check",
    size: 28
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Lora,Georgia,serif",
      fontWeight: 500,
      fontSize: 24,
      margin: 0
    }
  }, "Order Placed"), /*#__PURE__*/React.createElement("p", null, "Thank you. A confirmation is on its way to your email, and your order will ship within two business days."), /*#__PURE__*/React.createElement("button", {
    className: "btn-gold",
    onClick: onClose
  }, "KEEP SHOPPING"))) : !lines.length ? /*#__PURE__*/React.createElement("div", {
    className: "bagd-b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "shopping-bag",
    size: 28
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Lora,Georgia,serif",
      fontWeight: 500,
      fontSize: 24,
      margin: 0
    }
  }, "Your Bag Is Empty"), /*#__PURE__*/React.createElement("p", null, "Books, journals, and art and home decor are waiting on the shelves."), /*#__PURE__*/React.createElement("button", {
    className: "btn-gold",
    onClick: onClose
  }, "START SHOPPING"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "bagd-b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ship",
    style: {
      "--ship-accent": s.accent || "var(--db-green-400)",
      "--ship-h": (s.height || 6) + "px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ship-t"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: left > 0 ? "truck" : "check",
    size: 14
  })), left > 0 ? /*#__PURE__*/React.createElement("span", null, "You\u2019re ", money(left), " away from ", /*#__PURE__*/React.createElement("strong", null, "free shipping"), ".") : /*#__PURE__*/React.createElement("span", null, "Your order ships ", /*#__PURE__*/React.createElement("strong", null, "free"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "ship-bar"
  }, s.style === "segments" ? /*#__PURE__*/React.createElement("span", {
    className: "ship-seg"
  }, [0, 1, 2, 3, 4].map(k => /*#__PURE__*/React.createElement("i", {
    key: k,
    className: pct >= (k + 1) * 20 - 10 ? "on" : ""
  }))) : /*#__PURE__*/React.createElement("span", {
    className: "ship-track"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: pct + "%"
    }
  })), s.goalMark ? /*#__PURE__*/React.createElement("span", {
    className: "ship-goal"
  }, money(goal).replace(".00", "")) : null)), lines.map((x, i) => /*#__PURE__*/React.createElement("div", {
    className: "line",
    key: x.l.key || i
  }, /*#__PURE__*/React.createElement("button", {
    className: "th",
    onClick: () => {
      onClose();
      go("#/p/" + x.p.id);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: thumb(colorImg(x.p, x.l.color)),
    alt: "",
    loading: "lazy",
    decoding: "async"
  })), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("button", {
    className: "t",
    style: {
      textAlign: "left"
    },
    onClick: () => {
      onClose();
      go("#/p/" + x.p.id);
    }
  }, x.p.t), x.l.color ? /*#__PURE__*/React.createElement("span", {
    className: "c"
  }, x.l.color) : null, x.l.imprint ? /*#__PURE__*/React.createElement("span", {
    className: "c"
  }, "Imprint: \u201c" + x.l.imprint.text + "\u201d, " + x.l.imprint.style) : null, /*#__PURE__*/React.createElement("span", {
    className: "c"
  }, money(x.p.price), " each"), /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qty"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(i, x.l.q - 1),
    "aria-label": "Decrease"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "minus",
    size: 14
  })), /*#__PURE__*/React.createElement("span", null, x.l.q), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(i, x.l.q + 1),
    "aria-label": "Increase"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "plus",
    size: 14
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 400
    }
  }, money(x.p.price * x.l.q))), /*#__PURE__*/React.createElement("button", {
    className: "rm",
    onClick: () => remove(i)
  }, "Remove")))), /*#__PURE__*/React.createElement("form", {
    className: "promo-row",
    onSubmit: apply
  }, /*#__PURE__*/React.createElement("label", {
    className: "lab",
    htmlFor: "promo"
  }, "Promo code"), /*#__PURE__*/React.createElement("div", {
    className: "promo-in"
  }, /*#__PURE__*/React.createElement("input", {
    id: "promo",
    value: code,
    onChange: e => setCode(e.target.value),
    placeholder: "Enter code",
    autoComplete: "off"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn-out",
    type: "submit",
    style: {
      height: 40,
      padding: "0 20px"
    }
  }, "APPLY")), promo ? /*#__PURE__*/React.createElement("span", {
    className: "promo-ok"
  }, promo.code, " applied \u2014 ", promo.lab, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPromo(null)
  }, "Remove")) : null, err ? /*#__PURE__*/React.createElement("span", {
    className: "promo-err"
  }, err) : null)), /*#__PURE__*/React.createElement("div", {
    className: "bagd-f"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, money(sub))), disc ? /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("span", null, "Discount"), /*#__PURE__*/React.createElement("span", null, "\u2212", money(disc))) : null, /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("span", null, "Shipping"), /*#__PURE__*/React.createElement("span", null, shipCost ? money(shipCost) : "Free")), /*#__PURE__*/React.createElement("div", {
    className: "r grand"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, money(net + shipCost))), /*#__PURE__*/React.createElement("button", {
    className: "btn-gold",
    style: {
      height: 48,
      padding: "0 24px",
      fontSize: 16,
      marginTop: 4
    },
    onClick: () => {
      if (onCheckout) {
        onCheckout(promo);
        return;
      }
      setPlaced(true);
      setPromo(null);
      setCode("");
      setErr("");
      clear();
    }
  }, "CHECKOUT"), onViewBag ? /*#__PURE__*/React.createElement("button", {
    className: "btn-out bagd-view",
    onClick: () => onViewBag(promo)
  }, "VIEW BAG") : null)));
}
const ACCT_LINKS = ["Orders", "Subscriptions", "Addresses", "Payment methods", "Email preferences", "Platinum Rewards"];
function AccountDrawer({
  open,
  onClose,
  user,
  subs,
  onSignIn,
  onSignOut,
  onGo,
  onWishlist
}) {
  const [mode, setMode] = useState("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  useEffect(() => {
    if (!open) {
      setMode("signin");
      setErr("");
      setPw("");
    } else if (!user) {
      setName("Sarah Johnson");
      setEmail("sarah.johnson@example.com");
      setPw("password123");
    }
  }, [open, user]);
  const create = mode === "create";
  const submit = e => {
    e.preventDefault();
    if (create && name.trim().length < 2) {
      setErr("Enter your name.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email)) {
      setErr("Enter a valid email address.");
      return;
    }
    if (pw.length < 4) {
      setErr(create ? "Choose a password of at least four characters." : "Enter your password.");
      return;
    }
    setErr("");
    setPw("");
    onSignIn({
      name: create ? name.trim() : email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
      email: email
    });
  };
  return /*#__PURE__*/React.createElement("aside", {
    className: "acctd" + (open ? " on" : ""),
    "aria-hidden": !open,
    "aria-label": "My account"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bagd-h"
  }, /*#__PURE__*/React.createElement("h2", null, user ? "My Account" : create ? "Create Account" : "Sign In"), /*#__PURE__*/React.createElement("button", {
    className: "iconbtn",
    onClick: onClose,
    "aria-label": "Close account"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "x",
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bagd-b"
  }, user ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "acct-id"
  }, /*#__PURE__*/React.createElement("span", {
    className: "acct-av"
  }, user.name.slice(0, 1)), /*#__PURE__*/React.createElement("span", {
    className: "acct-meta"
  }, /*#__PURE__*/React.createElement("strong", null, user.name), /*#__PURE__*/React.createElement("span", null, user.email), subs && subs.platinum ? /*#__PURE__*/React.createElement("span", {
    className: "acct-tier"
  }, "PLATINUM REWARDS \xB7 1,240 points") : null)), subs && subs.bookshelf ? null : /*#__PURE__*/React.createElement("button", {
    className: "acct-bsp",
    onClick: () => {
      onClose();
      onGo("Bookshelf Plus");
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "acct-bsp-t"
  }, /*#__PURE__*/React.createElement("img", {
    className: "acct-bsp-logo",
    src: window.__resources && window.__resources.bsplus || "assets/bookshelfplus.svg",
    alt: "bookshelf+"
  }), /*#__PURE__*/React.createElement("span", null, "Your digital library and audiobooks")), /*#__PURE__*/React.createElement(Ico, {
    name: "arrow-right",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-list",
    style: {
      marginTop: subs && subs.bookshelf ? 20 : 4
    }
  }, ACCT_LINKS.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => {
      onClose();
      onGo(l);
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement(Ico, {
    name: "arrow-right",
    size: 14
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      onClose();
      onWishlist();
    }
  }, /*#__PURE__*/React.createElement("span", null, "Wishlist"), /*#__PURE__*/React.createElement(Ico, {
    name: "arrow-right",
    size: 14
  }))), /*#__PURE__*/React.createElement("button", {
    className: "btn-out",
    style: {
      alignSelf: "flex-start",
      marginTop: 20
    },
    onClick: onSignOut
  }, "Sign out")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "acct-lede"
  }, create ? "Create an account to track orders, save addresses, and keep a wishlist." : "Sign in to see your orders, saved addresses, and Bookshelf Plus library."), /*#__PURE__*/React.createElement("form", {
    className: "acct-form",
    onSubmit: submit,
    noValidate: true
  }, create ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    className: "lab",
    htmlFor: "acct-name"
  }, "Full name"), /*#__PURE__*/React.createElement("input", {
    id: "acct-name",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "First and last name",
    autoComplete: "name"
  })) : null, /*#__PURE__*/React.createElement("label", {
    className: "lab",
    htmlFor: "acct-email"
  }, "Email address"), /*#__PURE__*/React.createElement("input", {
    id: "acct-email",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@example.com",
    autoComplete: "email"
  }), /*#__PURE__*/React.createElement("label", {
    className: "lab",
    htmlFor: "acct-pw"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    id: "acct-pw",
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    autoComplete: create ? "new-password" : "current-password"
  }), err ? /*#__PURE__*/React.createElement("span", {
    className: "promo-err"
  }, err) : null, /*#__PURE__*/React.createElement("button", {
    className: "btn-gold",
    type: "submit",
    style: {
      height: 48,
      padding: "0 24px",
      fontSize: 16,
      marginTop: 4
    }
  }, create ? "CREATE ACCOUNT" : "SIGN IN")), /*#__PURE__*/React.createElement("div", {
    className: "acct-alt"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setErr("");
      setMode(create ? "signin" : "create");
    }
  }, create ? "Already have an account? Sign in" : "Create an account"), create ? null : /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      onClose();
      onGo("Contact Us");
    }
  }, "Forgot password?")))));
}
function Toast(props) {
  const last = useRef(props);
  if (props.on) last.current = props;
  const {
    msg,
    action,
    seq
  } = props.on ? props : last.current;
  const tone = (props.on ? props : last.current).tone || "neutral";
  const {
    onAction,
    on
  } = props;
  const ref = useRef(null);
  const wasOn = useRef(false);
  useEffect(() => {
    const el = ref.current,
      visible = wasOn.current;
    wasOn.current = on;
    if (!el) return;
    el.classList.remove("bump");
    if (on && visible) {
      void el.offsetWidth;
      el.classList.add("bump");
    }
  }, [seq, on]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "toast toast-pill toast-" + tone + (on ? " on" : ""),
    role: "status",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("span", {
    className: "toast-ic",
    key: seq
  }, /*#__PURE__*/React.createElement(Ico, {
    name: tone === "ok" ? "check" : "info_circle",
    size: 18
  })), /*#__PURE__*/React.createElement("span", null, msg), action ? /*#__PURE__*/React.createElement("button", {
    className: "toast-a",
    onClick: onAction
  }, action) : null);
}
function Accordion({
  title,
  children,
  start
}) {
  const [open, setOpen] = useState(!!start);
  return /*#__PURE__*/React.createElement("div", {
    className: "acc2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement("span", {
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform 180ms",
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "chevron-down",
    size: 16
  }))), open ? /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, children) : null);
}
Object.assign(window, {
  DS,
  Ico,
  colorImg,
  Stars,
  Cover,
  ProductCard,
  useRailDots,
  Dots,
  Wordmark,
  Header,
  NavBar,
  Drawer,
  HeaderSearch,
  Newsletter,
  Footer,
  Toast,
  BagDrawer,
  AccountDrawer,
  Accordion,
  money,
  priceLabel,
  thumb,
  D
});
/* src/screens.jsx */
const GV = "#/c/books_gospel-voices";
function Home({
  go,
  add
}) {
  const heroMq = "(max-width:639px)";
  const [heroMobile, setHeroMobile] = useState(() => window.matchMedia(heroMq).matches);
  useEffect(() => {
    const m = window.matchMedia(heroMq);
    const h = () => setHeroMobile(m.matches);
    m.addEventListener("change", h);
    return () => m.removeEventListener("change", h);
  }, []);
  const [conRef, conDots] = useRailDots();
  const trending = D.trending.map(id => D.byId(id)).filter(Boolean);
  const fineArt = D.fineArt.map(id => D.byId(id)).filter(Boolean);
  return /*#__PURE__*/React.createElement(React.Fragment, null, false ? /*#__PURE__*/React.createElement("section", {
    className: "hero art ab-a",
    onClick: () => go(GV)
  }, /*#__PURE__*/React.createElement("div", {
    className: "art-img",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "art-box"
  }, /*#__PURE__*/React.createElement("p", {
    className: "ab-offer"
  }, "$5 Off Your Purchase of $50+ with Code: Conference50"))) : /*#__PURE__*/React.createElement("section", {
    className: "hero art ab-b",
    onClick: () => go(GV)
  }, /*#__PURE__*/React.createElement("div", {
    className: "art-img",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "art-box"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "h-title"
  }, "Remember Messages That Move You"), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "$5 Off Your Purchase of $50+ with Code Conference50"), /*#__PURE__*/React.createElement("button", {
    className: "btn-gold",
    onClick: () => go(GV)
  }, "Preorder Now"))), /*#__PURE__*/React.createElement("section", {
    className: "band"
  }, /*#__PURE__*/React.createElement("button", {
    className: "band-card",
    onClick: () => go("#/bookshelf-plus"),
    "aria-label": "Subscribe now to Bookshelf Plus"
  }, /*#__PURE__*/React.createElement("span", {
    className: "band-lab"
  }, "Subscribe now and gain unlimited access to 4,000+ audiobooks & eBooks"), /*#__PURE__*/React.createElement("span", {
    className: "band-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.bsplus || "assets/bookshelfplus.svg",
    alt: "bookshelf+"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "sect"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-top"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sect-h"
  }, "New & Trending"), /*#__PURE__*/React.createElement("button", {
    className: "sect-all",
    onClick: () => go("#/c/new-trending")
  }, "See All")), /*#__PURE__*/React.createElement("div", {
    className: "rail"
  }, trending.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    p: p,
    onOpen: id => go("#/p/" + id),
    onAdd: add
  })))), /*#__PURE__*/React.createElement(Newsletter, null), /*#__PURE__*/React.createElement("section", {
    className: "promo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "promo-card",
    onClick: () => go("#/c/art")
  }, /*#__PURE__*/React.createElement("div", {
    className: "promo-box"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h-title"
  }, "Bring Home Reminders of Christ"), /*#__PURE__*/React.createElement("p", {
    className: "promo-sub"
  }, "20% Off Art Plus Deeper Discounts on Select Art"), /*#__PURE__*/React.createElement("button", {
    className: "btn-gold",
    onClick: () => go("#/c/art")
  }, "SHOP ART")))), /*#__PURE__*/React.createElement("section", {
    className: "sect"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-top"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sect-h"
  }, "Fine Art"), /*#__PURE__*/React.createElement("button", {
    className: "sect-all",
    onClick: () => go("#/c/home_fine-art")
  }, "See All")), /*#__PURE__*/React.createElement("div", {
    className: "rail"
  }, fineArt.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    p: p,
    onOpen: id => go("#/p/" + id),
    onAdd: add
  })))), /*#__PURE__*/React.createElement("section", {
    className: "sect sect-con"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sect-top"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sect-h"
  }, "Featured Content"), /*#__PURE__*/React.createElement("button", {
    className: "sect-all",
    onClick: () => go("#/blog")
  }, "See All")), /*#__PURE__*/React.createElement("div", {
    className: "crail",
    ref: conRef
  }, D.featuredContent.map((c, i) => {
    const p = D.byId(c.pid);
    return /*#__PURE__*/React.createElement("article", {
      className: "ccard",
      key: i,
      onClick: () => go("#/blog/" + i)
    }, /*#__PURE__*/React.createElement("span", {
      className: "ccard-img"
    }, c.img ? /*#__PURE__*/React.createElement("img", {
      src: thumb(c.img),
      alt: "",
      loading: "lazy",
      decoding: "async"
    }) : p ? /*#__PURE__*/React.createElement("img", {
      src: thumb(p.img[0]),
      alt: "",
      loading: "lazy",
      decoding: "async"
    }) : null), /*#__PURE__*/React.createElement("div", {
      className: "ccard-b"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ccard-m"
    }, c.date), /*#__PURE__*/React.createElement("h3", {
      className: "ccard-t"
    }, c.title), /*#__PURE__*/React.createElement("p", {
      className: "ccard-x"
    }, c.x), /*#__PURE__*/React.createElement("button", {
      className: "btn-out",
      onClick: () => go("#/blog/" + i)
    }, "Read More")));
  })), /*#__PURE__*/React.createElement(Dots, {
    i: conDots.i,
    n: conDots.n
  })));
}
function Category({
  id,
  go,
  add
}) {
  const [sort, setSort] = useState("featured");
  const base = D.inCat(id);
  const items = id === "all-categories" ? D.products.slice() : base.slice();
  if (sort === "low") items.sort((a, b) => a.price - b.price);
  if (sort === "high") items.sort((a, b) => b.price - a.price);
  if (sort === "az") items.sort((a, b) => a.t.localeCompare(b.t));
  if (sort === "rating") items.sort((a, b) => b.r - a.r);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "crumbs"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("#/")
  }, "Home"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", null, D.catName(id))), /*#__PURE__*/React.createElement("div", {
    className: "plp-h"
  }, /*#__PURE__*/React.createElement("h1", null, D.catName(id))), /*#__PURE__*/React.createElement("div", {
    className: "plp-bar"
  }, /*#__PURE__*/React.createElement("span", null, items.length, " ", items.length === 1 ? "result" : "results"), /*#__PURE__*/React.createElement("select", {
    value: sort,
    onChange: e => setSort(e.target.value),
    "aria-label": "Sort by"
  }, /*#__PURE__*/React.createElement("option", {
    value: "featured"
  }, "Best Matches"), /*#__PURE__*/React.createElement("option", {
    value: "rating"
  }, "Top Sellers"), /*#__PURE__*/React.createElement("option", {
    value: "low"
  }, "Price Low To High"), /*#__PURE__*/React.createElement("option", {
    value: "high"
  }, "Price High to Low"), /*#__PURE__*/React.createElement("option", {
    value: "az"
  }, "Product Name A \u2013 Z"))), items.length ? /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    p: p,
    onOpen: pid => go("#/p/" + pid),
    onAdd: add
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("p", null, "Nothing on this shelf yet. Here are some of our most popular items.")), /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, D.trending.map(x => D.byId(x)).filter(Boolean).map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    p: p,
    onOpen: pid => go("#/p/" + pid),
    onAdd: add
  })))));
}
const PZ_STYLES = [{
  n: "Large Script Letters",
  max: 20,
  img: "https://www.deseretbook.com/dw/image/v2/BJJM_PRD/on/demandware.static/-/Sites-DeseretBooks-Library/default/dw311daace/images/LargeScript_Silo.jpg?sw=720&sfrm=jpg&q=80"
}, {
  n: "Small Script Letters",
  max: 16,
  img: "https://www.deseretbook.com/dw/image/v2/BJJM_PRD/on/demandware.static/-/Sites-DeseretBooks-Library/default/dw60a9f20c/images/SmallScript_Silo.jpg?sw=720&sfrm=jpg&q=80"
}, {
  n: "Large Block Letters",
  max: 20,
  img: "https://www.deseretbook.com/dw/image/v2/BJJM_PRD/on/demandware.static/-/Sites-DeseretBooks-Library/default/dwe040f233/images/LargeBlock_Silo.jpg?sw=720&sfrm=jpg&q=80"
}, {
  n: "Small Block Letters",
  max: 16,
  img: "https://www.deseretbook.com/dw/image/v2/BJJM_PRD/on/demandware.static/-/Sites-DeseretBooks-Library/default/dw746539e2/images/SmallBlock_Silo.jpg?sw=720&sfrm=jpg&q=80"
}];
const pzReady = z => !!(z.on && z.style && z.name.trim() && z.name === z.confirm && z.agree);
function StyleExamples({
  open,
  onClose,
  pick
}) {
  const [host, setHost] = useState(null);
  useEffect(() => {
    const t = document.querySelector(".toast");
    setHost(t ? t.parentElement : document.body);
  }, []);
  useEffect(() => {
    if (!open) return;
    const k = e => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  if (!host) return null;
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    className: "pdlg pz-dlg" + (open ? " on" : ""),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Imprinting letter style examples",
    "aria-hidden": !open,
    onClick: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdlg-c"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pdlg-x",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "xmark_circle_fill",
    size: 24
  })), /*#__PURE__*/React.createElement("h2", null, "Imprinting Letter Styles"), /*#__PURE__*/React.createElement("p", null, "Each imprint is pressed in gold foil on the lower right of the front cover."), /*#__PURE__*/React.createElement("div", {
    className: "pz-ex"
  }, PZ_STYLES.map(st => /*#__PURE__*/React.createElement("button", {
    key: st.n,
    className: "pz-ex-i",
    onClick: () => {
      pick(st.n);
      onClose();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-ex-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: st.img,
    alt: st.n + " example",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("span", {
    className: "pz-ex-n"
  }, st.n)))), /*#__PURE__*/React.createElement("div", {
    className: "pz-ft"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pz-btn out",
    onClick: onClose
  }, "Close")))), host);
}
function Personalize({
  z,
  set
}) {
  const [ex, setEx] = useState(false);
  const st = PZ_STYLES.find(x => x.n === z.style);
  const max = st ? st.max : 16;
  const mismatch = z.confirm.length > 0 && z.confirm !== z.name;
  const textOk = z.name.trim() && z.name === z.confirm;
  const step = !z.style ? 1 : !textOk ? 2 : 3;
  const upd = o => set(Object.assign({}, z, o));
  return /*#__PURE__*/React.createElement("div", {
    className: "pz" + (z.on ? " on" : "")
  }, /*#__PURE__*/React.createElement("label", {
    className: "pz-h"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: z.on,
    onChange: e => upd({
      on: e.target.checked
    })
  }), /*#__PURE__*/React.createElement("span", {
    className: "pz-box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "checkmark_alt",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "pz-ht"
  }, /*#__PURE__*/React.createElement("b", null, "Personalize This Product"), /*#__PURE__*/React.createElement("span", null, "Personalizations and imprints may take an additional business day to process."))), z.on ? /*#__PURE__*/React.createElement("div", {
    className: "pz-b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-s" + (step > 1 ? " done" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-sh"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-n"
  }, step > 1 ? /*#__PURE__*/React.createElement(Ico, {
    name: "checkmark_alt",
    size: 16
  }) : "1"), /*#__PURE__*/React.createElement("span", null, "Choose a letter style"), /*#__PURE__*/React.createElement("button", {
    className: "pz-link",
    onClick: () => setEx(true)
  }, "View Style Examples")), /*#__PURE__*/React.createElement("div", {
    className: "pz-opts",
    role: "radiogroup",
    "aria-label": "Letter style"
  }, PZ_STYLES.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.n,
    role: "radio",
    "aria-checked": z.style === o.n,
    className: "pz-o" + (z.style === o.n ? " on" : ""),
    onClick: () => upd({
      style: o.n,
      name: z.name.slice(0, o.max),
      confirm: z.confirm.slice(0, o.max),
      agree: false
    })
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-o-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: o.img,
    alt: "",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("span", {
    className: "pz-o-n"
  }, o.n))))), /*#__PURE__*/React.createElement("div", {
    className: "pz-s" + (step < 2 ? " dim" : "") + (step > 2 ? " done" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-sh"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-n"
  }, step > 2 ? /*#__PURE__*/React.createElement(Ico, {
    name: "checkmark_alt",
    size: 16
  }) : "2"), /*#__PURE__*/React.createElement("span", null, "Enter the imprint text")), /*#__PURE__*/React.createElement("label", {
    className: "pz-f"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-fl"
  }, /*#__PURE__*/React.createElement("span", null, "Name"), /*#__PURE__*/React.createElement("span", null, z.name.length, "/", max)), /*#__PURE__*/React.createElement("input", {
    value: z.name,
    maxLength: max,
    disabled: !z.style,
    placeholder: "As it should appear",
    onChange: e => upd({
      name: e.target.value,
      agree: false
    })
  })), /*#__PURE__*/React.createElement("label", {
    className: "pz-f"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-fl"
  }, /*#__PURE__*/React.createElement("span", null, "Confirm Name"), /*#__PURE__*/React.createElement("span", null, z.confirm.length, "/", max)), /*#__PURE__*/React.createElement("input", {
    className: mismatch ? "err" : "",
    value: z.confirm,
    maxLength: max,
    disabled: !z.style,
    placeholder: "Type it once more",
    onChange: e => upd({
      confirm: e.target.value,
      agree: false
    }),
    onPaste: e => e.preventDefault(),
    "aria-invalid": mismatch
  })), mismatch ? /*#__PURE__*/React.createElement("span", {
    className: "pz-err"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "exclamationmark_circle",
    size: 16
  }), "The names don\u2019t match yet.") : null), /*#__PURE__*/React.createElement("div", {
    className: "pz-s" + (step < 3 ? " dim" : "") + (pzReady(z) ? " done" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-sh"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-n"
  }, pzReady(z) ? /*#__PURE__*/React.createElement(Ico, {
    name: "checkmark_alt",
    size: 16
  }) : "3"), /*#__PURE__*/React.createElement("span", null, "Review and confirm")), step === 3 ? /*#__PURE__*/React.createElement("div", {
    className: "pz-rev"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-rev-t"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pz-rev-l"
  }, "Your imprint"), /*#__PURE__*/React.createElement("span", {
    className: "pz-rev-v" + (/Script/.test(z.style) ? " script" : " block")
  }, z.name), /*#__PURE__*/React.createElement("span", {
    className: "pz-rev-s"
  }, z.style)), /*#__PURE__*/React.createElement("label", {
    className: "pz-ag"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: z.agree,
    onChange: e => upd({
      agree: e.target.checked
    })
  }), /*#__PURE__*/React.createElement("span", {
    className: "pz-box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "checkmark_alt",
    size: 16
  })), /*#__PURE__*/React.createElement("span", null, "I\u2019ve checked the spelling. Imprinted items are non-returnable."))) : /*#__PURE__*/React.createElement("p", {
    className: "pz-hint"
  }, "Finish the steps above to review your imprint."))) : null, /*#__PURE__*/React.createElement(StyleExamples, {
    open: ex,
    onClose: () => setEx(false),
    pick: n => upd({
      style: n,
      agree: false
    })
  }));
}
function FaqBlock({
  a
}) {
  return a.map((x, i) => Array.isArray(x) ? /*#__PURE__*/React.createElement("ul", {
    key: i
  }, x.map((li, k) => {
    const j = li.indexOf(": ");
    return /*#__PURE__*/React.createElement("li", {
      key: k
    }, j > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, li.slice(0, j), ":"), li.slice(j + 1)) : li);
  })) : /*#__PURE__*/React.createElement("p", {
    key: i
  }, x));
}
function PdpTabs({
  p,
  go,
  shipMin
}) {
  const ex = D.extra(p.id);
  const desc = ex && ex.d ? ex.d : [p.d];
  const spec = [["Item no.", p.id]].concat(p.by && p.by !== "Deseret Book" ? [["Author", p.by]] : [["Brand", p.by || "Deseret Book"]]).concat(p.fmt ? [["Format", p.fmt]] : []).concat(p.size ? [["Size", p.size]] : []).concat(p.colors ? [["Colors", p.colors.map(c => c.n).join(", ")]] : []).concat(p.personalize ? [["Personalization", "Available"]] : []).concat(p.online ? [["Availability", "Online exclusive"]] : []);
  const extraSpec = ex && ex.spec ? ex.spec : [];
  const rows = spec.map(r => extraSpec.find(x => x[0] === r[0]) || r).concat(extraSpec.filter(r => !spec.some(x => x[0] === r[0])));
  const hasDesc = desc.some(Boolean);
  const tabs = (hasDesc ? [["desc", "Description"]] : []).concat([["details", "Details"]]).concat(ex && ex.faq ? [["faq", "FAQ"]] : []).concat([["ship", "Shipping & Returns"]]);
  const [t, setT] = useState(hasDesc ? "desc" : "details");
  useEffect(() => {
    setT(hasDesc ? "desc" : "details");
  }, [p.id]);
  const onKey = e => {
    const i = tabs.findIndex(x => x[0] === t);
    const n = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : null;
    if (n == null) return;
    e.preventDefault();
    const k = tabs[(n + tabs.length) % tabs.length][0];
    setT(k);
    const el = e.currentTarget.querySelectorAll('[role="tab"]')[tabs.findIndex(x => x[0] === k)];
    if (el) el.focus();
  };
  const DSTabs = window.DeseretBookDesignSystem_609afa.Tabs;
  return /*#__PURE__*/React.createElement("div", {
    className: "pdp-acc pdt"
  }, /*#__PURE__*/React.createElement(DSTabs, {
    className: "pdt-bar",
    role: "tablist",
    "aria-label": "Product information",
    onKeyDown: onKey,
    tabs: tabs.map(([k, l]) => ({
      value: k,
      label: l
    })),
    value: t,
    onChange: setT
  }), /*#__PURE__*/React.createElement("div", {
    className: "pdt-p",
    role: "tabpanel",
    id: "pdp-" + t,
    "aria-label": (tabs.find(x => x[0] === t) || [])[1]
  }, t === "desc" ? /*#__PURE__*/React.createElement(React.Fragment, null, p.cat.indexOf("books") === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "pdt-bs"
  }, /*#__PURE__*/React.createElement("img", {
    className: "pdt-bs-mark",
    src: "assets/bookshelfplus-symbol.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", null, "Read for free with bookshelf+. Unlimited access to 4,000+ audiobooks and eBooks in the Deseret Bookshelf app."), /*#__PURE__*/React.createElement("button", {
    className: "btn-out",
    onClick: () => go(p.cat.indexOf("books_fiction") === 0 ? "#/bookshelf-plus/fiction" : "#/bookshelf-plus")
  }, "Learn more")) : null, desc.map((x, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, x)), ex && ex.note ? /*#__PURE__*/React.createElement("p", {
    className: "pdt-note"
  }, ex.note) : null) : null, t === "details" ? /*#__PURE__*/React.createElement("dl", {
    className: "pdt-dl"
  }, rows.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("dt", null, k), /*#__PURE__*/React.createElement("dd", null, v)))) : null, t === "faq" ? /*#__PURE__*/React.createElement("div", {
    className: "pdt-faq"
  }, ex.faq.map(f => /*#__PURE__*/React.createElement(Accordion, {
    key: f.q,
    title: f.q
  }, /*#__PURE__*/React.createElement(FaqBlock, {
    a: f.a
  })))) : null, t === "ship" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Free shipping on orders $", shipMin || 49, "+ for standard domestic US. Surcharges still apply for large items."), /*#__PURE__*/React.createElement("p", null, "Returns are accepted within 30 days. Imprinted items are non-returnable.")) : null));
}
function Product({
  id,
  go,
  add,
  fav,
  toggleFav,
  shipMin
}) {
  const p0 = D.byId(id);
  const p = p0 && p0.parent ? D.byId(p0.parent) : p0;
  const fmt0 = p && p.formats ? p0.parent ? p0.id : p.formats[0] : null;
  const [fmtSel, setFmtSel] = useState(fmt0);
  const v = p && p.formats ? D.byId(fmtSel) || D.byId(p.formats[0]) : null;
  const [color, setColor] = useState(p && p.colors ? p.colors[0].n : null);
  const [qty, setQty] = useState(1);
  const PZ0 = {
    on: false,
    style: null,
    name: "",
    confirm: "",
    agree: false
  };
  const [pz, setPz] = useState(PZ0);
  const [galRef, gal] = useRailDots();
  const thRef = useRef(null);
  const tsx = useRef(null);
  const [thEdge, setThEdge] = useState({
    l: false,
    r: false
  });
  const thCheck = () => {
    const el = thRef.current;
    if (!el) return;
    const l = el.scrollLeft > 2,
      r = el.scrollLeft + el.clientWidth < el.scrollWidth - 2;
    setThEdge(s => s.l === l && s.r === r ? s : {
      l,
      r
    });
  };
  useEffect(() => {
    const el = thRef.current;
    if (!el) return;
    thCheck();
    const ro = new ResizeObserver(thCheck);
    ro.observe(el);
    return () => ro.disconnect();
  });
  useEffect(() => {
    const el = thRef.current;
    if (!el) return;
    const b = el.children[gal.i];
    if (!b) return;
    const pad = 24;
    if (b.offsetLeft - pad < el.scrollLeft) el.scrollTo({
      left: b.offsetLeft - pad,
      behavior: "smooth"
    });else if (b.offsetLeft + b.offsetWidth + pad > el.scrollLeft + el.clientWidth) el.scrollTo({
      left: b.offsetLeft + b.offsetWidth + pad - el.clientWidth,
      behavior: "smooth"
    });
  }, [gal.i]);
  const thPage = d => {
    const el = thRef.current;
    if (el) el.scrollBy({
      left: d * (el.clientWidth - 72),
      behavior: "smooth"
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setQty(1);
    setFmtSel(fmt0);
    setPz(PZ0);
    setColor(p && p.colors ? p.colors[0].n : null);
  }, [id]);
  if (!p) return /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("p", null, "That product isn\u2019t in this prototype."), /*#__PURE__*/React.createElement("button", {
    className: "btn-out",
    onClick: () => go("#/")
  }, "Back to home"));
  const chosen = p.colors ? p.colors.find(c => c.n === color) : null;
  const images = (chosen ? chosen.gallery || (chosen.img ? [chosen.img] : []) : []).concat(p.img);
  const related = (() => {
    const seen = {},
      out = [];
    const push = x => {
      if (out.length < 6 && x.id !== p.id && !seen[x.id]) {
        seen[x.id] = 1;
        out.push(x);
      }
    };
    const parts = p.cat.split("_");
    for (let n = parts.length; n > 0 && out.length < 6; n--) {
      const pre = parts.slice(0, n).join("_");
      D.products.forEach(x => {
        if (x.cat === pre || x.cat.indexOf(pre + "_") === 0) push(x);
      });
    }
    D.trending.map(t => D.byId(t)).filter(Boolean).forEach(push);
    D.products.forEach(push);
    return out;
  })();
  const isFav = fav.indexOf(p.id) > -1;
  const goImg = i => {
    const el = galRef.current;
    if (!el) return;
    const n = images.length;
    const k = (i % n + n) % n;
    const s = el.children[k];
    const left = s ? s.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft : k * el.clientWidth;
    el.scrollTo({
      left: Math.round(left),
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "skipback"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("#/c/" + p.cat),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "arrow-left",
    size: 14
  }), " ", D.catName(p.cat))), /*#__PURE__*/React.createElement("div", {
    className: "pdp-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdp-gal-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdp-gal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "track",
    ref: galRef,
    onTouchStart: e => {
      tsx.current = e.touches[0].clientX;
    },
    onTouchEnd: e => {
      if (tsx.current == null || images.length < 2) return;
      const dx = e.changedTouches[0].clientX - tsx.current;
      tsx.current = null;
      if (dx < -40 && gal.i >= images.length - 1) goImg(0);else if (dx > 40 && gal.i === 0) goImg(images.length - 1);
    }
  }, images.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("img", {
    src: thumb(src),
    alt: p.t + " image " + (i + 1)
  })))), /*#__PURE__*/React.createElement(Dots, {
    i: gal.i,
    n: gal.n
  }), images.length > 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "gal-arr prev",
    onClick: () => goImg(gal.i - 1),
    "aria-label": "Previous image"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "chevron_left",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    className: "gal-arr next",
    onClick: () => goImg(gal.i + 1),
    "aria-label": "Next image"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "chevron_right",
    size: 20
  }))) : null), images.length > 1 ? /*#__PURE__*/React.createElement("div", {
    className: "gal-tw" + (thEdge.l ? " l" : "") + (thEdge.r ? " r" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "gal-thumbs",
    ref: thRef,
    onScroll: thCheck,
    role: "tablist",
    "aria-label": "Product images"
  }, images.map((src, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    role: "tab",
    "aria-selected": gal.i === i,
    "aria-label": "Image " + (i + 1),
    className: "gal-th" + (gal.i === i ? " on" : ""),
    onClick: () => goImg(i)
  }, /*#__PURE__*/React.createElement("img", {
    src: thumb(src),
    alt: ""
  })))), /*#__PURE__*/React.createElement("button", {
    className: "gal-ta prev",
    onClick: () => thPage(-1),
    "aria-label": "Scroll thumbnails left",
    tabIndex: thEdge.l ? 0 : -1
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "chevron_left",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "gal-ta next",
    onClick: () => thPage(1),
    "aria-label": "Scroll thumbnails right",
    tabIndex: thEdge.r ? 0 : -1
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "chevron_right",
    size: 16
  }))) : null), /*#__PURE__*/React.createElement("div", {
    className: "pdp"
  }, /*#__PURE__*/React.createElement("h1", null, p.t), /*#__PURE__*/React.createElement("div", {
    className: "pdp-row" + (p.rc ? "" : " no-rate")
  }, p.rc ? /*#__PURE__*/React.createElement("div", {
    className: "rate"
  }, /*#__PURE__*/React.createElement(Stars, {
    r: p.r,
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    className: "rate-n"
  }, p.r), /*#__PURE__*/React.createElement("span", {
    className: "rate-c"
  }, p.rc + " ratings")) : null, /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", null, "no. " + p.id), p.size ? /*#__PURE__*/React.createElement("span", null, p.size) : null, /*#__PURE__*/React.createElement("span", null, v ? v.fmt : p.fmt), p.online ? /*#__PURE__*/React.createElement("span", null, "Online exclusive") : null)), /*#__PURE__*/React.createElement("div", {
    className: "price"
  }, v ? money(v.price) : priceLabel(p)), v ? /*#__PURE__*/React.createElement("div", {
    className: "fmt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lab"
  }, "Format \u2014 ", v.fmt), /*#__PURE__*/React.createElement("div", {
    className: "fmt-opts",
    role: "radiogroup",
    "aria-label": "Format"
  }, p.formats.map(fid => {
    const f = D.byId(fid);
    const on = f.id === v.id;
    return /*#__PURE__*/React.createElement("button", {
      key: f.id,
      role: "radio",
      "aria-checked": on,
      className: "fmt-o" + (on ? " on" : ""),
      onClick: () => setFmtSel(f.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "fmt-n"
    }, f.fmt), /*#__PURE__*/React.createElement("span", {
      className: "fmt-p"
    }, money(f.price)));
  })), v.digital ? /*#__PURE__*/React.createElement("p", {
    className: "fmt-note"
  }, "Delivered instantly to the Deseret Bookshelf app. Not compatible with Kindle or other e-readers. Digital items can\u2019t be gifted, returned, or refunded.") : null) : null, p.colors ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "lab"
  }, "Color \u2014 ", color), /*#__PURE__*/React.createElement("div", {
    className: "swatches"
  }, p.colors.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.n,
    className: "sw" + (c.n === color ? " on" : ""),
    style: {
      background: c.sw
    },
    onClick: () => {
      setColor(c.n);
      if (galRef.current) galRef.current.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    },
    "aria-label": c.n,
    "aria-pressed": c.n === color
  })))) : null, p.personalize ? /*#__PURE__*/React.createElement(Personalize, {
    z: pz,
    set: setPz
  }) : null, pz.on && !pzReady(pz) ? /*#__PURE__*/React.createElement("p", {
    className: "pz-need"
  }, "Please finish adding an imprint style and a name before adding this item to your bag.") : null, /*#__PURE__*/React.createElement("div", {
    className: "cta",
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "qty",
    role: "group",
    "aria-label": "Quantity"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(Math.max(1, qty - 1)),
    disabled: qty === 1,
    "aria-label": "Decrease quantity"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "minus",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    "aria-live": "polite"
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(Math.min(20, qty + 1)),
    "aria-label": "Increase quantity"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "plus",
    size: 16
  }))), /*#__PURE__*/React.createElement("button", {
    className: "btn-gold",
    disabled: pz.on && !pzReady(pz),
    onClick: () => {
      if (v) {
        add(v, qty, v.fmt, null);
        return;
      }
      add(p, qty, color, pz.on && pzReady(pz) ? {
        style: pz.style,
        text: pz.name
      } : null);
      if (pz.on) setPz(PZ0);
    }
  }, "Add to Bag"), /*#__PURE__*/React.createElement(DS.IconButton, {
    icon: "heart",
    label: "Add to wishlist",
    variant: "outline",
    size: "lg",
    filled: isFav,
    "aria-pressed": isFav,
    onClick: () => toggleFav(p.id),
    style: {
      flex: "0 0 48px",
      ...(isFav ? {
        color: "var(--db-red-300)"
      } : null)
    }
  }))), /*#__PURE__*/React.createElement(PdpTabs, {
    p: p,
    go: go,
    shipMin: shipMin
  })), related.length ? /*#__PURE__*/React.createElement("section", {
    className: "sect sect-yml"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sect-h"
  }, "You May Also Like"), /*#__PURE__*/React.createElement("div", {
    className: "rail"
  }, related.map(r => /*#__PURE__*/React.createElement(ProductCard, {
    key: r.id,
    p: r,
    onOpen: pid => go("#/p/" + pid),
    onAdd: add
  })))) : null);
}
function Bag({
  cart,
  setQty,
  remove,
  go
}) {
  const [placed, setPlaced] = useState(false);
  const lines = cart.map(l => ({
    l,
    p: D.byId(l.id)
  })).filter(x => x.p);
  const sub = lines.reduce((s, x) => s + x.p.price * x.l.q, 0);
  const left = Math.max(0, 49 - sub);
  const ship = sub >= 49 || sub === 0 ? 0 : 5.99;
  if (placed) return /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "check",
    size: 28
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Lora,Georgia,serif",
      fontWeight: 500,
      fontSize: 24,
      margin: 0
    }
  }, "Order Placed"), /*#__PURE__*/React.createElement("p", null, "Thank you. A confirmation is on its way to your email, and your order will ship within two business days."), /*#__PURE__*/React.createElement("button", {
    className: "btn-gold",
    onClick: () => go("#/")
  }, "KEEP SHOPPING"));
  if (!lines.length) return /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "shopping-bag",
    size: 28
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Lora,Georgia,serif",
      fontWeight: 500,
      fontSize: 24,
      margin: 0
    }
  }, "Your Bag Is Empty"), /*#__PURE__*/React.createElement("p", null, "Books, journals, and art and home decor are waiting on the shelves."), /*#__PURE__*/React.createElement("button", {
    className: "btn-gold",
    onClick: () => go("#/")
  }, "START SHOPPING"));
  return /*#__PURE__*/React.createElement("div", {
    className: "bag"
  }, /*#__PURE__*/React.createElement("h1", null, "Shopping Bag"), /*#__PURE__*/React.createElement("div", {
    className: "ship"
  }, left > 0 ? /*#__PURE__*/React.createElement("span", null, "Add ", money(left), " for free shipping.") : /*#__PURE__*/React.createElement("span", null, "Your order ships free."), /*#__PURE__*/React.createElement("span", {
    className: "track"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: Math.min(100, sub / 49 * 100) + "%"
    }
  }))), /*#__PURE__*/React.createElement("div", null, lines.map((x, i) => /*#__PURE__*/React.createElement("div", {
    className: "line",
    key: x.l.key || i
  }, /*#__PURE__*/React.createElement("button", {
    className: "th",
    onClick: () => go("#/p/" + x.p.id)
  }, /*#__PURE__*/React.createElement("img", {
    src: thumb(colorImg(x.p, x.l.color)),
    alt: "",
    loading: "lazy",
    decoding: "async"
  })), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("button", {
    className: "t",
    style: {
      textAlign: "left"
    },
    onClick: () => go("#/p/" + x.p.id)
  }, x.p.t), x.l.color ? /*#__PURE__*/React.createElement("span", {
    className: "c"
  }, x.l.color) : null, x.l.imprint ? /*#__PURE__*/React.createElement("span", {
    className: "c"
  }, "Imprint: \u201c" + x.l.imprint.text + "\u201d, " + x.l.imprint.style) : null, /*#__PURE__*/React.createElement("span", {
    className: "c"
  }, money(x.p.price), " each"), /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qty"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(i, x.l.q - 1),
    "aria-label": "Decrease"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "minus",
    size: 14
  })), /*#__PURE__*/React.createElement("span", null, x.l.q), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(i, x.l.q + 1),
    "aria-label": "Increase"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "plus",
    size: 14
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, money(x.p.price * x.l.q))), /*#__PURE__*/React.createElement("button", {
    className: "rm",
    onClick: () => remove(i)
  }, "Remove"))))), /*#__PURE__*/React.createElement("div", {
    className: "totals"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, money(sub))), /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("span", null, "Shipping"), /*#__PURE__*/React.createElement("span", null, ship ? money(ship) : "Free")), /*#__PURE__*/React.createElement("div", {
    className: "r grand"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, money(sub + ship))), /*#__PURE__*/React.createElement("button", {
    className: "btn-gold",
    style: {
      height: 48,
      padding: "0 24px",
      fontSize: 16,
      marginTop: 8
    },
    onClick: () => setPlaced(true)
  }, "CHECKOUT"), /*#__PURE__*/React.createElement("button", {
    className: "btn-out",
    style: {
      alignSelf: "center"
    },
    onClick: () => go("#/")
  }, "Continue shopping")));
}
function Wishlist({
  fav,
  go,
  add,
  toggleFav,
  user,
  onSignIn
}) {
  if (!user) return /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "heart",
    size: 28
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Lora,Georgia,serif",
      fontWeight: 500,
      fontSize: 24,
      margin: 0
    }
  }, "Sign In to See Your Wishlist"), /*#__PURE__*/React.createElement("p", null, "Your wishlist is saved to your account. Sign in to view it, add saved items to your bag, or remove them."), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "secondary",
    onClick: onSignIn
  }, "Sign in"));
  const items = fav.map(id => D.byId(id)).filter(Boolean);
  if (!items.length) return /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "heart",
    size: 28
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Lora,Georgia,serif",
      fontWeight: 500,
      fontSize: 24,
      margin: 0
    }
  }, "Your Wishlist Is Empty"), /*#__PURE__*/React.createElement("p", null, "Tap the heart on any product to save it for later."), /*#__PURE__*/React.createElement("button", {
    className: "btn-out",
    onClick: () => go("#/")
  }, "Browse the shelves"));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "plp-h"
  }, /*#__PURE__*/React.createElement("h1", null, "Wishlist"), /*#__PURE__*/React.createElement("span", {
    className: "wl-n"
  }, items.length + (items.length === 1 ? " item" : " items"))), /*#__PURE__*/React.createElement("div", {
    className: "wl-list"
  }, items.map(p => /*#__PURE__*/React.createElement("div", {
    className: "line",
    key: p.id
  }, /*#__PURE__*/React.createElement("button", {
    className: "th",
    onClick: () => go("#/p/" + p.id),
    "aria-label": p.t
  }, /*#__PURE__*/React.createElement("img", {
    src: thumb(p.img[0]),
    alt: "",
    loading: "lazy",
    decoding: "async"
  })), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("button", {
    className: "t",
    style: {
      textAlign: "left"
    },
    onClick: () => go("#/p/" + p.id)
  }, p.t), /*#__PURE__*/React.createElement("span", {
    className: "c"
  }, priceLabel(p)), /*#__PURE__*/React.createElement("div", {
    className: "wl-acts"
  }, /*#__PURE__*/React.createElement(DS.Button, {
    size: "sm",
    onClick: () => add(p)
  }, "Add to bag"), /*#__PURE__*/React.createElement("button", {
    className: "rm",
    onClick: () => toggleFav(p.id)
  }, "Remove")))))));
}
function SimplePage({
  title,
  body,
  go,
  links
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("h1", null, title), body.map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, t)), links ? /*#__PURE__*/React.createElement("div", {
    className: "card-list"
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => go("#/")
  }, l, /*#__PURE__*/React.createElement(Ico, {
    name: "arrow-right",
    size: 14
  })))) : null);
}
function Stores({
  go
}) {
  const list = [["Deseret Book \u2014 City Creek", "50 S Main St, Salt Lake City, UT", "Open until 9:00 PM"], ["Deseret Book \u2014 Fort Union", "1110 E Fort Union Blvd, Midvale, UT", "Open until 8:00 PM"], ["Deseret Book \u2014 University Mall", "1200 Towne Centre Blvd, Orem, UT", "Open until 8:00 PM"], ["Deseret Book \u2014 Layton Hills", "1201 N Hill Field Rd, Layton, UT", "Closes at 7:00 PM"]];
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("h1", null, "Find My Store"), /*#__PURE__*/React.createElement("p", null, "The store locator finds the closest store near you. Hours shown are for today."), /*#__PURE__*/React.createElement("div", {
    className: "card-list"
  }, list.map(s => /*#__PURE__*/React.createElement("button", {
    key: s[0],
    onClick: () => go("#/")
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, s[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--muted)"
    }
  }, s[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--teal)"
    }
  }, s[2])), /*#__PURE__*/React.createElement(Ico, {
    name: "store",
    size: 16
  })))));
}
function BlogIndex({
  go
}) {
  const posts = D.featuredContent;
  return /*#__PURE__*/React.createElement("div", {
    className: "blog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blog-mast"
  }, /*#__PURE__*/React.createElement("span", {
    className: "blog-kick"
  }, "Deseret Book"), /*#__PURE__*/React.createElement("h1", {
    className: "blog-h"
  }, "The Blog"), /*#__PURE__*/React.createElement("p", {
    className: "blog-sub"
  }, "Stories, gift guides, and ideas for a life centered on Christ.")), /*#__PURE__*/React.createElement("div", {
    className: "blog-list"
  }, posts.map((c, i) => {
    const p = D.byId(c.pid);
    const src = c.img || p && p.img[0];
    return /*#__PURE__*/React.createElement("article", {
      className: "blog-item",
      key: i,
      onClick: () => go("#/blog/" + i)
    }, /*#__PURE__*/React.createElement("span", {
      className: "blog-thumb"
    }, src ? /*#__PURE__*/React.createElement("img", {
      src: thumb(src),
      alt: "",
      loading: "lazy",
      decoding: "async"
    }) : null), /*#__PURE__*/React.createElement("div", {
      className: "blog-item-b"
    }, /*#__PURE__*/React.createElement("span", {
      className: "ccard-m"
    }, c.date), /*#__PURE__*/React.createElement("h2", {
      className: "blog-item-t"
    }, c.title), /*#__PURE__*/React.createElement("p", {
      className: "ccard-x"
    }, c.x), /*#__PURE__*/React.createElement("span", {
      className: "blog-more"
    }, "Read More")));
  })));
}
function BlogPost({
  i,
  go,
  add
}) {
  const c = D.featuredContent[Number(i)];
  if (!c) return /*#__PURE__*/React.createElement(SimplePage, {
    title: "Post not found",
    body: ["That article isn\u2019t available."],
    go: go
  });
  const p = D.byId(c.pid);
  const src = c.img || p && p.img[0];
  const rest = D.featuredContent.map((o, k) => ({
    o,
    k
  })).filter(x => x.k !== Number(i));
  return /*#__PURE__*/React.createElement("article", {
    className: "blog"
  }, /*#__PURE__*/React.createElement("button", {
    className: "blog-back",
    onClick: () => go("#/blog")
  }, "\u2190 The Blog"), /*#__PURE__*/React.createElement("header", {
    className: "post-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ccard-m"
  }, c.date), /*#__PURE__*/React.createElement("h1", {
    className: "post-h"
  }, c.title)), src ? /*#__PURE__*/React.createElement("span", {
    className: "post-hero"
  }, /*#__PURE__*/React.createElement("img", {
    src: thumb(src),
    alt: "",
    decoding: "async"
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: "post-body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "post-lede"
  }, c.x), /*#__PURE__*/React.createElement("p", null, "This article is a mock stand-in for the Deseret Book blog, included so the prototype stays self-contained.")), p ? /*#__PURE__*/React.createElement("section", {
    className: "post-prod"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sect-h"
  }, "Featured in this post"), /*#__PURE__*/React.createElement("div", {
    className: "rail"
  }, /*#__PURE__*/React.createElement(ProductCard, {
    p: p,
    onOpen: id => go("#/p/" + id),
    onAdd: add
  }))) : null, /*#__PURE__*/React.createElement("section", {
    className: "post-more"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sect-h"
  }, "More from the blog"), /*#__PURE__*/React.createElement("div", {
    className: "blog-list"
  }, rest.map(({
    o,
    k
  }) => /*#__PURE__*/React.createElement("article", {
    className: "blog-item",
    key: k,
    onClick: () => go("#/blog/" + k)
  }, /*#__PURE__*/React.createElement("span", {
    className: "blog-thumb"
  }, o.img ? /*#__PURE__*/React.createElement("img", {
    src: thumb(o.img),
    alt: "",
    loading: "lazy",
    decoding: "async"
  }) : null), /*#__PURE__*/React.createElement("div", {
    className: "blog-item-b"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ccard-m"
  }, o.date), /*#__PURE__*/React.createElement("h3", {
    className: "blog-item-t"
  }, o.title), /*#__PURE__*/React.createElement("span", {
    className: "blog-more"
  }, "Read More")))))));
}
Object.assign(window, {
  Home,
  Category,
  Product,
  Bag,
  Wishlist,
  SimplePage,
  Stores,
  BlogIndex,
  BlogPost
});
/* src/checkout.jsx */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SHIP_METHODS = [{
  id: "standard",
  n: "Standard",
  price: 6.99,
  eta: "Arrives in 5\u20137 business days."
}, {
  id: "priority",
  n: "Priority",
  price: 14.99,
  eta: "Arrives in 2\u20133 business days."
}, {
  id: "express",
  n: "Express",
  price: 29.99,
  eta: "Arrives in 1\u20132 business days."
}];
const shipPrice = (m, net, goal, promo) => m === "standard" && (net >= goal || promo && promo.ship) ? 0 : (SHIP_METHODS.find(x => x.id === m) || SHIP_METHODS[0]).price;
const bagMath = (cart, promo) => {
  const lines = cart.map(l => ({
    l,
    p: D.byId(l.id)
  })).filter(x => x.p);
  const sub = lines.reduce((s, x) => s + x.p.price * x.l.q, 0);
  const disc = promo && promo.off ? sub * promo.off : 0;
  return {
    lines,
    sub,
    disc,
    net: sub - disc,
    count: lines.reduce((s, x) => s + x.l.q, 0)
  };
};
const InfoI = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "8",
  cy: "8",
  r: "8",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("rect", {
  x: "7",
  y: "7",
  width: "2",
  height: "5",
  rx: "1",
  fill: "#fff"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "8",
  cy: "4.6",
  r: "1.1",
  fill: "#fff"
}));
function BagPage({
  cart,
  setQty,
  remove,
  go,
  ship,
  promo,
  setPromo
}) {
  const s = ship || {};
  const goal = s.threshold || 49;
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const {
    lines,
    sub,
    disc,
    net,
    count
  } = bagMath(cart, promo);
  const left = Math.max(0, goal - net);
  const std = shipPrice("standard", net, goal, promo);
  const pct = Math.min(100, net / goal * 100);
  const apply = e => {
    e.preventDefault();
    const k = code.trim().toUpperCase();
    if (PROMOS[k]) {
      setPromo(Object.assign({
        code: k
      }, PROMOS[k]));
      setErr("");
      setCode("");
    } else setErr("That code isn\u2019t valid.");
  };
  if (!lines.length) return /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "shopping-bag",
    size: 28
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Lora,Georgia,serif",
      fontWeight: 500,
      fontSize: 24,
      margin: 0
    }
  }, "Your Bag Is Empty"), /*#__PURE__*/React.createElement("p", null, "Books, journals, and art and home decor are waiting on the shelves."), /*#__PURE__*/React.createElement("button", {
    className: "btn-gold",
    onClick: () => go("#/")
  }, "START SHOPPING"));
  return /*#__PURE__*/React.createElement("div", {
    className: "bagp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bagp-h"
  }, /*#__PURE__*/React.createElement("h1", null, "Shopping Bag"), /*#__PURE__*/React.createElement("span", null, count, " ", count === 1 ? "item" : "items")), /*#__PURE__*/React.createElement("div", {
    className: "bagp-g"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bagp-l"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ship",
    style: {
      "--ship-accent": s.accent || "var(--db-green-400)",
      "--ship-h": (s.height || 6) + "px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ship-t"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: left > 0 ? "truck" : "check",
    size: 14
  })), left > 0 ? /*#__PURE__*/React.createElement("span", null, "You\u2019re ", money(left), " away from ", /*#__PURE__*/React.createElement("strong", null, "free shipping"), ".") : /*#__PURE__*/React.createElement("span", null, "Your order ships ", /*#__PURE__*/React.createElement("strong", null, "free"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "ship-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ship-track"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: pct + "%"
    }
  })), s.goalMark ? /*#__PURE__*/React.createElement("span", {
    className: "ship-goal"
  }, money(goal).replace(".00", "")) : null)), lines.map((x, i) => /*#__PURE__*/React.createElement("div", {
    className: "line",
    key: x.l.key || i
  }, /*#__PURE__*/React.createElement("button", {
    className: "th",
    onClick: () => go("#/p/" + x.p.id)
  }, /*#__PURE__*/React.createElement("img", {
    src: thumb(colorImg(x.p, x.l.color)),
    alt: "",
    loading: "lazy",
    decoding: "async"
  })), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, /*#__PURE__*/React.createElement("button", {
    className: "t",
    style: {
      textAlign: "left"
    },
    onClick: () => go("#/p/" + x.p.id)
  }, x.p.t), x.l.color ? /*#__PURE__*/React.createElement("span", {
    className: "c"
  }, x.l.color) : null, /*#__PURE__*/React.createElement("span", {
    className: "c"
  }, money(x.p.price), " each"), /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qty"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(i, x.l.q - 1),
    "aria-label": "Decrease"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "minus",
    size: 14
  })), /*#__PURE__*/React.createElement("span", null, x.l.q), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(i, x.l.q + 1),
    "aria-label": "Increase"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "plus",
    size: 14
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, money(x.p.price * x.l.q))), /*#__PURE__*/React.createElement("button", {
    className: "rm",
    onClick: () => remove(i)
  }, "Remove"))))), /*#__PURE__*/React.createElement("div", {
    className: "bagp-s"
  }, /*#__PURE__*/React.createElement("h2", null, "Order Summary"), /*#__PURE__*/React.createElement("form", {
    className: "promo-row",
    onSubmit: apply
  }, /*#__PURE__*/React.createElement("label", {
    className: "lab",
    htmlFor: "bagp-promo"
  }, "Promo code"), /*#__PURE__*/React.createElement("div", {
    className: "promo-in"
  }, /*#__PURE__*/React.createElement("input", {
    id: "bagp-promo",
    value: code,
    onChange: e => setCode(e.target.value),
    placeholder: "Enter code",
    autoComplete: "off"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn-out",
    type: "submit",
    style: {
      height: 40,
      padding: "0 20px"
    }
  }, "APPLY")), promo ? /*#__PURE__*/React.createElement("span", {
    className: "promo-ok"
  }, promo.code, " applied \u2014 ", promo.lab, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPromo(null)
  }, "Remove")) : null, err ? /*#__PURE__*/React.createElement("span", {
    className: "promo-err"
  }, err) : null), /*#__PURE__*/React.createElement("div", {
    className: "totals"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, money(sub))), disc ? /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("span", null, "Discount"), /*#__PURE__*/React.createElement("span", null, "\u2212", money(disc))) : null, /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("span", null, "Standard shipping"), /*#__PURE__*/React.createElement("span", null, std ? money(std) : "Free")), /*#__PURE__*/React.createElement("div", {
    className: "r grand"
  }, /*#__PURE__*/React.createElement("span", null, "Estimated total"), /*#__PURE__*/React.createElement("span", null, money(net + std))), /*#__PURE__*/React.createElement("button", {
    className: "btn-gold",
    style: {
      height: 48,
      padding: "0 24px",
      fontSize: 16,
      marginTop: 8
    },
    onClick: () => go("#/checkout")
  }, "CHECKOUT"), /*#__PURE__*/React.createElement("button", {
    className: "btn-out",
    style: {
      alignSelf: "center"
    },
    onClick: () => go("#/")
  }, "Continue shopping")))));
}
function CoField({
  id,
  label,
  err,
  half,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "co-f" + (half ? " half" : "")
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    className: err ? "err" : ""
  }, rest)), err ? /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, err) : null);
}
function CoSummary({
  m,
  method,
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "co-sum"
  }, /*#__PURE__*/React.createElement("div", {
    className: "co-sum-t"
  }, /*#__PURE__*/React.createElement("h2", null, "Order Summary"), /*#__PURE__*/React.createElement("button", {
    className: "co-link",
    onClick: () => go("#/bag")
  }, "Edit bag")), /*#__PURE__*/React.createElement("div", {
    className: "co-sum-b"
  }, m.lines.map((x, i) => /*#__PURE__*/React.createElement("div", {
    className: "co-li",
    key: x.l.key || i
  }, /*#__PURE__*/React.createElement("span", {
    className: "co-th"
  }, /*#__PURE__*/React.createElement("img", {
    src: thumb(colorImg(x.p, x.l.color)),
    alt: ""
  }), /*#__PURE__*/React.createElement("i", null, x.l.q)), /*#__PURE__*/React.createElement("span", {
    className: "co-lt"
  }, x.p.t, x.l.color ? /*#__PURE__*/React.createElement("em", null, x.l.color) : null), /*#__PURE__*/React.createElement("span", null, money(x.p.price * x.l.q))))), /*#__PURE__*/React.createElement("div", {
    className: "co-sum-f"
  }, /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, money(m.sub))), m.disc ? /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("span", null, "Discount"), /*#__PURE__*/React.createElement("span", null, "\u2212", money(m.disc))) : null, /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, /*#__PURE__*/React.createElement("span", null, "Shipping"), /*#__PURE__*/React.createElement("span", null, method ? money(method) : "Free")), /*#__PURE__*/React.createElement("div", {
    className: "r grand"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, money(m.net + method)))));
}
function Checkout({
  cart,
  user,
  setUser,
  promo,
  ship,
  go,
  clear,
  flash
}) {
  const goal = ship && ship.threshold || 49;
  const m = bagMath(cart, promo);
  const [step, setStep] = useState(user ? 2 : 1);
  const [tab, setTab] = useState("create");
  const [guest, setGuest] = useState(false);
  const [f, setF] = useState({
    name: user ? user.name : "Sarah Johnson",
    email: user ? user.email : "sarah.johnson@example.com",
    pw: user ? "" : "password123",
    addr: "57 W South Temple",
    apt: "",
    city: "Salt Lake City",
    st: "UT",
    zip: "84101",
    phone: "(801) 555-0142",
    card: "4242 4242 4242 4242",
    exp: "08/29",
    cvc: "123",
    cname: user ? user.name : "Sarah Johnson"
  });
  const [errs, setErrs] = useState({});
  const [method, setMethod] = useState("standard");
  const [tip, setTip] = useState(null);
  const [gift, setGift] = useState(false);
  const [done, setDone] = useState(null);
  const set = k => e => setF(Object.assign({}, f, {
    [k]: e.target.value
  }));
  const shipCost = shipPrice(method, m.net, goal, promo);
  const email = v => /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(v);
  const check = rules => {
    const e = {};
    rules.forEach(([k, ok, msg]) => {
      if (!ok) e[k] = msg;
    });
    setErrs(e);
    return !Object.keys(e).length;
  };
  const next = n => {
    setErrs({});
    setStep(n);
    window.scrollTo(0, 0);
  };
  const submitAcct = ev => {
    ev.preventDefault();
    const rules = [["email", email(f.email), "Enter a valid email address."]];
    if (!guest && tab === "create") rules.unshift(["name", f.name.trim().length > 1, "Enter your full name."]);
    if (!guest) rules.push(["pw", f.pw.length >= 4, tab === "create" ? "Choose a password of at least four characters." : "Enter your password."]);
    if (!check(rules)) return;
    if (!guest) {
      const nm = tab === "create" ? f.name.trim() : f.email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
      setUser({
        name: nm,
        email: f.email
      });
      setF(Object.assign({}, f, {
        name: nm,
        pw: ""
      }));
      flash(tab === "create" ? "Account created" : "Signed in as " + nm);
    }
    next(2);
  };
  const submitShip = ev => {
    ev.preventDefault();
    if (!check([["name", f.name.trim().length > 1, "Enter the recipient\u2019s name."], ["addr", f.addr.trim().length > 3, "Enter a street address."], ["city", f.city.trim().length > 1, "Enter a city."], ["st", f.st.trim().length >= 2, "Enter a state."], ["zip", /^\d{5}(-\d{4})?$/.test(f.zip.trim()), "Enter a five-digit ZIP code."]])) return;
    next(3);
  };
  const place = ev => {
    ev.preventDefault();
    if (!check([["card", f.card.replace(/\s/g, "").length >= 15, "Enter a card number."], ["exp", /^\d{2}\s?\/\s?\d{2}$/.test(f.exp.trim()), "Use MM/YY."], ["cvc", /^\d{3,4}$/.test(f.cvc.trim()), "Enter the security code."]])) return;
    const ordNo = "DB" + String(Date.now()).slice(-7);
    setDone({
      no: ordNo,
      email: f.email,
      total: m.net + shipCost,
      method: SHIP_METHODS.find(x => x.id === method),
      to: f.name + ", " + f.addr + (f.apt ? " " + f.apt : "") + ", " + f.city + ", " + f.st + " " + f.zip,
      last4: f.card.replace(/\s/g, "").slice(-4)
    });
    const mth = SHIP_METHODS.find(x => x.id === method);
    window.DBOrders && window.DBOrders.add({ no: ordNo, items: m.lines.map(x => ({ id: x.p.id, q: x.l.q, color: x.l.color, imprint: x.l.imprint || null })), gift: gift, sub: m.net, ship: shipCost, total: m.net + shipCost, method: mth.n, eta: mth.eta, to: f.name + ", " + f.addr + (f.apt ? " " + f.apt : "") + ", " + f.city + ", " + f.st + " " + f.zip, last4: f.card.replace(/\s/g, "").slice(-4) });
    clear();
    window.scrollTo(0, 0);
  };
  if (done) return /*#__PURE__*/React.createElement("div", {
    className: "co"
  }, /*#__PURE__*/React.createElement("div", {
    className: "co-done"
  }, /*#__PURE__*/React.createElement("span", {
    className: "co-ok"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "check",
    size: 24
  })), /*#__PURE__*/React.createElement("span", {
    className: "co-eb"
  }, "Order ", done.no), /*#__PURE__*/React.createElement("h1", null, "Thank you for your order"), /*#__PURE__*/React.createElement("p", null, "A confirmation is on its way to ", done.email, ". ", done.method.n, " shipping: ", done.method.eta.replace("Arrives", "arrives")), /*#__PURE__*/React.createElement("div", {
    className: "co-rev",
    style: { alignSelf: "stretch" }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", { className: "co-lab" }, "Ship to"), /*#__PURE__*/React.createElement("span", null, done.to)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", { className: "co-lab" }, "Payment"), /*#__PURE__*/React.createElement("span", null, "Card ending ", done.last4))), /*#__PURE__*/React.createElement("div", {
    className: "totals",
    style: {
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "r grand"
  }, /*#__PURE__*/React.createElement("span", null, "Total charged"), /*#__PURE__*/React.createElement("span", null, money(done.total)))), /*#__PURE__*/React.createElement("button", {
    className: "btn-teal",
    onClick: () => go("#/account/orders")
  }, "View orders"), /*#__PURE__*/React.createElement("button", {
    className: "co-link",
    onClick: () => go("#/")
  }, "Keep shopping")));
  if (!m.lines.length) return /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "shopping-bag",
    size: 28
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Lora,Georgia,serif",
      fontWeight: 500,
      fontSize: 24,
      margin: 0
    }
  }, "Your Bag Is Empty"), /*#__PURE__*/React.createElement("p", null, "Add something to your bag to check out."), /*#__PURE__*/React.createElement("button", {
    className: "btn-gold",
    onClick: () => go("#/")
  }, "START SHOPPING"));
  const title = step === 1 ? user && !guest ? "You\u2019re signed in" : guest ? "Check out as a guest" : tab === "create" ? "Create your account" : "Welcome back" : step === 2 ? "Shipping" : "Payment & review";
  return /*#__PURE__*/React.createElement("div", {
    className: "co co-wide"
  }, /*#__PURE__*/React.createElement("div", {
    className: "co-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "co-top"
  }, /*#__PURE__*/React.createElement("button", {
    className: "co-back",
    onClick: () => step === 1 ? go("#/bag") : next(step - 1)
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "chevron-left",
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, step === 1 ? "Back to bag" : "Back")), /*#__PURE__*/React.createElement("span", {
    className: "co-eb"
  }, "Step ", step, " of 3")), /*#__PURE__*/React.createElement("div", {
    className: "co-prog",
    "aria-hidden": "true"
  }, [1, 2, 3].map(k => /*#__PURE__*/React.createElement("i", {
    key: k,
    className: k <= step ? "on" : ""
  }))), /*#__PURE__*/React.createElement("h1", null, title), step === 1 ? /*#__PURE__*/React.createElement("form", {
    className: "co-form",
    onSubmit: submitAcct,
    noValidate: true
  }, user ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "co-who"
  }, /*#__PURE__*/React.createElement("span", {
    className: "acct-av"
  }, user.name.slice(0, 1)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, user.name), /*#__PURE__*/React.createElement("span", null, user.email))), /*#__PURE__*/React.createElement("button", {
    className: "btn-teal",
    type: "button",
    onClick: () => next(2)
  }, "Continue")) : guest ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CoField, {
    id: "co-gemail",
    label: "Email",
    type: "email",
    value: f.email,
    onChange: set("email"),
    autoComplete: "email",
    err: errs.email
  }), /*#__PURE__*/React.createElement("p", {
    className: "co-note"
  }, "We\u2019ll send your receipt and tracking here."), /*#__PURE__*/React.createElement("button", {
    className: "btn-teal",
    type: "submit"
  }, "Continue"), /*#__PURE__*/React.createElement("button", {
    className: "co-link",
    type: "button",
    onClick: () => {
      setGuest(false);
      setErrs({});
    }
  }, "Sign in or create an account instead")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "co-seg",
    role: "tablist"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "tab",
    "aria-selected": tab === "create",
    className: tab === "create" ? "on" : "",
    onClick: () => {
      setTab("create");
      setErrs({});
    }
  }, "Create account"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "tab",
    "aria-selected": tab === "signin",
    className: tab === "signin" ? "on" : "",
    onClick: () => {
      setTab("signin");
      setErrs({});
    }
  }, "Sign in")), tab === "create" ? /*#__PURE__*/React.createElement(CoField, {
    id: "co-name",
    label: "Full name",
    value: f.name,
    onChange: set("name"),
    autoComplete: "name",
    err: errs.name
  }) : null, /*#__PURE__*/React.createElement(CoField, {
    id: "co-email",
    label: "Email",
    type: "email",
    value: f.email,
    onChange: set("email"),
    autoComplete: "email",
    err: errs.email
  }), /*#__PURE__*/React.createElement(CoField, {
    id: "co-pw",
    label: "Password",
    type: "password",
    value: f.pw,
    onChange: set("pw"),
    autoComplete: tab === "create" ? "new-password" : "current-password",
    err: errs.pw
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn-teal",
    type: "submit"
  }, tab === "create" ? "Create account" : "Sign in"), /*#__PURE__*/React.createElement("div", {
    className: "co-or"
  }, /*#__PURE__*/React.createElement("span", null, "or")), /*#__PURE__*/React.createElement("button", {
    className: "btn-line",
    type: "button",
    onClick: () => {
      setGuest(true);
      setErrs({});
    }
  }, "Continue as guest"))) : null, step === 2 ? /*#__PURE__*/React.createElement("form", {
    className: "co-form",
    onSubmit: submitShip,
    noValidate: true
  }, /*#__PURE__*/React.createElement(CoField, {
    id: "co-sname",
    label: "Full name",
    value: f.name,
    onChange: set("name"),
    autoComplete: "name",
    err: errs.name
  }), /*#__PURE__*/React.createElement(CoField, {
    id: "co-addr",
    label: "Street address",
    value: f.addr,
    onChange: set("addr"),
    autoComplete: "address-line1",
    err: errs.addr
  }), /*#__PURE__*/React.createElement(CoField, {
    id: "co-apt",
    label: "Apartment, suite, etc. (optional)",
    value: f.apt,
    onChange: set("apt"),
    autoComplete: "address-line2"
  }), /*#__PURE__*/React.createElement(CoField, {
    id: "co-city",
    label: "City",
    value: f.city,
    onChange: set("city"),
    autoComplete: "address-level2",
    err: errs.city
  }), /*#__PURE__*/React.createElement("div", {
    className: "co-row"
  }, /*#__PURE__*/React.createElement(CoField, {
    id: "co-st",
    label: "State",
    value: f.st,
    onChange: set("st"),
    autoComplete: "address-level1",
    maxLength: 14,
    err: errs.st
  }), /*#__PURE__*/React.createElement(CoField, {
    id: "co-zip",
    label: "ZIP code",
    value: f.zip,
    onChange: set("zip"),
    autoComplete: "postal-code",
    inputMode: "numeric",
    err: errs.zip
  })), /*#__PURE__*/React.createElement(CoField, {
    id: "co-phone",
    label: "Phone (optional)",
    type: "tel",
    value: f.phone,
    onChange: set("phone"),
    autoComplete: "tel"
  }), /*#__PURE__*/React.createElement("fieldset", {
    className: "co-box"
  }, /*#__PURE__*/React.createElement("legend", null, "Shipping Method:"), SHIP_METHODS.map(x => {
    const p = shipPrice(x.id, m.net, goal, promo);
    return /*#__PURE__*/React.createElement("div", {
      className: "co-meth",
      key: x.id
    }, /*#__PURE__*/React.createElement("label", {
      className: "co-rad"
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "co-meth",
      checked: method === x.id,
      onChange: () => setMethod(x.id)
    }), /*#__PURE__*/React.createElement("span", {
      className: "dot"
    }), /*#__PURE__*/React.createElement("span", null, x.n)), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "co-i",
      "aria-label": x.n + " delivery time",
      "aria-expanded": tip === x.id,
      onClick: () => setTip(tip === x.id ? null : x.id)
    }, /*#__PURE__*/React.createElement(InfoI, null)), /*#__PURE__*/React.createElement("span", {
      className: "co-p"
    }, p ? money(p) : "Free"), tip === x.id ? /*#__PURE__*/React.createElement("span", {
      className: "co-tip"
    }, x.eta) : null);
  }), /*#__PURE__*/React.createElement("label", {
    className: "co-chk"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: gift,
    onChange: e => setGift(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    className: "box"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "check",
    size: 14
  })), /*#__PURE__*/React.createElement("span", null, "This is a Gift"))), /*#__PURE__*/React.createElement("button", {
    className: "btn-teal",
    type: "submit"
  }, "Continue to payment")) : null, step === 3 ? /*#__PURE__*/React.createElement("form", {
    className: "co-form",
    onSubmit: place,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "co-rev"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "co-lab"
  }, "Contact"), /*#__PURE__*/React.createElement("span", null, f.email), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "co-link",
    onClick: () => next(1)
  }, "Change")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "co-lab"
  }, "Ship to"), /*#__PURE__*/React.createElement("span", null, f.name, ", ", f.addr, f.apt ? " " + f.apt : "", ", ", f.city, ", ", f.st, " ", f.zip), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "co-link",
    onClick: () => next(2)
  }, "Change")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "co-lab"
  }, "Method"), /*#__PURE__*/React.createElement("span", null, SHIP_METHODS.find(x => x.id === method).n, gift ? " \u00b7 Gift" : ""), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "co-link",
    onClick: () => next(2)
  }, "Change"))), /*#__PURE__*/React.createElement(CoField, {
    id: "co-card",
    label: "Card number",
    value: f.card,
    onChange: set("card"),
    inputMode: "numeric",
    autoComplete: "cc-number",
    placeholder: "1234 5678 9012 3456",
    err: errs.card
  }), /*#__PURE__*/React.createElement("div", {
    className: "co-row"
  }, /*#__PURE__*/React.createElement(CoField, {
    id: "co-exp",
    label: "Expiration",
    value: f.exp,
    onChange: set("exp"),
    autoComplete: "cc-exp",
    placeholder: "MM/YY",
    err: errs.exp
  }), /*#__PURE__*/React.createElement(CoField, {
    id: "co-cvc",
    label: "Security code",
    value: f.cvc,
    onChange: set("cvc"),
    inputMode: "numeric",
    autoComplete: "cc-csc",
    placeholder: "CVC",
    err: errs.cvc
  })), /*#__PURE__*/React.createElement(CoField, {
    id: "co-cname",
    label: "Name on card",
    value: f.cname,
    onChange: set("cname"),
    autoComplete: "cc-name"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn-teal",
    type: "submit"
  }, "Place order")) : null), /*#__PURE__*/React.createElement("aside", {
    className: "co-side"
  }, /*#__PURE__*/React.createElement(CoSummary, {
    m: m,
    method: shipCost,
    go: go
  })));
}
Object.assign(window, {
  BagPage,
  Checkout,
  SHIP_METHODS,
  shipPrice
});
/* src/subscriptions.jsx */
/* Subscriptions overview (#/account/subscriptions). Bookshelf+ "Manage" opens the existing flow at #/account/subscriptions/bookshelf-plus. */
const SUB_RENEW = "October 28, 2026";
const SUB_PRICES = {
  reg: {
    m: 12.99,
    y: 129
  },
  plat: {
    m: 9.99,
    y: 99
  }
};
const SUB_POINTS = "1,240";
const BSP_BENEFITS = ["Unlimited listening and reading across 4,000+ audiobooks and eBooks", "Exclusive podcasts", "New audiobooks on release day"];
const PLAT_BENEFITS = ["Earn rewards on every purchase", "Early access to seasonal releases", "Platinum member price on Bookshelf+"];
const subMoney = n => "$" + n.toFixed(2).replace(/\.00$/, "");
function SubBenefits({
  items
}) {
  return /*#__PURE__*/React.createElement("ul", {
    className: "sub-ben"
  }, items.map(b => /*#__PURE__*/React.createElement("li", {
    key: b
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "check",
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, b))));
}
function SubRow({
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sub-row"
  }, /*#__PURE__*/React.createElement("dt", null, k), /*#__PURE__*/React.createElement("dd", null, v));
}
function BspLogo() {
  return /*#__PURE__*/React.createElement("img", {
    className: "sub-logo",
    src: window.__resources && window.__resources.bsplus || "assets/bookshelfplus.svg",
    alt: "Bookshelf+"
  });
}
function Subscriptions({
  user,
  subs,
  go,
  onSignIn,
  onGo,
  onJoinPlatinum,
  onLeavePlatinum
}) {
  const [leave, setLeave] = useState(false);
  const {
    Button,
    Badge,
    Card,
    Dialog
  } = DS;
  if (!user) return /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "user",
    size: 28
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Lora,Georgia,serif",
      fontWeight: 500,
      fontSize: 24,
      margin: 0
    }
  }, "Sign In to See Your Subscriptions"), /*#__PURE__*/React.createElement("p", null, "Your Bookshelf+ plan and Platinum Rewards membership are managed from your account."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onSignIn
  }, "Sign in"));
  const tier = subs.platinum ? SUB_PRICES.plat : SUB_PRICES.reg;
  const yearly = subs.bspPlan === "yearly";
  const price = yearly ? subMoney(tier.y) + "/year" : subMoney(tier.m) + "/month";
  const any = subs.bookshelf || subs.platinum;
  const all = subs.bookshelf && subs.platinum;
  const bsp = /*#__PURE__*/React.createElement(Card, {
    key: "bsp",
    padding: "md",
    className: "sub-c"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub-top"
  }, /*#__PURE__*/React.createElement(BspLogo, null), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Active")), /*#__PURE__*/React.createElement("dl", {
    className: "sub-dl"
  }, /*#__PURE__*/React.createElement(SubRow, {
    k: "Plan",
    v: (yearly ? "Yearly" : "Monthly") + " \u00b7 " + price
  }), /*#__PURE__*/React.createElement(SubRow, {
    k: "Next renewal",
    v: SUB_RENEW
  }), /*#__PURE__*/React.createElement(SubRow, {
    k: "Billed to",
    v: "Visa ending in 4242"
  })), subs.platinum ? /*#__PURE__*/React.createElement("p", {
    className: "sub-note"
  }, "Platinum member price, applied automatically") : null, /*#__PURE__*/React.createElement("div", {
    className: "sub-acts"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => go("#/account/subscriptions/bookshelf-plus")
  }, "Manage"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => go("#/bookshelf-plus")
  }, "Open library")));
  const plat = /*#__PURE__*/React.createElement(Card, {
    key: "plat",
    padding: "md",
    className: "sub-c"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sub-top"
  }, /*#__PURE__*/React.createElement("h3", null, "Platinum Rewards"), /*#__PURE__*/React.createElement(Badge, {
    tone: "charcoal"
  }, "Member")), /*#__PURE__*/React.createElement("div", {
    className: "sub-pts"
  }, /*#__PURE__*/React.createElement("strong", null, SUB_POINTS), /*#__PURE__*/React.createElement("span", null, "points")), /*#__PURE__*/React.createElement("dl", {
    className: "sub-dl"
  }, /*#__PURE__*/React.createElement(SubRow, {
    k: "Tier",
    v: "Platinum"
  }), /*#__PURE__*/React.createElement(SubRow, {
    k: "Cost",
    v: "Free"
  })), /*#__PURE__*/React.createElement(SubBenefits, {
    items: PLAT_BENEFITS
  }), /*#__PURE__*/React.createElement("div", {
    className: "sub-acts"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => onGo("Platinum Rewards")
  }, "View rewards"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setLeave(true)
  }, "Leave program")));
  const bspPromo = /*#__PURE__*/React.createElement(Card, {
    key: "bsp-p",
    ground: "pearl",
    bordered: false,
    padding: "md",
    className: "sub-c"
  }, /*#__PURE__*/React.createElement(BspLogo, null), /*#__PURE__*/React.createElement("h3", null, "Your digital library and audiobooks"), /*#__PURE__*/React.createElement(SubBenefits, {
    items: BSP_BENEFITS
  }), /*#__PURE__*/React.createElement("p", {
    className: "sub-note"
  }, "Try it free for 14 days. Cancel before the trial ends and you won\u2019t be charged."), /*#__PURE__*/React.createElement("div", {
    className: "sub-acts"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go("#/bookshelf-plus")
  }, "Start free trial")));
  const platPromo = /*#__PURE__*/React.createElement(Card, {
    key: "plat-p",
    ground: "pearl",
    bordered: false,
    padding: "md",
    className: "sub-c"
  }, /*#__PURE__*/React.createElement("h3", null, "Platinum Rewards"), /*#__PURE__*/React.createElement("p", {
    className: "sub-lede"
  }, "Free to join. Membership starts the moment you sign up."), /*#__PURE__*/React.createElement(SubBenefits, {
    items: PLAT_BENEFITS
  }), /*#__PURE__*/React.createElement("div", {
    className: "sub-acts"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onJoinPlatinum
  }, "Join free")));
  return /*#__PURE__*/React.createElement("div", {
    className: "subs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subs-h"
  }, /*#__PURE__*/React.createElement("span", {
    className: "subs-eb"
  }, "My Account"), /*#__PURE__*/React.createElement("h1", null, "Subscriptions"), !any ? /*#__PURE__*/React.createElement("p", null, "You don\u2019t have any subscriptions yet. Both are available with your account.") : null), any ? /*#__PURE__*/React.createElement("section", {
    className: "subs-sec"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "subs-lab"
  }, "Your subscriptions"), /*#__PURE__*/React.createElement("div", {
    className: "subs-grid"
  }, [subs.bookshelf ? bsp : null, subs.platinum ? plat : null])) : null, !all ? /*#__PURE__*/React.createElement("section", {
    className: "subs-sec"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "subs-lab"
  }, any ? "Also available" : "Available to you"), /*#__PURE__*/React.createElement("div", {
    className: "subs-grid"
  }, [!subs.bookshelf ? bspPromo : null, !subs.platinum ? platPromo : null])) : null, /*#__PURE__*/React.createElement(Dialog, {
    open: leave,
    title: "Leave Platinum Rewards?",
    description: "You\u2019ll lose your " + SUB_POINTS + " points" + (subs.bookshelf ? " and the Platinum price on Bookshelf+" : "") + ". You can join again any time.",
    onClose: () => setLeave(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setLeave(false)
    }, "Stay a member"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => {
        setLeave(false);
        onLeavePlatinum();
      }
    }, "Leave program"))
  }));
}
/* src/app.jsx */
const CART_KEY = "db-mobile-cart",
  FAV_KEY = "db-mobile-fav",
  USER_KEY = "db-mobile-user";
const load = (k, d) => {
  try {
    const v = JSON.parse(localStorage.getItem(k));
    return v || d;
  } catch (e) {
    return d;
  }
};
const STATIC_PAGES = {
  "Check Order": ["Enter an order number and the email used at checkout to see where a shipment is."],
  "Purchase an eGift Card": ["eGift cards arrive by email, usually within a few minutes, in amounts from $10 to $500."],
  "Gift Card Balance": ["Enter a card number and PIN to see the remaining balance."],
  "Platinum Rewards": ["Platinum Rewards members earn on every purchase and get early access to seasonal releases."],
  "Request a Catalog": ["Catalogs mail four times a year \u2014 spring, summer, fall, and Christmas."],
  "Contact Us": ["Customer service is available Monday through Friday, 8:00 AM to 6:00 PM Mountain Time, at 1-800-453-4532."],
  "Questions & Support": ["Answers to the most common questions about orders, shipping, digital books, and returns."],
  "Shipping & Returns": ["Free shipping on orders $49+ for standard domestic US. Surcharges still apply for large items.", "Returns are accepted within 30 days of delivery. Imprinted and personalized items are non-returnable."],
  "Do Not Sell My Information": ["Submit a request to opt out of the sale or sharing of personal information."],
  "Deseret Book Store Locations": ["Deseret Book has stores across Utah, Idaho, Arizona, Nevada, and Texas."],
  "About Deseret Book": ["Deseret Book has published and sold books for Latter-day Saint readers since 1866 \u2014 resources to build faith, strengthen families, and promote personal virtues."],
  "Careers": ["Openings across retail, publishing, distribution, and technology."],
  "Terms of Use": ["The terms that govern use of this site and the purchase of physical and digital goods."],
  "Privacy Policy": ["How personal information is collected, used, and protected."],
  "Deseret Book Events": ["Author signings, firesides, and Deseret Book Presents events through the year."],
  "Deseret Book Blog": ["Reading lists, author interviews, and study helps, published weekly."],
  "Browse All Categories": ["Every shelf in one place."],
  "Facebook": ["Follow Deseret Book on Facebook for new releases and event news."],
  "Instagram": ["Follow Deseret Book on Instagram for new releases and event news."]
};
const SHIP = {
  shipStyle: "bar",
  shipAccent: "var(--db-green-400)",
  shipHeight: 6,
  shipThreshold: 49,
  shipGoalMark: true
};
const FLOW = !!window.CHECKOUT_FLOW;

/* Bookshelf+ pages (src/build/bookshelf-pages.js) rendered inside the site shell. */
const BSP_ROUTES = {
  "#/bookshelf-plus": "general",
  "#/bookshelf-plus/v2": "general-v2",
  "#/bookshelf-plus/platinum": "general-platinum",
  "#/bookshelf-plus/fiction": "fiction",
  "#/bookshelf-plus/fiction-platinum": "fiction-platinum",
  "#/account/subscriptions/bookshelf-plus": "subscriptions"
};
/* Subscription state comes from the Tweaks panel in Concept F.html (db-subs event). */
const SUBS_DEFAULT = {
  platinum: true,
  bookshelf: true,
  bspPlan: "monthly"
};
function BookshelfPage({
  k,
  props
}) {
  const P = (window.BSP_PAGES || {})[k];
  const local = e => {
    const el = e.target.closest && e.target.closest("a[href^='#']");
    if (!el || e.defaultPrevented) return;
    const href = el.getAttribute("href");
    if (href.indexOf("#/") === 0) return;
    e.preventDefault();
    const t = href.length > 1 && document.getElementById(href.slice(1));
    if (t) window.scrollTo(0, t.getBoundingClientRect().top + window.scrollY - 80);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bsp-page",
    "data-bsp": k,
    onClick: local
  }, P ? /*#__PURE__*/React.createElement(P, props || {}) : null);
}
function App() {
  const t = SHIP;
  const [bagPromo, setBagPromo] = useState(null);
  const ROUTE_KEY = "db-route:" + location.pathname;
  const [route, setRoute] = useState(() => {
    if (location.hash) return location.hash;
    const r = sessionStorage.getItem(ROUTE_KEY);
    if (r && r !== "#/") {
      try {
        history.replaceState(null, "", r);
      } catch (e) {}
      return r;
    }
    return "#/";
  });
  useEffect(() => {
    sessionStorage.setItem(ROUTE_KEY, route);
  }, [route]);
  const [cart, setCart] = useState(() => load(CART_KEY, []));
  const [fav, setFav] = useState(() => load(FAV_KEY, []));
  const [menu, setMenu] = useState(false);
  const [bag, setBag] = useState(false);
  const [acct, setAcct] = useState(false);
  const [user, setUser] = useState(() => load(USER_KEY, null));
  const [search, setSearch] = useState(false);
  const [toast, setToast] = useState(null);
  const [page, setPage] = useState(null);
  const timer = useRef(null);
  const pendingFav = useRef(null);
  const [subs, setSubs] = useState(() => Object.assign({}, SUBS_DEFAULT, window.DB_SUBS || {}));
  useEffect(() => {
    const h = e => setSubs(Object.assign({}, SUBS_DEFAULT, e.detail));
    window.addEventListener("db-subs", h);
    return () => window.removeEventListener("db-subs", h);
  }, []);
  useEffect(() => {
    const h = () => {
      setRoute(location.hash || "#/");
      setMenu(false);
      setSearch(false);
      setBag(false);
      setAcct(false);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem(FAV_KEY, JSON.stringify(fav));
  }, [fav]);
  useEffect(() => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    window.DB_USER = user;
  }, [user]);
  useEffect(() => {
    const h = e => {
      const d = e.detail || {};
      setSubs(s => Object.assign({}, s, { bookshelf: true, bspPlan: d.plan || s.bspPlan }));
      setUser(u => u || d.user || null);
    };
    window.addEventListener("db-bsp-subscribed", h);
    return () => window.removeEventListener("db-bsp-subscribed", h);
  }, []);
  const go = hash => {
    if (location.hash === hash) {
      setMenu(false);
      setSearch(false);
      window.scrollTo(0, 0);
    } else location.hash = hash;
  };
  const flash = (msg, action, tone) => {
    setToast({
      msg,
      action,
      tone,
      id: Date.now()
    });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 3200);
  };
  const add = (p, q, color, imprint) => {
    const qty = q || 1;
    const lk = (id, col, im) => id + "|" + (col || "") + "|" + (im ? im.style + ":" + im.text : "");
    setCart(c => {
      const k = lk(p.id, color, imprint);
      const i = c.findIndex(l => lk(l.id, l.color, l.imprint) === k);
      if (i > -1) {
        const n = c.slice();
        n[i] = Object.assign({}, n[i], {
          q: n[i].q + qty
        });
        return n;
      }
      return c.concat([{
        id: p.id,
        q: qty,
        color: color || null,
        imprint: imprint || null,
        key: k + "-" + Date.now()
      }]);
    });
    flash((qty > 1 ? qty + " \u00d7 " : "") + "Added to your bag", "View bag", "ok");
  };
  const setQty = (i, q) => setCart(c => q < 1 ? c.filter((_, k) => k !== i) : c.map((l, k) => k === i ? Object.assign({}, l, {
    q: Math.min(20, q)
  }) : l));
  const remove = i => setCart(c => c.filter((_, k) => k !== i));
  const toggleFav = id => {
    if (!user) {
      pendingFav.current = id;
      setMenu(false);
      setSearch(false);
      setBag(false);
      setAcct(true);
      flash("Sign in to save items to your wishlist");
      return;
    }
    setFav(f => {
      const on = f.indexOf(id) > -1;
      flash(on ? "Removed from wishlist" : "Saved to your wishlist", null, on ? null : "ok");
      return on ? f.filter(x => x !== id) : f.concat([id]);
    });
  };
  const openPage = label => {
    if (label === "My Account") {
      setMenu(false);
      setSearch(false);
      setBag(false);
      setAcct(true);
      return;
    }
    if (label === "Bookshelf Plus") {
      setAcct(false);
      go("#/bookshelf-plus");
      return;
    }
    if (label === "Orders") {
      setAcct(false);
      go("#/account/orders");
      return;
    }
    if (label === "Subscriptions") {
      setAcct(false);
      go("#/account/subscriptions");
      return;
    }
    if (label === "Deseret Book Blog") {
      setMenu(false);
      setSearch(false);
      setBag(false);
      setAcct(false);
      go("#/blog");
      return;
    }
    setPage(label);
    go("#/page");
  };
  const count = cart.reduce((s, l) => s + l.q, 0);
  let body;
  const isHome = !(route.indexOf("#/c/") === 0 || route.indexOf("#/p/") === 0 || route.indexOf("#/blog") === 0 || route.indexOf("#/page/") === 0 || route.indexOf("#/bookshelf-plus") === 0 || route.indexOf("#/account") === 0 || ["#/wishlist", "#/stores", "#/page", "#/bag", "#/checkout"].indexOf(route) >= 0);
  const shipCfg = {
    style: t.shipStyle,
    accent: t.shipAccent,
    height: t.shipHeight,
    threshold: t.shipThreshold,
    goalMark: t.shipGoalMark,
    std: FLOW ? 6.99 : 5.99
  };
  if (route.indexOf("#/c/") === 0) body = /*#__PURE__*/React.createElement(Category, {
    id: route.slice(4),
    go: go,
    add: add
  });else if (route.indexOf("#/p/") === 0) body = /*#__PURE__*/React.createElement(Product, {
    id: route.slice(4),
    go: go,
    add: add,
    fav: user ? fav : [],
    toggleFav: toggleFav,
    shipMin: t.shipThreshold
  });else if (route.indexOf("#/blog/") === 0) body = /*#__PURE__*/React.createElement(BlogPost, {
    i: route.slice(7),
    go: go,
    add: add
  });else if (route === "#/blog") body = /*#__PURE__*/React.createElement(BlogIndex, {
    go: go
  });else if (route === "#/wishlist") body = /*#__PURE__*/React.createElement(Wishlist, {
    fav: fav,
    go: go,
    add: add,
    toggleFav: toggleFav,
    user: user,
    onSignIn: () => setAcct(true)
  });else if (FLOW && route === "#/bag") body = /*#__PURE__*/React.createElement(BagPage, {
    cart: cart,
    setQty: setQty,
    remove: remove,
    go: go,
    ship: shipCfg,
    promo: bagPromo,
    setPromo: setBagPromo
  });else if (FLOW && route === "#/checkout") body = /*#__PURE__*/React.createElement(Checkout, {
    cart: cart,
    user: user,
    setUser: setUser,
    promo: bagPromo,
    ship: shipCfg,
    go: go,
    clear: () => {
      setCart([]);
      setBagPromo(null);
    },
    flash: flash
  });else if (route === "#/stores") body = /*#__PURE__*/React.createElement(Stores, {
    go: go
  });else if (route.indexOf("#/account/orders") === 0) body = /*#__PURE__*/React.createElement(window.Orders, {
    key: route,
    id: decodeURIComponent(route.slice(17)),
    user: user,
    go: go,
    onSignIn: () => setAcct(true)
  });else if (route === "#/account/subscriptions") body = /*#__PURE__*/React.createElement(Subscriptions, {
    user: user,
    subs: subs,
    go: go,
    onSignIn: () => setAcct(true),
    onGo: openPage,
    onJoinPlatinum: () => {
      setSubs(s => Object.assign({}, s, {
        platinum: true
      }));
      flash("Welcome to Platinum Rewards", null, "ok");
    },
    onLeavePlatinum: () => {
      setSubs(s => Object.assign({}, s, {
        platinum: false
      }));
      flash("You\u2019ve left Platinum Rewards");
    }
  });else if (BSP_ROUTES[route]) body = /*#__PURE__*/React.createElement(BookshelfPage, {
    key: route,
    k: BSP_ROUTES[route],
    props: route === "#/account/subscriptions/bookshelf-plus" ? {
      platinum: subs.platinum,
      plan: subs.bspPlan,
      startScreen: "details",
      onExit: () => go("#/account/subscriptions")
    } : null
  });else if (route.indexOf("#/page/") === 0) {
    const pl = decodeURIComponent(route.slice(7));
    body = /*#__PURE__*/React.createElement(SimplePage, {
      title: pl,
      body: (STATIC_PAGES[pl] || ["More detail lives on deseretbook.com."]).map(s => s.split("$49").join("$" + t.shipThreshold)),
      go: go
    });
  } else if (route === "#/page") body = /*#__PURE__*/React.createElement(SimplePage, {
    title: page || "Deseret Book",
    body: (STATIC_PAGES[page] || ["More detail lives on deseretbook.com."]).map(s => s.split("$49").join("$" + t.shipThreshold)),
    go: go
  });else body = /*#__PURE__*/React.createElement(Home, {
    go: go,
    add: add
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement(Header, {
    noAnn: route.indexOf("#/bookshelf-plus") === 0 || route.indexOf("#/account") === 0 || route === "#/wishlist" || !!BSP_ROUTES[route] || (route === "#/page" && ["Addresses", "Payment methods", "Email preferences", "Platinum Rewards"].indexOf(page) > -1),
    count: count,
    user: user,
    onMenu: () => {
      setSearch(false);
      setBag(false);
      setAcct(false);
      setMenu(true);
    },
    onSearch: () => {
      setMenu(false);
      setBag(false);
      setAcct(false);
      setSearch(true);
    },
    onHome: () => go("#/"),
    onBag: () => {
      setMenu(false);
      setSearch(false);
      setAcct(false);
      setBag(true);
    },
    onAccount: () => {
      setMenu(false);
      setSearch(false);
      setBag(false);
      setAcct(true);
    },
    search: search,
    onCloseSearch: () => setSearch(false),
    onOpenProduct: id => go("#/p/" + id),
    onGoCat: id => go("#/c/" + id),
    shipMin: t.shipThreshold
  }), /*#__PURE__*/React.createElement("main", null, body), route.indexOf("#/p/") === 0 ? /*#__PURE__*/React.createElement(Newsletter, null) : null, /*#__PURE__*/React.createElement(Footer, {
    onGo: openPage,
    onStore: () => go("#/stores")
  }), /*#__PURE__*/React.createElement("div", {
    className: "ovh"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scrim" + (menu || search || bag || acct ? " on" : ""),
    onClick: () => {
      setMenu(false);
      setSearch(false);
      setBag(false);
      setAcct(false);
    }
  }), /*#__PURE__*/React.createElement(Drawer, {
    open: menu,
    onClose: () => setMenu(false),
    onGo: id => go("#/c/" + id),
    onAccount: () => setAcct(true),
    user: user
  }), /*#__PURE__*/React.createElement(BagDrawer, {
    open: bag,
    onClose: () => setBag(false),
    cart: cart,
    setQty: setQty,
    remove: remove,
    clear: () => setCart([]),
    go: go,
    ship: shipCfg,
    onViewBag: FLOW ? p => {
      setBagPromo(p);
      setBag(false);
      go("#/bag");
    } : null,
    onCheckout: FLOW ? p => {
      setBagPromo(p);
      setBag(false);
      go("#/checkout");
    } : null
  }), /*#__PURE__*/React.createElement(Toast, {
    on: !!toast,
    seq: toast ? toast.id : 0,
    tone: toast ? toast.tone : null,
    msg: toast ? toast.msg : "",
    action: toast ? toast.action : null,
    onAction: () => {
      setToast(null);
      setBag(true);
    }
  }), /*#__PURE__*/React.createElement(AccountDrawer, {
    open: acct,
    onClose: () => setAcct(false),
    user: user,
    subs: subs,
    onSignIn: u => {
      setUser(u);
      const pf = pendingFav.current;
      pendingFav.current = null;
      if (pf) {
        setFav(f => f.indexOf(pf) > -1 ? f : f.concat([pf]));
        setAcct(false);
        flash("Signed in as " + u.name + ". Saved to your wishlist", null, "ok");
      } else flash("Signed in as " + u.name, null, "ok");
    },
    onSignOut: () => {
      setUser(null);
      flash("Signed out");
    },
    onGo: openPage,
    onWishlist: () => go("#/wishlist")
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
