/* Real Deseret Book product data + image URLs (deseretbook.com / images.deseretbook.io) */
(function () {
  const IB = "https://images.deseretbook.io/api/v1.1/rn/public_files/pim/assets/3e/1e/de/64/64de1e3e6974570001d45a2c/images/";
  const FB = IB; /* same CDN host: plytix-backed assets serve from images.deseretbook.io too */
  const I = (p) => IB + p + "?s=1000x1000&t=JPEG&v=2";
  const F = (p) => FB + p + "?s=1000x1000&t=JPEG&v=2";
  const dbl = (n) => n + "/" + n;

  const P = [
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

    { id: "P6096125", t: "Quad Combination Simulated Leather, Regular, Indexed (Limited Edition Color)", by: "Deseret Book", price: 79, r: 3.8, rc: 58, cat: "church-resources_scriptures_scripture-essentials", fmt: "Faux-Leather", size: "5.25\" x 7.25\"", online: true,
      colors: [
        { n: "Rosewood", sw: "#b98f92", img: I("9e/9b/03/6a/6a039b9e083e55fa84334fdb/" + dbl("6096125_PRODGALLERY_SIMULATED-LEATHER-QUAD-COMBINATION-REGULAR-ROSEWOOD_4oheo8.jpg")) },
        { n: "Teal", sw: "#79c4bd", img: I("a4/9b/03/6a/6a039ba4fbcf04ee5222ec7e/" + dbl("6096126_PRODGALLERY_SIMULATED-LEATHER-QUAD-COMBINATION-REGULAR-TEAL_8blt92.jpg")) },
        { n: "Taupe Pearl", sw: "#cdb6a4", img: I("a6/9b/03/6a/6a039ba6083e55fa84334fdd/" + dbl("6096127_PRODGALLERY_SIMULATED-LEATHER-QUAD-COMBINATION-REGULAR-TAUPE-PEARL_ybbc0g.jpg")) }],
      img: [I("7f/a3/03/6a/6a03a37ffbcf04ee5222edbf/" + dbl("P6096125_HERO_SIMULATED-LEATHER-QUAD-COMBINATION-REGULAR_exl7om.jpg")), I("a5/9b/03/6a/6a039ba5fbcf04ee5222ec7f/" + dbl("6096125_PRODGALLERY_SIMULATED-LEATHER-QUAD-COMBINATION-REGULAR-ROSEWOOD_INSIDE_hnyn87.jpg")), I("a1/9b/03/6a/6a039ba1fbcf04ee5222ec7c/" + dbl("6096126_PRODGALLERY_SIMULATED-LEATHER-QUAD-COMBINATION-REGULAR-TEAL_INSIDE_tylgkp.jpg")), I("a3/9b/03/6a/6a039ba3fbcf04ee5222ec7d/" + dbl("6096127_PRODGALLERY_SIMULATED-LEATHER-QUAD-COMBINATION-REGULAR-TAUPE-PEARL_INSIDE_imuug2.jpg")), I("db/a4/fb/69/69fba4db4d575ecc21aac7fb/" + dbl("MULTIPLE_PRODGALLERY_SIMULATED-LEATHER-QUAD-COMBINATIONS-REGULAR.jpg"))],
      d: "Limited quantities, while supplies last. These standard-size, simulated leather quadruple combination scriptures are an online exclusive, available in three limited-edition colors: Rosewood, Teal, and Taupe. Each set comes indexed for easy navigation and features gilded edges and a satin ribbon bookmark." },
    { id: "P6074927", t: "Simulated Leather Quad Combination, Regular (Color Options)", by: "Deseret Book", price: 79, r: 4.9, rc: 402, cat: "church-resources_scriptures_scripture-essentials", fmt: "Faux-Leather", size: "5.25\" x 7.25\"",
      colors: [{ n: "Dusty Rose", sw: "#c39ba0" }, { n: "Pacific Blue", sw: "#4d6f8c" }, { n: "Forest Green", sw: "#3f5a45" }, { n: "Walnut Brown", sw: "#7b5b42" }],
      img: [F("02/f8/42/69/6942f802f89a3d2d3c62b42f/P6074927_HERO_SIMULATED-LEATHER-QUAD-REGULAR-COLOR-OPTIONS.png/P6074927_HERO_SIMULATED-LEATHER-QUAD-REGULAR-COLOR-OPTIONS.jpg"), F("f6/8c/b0/69/69b08cf6e18979a989b316f1/" + dbl("scriptureComparison.jpg"))],
      d: "All four standard works in one indexed volume, in four everyday colors. Gilded edges and a satin ribbon bookmark." },
    { id: "P6079208", t: "Simulated Leather Triple Combination, Regular (Color Options)", by: "Deseret Book", price: 45, r: 4.4, rc: 236, cat: "church-resources_scriptures_scripture-essentials", fmt: "Faux-Leather",
      colors: [{ n: "Dusty Rose", sw: "#c39ba0" }, { n: "Pacific Blue", sw: "#4d6f8c" }, { n: "Forest Green", sw: "#3f5a45" }, { n: "Walnut Brown", sw: "#7b5b42" }],
      img: [F("7f/f8/42/69/6942f87ff89a3d2d3c62b431/P6079208_HERO_SIMULATED-LEATHER-TRIPLE-REGULAR-COLOR-OPTIONS.png/P6079208_HERO_SIMULATED-LEATHER-TRIPLE-REGULAR-COLOR-OPTIONS.jpg"), F("b3/a3/cf/67/67cfa3b39ab7822b03cb6023/P6079208_P6079208_none_base_0ed65b28.png/P6079208_P6079208_none_base_0ed65b28.jpg")],
      d: "The Book of Mormon, Doctrine and Covenants, and Pearl of Great Price in one indexed volume." },
    { id: "P6079204", t: "Simulated Leather Holy Bible, Regular (Color Options)", by: "Deseret Book", price: 55, r: 4.2, rc: 194, cat: "church-resources_scriptures_scripture-essentials", fmt: "Faux-Leather",
      colors: [{ n: "Dusty Rose", sw: "#c39ba0" }, { n: "Pacific Blue", sw: "#4d6f8c" }, { n: "Forest Green", sw: "#3f5a45" }, { n: "Walnut Brown", sw: "#7b5b42" }],
      img: [F("2b/f9/42/69/6942f92bfd4ca9120beb5e5e/P6079204_HERO_SIMULATED-LEATHER-HOLY-BIBLE-REGULAR-COLOR-OPTIONS.png/P6079204_HERO_SIMULATED-LEATHER-HOLY-BIBLE-REGULAR-COLOR-OPTIONS.jpg"), F("b5/a3/cf/67/67cfa3b59ab7822b03cb6040/P6079204_P6079204_none_base_70571088.png/P6079204_P6079204_none_base_70571088.jpg")],
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
    { id: "all-categories", n: "Browse All" }
  ];

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
  CAT_NAMES["home_fine-art"] = "Fine Art";
  CAT_NAMES["new-trending"] = "New & Trending";

  window.DB_DATA = {
    products: P,
    nav: NAV,
    catName: (id) => CAT_NAMES[id] || "Products",
    byId: (id) => P.find((p) => p.id === id),
    inCat: (id) => (id === "books_gospel-voices" ? P.filter((p) => p.cat.indexOf("church-resources") === 0).slice(0, 12) : id === "new-trending" ? P.slice() : id === "clearance" ? P.filter((p, i) => i % 2 === 0) : P.filter((p) => p.cat === id || p.cat.indexOf(id) === 0)),
    fineArt: ["P3753740", "6053323", "6087324", "6053281", "P6000078", "6027513"],
    trending: ["6017019", "5254477", "5212882", "6070661", "5255079", "6024672"],
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
    bookshelfLogo: "https://www.deseretbook.com/on/demandware.static/-/Sites-DeseretBooks-Library/default/dw126f46ae/DeseretBookshelfPlusUseOnWhite-2.png",
    footer: {
      ACCOUNT: ["My Account", "Check Order", "Purchase an eGift Card", "Gift Card Balance", "Bookshelf Plus", "Platinum Rewards", "Request a Catalog"],
      "CUSTOMER SERVICE": ["Contact Us", "Questions & Support", "Shipping & Returns", "Do Not Sell My Information", "Deseret Book Store Locations"],
      ABOUT: ["About Deseret Book", "Careers", "Terms of Use", "Privacy Policy", "Deseret Book Events", "Deseret Book Blog", "Browse All Categories"]
    }
  };
})();
