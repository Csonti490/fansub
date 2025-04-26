/*
Üdv!
Ha éppen ezt a szöveget olvasod, akkor tájékoztatlak arról, hogy...
Az ezen az oldalon található tartalmak más oldalakra való felhasználásához nem járulok hozzá!
Ha esetleg ezen az oldalon (+egyéb másik hozzám tartozó platformos profiljaimon) kívül látod, akkor kérlek írj nekem (skelyxd@gmail.com).
*/

/* |=| Adatbázis |=| */
var iimmgg = `<img src="img/novideo.jpg" alt="Nincs elérhető videó" class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;">`;
var videoSources = {
    series: [
        {
            title: "RWBY: 1.fejezet",
            ti: "Sorozat Szinopszis", // https://rwby.fandom.com/wiki/Volume_1
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_v1.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">Egy fiatal hős, egy fennkölt örökösnő, egy zaklatott szélhámos és egy bulizós lány – Ez az <span class="meaning" title="Ruby Rose, Weiss Schnee, Blake Belladonna, Yang Xiao Long">RWBY</span> négy tagja. Egy csapat, amelyet azért hoztak össze és képeztek ki, hogy leküzdjék Remnant fantasztikus világát sújtó burjánzó gonoszságokat. Ha ez a négy lány el akarja végezni a Beacon Akadémiát, meg kell tanulniuk együtt dolgozni a csatatéren és az osztályteremben egyaránt.<br><br>UI.: A részeket a <a href="https://indavideo.hu/profile/Chihana" title="Chihana Fansub csatija (Indavideó)" target="_blank">Chihana Fansub</a> fordította. <span class="meaning" title="Chihana-Fansub tagjai">(Fordította: Mikurin, Lektorálta: Xia Yixuan)</span></div>`,
            de2: ``,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=1
                {
                    title: "Ruby Rose / Ruby Rose",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/uUByxQAJ#pT618s9yvho7CLbYZIANb2MeBAF9pxdlSLi-Nim1qPI" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Ruby Rose egy rablás kellős közepén találja magát, amelyet a híres bűnöző, Roman Torchwick követett el. A megállítására tett erőfeszítései felkeltik Ozpin professzor, a Beacon Akadémia vezetőjének figyelmét, aki külön felvételt ad neki az iskolájába.</p></div>`
                },
                {
                    title: "The Shining Beacon / A Ragyogó Beacon",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/rFBQ3ZqQ#NJHUUzqpQZE3GcEF_d7ozNVOYiE24yGOViCyI5-EYtQ" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>2. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Ruby új barátra tesz szert, a vacak kardvívó, Jaune Arc személyében az első Beacon-ben töltött napja során.</p></div>`
                },
                {
                    title: "The Shining Beacon, Pt.2 / A Ragyogó Beacon, 2.felvonás",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/SN5ERQoC#213wmJIh--WAqkFiZjdoiVtZQOVy70_bVYR7cTrISec" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>3. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Jaune elköveti azt a hibát, hogy flörtöl Weiss-szal, de barátra lel a sztáratlétában, Pyrrha Nikosban. Mindeközben Ruby elborzad, amikor megtudja Beacon beavatási rituáléjának részleteit.</p></div>`
                },
                {
                    title: "The First Step / Az Első Lépés",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/3Y5x2QiB#xXfZ9tZBgNdcDDp66Zrazb3NVCAxr4pLpzJIzho-Hf0" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>4. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Miután (szó szerint) beleesik a hatalmas Smaragd-erdőbe, Ruby és a többi beavatott tülekednek, hogy új partnereket találjanak, és túléljék Grimm gonosz teremtményeit. Isten hozott az iskolában gyerekek!</p></div>`
                },
                {
                    title: "The First Step, Pt.2 / Az Első Lépés, 2.felvonás",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/DZ5mBJpK#amKYbYRYuLrqEwFK6xiqhPkkomb-nd4mJQ-JPoOLtpI" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>5. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Kölcsönös nemtetszésére Ruby és Weiss párba állnak a beavatás során. Eközben Pyrhha kezet nyújt Jaune-nak, aki a feje fölött lehet Beacon-ben.</p></div>`/*magasabb szinten van*/
                },
                {
                    title: "The Emerald Forest / A Smaragd Erdő",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/Tc5XTBQY#uvPJGeAJqXGKUIXMwhoooZtNjQCWx2Zobn20UycJj1s" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>6. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Yang és Blake boldogan összebarátkoznak, miközben Ruby és Weiss között nő a feszültség.</p></div>`
                },
                {
                    title: "The Emerald Forest, Pt.2 / A Smaragd Erdő, 2. felvonás",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/uNZUFapT#h5CtQPcO6SzcLLZ-i4cQzOgmFI-vmYny5XwlFQ3swBw" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>7. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Blake és Yang dolgai simán mennek, de minden délre megy, amikor a többi pár óriási szörnyekkel a sarkukban megjelenik.</p></div>`
                },
                {
                    title: "Players and Pieces / Játékosok és Darabkák",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/iYYijR4Y#9cVW2RPwPfPP8iI_QyIAWQbr9rcHMukBD1eKHoAbDoo" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>8. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Ruby, Weiss, Blake, Yang, Jaune, Pyrrha és diáktársai, Nora és Ren az életükért küzdenek a Smaragd-erdő szörnyűséges lakói ellen első igazi próbájuk során, mint Vadászok és Vadásznők.</p></div>`
                },
                {
                    title: "The Badge and The Burden / A Jelvény és A Teher",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/ndRVEbCI#nqGEJzuGz9FFePiPZAQZR_BtP9Vt5b202k5yQ6iqv84" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>9. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>A csapatok megalakultak, és elkezdődtek az órák a Beacon-ben, de Weiss nem érti, miért tették meg Rubyt az RWBY irányítására ő helyette. Az ifjú csodagyereknek tényleg megvan a vezetéshez való készsége?</p></div>`
                },
                {
                    title: "The Badge and The Burden, Pt.2 / A Jelvény és A Teher, 2.felvonás",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/GFwg1agL#GR2jRBPlX6ZvjudhSIGQhIVY1fzFp9lFwgQn3uCzugY" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>10. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Miközben Weiss a büszkeségével küszködik, Ruby azon tűnődik, vajon az igazgató hibázott-e, amikor az <span class="meaning" title=" (RWBY) Ruby Rose, Weiss Schnee, Blake Belladonna, Yang Xiao Long">RWBY</span> csapat vezetőjévé tette.</p></div>`
                },
                {
                    title: "Jaunedice / Sárgaság",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/HJx33SYS#gZpN67bKdurmxUBBL_HtOTWmP8Du312ZDDPs8Er5Hcc" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>11. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Jaune, az új Vadászok közül a legkevésbé tehetséges, zaklatástól szenved.</p></div>`
                },
                {
                    title: "Jaunedice, Pt.2 / Sárgaság, 2.felvonás",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/jBBTlQBJ#pCz8EhQnsBiMdivutwZAWtAa9a0nEGrTWceHBFM6BULI" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>12. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Pyrrha egy tervvel áll elő, hogy segítsen Jaune-nak, de a dolgok bonyolulttá válnak, amikor elárulja, hogyan is került az iskolába.</p></div>`
                },
                {
                    title: "Forever Fall / Örök Ősz",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/6IQRGBIR#GWg1VQTQ6sd7o5MInKjSpEtZgg-4oHDeuPnkCSyQ6IU" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>13. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Jaune-t egy-egy szörnyű helyzetbe zsarolják, de amikor Pyrrha egy aljas csínytevés célpontjává válik, szembeszáll kínzóival.</p></div>`
                },
                {
                    title: "Forever Fall, Pt.2 / Örök Ősz, 2.felvonás",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/GRQBTSzA#U9MwucsYpWR3f3hxILMEWlDFHRBjOVZCC5vkCgyGg1g" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>14. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>A „<span class="meaning" title="(Jaune Arc) Jaune is yellow. The Arc siblings are all a color of the rainbow, with one set of twins.">Sárga Ív</span>” megoldásával Jaune mindenkinek megmutatja, hogy valóban van benne potenciál. De vajon helyre tudja-e hozni a barátságát Pyrrhával?</p></div>`
                },
                {
                    title: "The Stray / A Kóborló",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/uZR3kLoS#pNWgBJe1EnB_12DTrGUpGgUvjVFAtO_k2KlyTvMpgec" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>15. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Két új versenyző érkezik a városba a közelgő tornára várva. Blake és Weiss összecsapnak a Faunuszokkal kapcsolatos előítéletek miatt, aminek következtében Blake felfedi sötét múltját.</p></div>`
                },
                {
                    title: "Black and White / Fekete és Fehér",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/OQYAHbTR#aaZfcndxznr9yoz6p1RV7yCXEbVWBh5NWs5aQ-_gZvs" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>16. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Chihana" title="Chihana csatija (Indavideó)" target="_blank">Chihana Fansub</a><br>Az első kötet végén Blake és egy új barátja megpróbálja kideríteni, ki áll a sorozatos lopások mögött, míg az RWBY csapata megpróbálja megtalálni őt, miután megszökött.</p></div>`
                },
            ]
        },
        {
            title: "RWBY: 2.fejezet",
            ti: "Sorozat Szinopszis", //https://rwby.fandom.com/wiki/Volume_2
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_v2.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">Az <span class="meaning" title="Ruby Rose, Weiss Schnee, Blake Belladonna, Yang Xiao Long">RWBY</span> csapat visszatért, és készen áll a második félévre a Beaconnál, de a valódi élet nem áll meg itt. Az órák és a házi feladatok között még időt kell találniuk a világ megmentésére. És a Fehér Agyar, Roman Torchwick és egy titokzatos új trió között minden bizonnyal lesz dolguk!<br><br>UI.: A részeket <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a> fordította.</div>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=2
                {
                    title: "Best Day Ever / Legjobb Nap Valaha",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/6QJ3BQzR#mRGg2XQY_Q7H2AyMh8M73_91Q_0oXr3Bm_1g_-yfHNI" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Zavarosan kezdődik az új szemeszter a Beaconnél, amikor a <span class="meaning" title="Ruby Rose, Weiss Schnee, Blake Belladonna, Yang Xiao Long">RWBY</span> és a <span class="meaning" title="Jaune Arc, Nora Valkyrie, Pyrrha Nikos, Lie Ren">JNPR</span> csapatok kiütős, elhúzódó ételharcban vágnak neki. Eközben baljós erők gyülekeznek, készen arra, hogy lecsapjanak egy gyanútlan királyságra.</p></div>`
                },
                {
                    title: "Welcome to Beacon / Üdv Beacon-ben",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/jQQ0ULpR#UvvP6aJQmh_h3RPNZMZ3GBc6hxzemCapGdP5TL-dZiI" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>2. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Blake, aki Torchwickkel való találkozása óta nyugtalan, meggyőzi az RWBY csapat többi tagját, hogy segítsenek levadászni a bűnözőt. Eközben Cinder elindítja terve következő szakaszát.</p></div>`
                },
                {
                    title: "A Minor Hiccup / Egy Kisebb Csuklás",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/rUwkhZRR#FivciivZB5fUMsGZHIO6nvoMmyesfKXl3lNEcIegn3c" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>3. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Az RWBY csapathoz Sun és Neptune is csatlakozik, a Torchwick utáni vadászatba. Miközben a várost kutatják nyomok után, Ruby beleütközik barátjába, Pennybe, aki a szokásosnál is furcsábban viselkedik.</p></div>`
                },
                {
                    title: "Painting the Town... / A Város Kifestése...",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/zIRHiSbK#XMpl7npT2EvQV7VgBOc-QQ1a3X5ajPNPt7uR5Nw1nmM" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>4. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Blake és Sun azt találják, hogy Torchwick fejlett fegyverzetet szállít a radikálisok egy csoportjának, de mindkettőjüket felfedezik. Az egész RWBY csapatnak egyesülnie kell, hogy legyőzzék ellenségük legújabb fegyverét.</p></div>`
                },
                {
                    title: "Extracurricular / Tanórán kívüli",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/TZIBSJIB#YoIg4NZ9vW7BnZ0jt-gqlH_CzcL6b3S7BqJ8XjCC7VU" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>5. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Pyrrha Nikos az egyik legígéretesebb új vadásznő a Beacon-ben, akit jó okkal hívnak "Legyőzhetetlen lánynak". De ha szívügyekről van szó, Pyrrha sokkal sebezhetőbb, mint "ő", folytassuk.</p></div>`
                },
                {
                    title: "Burning the Candle / A Gyertya Lángolása",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/WQBm0ZxQ#V7O3Ba4QvxQkcHi2x3P3fni7CYgD_l4N5nQtz63pDQQ" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>6. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Blake rongyosra futja magát, és megpróbálja kitalálni Torchwick következő lépését, Yang pedig megpróbálja rávenni őt, hogy lazítson egy kicsit, és élvezze a közelgő táncot. Pyrrha és Jaune egyaránt a viszonzatlan szerelemmel foglalkozik.</p></div>`
                },
                {
                    title: "Dance Dance Infiltration / Tánc Tánc Beszivárgás",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/OJQTHLrT#DjN_i-rS-qMULQijZrN6gr512HAe06OEKt2l3NZozKY" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>7. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Jaune kezdi felismerni, hogy Pyrrha mit érez iránta, és merész lépést tesz. Ruby észreveszi, hogy valami nem stimmel a táncon kívül, és végül az életéért küzd.</p></div>`
                },
                {
                    title: "Field Trip / Terepgyakorlat",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/qRAXSKjA#BJjHZ6Yp37eabT5cnxqJEkM8aVPcyMQdUuA3m5gH1YY" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>8. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Az első éves hallgatók megkapják első igazi küldetésüket vadászként és vadásznőként, miközben Ozpin és szövetségesei keresik a módját, hogy szembeszálljanak titokzatosságukkal.</p></div>`
                },
                {
                    title: "Search and Destroy / Keres és Pusztít",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/2RoSWA6I#cFu9YNDa86IzjPtgZUHNI9A155Zr8ItLVSPkimynMfg" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>9. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Az excentrikus Vadász, Dr. Oobleck társaságában az RWBY csapat harcol a Grimmekkel a város egyik elhagyatott részén, miközben titokban Torchwick rejtekhelyét kutatja.</p></div>`
                },
                {
                    title: "Mountain Glenn / A Hegyi Város",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/nJhXBI6b#Moxwr4X75i0QJd4x5VH8pT0yr-CA_Yes3eBHA-jRmws" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>10. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Weiss, Blake és Yang azon töprengenek, hogy miért akarnak vadásznők lenni, míg Ruby megdöbbentő felfedezést tesz a föld mélyén.</p></div>`
                },
                {
                    title: "No Brakes / Nincs Fék",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/GF5BVSSB#LxY1eKbn_eJoVzFhF2PMnuN5iTJRDD1AgOJcWmQRnYU" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>11. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Az RWBY csapat az idő ellen küzd, hogy megakadályozza, hogy a vonat elérje a célját.</p></div>`
                },
                {
                    title: "Breach / Törés",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/iV52BCST#ojaxUs3_1hLW--Z_00IMVjtiXQlyQ6zjy1VSx1CaLK4" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>12. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Grimmek százai özönlenek a városba, és az RWBY csapat önmagában nem tudja megállítani őket. Cinder gondosan kidolgozott tervei azt a veszélyt fenyegetik, hogy elesnek, ezért a lány a helyzet megmentésének módján gondolkodik.</p></div>`
                }
            ]
        },
        {
            title: "RWBY: 3.fejezet",
            ti: "Sorozat Szinopszis", // https://rwby.fandom.com/wiki/Volume_3
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_v3.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">A Vytal Festival Tournament az ügyesség végső csatája, amely a világ legerősebb vadászait és vadásznőit állítja szembe egymással edzés közben... és végre itt van! Ruby, Weiss, Blake és Yang visszatért egy szezonra, ahol a legkiválóbb akciókat töltik, és nincsenek egyedül. Új harcosok Remnant minden környékéről készen állnak arra, hogy dicsőséget hozzanak Királyságuknak, de vannak köztük olyanok is, akik sokkal baljósabb célt tűztek ki maguk elé.<br><br>UI.: A részeket <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a> fordította.</div>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=3&ref_=ttep_ep_sn_nx
                {
                    title: "Round One / Első Menet",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/PJxxXCBT#cM1dfuGG14Eslyv_YOyVnVsOE8tvjWGm36LVIdBjhb8" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>A Vytal Festival Tournament az ügyesség végső csatája, amely a világ legerősebb vadászait és vadásznőit állítja szembe egymással edzés közben... és végre elkezdődött!</p></div>`
                },
                {
                    title: "New Challengers... / Új Kihívók...",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/CJxkgTzC#ONcjymJlR7eSr8E4q5PygqS3pj-ogYAVJMECRiV5kHQ" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>2. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>A Vytal Fesztivál a <span class="meaning" title="Jaune Arc, Nora Valkyrie, Pyrrha Nikos, Lie Ren">JNPR</span> csapatával a <span class="meaning" title="Brawnz Ni, Roy Stallion, Nolan Porfirio, May Zedong">BRNZ</span> csapatával, valamint az <span class="meaning" title="Sun Wukong, Scarlet David, Sage Ayana, Neptune Vasilias">SSSN</span> csapatával és az <span class="meaning" title="Nebula Violette, Dew Gayl, Gwen Darcy, Octavia Ember">NDGO</span> csapatával folytatódik. Egy furcsán ismerős arc részegen nézi a tornát.</p></div>`
                },
                {
                    title: "It's Brawl in the Family / Ez egy Csetepaté a Családban",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/7IAxhBTa#Z7z7VqNDKEi7BnmQheXJdw3AbO9gBAkQpRDo-riz3IY" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>3. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Winter megérkezése után Weiss és Ruby tudomást szerez a közte és Qrow közötti feszültségről.</p></div>`
                },
                {
                    title: "Lessons Learned / Leckék Tanulsága",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/bU4kQTaY#WfoZEKM8Gp6B7OAOGXPnxyr-ocBthfR5L8oST2NB688" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>4. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Mercury megmutatja óriási harcos képességeit. Ruby és Yang értékes tanácsokat kap Qrow-tól, míg Weiss életleckét tanul Wintertől.</p></div>`
                },
                {
                    title: "Never Miss a Beat / Soha Ne Hagyj Ki egy Ütemet",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/fVRCGIqK#FgMnIrm0P0mWx0RYq8PK6hZLN9OYsMvW_JpfsTjXcqg" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>5. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>A Vytal Fesztivál második fordulójában Yang és Weiss egy ismeretlen csapat ellen versenyeznek.</p></div>`
                },
                {
                    title: "Fall / Ősz",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/fAhllLjA#vsHpwZwkWNGLBNPOPmI5Gly8vcnK7TGzqO6wgM-5eCE" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>6. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Ozpin és Pyrrha megvitatják A négy lány történetét. Ezt követően Yang és Mercury harca döbbenetesen végződik.</p></div>`
                },
                {
                    title: "Beginning of the End / A Vég Kezdete",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/OBZSSQiK#DUK7CiIUa510tZR3KInpPxjvGT9I47z40sfZiJa6WPA" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>7. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>A visszaemlékezéseken keresztül a néző megtudhatja, hogyan toborozta Cinder a csapatát, és hogyan lépett partnerségre a Fehér Agyarral. Részletek Amber meggyilkolási kísérletéről, valamint Yang látszólag provokálatlan merényletéről is láthatók.</p></div>`
                },
                {
                    title: "Destiny / Sors",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/TNRwDBxL#d0ovOINao86x754mXjWdJSReEUh9tS3m3CJJieEmlB8" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>8. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Az RWBY csapat felépül Yang Mercury elleni támadásából. Pyrrah szenved a veszélyes döntéstől, amelyet meg kell hoznia. Ruby gyanakodni kezd, és eközben elkezdődik a második kör.</p></div>`
                },
                {
                    title: `PvP / Játékos kontra Játékos`,
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/OdwSBS6Q#C9kiG_0baoK4hvdclesrh8VXmsn7TGRTqvmIQ48s50k" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>9. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Pyrrah és Penny megkezdi a harcot. Ruby és Mercury elkezdi a magáét. Cinder halálos üzenetet küld.</p></div>`
                },
                {
                    title: "Battle of Beacon / A Csata Jele",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/bVpHkbDQ#q1iDQOcAPXnwPv5NjpVkoK4fsqJXajJNNmTFNb3mSec" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>10. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Az RWBY csapat szétválik, mert Beacon és Vale pusztító Grimm-támadást szenved. A Vadászoknak össze kell állniuk, de Cindernek több terve is van.</p></div>`
                },
                {
                    title: "Heroes and Monsters / Hősök és Szörnyek",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/jQxBXQAT#5oKWjnkWCi7as6t75pFLP3CuYdZBrvERWNahSwvqrfk" allowfullscreen id="vid"></iframe>
                    `,
                    desc: `<p>11. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Ruby újra Neo és Torchwick ellen száll szembe. A Beaconért folytatott háború folytatódik, és a nagy káosz közepette Blake és Adam találkozása megdöbbentő végkifejlethez jut. Mindeközben Pyrrha meghozza a döntését.</p></div>`
                },
                {
                    title: "End of the Beginning / A Kezdet Vége",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/SIJERbBK#O3PB_PmXcRNXmsjiVXQEb_f5TwK0snCu6KqgFCIo2C4" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>12. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/bluedog327" title="bluedog327 csatija (Indavideó)" target="_blank">bluedog327</a><br>Ahogy az akadémiáért folytatott csata a végéhez ér, Pyrrha olyan döntést hoz, amely mindent megváltoztat. Amikor véget ér ez az egész, Ruby rájön, hogy több van benne, mint gondolta.</p></div>`
                }
            ]
        },
        {
            title: "RWBY: 4.fejezet",
            ti: "Sorozat Szinopszis", // https://rwby.fandom.com/wiki/Volume_4
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_v4.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">Több hónap telt el a Beacon bukása óta, és Remnant világa talpra áll. Nagy a feszültségek kerekednek... rengeteg életet vesztettek, és az RWBY csapat tagjai... megosztottak. Minden hősnőnk saját utazása előtt áll.<br><br>UI.: A részeket <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a> fordította.</div>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=4
                {
                    title: "The Next Step / A Következő Lépés",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/DVJgkLyL#MkMpbh6qp-mLBw9RK2mOEXiV_ZgTqThQWu-R0Kc5tgk" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Hat hónappal később a Remnant világában... Salem kijelöli a tanácsát, és megtervezi a következő lépést. Ruby, Jaune, Nora és Ren egy veszélyes új Grimmel harcol az erdőben.</p></div>`
                },
                {
                    title: "Remembrance / Emlékezés",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/OAQgRYCb#mdJfuwIuaweyj6LcKTzX_Cac42CyChUmnMCOp0wVXkQ" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>2. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Az RNJR csapat megtalálja a mészárlás következményeit. Weisst az apja sarokba szorítja, és Ruby rájön egy szomorú igazságra.</p></div>`
                },
                {
                    title: "Of Runaways and Stowaways / A Szököttekről és Szökevényekről",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/SEozxKQT#Nh5nvyaWfsU-zLXxIRMYJO1lLlCETIAdmBqP3LPv174" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>3. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Blake egy veszélyes új Grimmellel találkozik a Menagerie felé vezető úton. A folja miatt amit a csatában szerzett Yang. Emlékezteti arra, milyen hatással volt rá Beacon bukása.</p></div>`
                },
                {
                    title: "Family / Család",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/DEISFKzZ#MWaHqcOD3XjKek5imGpIaaXAnhiCIt9YSBrjEx_Y9_Y" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>4. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Yang még mindig a csata után történtekkel van elfoglalva, de aztán kellemes társaságot és bölcs szavakat kap édesapjától. Mindeközben az RNJR csapat meglepő könnyedséggel utazik a következő városba, a szerencse mellettük áll?</p></div>`
                },
                {
                    title: "Menagerie / Állatsereglet",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/7MpnkKjD#SOwcTnrWv_0bhb_xTh1KOaLMFQYWESg8JbIAta-jiX0" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>5. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Blake hazatér a családjához Managerie-be, Sun azonban nehezen tudja lenyűgözni apját. Blake még itt is küzd, hogy felülkerekedjen a problémáin, miközben a Fehér Agyar megszakítja találkozásukat. Tyrian megkezdi Ruby vadászatát.</p></div>`
                },
                {
                    title: "Tipping Point / Fordulópont",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/KEwnlSRC#N914JhpXeOhXLNF8ExBfjzy-oCK4gsLCkGq6ChncyRY" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>6. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Weiss énekli a dalát, és az Atlas-i tudatlansággal küzd. Az RNJR csapat felfedez egy másik romvárost, és belefut egy halálos ellenfélbe.</p></div>`
                },
                {
                    title: "Punished / Megbüntetett",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/mM43iLQY#dFrjfLFrnitIMTN-WiBZY1YRpeH76Ug6cd8SahvNeL4" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>7. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Weiss-nak szembe kell néznie tetteinek következményeivel a jótékonysági rendezvényen, Qrow megküzd Tyriannel, hogy megvédje az RNJR csapatot, Oscar pedig többet tud meg a sorsáról.</p></div>`
                },
                {
                    title: "A Much Needed Talk / Egy nagyon szükséges beszéd",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/bVpGUSDb#Aj0hanuYq2cZTBHLELetwytyxp4ad7qTFyze8UIyKQ0" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>8. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Qrow még mindig lábadozik az előző küzdelem során szerzett sérüléséből, miközben tájékoztatja az RNJR csapatot Salem növekvő veszélyéről. Blake újra kapcsolatba lép az apjával.</p></div>`
                },
                {
                    title: "Two Steps Forward, Two Steps Back / Két Lépés Előre, Két Lépés Hátra",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/SIg3UDQK#Nm10gLIGQolIcdG_5PT5UkFyEfOUpAcfIpHfJoAvChg" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>9. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Miközben Weiss és Yang folytatják kiképzésüket, Blake és Sun levadászják a Fehér Agyar kémjét, az RNJR csapatnak pedig el kell döntenie a legjobb utat a hegy megkerüléséhez, hogy segítséget találjanak Qrow-nak.</p></div>`
                },
                {
                    title: "Kuroyuri / Fekete liliom",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/bIYzFRwT#8L-zCc7zvyOSMeUP6iiGZOIPaLtAPUAwi88YeitQRcU" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>10. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Az, hogy olyan közel vannak szülővárosukhoz, Kuroyurihoz, fájdalmas emlékeket idéz fel Ren és Nora számára, de mivel Qrow állapota a egyre ​​romlik, az RNJR csapat mindkét felének tovább kell haladnia.</p></div>`
                },
                {
                    title: "Taking Control / Átvéve az Irányítást",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/HMQTGLIR#hmXk9pNb20ipJbfakSlByMrjsRVmLFWxmWDvJ_uwn5o" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>11. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Miközben Cinder a hajadon erejével folytatja edzését, Tyrian visszatér, hogy megmagyarázza vereségét Salemnek. Weiss megpróbál megszökni apja elől Klein segítségével, Blake elhatározza, hogy visszaszerzi a Fehér Agyart, Ren pedig egy rémálmot lát a múltjából.</p></div>`
                },
                {
                    title: "No Safe Haven / Nincs Biztonságos Menedék",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/6ZRikZKZ#DZiubrdL0og9lpVpiDzliD3mp1QRCNFNtuNfKJ6TL8I" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>12. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a><br>Az RNJR csapat a Grimm ellen harcol, amely elpusztította Kuroyurit, de Ren haragja miatt elveszíti az irányítást a csata közben, és veszélybe sodorja barátja életét.</p></div>`
                }
            ]
        },
        {
            title: "RWBY 5. fejezet",
            ti: "Sorozat Szinopszis", // https://rwby.fandom.com/wiki/Volume_5 - Szinopszis
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_v5.webp" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">A <span class="meaning" title=" (RNJR) Ruby Rose, Nora Valkyrie, Jaune Arc, Lie Ren">RNJR</span> csapat és Qrow végre megérkezik Mistralba, és meglepődve látják Oscart és Ozpint. Weiss és Yang azt tervezi, hogy találkoznak a csapattal. Mindeközben Blake, családja és Sun saját harcukkal közdenek Menagerie-ben. Eközben Salem Mistral ellen lép, akárcsak Vale. Oroszlánszívű Leonardo a hősök tudta nélkül félelemből áll vele szövetségben.<br>E kötett során Adam Taurus puccsot hajt végre Sienna Khan ellen, és átveszi a Fehér Agyar vezetését, miközben kiderül, hogy a Hajadonok szoros kapcsolatban állnak az ereklyékkel.<br><br>UI.: 1-4.részig <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)" target="_blank">Thoma</a> fordította. Azért töltöttem fel, hogy egy helyen legyen meg az 5.fejezet.</div>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=5 - részenként rövid leírás
                {
                    title: "Welcome to Haven / Üdv Haven-ben",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/DotiWZaT#5nAO0LmbY2pdqqJ5c5H7RV6fbEwD6kJKYjUOF9eY4cQ" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a><br>Egy hosszú és fárasztó út után a RNJR csapat és Qrow végre találkozik Lionheart Professzorral. Weiss továbbra is menekül apja elől, Blake szembesíti Aliát a "White Fang"-el való szővetségével kapcsolatban, Yang pedig nyomra bukkan az anyjával kapcsolatban.</p></div>`
                },
                {
                    title: "Dread in the air / Rettegés a levegőben",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/q5UXQbhZ#jVB8zhyYF4OpKk3lYcLz62gzPZkaA2l2Hy8F4McoIK8" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>2. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a><br>Weiss útját Haven felé a Lancerek raja blokkolja, akik lesből támadnak a területüket átszelő repülőgépekre. Adam találkozik a "White Fang" vezetőjével, Sienna Khannal, hogy bemutassa Hazelt.</p></div>`
                },
                {
                    title: "Unforeseen Complications / Váratlan Bonyodalmak",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/m9NS3bRb#cDIs-KxG9CbOxZrv8YHAO7a5iCOyS8hqxy40NlMv5Pc" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>3. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a><br>Ilia félbeszakítja Ghira és Blake kísérletét, hogy meggyőzzék a Menagerie Faunus-ait, hogy segítsenek megmenteni Havent. Weiss fogvatartói felfedik terveiket, hogy visszaváltsák őt apjának. Eközben az RNJR csapat többet tud meg Oscar furcsa képességéről.</p></div>`
                },
                {
                    title: "Lighting the Fire / A Tűz Meggyújtása",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/O1dyFJ5L#lzcIivNTZbJINt43e79DkkG1hss6y986pSx41wUngaM" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>4. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Rektilian" title="Thoma csatija (Indavideó)">Thoma</a><br>Ruby és Oscar elkezdenek edzeni a kézi harcban. Yang megtalálja Raven táborát, de Weiss elrablásának felfedezése megnehezíti a találkozásukat.</p></div>`
                },
                {
                    title: "Necessary Sacrifice / Szükséges Áldozat",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/upEiWTAb#xEbLHhiAdeNQU6d3wbh_FbpoLPWPOUOaQ4KRlMTz6vA" allowfullscreen></iframe>`,
                    desc: `<p>5. rész rövid leírása</p><p>Blake és Sun nem kap elég aláírást a Haven Akadémia megmentésére irányuló petíciójukhoz. Mindeközben Ilia parancsot kap az Albain testvérektől, hogy gyilkolják meg Blake szüleit és fogják el Blake-et.</p></div>`
                },
                {
                    title: "Known by its Song / Felismerni a Daláról",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/WhVh2IoR#dXSP9JLHjfBFpBEQ8uxHruO8zm70ijK3yxUdXoLHEKo" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>6. rész rövid leírása</p><p>Raven elmagyarázza Yangnak és Weissnak Ozpin iránti bizalmatlanságát, miután tudomást szerzett Salem létezéséről. Bizonyítékként megmutatja alakváltó képességét, és választási lehetőséget kínál Yangnak, hogy vele maradjon. De Yang és Weiss úgy dönt, hogy elmennek, és újra összefognak Rubyval.</p></div>`
                },
                {
                    title: "Rest and Resolutions / Pihenés és Állásfoglalások",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/D0FVWJYb#pZH6Aq0nQax-dgnH-pF2KnijCFfifJorQGxdEwtc4A8" allowfullscreen id="vid"></iframe> `,
                    desc: `<p>7. rész rövid leírása</p><p>Yang szembesíti Ozpint azzal, hogy mágiát használt Qrow-n és Ravenen, aki mindent elárul hatalmáról és a Hajadonok-ról. Eközben Cinder, Watts, Mercury és Emerald megérkezik Raven táborába.</p></div>`
                },
                {
                    title: "Alone Together / Egyedül Együtt",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/uwciRSLQ#j9WYHnDoAj9rHMJEePpvRNJ6VeMH2_Wqj5TGlUmUbak" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>8. rész rövid leírása</p><p>Az érzelmek fokozódnak, ahogy Ruby és Weiss rájön, hogy Yang még nem bocsátott meg Blake-nek. Ilia belső konfliktusa egyre nő. Blake rájön, hogy a családja veszélyben van.</p></div>`
                },
                {
                    title: "A Perfect Storm / A Tökéletes Vihar",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/ShN2SA7C#NOIKAo57HJLWEYi7QUaSON0Av7WIb5e6azBrIy9yXLY" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>9. rész rövid leírása</p><p>Raven táborát Cinder bandája megtámadja, miközben a Tavasz Hajadon után kutatnak. Ilia hagy egy levelet Blake-nek, amelyben arra kéri, hogy találkozzon vele titokban.</p></div>`
                },
                {
                    title: "True Colors / Igaz Színek",
                    sourceCode: iimmgg,
                    desc: `<p>10. rész rövid leírása</p><p>Blake próbálja érvekkel meggyőzni Iliát, miközben Ghira és Sun - Corsac és Fennec ellen küzd.</p></div>`
                },
                {
                    title: "The More the Merrier / Minél Több, annál Jobb",
                    sourceCode: iimmgg,
                    desc: `<p>11. rész rövid leírása</p><p>Ruby és a banda többi tagja találkozik Lionheart Professzorral a Haven Akadémián, és nem is sejtik, hogy épp csapdába sétálnak.</p></div>`
                },
                {
                    title: "Vault of the Spring Maiden / A Tavasz Hajadon Pincéje",
                    sourceCode: iimmgg,
                    desc: `<p>12. rész rövid leírása</p><p>Hazel múltja napvilágra kerül. Jaune felfedez valamit magáról. Raven, Vernal és Cinder belép az alagsorba.</p></div>`
                },
                {
                    title: "Downfall / Bukás",
                    sourceCode: iimmgg,
                    desc: `<p>13. rész rövid leírása</p><p>Ruby elvonja Emerald és Mercury figyelmét, így Yang üldözőbe vehette Ravent és Cindert. Adam arra készül, hogy lerombolja az iskolát, de Blake megérkezik a többi faunusszal, hogy őrizetbe vegyék.</p></div>`
                },
                {
                    title: "Haven's Fate / Haven Sorsa",
                    sourceCode: iimmgg,
                    desc: `<p>14. rész rövid leírása</p><p>Emerald összeomlik, amikor megtudja Cinder vereségét, miközben Adam és Lionheart menekül, így Mercury és Hazel visszavonulásra kényszerülnek. Annak ellenére, hogy Yangben rövid ideig feszültség uralkodik, Blake-et üdvözli a csapatban.</p></div>`
                }
            ]
        },
        {
            title: "RWBY: 6.fejezet",
            ti: "Sorozat Szinopszis", // https://rwby.fandom.com/wiki/Volume_6
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_v6.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">Az RWBY csapat újraegyesül, és az első küldetésük nagyon fontos: elkísérik a Tudás Ereklyéjét Atlaszba. Mivel a világ látszólag szétesik körülöttük, és minden sarkon Grimm leselkedik, Remnant-on áthaladva, hogy elérjék céljukat, veszélyesebb lesz, mint azt bárki is gondolta volna.<br><br>UI.: A részeket <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a> fordította.</div>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=6
                {
                    title: "Argus Limited / Vasút",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/yBghnRTJ#2LY4ZG3p7G4bnbg2hvPthlLR2NkPfGo2D7USN_grXFQ" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Ruby Rose és barátai a Tudás Ereklyéjének biztonságos szállításával az Atlaszba hárultak. Számtalan mérföldnyi Grimm-borított vidék található Mistral városa és Anima északi partvonala között. Szerencsére az Argus Limited könnyedén megteszi az utat – mindaddig, amíg nem történik baj.</p></div>`
                },
                {
                    title: "Uncovered / Fedetlen",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/mdpHiYbT#tmeOpfVoZZGKc95IN-lrqnl8gVbXW57AGiQKhcj93m0" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>2. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Thoma</a><br>Az RWBY csapat ellenségei keresik a hollétüket. Eközben az RWBY csapat megkérdőjelezi Ozpint, miközben a múltja kísérteni kezdi.</p></div>`
                },
                {
                    title: "The Lost Fable / Az Elveszett Mese",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/zEpAXTab#N6pVjJt-Xv6ucFGwzL9G_5efR3uU8ivb3zkkWawneRE" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>3. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Mi a kedvenc tündérmeséd?</p></div>`
                },
                {
                    title: "So That's How It Is / Szóval Ez Így Van",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/uc4hjTyC#xH8DsKb8FSE1NzZ7EmvLn4M6gNnLKJSwCAVjkNzkskM" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>4. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Hősök és gazemberek egyaránt aggasztó leleplezésekkel szembesülnek.</p></div>`
                },
                {
                    title: "The Coming Storm / A Közelgő Vihar",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/3YoQ3aiY#MdUv7D7aAL-HNopMPDh75UJuTxP6vO7uz6vkksZFIrY" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>5. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>A Mistral-i bűnszervezet még mindig tevékenykedik, de a menedék nem mindig garantálja a biztonságot.</p></div>`
                },
                {
                    title: "Alone in the Woods / Egyedül az Erdőben",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/qdIgwDrJ#EH6_voX-m3CWnGCd3XcXGA31XQ58kqrUMNufiJ_kDC8" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>6. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Ahogy sötétedik a Brunswick Farmján és a hó tovább esik, az RWBY csapat morálja minden idők mélypontján van. Az egyetlen dolog, ami rosszabb annál, mint amikor egyedül rekedsz az erdőben, az az, ha ráébredsz, hogy egyáltalán nem vagy egyedül.</p></div>`
                },
                {
                    title: "The Grimm Reaper / A Grimm Kaszás",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/KAAUiQZZ#wRaV_IH7KCeGRzxSlRAItpnbXjalb6tnxcPKrGxaCXI" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>7. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Míg Cinder megosztja terveit Neóval, Maria megosztja múltját az RWBY csapattal, és mindkét csapat halállal néz farkasszemet mielőtt eljuthatnának Atlaszba.</p></div>`
                },
                {
                    title: "Dead End / Zsákutca",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/udQ3DCyJ#iQUpEFcoTjRDpiaoKGct5bgsmSOI6qJhaaYklPnL9_0" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>8. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Az Atlasz argusi képviselőinek nem áll szándékában segíteni az RWBY csapatot. Sőt, határozottan ellenzik ezt. Itt az ideje, hogy új megoldást találjunk ki – és itt az ideje annak is, hogy meséljenek Jaune-nak, Norának és Rennek Jinnről.</p></div>`
                },
                {
                    title: "Lost / Elveszve",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/Dch2lCgR#bjSSvFG3_R6NtP8_H6HzOt5g5cF_Cglvcg7UUIgDBu0" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>9. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Cinder eltűnésével Emerald és Mercury kérdéseket kezd felvetni, és nem ők az egyetlenek; Jaune, Nora és Ren Oscar után kutatnak, de még mindig nem tudják, mit tegyenek, ha megtalálják.</p></div>`
                },
                {
                    title: "Stealing from the Elderly / Idősektől lopni",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/2JJQXJaC#915nBbp0R6GNTjT6cIREd77dq0ujDDKfwEOq6Kfadpg" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>10. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Hőseinknek egyetlen lehetőségük van arra, hogy elkővessék életük rablását, és ha sikerrel járnak, mindenkinek ki kell vennie a részét belőle. Ideje indulni.</p></div>`
                },
                {
                    title: "The Lady in the Shoe / A cipős hölgy",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/nJR3GLrb#xuoIUKh8LPCZ-HidDm3QQMsByZBNWGwV6eTCCDd0ACU" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>11. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Az egyetlen dolog, ami hőseink és Atlasz között áll, az Caroline Cordovin, de össze kell fogniuk, ha le akarják győzni. Eközben Yang versenyt fut, hogy megtalálja Blake-et, míg Adam mindent megtesz, hogy végezzen vele.</p></div>`
                },
                {
                    title: "Seeing Red / Vörösen Látni",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/PVpVCLrI#uX3u4wJEBichRmKXw-laqo2bV0ztWiKkiJC6qcZR470" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>12. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Hőseink kifutnak az időből. Ahogy Cordovin továbbra is fölényben van. Blake és Yang összeállnak. De minden harcosnak fel kell tennie magának a kérdést: "Meddig vagyok hajlandó elmenni a győzelemért?"</p></div>`
                },
                {
                    title: "Our Way / A mi utunk",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/nQIXwBCR#Ig7u8dhVbDB_j43_FBqeuBoDKuTE14_FFGnzkaZfSVA" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>13. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Tensza1" title="Tensza1 csatija (Indavideó)" target="_blank">Tensza1</a><br>Egy Leviatán bukkant elő az óceán mélyéből, és most azzal fenyeget, hogy elpusztítja Argus városát. Mivel a Cordo's Colossus cselekvőképtelen, az Atlasz Bázisnak keveset tudnak tenni az emberek védelmében.</p></div>`
                }
            ]
        },
        {
            title: "RWBY: 7.fejezet",
            ti: "Sorozat Szinopszis", // https://rwby.fandom.com/wiki/Volume_7
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_v7.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">Ruby, Weiss, Blake és Yang keményen küzdöttek barátaikkal, hogy elhozzák a Tudás Ereklyéjét Atlaszba, Remnant legészakibb királyságába. A futurisztikus városi terjeszkedés azonban éppoly veszélyt rejthet, mint az őt körülvevő Grimmekkel fertőzött tundra. Ellenségek és szövetségesek ütköznek, miközben hőseink Salem erőinek megállításáért küzdenek, de az összefogás veszélyes, ha nem tudod, kiben bízhatsz.<br><br>UI.: A részeket <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a> fordította.</div>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=7&ref_=ttep_ep_sn_nx
                {
                    title: "The Greatest Kingdom / A Hatalmas Birodalom",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/WA5hXYhI#L88ATkm8WWHzNwD01u7Omzsh0BqqnmZkadd_AVP8QKU" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Hőseink végre eljutottak az Atlaszba, de valóban olyan biztonságban vannak, mint remélték? Ez a felhőkben ragyogó város lehet, hogy a remény jele lehet Remnant-nak, de sötét árnyékot vet.</p></div>`
                },
                {
                    title: "A New Approach / Egy Új Megközelítés",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/rVIjRYxJ#0crqGMjxHVbIrc0MiZ7EajXCkLuSYUP7iVxPit6W7cU" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>2. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Az emberek letartóztatása nem éppen a legjobb módja az első benyomás keltésének. Azonban amint a kezdeti sokk elmúlt, Ruby és barátai rájönnek, hogy sokkal több van ezekben az <span class="meaning" title=" Colver Ebi, Marrow Amin, Vine Zeki, Elm Ederne, Harriet Bree">Ace Ops</span>-okban – és még Ironwood tábornokban is –, mint amilyennek elsőre látszik.</p></div>`
                },
                {
                    title: "Ace Operatives / Ász Csapat",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/vNRmWIKL#0yxQaYXKFeQjCmp68MZytE05747JFC51di6M2P1W_-Y" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>3. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Kint a havas tundrában az Ace Ops bemutatja az RWBY és JNR csapatának a köteléket.</p></div>`
                },
                {
                    title: "Pomp and Circumstance / Pompa és Körülmények",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/rdoC0QSI#ds_jsPrynu-JV4gTbFbrhhyzfAlCDNpkOesTAz5EwsE" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>4. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Az első Atlasz-i küldetés teljesítésének csúcspontját jelentő banda azon fáradozik, hogy tökéletesítsék képességeiket, és nyújtsanak némi segítséget Mantle polgárainak.</p></div>`
                },
                {
                    title: "Sparks / Szikrák",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/iQBCRBzY#gu0pDyc61TYbHBak_r6tRxGODcym5Dmvg-_6pYu09F4" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>5. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>A küldetések, a kiképzés és a fokozódó politikai nyugtalanság között ezeknek a fiatal vadászoknak és vadásznőknek sok mindent kell kézben tartaniuk.</p></div>`
                },
                {
                    title: "A Night Off / A Szabad Éjszaka",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/fMJEwKDb#Xw76D8GGuM7CVwsB7wGmm5uXXnHe0jq-kQ0QU1CDf4o" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>6. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Az állandó küldetések és az erőteljes edzések után a gyerekek végre kapnak egy szabad éjszakát a kikapcsolódásra. De a politikai gyűlésen való részvétel nem a legkönnyebb tevékenység.</p></div>`
                },
                {
                    title: "Worst Case Scenario / Legrosszabb Forgatókönyvi Eset",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/jM5iWTjD#khblbZ6k1NlD803ZWpGcYs-6vwdAe9gIVc6fS9aOBfs" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>7. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Meddig lennél hajlandó elmenni azért, hogy azt tedd, ami helyes?</p></div>`
                },
                {
                    title: "Cordially Invited / Teszteletbeli Meghívás",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/6RgD3KJY#SQI7JmwlxVI6kFIWETWp2JY0BkzQLQj13WLe_9VqAQg" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>8. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Jacques és Ironwood veszélyes eszejátékba kezd. Eközben a gyerekeknek szembe kell nézniük az eddigi legveszélyesebb fenyegetéssel: egy színvonalas vacsorával.</p></div>`
                },
                {
                    title: "As Above, So Below / Mint Fent, Úgy Lent",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/SdgG1bLL#bdy0MiYbP-NDtmieBnlo4qiqysOpqWprgNcE6x8XyqI" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>9. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Megmondod az igazat? Vagy valaki elmondja helyetted? A válasz mindent megváltoztathat a világon.</p></div>`
                },
                {
                    title: "Out in the Open / Kint a Szabadban",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/TZJzGI6T#VgHy3kn7NKVIbRTML6jQAAigVWsYXrkKUmf14WGkR44" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>10. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Végre kiderült az igazság, és nem csak hőseink veszik észre. Mivel minden forog kockán, minden segítő kézre szükség van, hogy megvédjék Mantle városát.</p></div>`
                },
                {
                    title: "Gravity / Gravitáció",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/mUpBlLLT#oTFbTR8BCdJ5mZUNG9fjGPYZu-ZVuDasDwMMUSolwDE" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>11. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Watts, Tyrian és a végtelennek tűnő Grimm-raj között a gonosz minden oldalról támadja hőseinket. A legnagyobb veszély azonban az lehet, hogy oda bújnak, ahol a legkevésbé számítanak rá.</p></div>`
                },
                {
                    title: "Witch Friends Like These / Ilyenek a Boszorkánybarátok",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/7MQi3IgT#S8NdDBux-pLOBOCWhwUlDAVwwDQtjlc9dSurnls78ZE" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>12. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Salem erőinek közeledésével és a tábornok letartóztatásukra vonatkozó parancsával hőseink kénytelenek minden fronton harcolni, hogy megmentsék a várost, amelyet Ironwood cserbenhagyott.</p></div>`
                },
                {
                    title: "The Enemy of Trust / Az Ellenség Igazsága",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/vQYGCKgB#SclS3cvtZPL0sKxDdDgCGqZ6hmJKff4neLXVFTU_RFg" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>13. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Viharharcos" title="Viharharcos és Krissön csatija (Indavideó)" target="_blank">Viharharcos és Krissön</a><br>Ki leszel, ha a legnagyobb félelmeid megvalósulnak?</p></div>`
                }
            ]
        },
        {
            title: "RWBY: 8.fejezet",
            ti: "Sorozat Szinopszis", // https://rwby.fandom.com/wiki/Volume_8
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_v8.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">Hőseink legrosszabb félelmei végre beteljesültek: Salem itt van, és az időzítés nem is lehetne rosszabb a megosztott Atlasz Királyság számára. A félelem a barátokat ellenségekké változtatta, míg a kétség az emberiség megmaradt szövetségeseinek szétzúzásával fenyeget. Mivel Salem és Ironwood is ellenük küzdenek, és a Remnant sorsa forog kockán, az RWBY csapaton múlik, hogy megtegye a lépéseit, mielőtt túl késő lenne.<br><br>UI.: A részeket <a href="https://indavideo.hu/profile/Forditasok" title="Fordítások csatija (Indavideó)" target="_blank">Fordítások</a>, <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a> fordította.</div>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=8
                {
                    title: "Divide / Feloszlás",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/WRZ1xBgA#1ZcPZ_bW5lIdaQLgd0i_vFcNeIIvMjHfhoiDz8-pegI" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Forditasok" title="Fordítások csatija (Indavideó)" target="_blank">Fordítások</a><br>Minden eddiginél jobban össze kell egyesíteni a Salem ellen álló szövetséges erőket. De miután Ironwood nem volt hajlandó folytatni Mantle evakuálását, hőseinknek új utat kell választaniuk – ha csak egyben tudnak megegyezni.</p></div>`
                },
                {
                    title: "Refuge / Menedék",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/zZx0RQiC#d03AAFvfzzc7CKmKR3rtxxE-2AUr30Kmznvx88GFpII" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>2. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Forditasok" title="Fordítások csatija (Indavideó)" target="_blank">Fordítások</a><br>Ruby, Nora, Blake, May és Penny az Atlasz Katonai Parancsnokságra szegezik tekintetüket. Eközben Yang, Ren, Jaune és Oscar intézi az evakuálást Mantle-ben. Ha mindenkit idejében eljuttatnak a kráterhez, talán meg tudják menteni őket.</p></div>`
                },
                {
                    title: "Strings / Fonalak",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/jNAlwbBC#SJ1BJsAfvwMz6hUSPF5TuXKf8kjnenaCzjR2JLs0Eos" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>3. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Az emberiség sorsa megköveteli hőseinktől, hogy beszivárogjanak Atlasz legszigorúbban őrzött létesítményébe – mindezt egy nap alatt.</p></div>`
                },
                {
                    title: "Fault / Hiba",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/vBxQ3JKI#Y1Nl-SnT0eL2IHH9ZR21iK-5rSpV_4f6b2hlFLFy75E" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>4. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Jaune, Ren és Yang egy titokzatos új Grimm utáni törekvése váratlan bonyodalmakhoz vezet. Ruby, Weiss és Blake új helyet találnak, ahol lefeküdhetnek. Cinder ultimátumot kap.</p></div>`
                },
                {
                    title: "Amity / Egyetértés",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/DFYGUC7C#O_yD376SIKI79euFqPvQxPvlp1ZNE020h1kEN9SIUx0" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>5. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Itt az esélyük, hogy elmondják a világnak az igazat. Meghallgatásra talál az üzenetük?</p></div>`
                },
                {
                    title: "Midnight / Éjfél",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/qQxXRIiY#NkbT4ymxLYeuvpv3gsaYjs7YKAKo2YDf0LWpw467RNI" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>6. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Itt az idő.</p></div>`
                },
                {
                    title: "War / Csata",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/nNoDUQoS#EM1z173wjVhDof9kLtXhI6xu3gL8OICCM6smqEP6gIU" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>7. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Atlaszban zaljik az egész háború. Hőseink lehetetlen problémával néznek szembe. Hova tovább?</p></div>`
                },
                {
                    title: "Dark / Sötétség",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/jE5FyLgC#fW9uAQEkyWyUAkhonA0rWWeDpKdEsjlDrC5Lbw4_r-0" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>8. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Nem vagyunk egyedül.</p></div>`
                },
                {
                    title: "Witch / Boszorkány",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/aV4G0aiI#LyNUBSHK_OuEyijdPdzaA_jzqfrsY5K1j5mcS6531YY" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>9. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Az óra Jaune, Ren és Yang mentőakcióján ketyeg. Az Ace-Ops tartja a vonalat Salem erőivel szemben.</p></div>`
                },
                {
                    title: "Ultimatum / Ultimátum",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/WQBF0aDS#_yDAkocsrpiGBZkVhsIwI3DymMCJlXlEvi5b45IWnvQ" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>10. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Ahogy a háború köde beborítja a királyságot, az Atlas a törésponthoz közeledik.</p></div>`
                },
                {
                    title: "Risk / Kockázat",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/KNRTkDaD#CyS9ASEMmX_TE1eWzpNPcPhNBeoVDp6SQKMQVvyKSSU" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>11. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>A Schnee uradalomban fokozódik a feszültség, ahogy újraegyesült hőseink a sarokba szorítják magukat.</p></div>`
                },
                {
                    title: "Creation / Alkotás",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/ycZj3aqD#9XhixLnQy9zIeLCmbwac8t3TcmacIw3sUMJjBwgVxvI" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>12. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Kockázatos, veszélyes és szinte lehetetlen – de ez a legjobb tervük.</p></div>`
                },
                {
                    title: "Worthy / Méltó",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/fc4QwRII#r7n8hvRNq0kO6FOi8aodcmJkezGIZsIigCyllHMt5tA" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>13. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>A legjobb tervek...</p></div>`
                },
                {
                    title: "The Final World / A Végső Világ",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/GcowhQaL#BDllYaVvbNvQcQK7LnEXN0ia_Z97ZUBUAGJk6PO_89w" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>14. rész rövid leírása</p><p>A feliratot készítette: <a href="https://indavideo.hu/profile/Santii" title="Santii csatija (Indavideó)" target="_blank">Santii</a><br>Néha megéri az egészhez megkockáztatni a bukást.</p></div>`
                }
            ]
        },
        {
            title: "RWBY 9. fejezet",
            ti: "Sorozat Szinopszis", // https://rwby.fandom.com/wiki/Volume_9
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_v9.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">Kezdés dátuma (Crunchyroll-on): 2023. február 18.<br><br>A 8.kötet megrázó eseményei után hősnőink egy ismeretlen világba zuhannak - az "Ever After"-be! Miközben a RWBY csapat felfedezi ezt a furcsa és titokzatos biradalmat, hirtelen rájönnek, hogy nem is olyan idegen számukra, mint ahogy azt elősször feltételezték. Ahogy utaznak, hogy megtalálják a hazautat, le kell küzdeniük eddigi legnehezebb kihívásukat - Önvalóságuk küzdelmét. És azt, hogy fel vannak-e készülve arra, hogy megállítsák Salem-et.<br><br>Magyar feliratos előzetes: <a  title="Magyar feliratos előzetes" onclick="Mehet('https://mega.nz/embed/WgtxCYKA#mDmI4MWjNDPqxFMHAjHTEMP7lP7sokHP5kKPg1x8gC0')">Ugrás a videóhoz</a></div>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=9
                {
                    title: "A Place of Particular Concern / A Különös Aggodalmas Hely",
                    sourceCode: iimmgg,
                    desc: `<p>1. rész rövid leírása</p><p>A RWBY csapat egy hatalmas szigetre mosódik ismeretlen helyen, Jaune-nal és Neó-val. Miközben barátaik, valamint Atlas és Mantle lakói átutazzák Vacuo-t.</p></div>`
                },
                {
                    title: "Altercation at the Auspicious Auction / Változás a Kedvező Árverésen",
                    sourceCode: iimmgg,
                    desc: `<p>2. rész rövid leírása</p><p>Amelyben az RWBY csapat többet kapnak, mint amennyiért cserélték.</p></div>`
                },
                {
                    title: "Rude, Red, and Royal / Goromba, Vörös, és Királyi",
                    sourceCode: iimmgg,
                    desc: `<p>3. rész rövid leírása</p><p>Amelyben megszegik a játékszabályokat.</p></div>`
                },
                {
                    title: "A Cat Most Curious / A Legkíváncsibb Macska",
                    sourceCode: iimmgg,
                    desc: `<p>4. rész rövid leírása</p><p>Amelyben új ismeretségek születnek.</p></div>`
                },
                {
                    title: "The Parfait Predicament / A tökéletesen kínos helyzet",
                    sourceCode: iimmgg,
                    desc: `<p>5. rész rövid leírása</p><p>Amelyben egy desszert van összeállítva.</p></div>`
                },
                {
                    title: "Confessions Within Cumulonimbus Clouds / Vallomások a gomolyfelhőkben",
                    sourceCode: iimmgg,
                    desc: `<p>6. rész rövid leírása</p><p>Amelyben a régi barátok újraegyesülnek.</p></div>`
                },
                {
                    title: "The Perils of Paper Houses / A Papírházak Veszedelmei",
                    sourceCode: iimmgg,
                    desc: `<p>7. rész rövid leírása</p><p>Amelyben tervek és menetrendek készülnek.</p></div>`
                },
                {
                    title: "Tea Amidst Terrible Trouble / Tea Szörnyű Bajok Közepette",
                    sourceCode: iimmgg,
                    desc: `<p>8. rész rövid leírása</p><p>Amiben egy kis tea kiömlött.</p></div>`
                },
                {
                    title: "A Tale Involving a Tree / Egy mese fával karöltve",
                    sourceCode: iimmgg,
                    desc: `<p>9. rész rövid leírása</p><p>In which a door is encountered.</p></div>`
                },
                {
                    title: "Of Solitude and Self / Magányról és Önvalóról",
                    sourceCode: iimmgg,
                    desc: `<p>10. rész rövid leírása</p><p>In which a choice must be made.</p></div>`
                }
            ]
        },
        {
            title: "Igazság Ligája x RWBY: Szuperhősök és Vadászok",
            ti: "Szinopszis", // https://rwby.fandom.com/wiki/Justice_League_x_RWBY:_Super_Heroes_and_Huntsmen,_Part_One
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_x_jl.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">Az Igazság Ligája új horrorral néz szembe: a serdülőkorral! Superman, Batman, Csodanő, Flash, Cyborg, Zöld Lámpás és Vixen meglepődve tapasztalják, hogy nemcsak Remnant nevű furcsa világban kerültek bele, hanem még tinédzserekké is változtak. Eközben Remnant hősei – Ruby, Weiss, Blake és Yang – rájönnek, hogy világuk rejtélyes módon megváltozott. Vajon az Igazság Ligája és a RWBY csapat egyesített ereje visszaállíthatja Remnant világát a normális kerékvágásba, mielőtt egy szupererős Grimm elpusztítana mindent, amit ismernek?<br><br>Előzetes: <a  title="Előzetes" onclick="Mehet('https://mega.nz/embed/bktAUAxQ#teZABYQLTb80mSSgwvRgvPyp83GJyy54Zl-tT-KB6gw')">Ugrás a videóhoz</a></div>`,
            episodes: [ // Nothing
            {
                title: "Part I",
                sourceCode: iimmgg,
                desc: `<p>Film rövid leírása</p><p>-Nincsen elérhető leírás-<br>Debütálás: 2023.04.25.</p></div>`
            },
            {
                title: "Part II",
                sourceCode: iimmgg,
                desc: `<p>Film rövid leírása</p><p>-Nincsen elérhető leírás-<br>Debütálás: 2023.10.17.</p></div>`
            }
            ]
        },
        {
            title: "Trailers",
            ti: "Sorozat Szinopszis", // https://rwby.fandom.com/wiki/Trailers
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_team.png" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">A szokásos előzetesekkel ellentétben az RWBY előzetesei nem a sorozat animációit használták fel, hanem eredeti, önálló animációs rövidfilmek voltak, amelyek saját egyedi történeteiket mesélték el. Ebben az értelemben inkább a sorozat előzményeiként viselkedtek, mint a tényleges előzetesek.<br><br>Minden előzetest egy bizonyos szín és betű utal, és egy, az adott témáknak megfelelő karaktert tartalmaz, amely egy kicsit elárulja a központi szereplők történetét. Például a "Piros" vagy "R" trailerben szerepelt a Ruby Rose karakter.</div>`,
            episodes: [ // https://rwby.fandom.com/wiki/Trailers
                {
                    title: "Red Trailer",
                    sourceCode: iimmgg,
                    desc: `<p>1. rész rövid leírása</p><p>„<i>Mindannyian elvesztettünk valamit, és láttam, hogy a veszteség milyen hatással lehet az emberekre. De ha minden alkalommal feladnánk, amikor veszítettünk, akkor soha nem tudnánk előre lépni.</i>”<br><span style="float:right;">- Ruby Rose</span>&nbsp</p></div>`
                },
                {
                    title: "White Trailer",
                    sourceCode: iimmgg,
                    desc: `<p>2. rész rövid leírása</p><p>„<i>Nem tudom, kinek képzeli magát, de hadd mondjam el, ki vagyok: egy hős unokája vagyok, és egy gazember gyermeke. Egy bukott Királyság polgára vagyok, és a semmi örököse. Engem nem a nevem határoz meg, mert én leszek az, aki meghatározza.</i>”<br><span style="float:right;">- Weiss Schnee</span>&nbsp</p></div>`
                },
                {
                    title: "Black Trailer",
                    sourceCode: iimmgg,
                    desc: `<p>3. rész rövid leírása</p><p>„<i>Egy egyszerű élet nem lenne az én életem! A családom, a barátaim, a kultúrám. Hozzájuk tartozom, éppúgy, mint ők hozzám. Mindezt feladni nem egyszerűség lenne, hanem árulás.</i>”<br><span style="float:right;">- Blake Belladonna</span>&nbsp</p></div>`
                },
                {
                    title: "Yellow Trailer",
                    sourceCode: iimmgg,
                    desc: `<p>4. rész rövid leírása</p><p>„<i>A veszteségeim, a kudarcaim. Ezek mindennél jobban formáltak azzá, aki vagyok, és megmutatták, hogyan kell fejlődnöm. Ha valami hiányzik, az nem azért van, mert elvesztettem. Ez azért van, mert még nem találtam meg. És ennek egyetlen módja a folytatás.</i>”<br><span style="float:right;">- Yang Xiao Long</span>&nbsp</p></div>`
                },
            ]
        },
        {
            title: "Shorts",// https://rwby.fandom.com/wiki/Trailers
            ti: "Sorozat Szinopszis",
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_team_emblems.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">Eredeti animációt és történetet tartalmaznak, ugyanúgy, mint a négy karakter előzetes.</div>`,
            episodes: [ // https://rwby.fandom.com/wiki/Trailers
                {
                    title: "Volume 4 Character Short",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/7pl0jLTQ#MRg9GKtJrcoqefyTnJdl7X_rCaCU4ztstKYtQ3i4Mlo" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>Több hónap telt el a Beacon bukása óta, és Remnant világa talpra áll. Nagy a feszültségek kerekednek... rengeteg életet vesztettek, és az RWBY csapat tagjai... megosztottak. Minden hősnőnk saját utazása előtt áll.</p></div>`
                },
                {
                    title: "Volume 5 Weiss Character Short",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/vtcAxYzI#YFi3L340R0ixWYlKO4_NZFEXow-MEOyB1eL3Gko3aKw" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>2. rész rövid leírása</p><p>Weiss Schnee egész életében kiváltságos és elkényeztetett életet élt... de ez nem ment a saját nehézségek nélkül.</p></div>`
                },
                {
                    title: "Volume 5 Blake Character Short",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/qtNnXJ5Q#i5LwEkYWZmEgT4TYe4_HzWeCW8kaTL0Ys_9evRiSzmU" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>3. rész rövid leírása</p><p>A Fehér Agyar egykor békés szervezet volt, amely a Faunusok valódi egyenlőségéért küzdött. Az évek során azonban sok tag az erőszakos és szélsőséges taktikákat kezdte előnyben részesíteni, hogy tiszteletet követelhessen a Maradék embereitől. Bár Blake Belladonna végül úgy döntött, hogy elhagyja a Fehér Agyart és annak egyre növekvő terrorcselekményeit, nem minden barátja döntött így.</p></div>`
                },
                {
                    title: "Volume 5 Yang Character Short",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/mhkUSQ5J#o0QKkb9jlnl_hlaDI7wybPvjzjKqWxd4U_px6t2WV08" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>4. rész rövid leírása</p><p>YTudod, hogy Ruby megállíthatatlan a kaszájával, de Yang ismeri a kézi küzdelem valódi erejét. Egy fegyvermentes edzés kellős közepén Yang meg tudja győzni a nővérét a fegyver nélküli harc fontosságáról?</p></div>`
                },
                {
                    title: "Volume 6 Adam Character Short",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/bllGjK7I#ghNmJO-Hpb83enUtZc4ejFFbJorh4ckJuJ-tXEx2SbM" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>4. rész rövid leírása</p><p>Adam hajlandó lesújtani mindenkit, aki az igazság kiforgatott változatának útjába áll, és kijelentette, hogy harcol népe jogaiért, de az évek során egyre távolabb került ezektől az idealista állításoktól. Ő a vadság és a káprázat veszélyes kombinációja, akinek egyetlen célja az, hogy megkínozza volt partnerét, Blake Belladonnát, akit felelősnek tart a hatalomból való kiesésért.</p></div>`
                }
            ]
        },
        {
            title: "RWBY: World of Remnant",
            ti: "Sorozat Szinopszis", // https://tvtropes.org/pmwiki/pmwiki.php/Characters/RWBYWorldOfRemnant
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_world_of_remnant.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">Remnant világa egy olyan hely, mely tele van mítikus mesékkel, veszélyes szörnyekkel, rejtett fenyegetésekkel és titokzatos történetekkel. Míg Remnant történelme hösők és bűnösök hőstetteit, valamint hétköznapibb emberek életét megörökítette, az ősi és titkos történelem nyomai szétszórva rejlenek a világ számos gyermekmeséjében. Ez az oldal a történelem és a legenda szereplőinek szól, mesék, amelyek nagyobb igazságokat rejtenek, és olyan élőlényekről szól, amelyekről a világ talán nem is tudja, hogy a mítoszokon kívül is léteznek.</div>`,
            episodes: [ // https://www.imdb.com/title/tt3066242/episodes?season=-1
                {
                    title: "Dust / Por",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/DtMQnS5D#oNb7qSnczIsnF704pwDE3DKjAOqIrm608IFT0WwqHbw" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>Egy kiegészítő sorozat első epizódja, amely Remnant történetét és tudományát taglalja. Ez az epizód a Porkristályok titokzatos erejével foglalkozik.</p></div>`
                },
                {
                    title: "Kingdoms / Királyságok",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/Kl0GGDbC#CLfPDYsqBRq_PNNSO2dA3nA9su7nTtFItvAGtLeZE5U" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>2. rész rövid leírása</p><p>Egy kiegészítő sorozat második epizódja, amely a Remnant történetét és tudományát taglalja. Ebben a részben információkat tár fel a négy Királyság helyszíneiről, politikájáról és katonai struktúráiról.</p></div>`
                },
                {
                    title: "Grimm / Grimm",
                    sourceCode: iimmgg,
                    desc: `<p>3. rész rövid leírása</p><p>A rész amely a Remnant világának történetét és tudományát taglalja. Ez az epizód Grimm szörnyű lényeit vizsgálja.</p></div>`
                },
                {
                    title: "Aura / Aura",
                    sourceCode: iimmgg,
                    desc: `<p>4. rész rövid leírása</p><p>Ez az epizód az Aura erőteljes hatásait vizsgálja, egy olyan hatalmas erőt, amelyet minden élőlény védekezésre és támadásra egyaránt fel tud használni.</p></div>`
                },
                {
                    title: "Vytal Festival Tournament / Vytal Fesztivál Torna",
                    sourceCode: iimmgg,
                    desc: `<p>5. rész rövid leírása</p><p>Belemerülünk a "Vytal Fesztivál Torna" történetébe és céljába.</p></div>`
                },
                {
                    title: "Huntsmen / Vadászok",
                    sourceCode: iimmgg,
                    desc: `<p>6. rész rövid leírása</p><p>A Vadászok és Vadásznők foglalkozása, leírva pályájuk célját és magukat az Akadémiákat. Bemutat néhány akadémiát is, amelyeken a vadászok képzésén lévők résztvesznek.</p></div>`
                },
                {
                    title: "Cross Continental Transmit System / Kontinentális Átviteli Rendszer",
                    sourceCode: iimmgg,
                    desc: `<p>7. rész rövid leírása</p><p>A "Cross Continental Transmit System" története és képességei, a létfontosságú vezeték nélküli kommunikációs hálózat, amely lehetővé teszi a királyságok számára, hogy kommunikálni tudjanak egymással.</p></div>`
                },
                {
                    title: "The Four Maidens / A Négy Hajadon",
                    sourceCode: iimmgg,
                    desc: `<p>8. rész rövid leírása</p><p>Egy öreg varázslót, aki egyedül él a hegyekben, meglátogat négy nővér, akik a maguk egyedi módján kedvesek hozzá. Az első, Winter/Tél, meditációra és elmélkedésre ösztönzi; a második, a Spring/Tavasz, gyümölcsöt és virágot hoz neki, és újjáéleszti a kertjét; a harmadik, Summer/Nyár, meggyőzi őt, hogy lépjen ki, és ölelje át a világot; a negyedik pedig, a Fall/Ősz, arra készteti, hogy legyen hálás azért, amije van. Az öregúr a kedvességüktől meghatva nagy hatalmat ad a négy nővérnek, hogy továbbmenjenek a Remnant világán, és továbbra is megosszák ajándékaikat. A négy nővér megígéri, hogy évente visszatérnek és meglátogatják.</p></div>`
                },
                {
                    title: "Vale / Vale",
                    sourceCode: iimmgg,
                    desc: `<p>9. rész rövid leírása</p><p>Vale királysága és az általa lefedett területek.</p></div>`
                },
                {
                    title: "Mistral / Mistral",
                    sourceCode: iimmgg,
                    desc: `<p>10. rész rövid leírása</p><p>Mistral királysága és kulturális öröksége, beleértve a kulturált felső osztályt és a jól felszerelt földalattit. Mistral két távoli városát, Windpath-ot és Kuchinasi-t említik.</p></div>`
                },
                {
                    title: "Atlas / Atlas",
                    sourceCode: iimmgg,
                    desc: `<p>11. rész rövid leírása</p><p>Az Atlas Királysága, eredeti nevén Mantle. Az északra, Solitas kopár, hideg kontinensére utazó telepesek alapították, Mantle lakosságát a zord éghajlat védte a Grimmektől, de a túlélés érdekében gyorsan alkalmazkodni kényszerültek. Gyorsan megtanulták használni a Port és más technológiákat. A Nagy Háború végét követően az Atlas Akadémiát az eredeti Mantle városától északra alapították. Az Akadémia és területei hamarosan Mantle-t beárnyékolták, és végül a Királyság új fővárosává és névadójává váltak.</p></div>`
                },
                {
                    title: "Vacuo / Vacuo",
                    sourceCode: iimmgg,
                    desc: `<p>12. rész rövid leírása</p><p>Vacuo királyságának története. Egykor rejtett paradicsom volt. De Vacuo-t a többi királyság meghódította, és ezt követően Remnant egyik legnehezebben élhető helyévé változott.</p></div>`
                },
                {
                    title: "Between Kingdoms / Királyságok között",
                    sourceCode: iimmgg,
                    desc: `<p>13. rész rövid leírása</p><p>Bemutatja a főbb királyságokon kívüli helyeket Renmant világában, beleértve a falvak létezésének okait és a veszélyeket, amelyekkel szembe kell nézniük.</p></div>`
                },
                {
                    title: "Faunus / Faunus",
                    sourceCode: iimmgg,
                    desc: `<p>14. rész rövid leírása</p><p>A Faunus-ok története, genetikájuk és az emberekkel való kapcsolatuk.</p></div>`
                },
                {
                    title: "Schnee Dust Company / Schnee Por Vállalat",
                    sourceCode: iimmgg,
                    desc: `<p>15. rész rövid leírása</p><p>A Remnant leghíresebb Por cégének árnyas háttértörténete.</p></div>`
                },
                {
                    title: "The Great War / A Nagy Háború",
                    sourceCode: iimmgg,
                    desc: `<p>16. rész rövid leírása</p><p>Qrow továbbra is többet mesél a Remnant világáról, ezúttal egy hatalmas háborúról beszél, amely örökre megváltoztatta a világot. Egyben jobban betekintést nyújt abba is, hogy miért van a világ a jelenlegi állapotában.</p></div>`
                }
            ]
        },
        {
            title: "RWBY: Fairy Tales", // +(szino.) https://rwby.fandom.com/wiki/RWBY:_Fairy_Tales
            ti: "Sorozat Szinopszis", // ep+: https://tvtropes.org/pmwiki/pmwiki.php/WebAnimation/RWBYFairyTales
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_fairy_tales.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">Egy minisorozat, amely Renmant leghíresebb tündérmeséit kelti életre soha nem látott formában.<br><br>„<i>Világunknak hosszú titokzatos múltú története van. Bár lehet, hogy nem tudjuk meg a kívánt válaszokat. Vannak történeteink; horror- és hősies történetek, amelyek többet árulnak el, mit amit tudunk. És végül nem is fog számítani se a múltunk, se a jövőnk, de egy dolog biztos: a történetek fennmaradnak.</i>”<br><span style="float:right;">- Ozpin Professzor</span>&nbsp;</div>`,
            episodes: [ // https://www.imdb.com/title/tt15830868/episodes?season=1&ref_=tt_eps_sn_1
                {
                    title: "The Grimm Child / A Grimm Gyermek",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/v8MkQYAY#n8KNf5FHx5Igay_3BAQu9bu6DiAy24Y5SRTzPFkab1A" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>A Grimmek sétáló borzalmak, amelyek a vadonban járnak... de vannak olyanok, amelyek közelebb hozzák a rettegést az otthonhoz.</p></div>`
                },
                {
                    title: "The Hunter's Children / A Vadász Gyermekei",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/jxFwGRYD#ZBRI6Ba5S6zuDRemgs_w6M-e8qBdQ5y7BnouKMRnrbM" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>2. rész rövid leírása</p><p>Egy magányos vadász egy mocsaras falut véd, amíg be nem tör a katasztrófa. A gyerekei felveszik a palástot?</p></div>`
                },
                {
                    title: "The Shallow Sea / A Sekély Tenger",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/P8kiQThL#TLcf4scF1JhUdqL-nNMD-uQF694xzS2eTCbntWyuPpc" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>3. rész rövid leírása</p><p>Ozpin két különböző eredetmítoszt mesél a Faunuszokkal kapcsolatban.</p></div>`
                },
                {
                    title: "The Indecisive King / A Határozatlan Király",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/z10SRaRQ#4KZFUi1ajodRd3YLDAXTENBoRwSCbxMl0OCsfiBVwmo" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>4. rész rövid leírása</p><p>A királyi ajándék többnek bizonyul, mint amilyennek látszik.</p></div>`
                },
                {
                    title: "The Girl in the Tower / A Lány a Toronyban",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/e8FXQQbD#FNwzxDCAid9qzEc_QbA3AxWUqOgBLYivBNN0bbYzpvw" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>5. rész rövid leírása</p><p>Nem minden történetnek van egy „boldog, amíg meg nem hal.”</p></div>`
                },
                {
                    title: "The Warrior in the Woods / A Harcos az Erdőben",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/rw11nCaB#g5t3hRAybdFLr2cX3t7Ic3cYb6j8emhCtRRt_4W9z7k" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>6. rész rövid leírása</p><p>Egy fiatal fiú találkozik egy titokzatos harcossal, aki messziről védi faluját.</p></div>`
                }
            ]
        },
        {
            title: "RWBY Chibi (1.évad)",
            ti: "Sorozat Szinopszis", // Nothing
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_chibi_1.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">Join the cast of RWBY in a new series of cute, comedy shorts with infinite possibilities! It's playing tag! It's baking cookies! It's posing as police officers! It's... really quite absurd. It's RWBY CHIBI!</div>`,
            episodes: [ // Nothing
            ]
        },
        {
            title: "RWBY Chibi (2.évad)",
            ti: "Sorozat Szinopszis", // Nothing
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_chibi_2.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">Join the cast of RWBY in a new series of cute, comedy shorts with infinite possibilities! It's playing tag! It's baking cookies! It's posing as police officers! It's... really quite absurd. It's RWBY CHIBI!</div>`,
            episodes: [ // Nothing
            ]
        },
        {
            title: "RWBY Chibi (3.évad)",
            ti: "Sorozat Szinopszis", // Nothing
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_chibi_3.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">Join the cast of RWBY in a new series of cute, comedy shorts with infinite possibilities! It's playing tag! It's baking cookies! It's posing as police officers! It's... really quite absurd. It's RWBY CHIBI!</div>`,
            episodes: [ // Nothing
            ]
        },
        {
            title: "RWBY Chibi (4.évad)",
            ti: "Sorozat Szinopszis", // Nothing
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_chibi_4.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">Join the cast of RWBY in a new series of cute, comedy shorts with infinite possibilities! It's playing tag! It's baking cookies! It's posing as police officers! It's... really quite absurd. It's RWBY CHIBI!</div>`,
            episodes: [ // Nothing
            ]
        },
        {
            title: "RWBY Beyond",
            ti: "Sorozat Szinopszis", // Nothing
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_beyond.png" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">Stories about what is happening in Vacuo and the Ever After following Volume 9.</div>`,
            episodes: [ // Nothing
                {
                    title: "Jr. Detectives",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/jttVSbAS#hsmif97H_bn3qDLQuf3eezQGVSqP3YTGlEpN1QMtLK0" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>Leírás</p></div>`
                },
                {
                    title: "A Knight's Journal",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/H1VgTD7S#-pB13Tlhowr_jcADsWUaOkkyUkImNQE1S0FSWAeFA38" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>Leírás</p></div>`
                },
                {
                    title: "The Adventures of Somewhat",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/y9cD2brL#c4e72pSWvF9U-jE2WD1Z-oSsaVBKQnSARWyJO6DPxYQ" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>Leírás</p></div>`
                },
                {
                    title: "Boba",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/a9cThbBR#v4irs-FgC_Lm6Clx5rMSB36ZIOW3N-ox5bK_fJU-S7U" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>Leírás</p></div>`
                }
            ]
        },
        {
            title: "RWBY Evermorrow",
            ti: "Sorozat Szinopszis", // Nothing
            de: `<div class="col-12 col-md-4 col-lg-3"><img src="img/projects/rwby_evermorrow.jpg" onerror="KepHiba(this)" class="d-block mx-auto sorikep w-50 w-md-75"></div><div class="col-12 col-md-8 col-lg-9 text-justify my-auto border p-3" id="soriinfo">??</div>`,
            episodes: [ // Nothing
                {
                    title: "The Breach",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/P1tz0bgD#-15n-_YcWxFZzHJikiF7HEqxITXA51osL8rIedZuYGM" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>Leírás</p></div>`
                },
                {
                    title: "The Tournament & Beyond",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/joUCASLC#l30SOTkeO_wQlgI9-ngyy41II5IH9jkvaIYb1KVE594" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>Leírás</p></div>`
                },
                {
                    title: "Old Friends, New Team",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/SttWFT5Q#TMGh6SrlDowbpFA-1Zqb9UAcI37UE0YBB5WtwzmAND0" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>Leírás</p></div>`
                },
                {
                    title: "CRDL Sins",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/D1VTxSZJ#d7STWIxfYZmIREDeRURBslGViti9Czkt-OrogAPFAdQ" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>Leírás</p></div>`
                },
                {
                    title: "All Roads Lead to Roman",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/ao0GzS5D#creeOCf4FH_l3Cw4qRBMuMBNgFK1qcUvu9DhuFdIjI4" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>Leírás</p></div>`
                },
                {
                    title: "The Crate Escape",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/W0lhzZ4S#wQYIXWjOzNonq0p7Htl2jLy83BOLiAooRTZvZYqZ3PY" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>Leírás</p></div>`
                },
                {
                    title: "When The Dust Settles",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/mskXGTxQ#gxXyhWu2uOHy3OkEtPqErUmjx58fGYnRyzwB4Zcqv6c" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>Leírás</p></div>`
                },
                {
                    title: "Cold Snap",
                    sourceCode: `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="https://mega.nz/embed/68FzHJ7T#Nw2FD7RgHamNmrNhD3fFWY650rOvgy1mXqMhd_mtDzU" allowfullscreen id="vid"></iframe>`,
                    desc: `<p>1. rész rövid leírása</p><p>Leírás</p></div>`
                }
            ]
        },
        {
            title: "Nincs elérhető információ",
            ti: "", // Nothing
            de: `<img src="img/noposter.jpg" onerror="KepHiba(this)" class="d-block mx-auto w-50 w-md-75">`,
            episodes: [ // Nothing
            ]
        },
    ]
}

function FirstLoad(){
    localStorage.setItem('result_was_set', true);
    if((localStorage.getItem('result_was_set') === "false")) localStorage.setItem('result', 0);
}

function EpisodeDefault(){
    
    document.getElementById("pn").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].title}`;
    console.log(`${videoSources.series[(+localStorage.getItem('result')) - 1].title}`);
    document.getElementById("video").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].de}`;
    document.getElementById("episodeTitle").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].ti}`;

    let pagination = ``;
    for(let i = 0; i < videoSources.series[(+localStorage.getItem('result')) - 1].episodes.length; i++){
        pagination += `
            <li class="target gomb" onclick="EpisodeChange(${(+i + 1)})">${i + 1}. rész</li>`;
    }
    document.getElementById("episodes").innerHTML = pagination;

}

function ProjectChange(n) {
    localStorage.removeItem('result');
    switch (n){
        case 1:
            localStorage.setItem('result', 1); // 1.fejezet
            break;
        case 2:
            localStorage.setItem('result', 2); // 2.fejezet
            break;
        case 3:
            localStorage.setItem('result', 3); // 3.fejezet
            break;
        case 4:
            localStorage.setItem('result', 4); // 4.fejezet
            break;
        case 5:
            localStorage.setItem('result', 5); // 5.fejezet
            break;
        case 6:
            localStorage.setItem('result', 6); // 6.fejezet
            break;
        case 7:
            localStorage.setItem('result', 7); // 7.fejezet
            break;
        case 8:
            localStorage.setItem('result', 8); // 8.fejezet
            break;
        case 9:
            localStorage.setItem('result', 9); // 9.fejezet
            break;
        case 10:
            localStorage.setItem('result', 10); // RWBY x JL (Part I & Part II)
            break;
        case 11:
            localStorage.setItem('result', 11); // RWBY Trailers
            break;
        case 12:
            localStorage.setItem('result', 12); // RWBY: Character Shorts
            break;
        case 13:
            localStorage.setItem('result', 13); // RWBY: World of Remnant
            break;
        case 14:
            localStorage.setItem('result', 14); // RWBY: Fairy Tales
            break;
        case 15:
            localStorage.setItem('result', 15); // RWBY Chibi 1
            break;
        case 16:
            localStorage.setItem('result', 16); // RWBY Chibi 2
            break;
        case 17:
            localStorage.setItem('result', 17); // RWBY Chibi 3
            break;
        case 18:
            localStorage.setItem('result', 18); // RWBY Chibi 4
            break;
        case 19:
            localStorage.setItem('result', 19); // RWBY Beyond
            break;
        case 20:
            localStorage.setItem('result', 20); // RWBY Evermorrow
            break;
        default:
            localStorage.setItem('result', 21); // Default
    }
}

/*function EpisodeChange(n) {
    let series = (+localStorage.getItem('result')), episode = n;
    if(window.location.pathname.includes("/videok.html")){
        document.getElementById("episodeTitle").textContent = `${videoSources.series[(+localStorage.getItem('result')) - 1].episodes[episode - 1].title}`;
        document.getElementById("video").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].episodes[episode - 1].sourceCode}`;
        document.getElementById("synopsis").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].episodes[episode - 1].desc}`;
        document.getElementById("synopsis").innerHTML += '<br><button id="bttn1" onclick="Vissza()">Vissza a Szinopszishoz</button>';
    } else console.log("INVALID URL")
}*/
function EpisodeChange(n) {
    // Megkeressük a sorozatot a listából
    let series = (+localStorage.getItem('result')), episode = n;
    // Lineáris keresés (most epizódot keresünk) sorozat > epizód
    if(window.location.pathname.includes("/videok.html")){
        //console.log("VALID URL")
        document.getElementById("episodeTitle").textContent = `${videoSources.series[(+localStorage.getItem('result')) - 1].episodes[episode - 1].title}`;
        document.getElementById("video").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].episodes[episode - 1].sourceCode}`;
        /*document.getElementById("video").innerHTML += `<div id="loadText">
                                <i class="fa-solid fa-cog fa-spin" ></i>
                                <p>Betöltés...</p>
                            </div>`;*/
        document.getElementById("synopsis").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].episodes[episode - 1].desc}`;
        document.getElementById("synopsis").innerHTML += `<button class="gomb d-block mx-auto my-3" id="bttn1" onclick="Vissza()">Vissza a Szinopszishoz</button>`;
    } else console.log("INVALID URL")
    //alert(`${videoSources.series[(+localStorage.getItem('result'))].title}`); // <- Kiválasztott sorozat címe
    //alert(`${videoSources.series[(+localStorage.getItem('result'))].episodes[episode].title}`); // <- Kiválasztott sorozat, kiválasztott epizódjának címe
    //alert(`${videoSources.series[(+localStorage.getItem('result'))].episodes[episode].sourceCode}`); // <- Kiválasztott sorozat, kiválasztott epizódjának source code-ja.
}

function Mehet(adat){
    document.getElementById("episodeTitle").innerHTML = `Előzetes`;
    document.getElementById("video").innerHTML = `<iframe class="w-75 d-block mx-auto" style="aspect-ratio: 16/9;" frameborder="0" src="${adat}" allowfullscreen id="vid"></iframe>`;
    document.getElementById("video").innerHTML += `<button id="bttn1" onclick="Vissza()">Vissza a Szinopszishoz</button>`;
    document.getElementById("episodes").style.display="none";
}
function Vissza(){
    document.getElementById("episodeTitle").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].ti}`;
    document.getElementById("video").innerHTML = `${videoSources.series[(+localStorage.getItem('result')) - 1].de}`;
    /*document.getElementById("episodes").style.display="block";*/
    document.getElementById("synopsis").innerHTML = "<br>";
    window.scrollTo(0,0);
}

function ISeeYou(n){
    const a = document.getElementsByClassName("whatisthis")[n];
    a.style.display == "inline" ? a.style.display = "none" : a.style.display = "inline";
}
var db = 0;
function ProjectHide(){
    const p = document.getElementsByClassName("pallhide");

    if(db == 0){
        for (var i = 0; i < p.length; ++i) {
            p[i].style.display = "inline-block";
        }
        db++;
    }
    else {
        for (var i = 0; i < p.length; ++i) {
            p[i].style.display = "none";
        }
        db=0;
    }
    
}