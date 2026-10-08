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
