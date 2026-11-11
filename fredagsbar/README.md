# Slaget om Dalgasgade · v1.5.1

Multiplayer-pixelspil til UCplus Sprogcenter Silkeborgs sidste fredagsbar, fredag d. 20. november 2026.

## Udgivelse på grammgren.dk
Læg mappen `fredagsbar/` i roden af repoet `grammgren-site`. Spillet ligger så på `grammgren.dk/fredagsbar/` efter næste deploy på statichost.

## De tre visninger
- `grammgren.dk/fredagsbar/` er spillervisningen til telefoner. QR-koden på storskærmen peger hertil.
- `grammgren.dk/fredagsbar/?skaerm` er storskærmen i lokalet. Den styrer spillet, så den skal være åben hele tiden. Klik én gang på "Slå lyd til".
- `grammgren.dk/fredagsbar/?gm` er Game Master-panelet til Jacob i Costa Rica: faser, opgaver, leveringsbilen, beskeder til alle skærme, test-kollegaer og nulstilling. Panelet viser også koden til chefens pengeboks og har knappen **🎬 Generalprøve**.

Til generalprøver lægger du `&spil=test` på alle adresser, fx `?skaerm&spil=test`. Det holder testen adskilt fra det rigtige spil.

## Før fredagen
1. Generalprøve med rigtige mennesker: åbn `grammgren.dk/fredagsbar/?skaerm&spil=test` på en stor skærm. QR-koden peger så selv på testspillet. Åbn `?gm&spil=test` på din egen computer.
2. Prøv **🎬 Generalprøve** i GM-panelet, hvis du vil se hele forløbet uden spillere.
3. På selve dagen: åbn `?skaerm` (uden `spil=test`) på storskærmen *før* nogen scanner QR-koden, klik "Slå lyd til", og lad fanen blive i forgrunden. Storskærmen er vært for spillet.
4. Åbn `?gm` fra Costa Rica. Tryk Nulstil to gange, hvis der ligger et gammelt spil, og start Akt 1, når folk sidder i Personalerummet.
5. Efter festen: sæt `.write` til `false` i Firebase-reglerne, eller slet databasen, så ingen kan skrive i den bagefter.

## Firebase
`config.js` peger på Realtime Database-projektet `ucplus-fredagsbar` (europe-west1). Reglerne ligger i `database.rules.json` og er sat ind i Firebase-konsollen under Realtime Database → Rules. Reglerne er uændrede i v1.5. Står `FIREBASE_CONFIG` som `null`, kører spillet lokalt med simulerede kollegaer.

## Spillets gang
1. **Lobby · kaffepause**: når man har lavet sin figur, sætter den sig i Personalerummet med en kop kaffe. Figurerne fører grammatiksnak i talebobler, og spillerne kan tage en tår ☕ eller sige noget klogt 💬. **Karins guitar** står i Lokale 0.1 og starter en jam-session. Man vælger selv sangen: Mester Jakob (kanon), Twinkle, Twinkle, Ode til glæden, When the Saints eller Jingle Bells. I kanonen spiller holdet to stemmer, i de andre sange tager halvdelen melodien og resten akkorderne. 60 % eller mere i takt giver guitar-bonus til bosskampen.
2. **Akt 1 · Oprydningen**: hver af de fem genstande er gemt bag sin egen opgave. Opgavetavlen står i højre side af storskærmen, og på telefonen åbnes den med knappen OPGAVER.
   - **Rettebunken** (Lærerværelset på 1. sal → Den Gyldne Kaffekande, der dukker op i Personalekøkkenet): ved bunken på bordet får man kursistsætninger med én fejl og trykker på det forkerte ord. Holdet skal rette 8–30 sætninger, alt efter hvor mange I er.
   - **Ordstillingen** (Lokale 1.1 → Rødpennen): ordkort ligger på gulvet. Man stiller sig på et kort og trykker BRUG, og kortene skal tages i rigtig rækkefølge. Der er tre sætninger: inversion, »ikke« i ledsætninger og spørgsmål med adverbium. Et forkert ord nulstiller sætningen.
   - **Chefens pengeboks** (Chefens kontor bag receptionen → Fredagskassen): pengeboksen har en kode på fire cifre. Fire gule sedler med Jacobs håndskrift giver ét ciffer hver. De sidder på disken i Kursistkantinen, på tavlen i Lokale 1.2, på den gamle printer i Kopirummet og på receptionsdisken. Koden skifter hver gang, spillet nulstilles. Når koden er tastet, går alarmen i gang, og den slås fra med lampespillet: lamperne (grøn, gul, rød og blå) blinker i en rækkefølge, og man trykker dem i samme rækkefølge. Hver rigtig sekvens tæller for hele holdet (3–10 sekvenser, alt efter hvor mange I er).
   - **Trykpladerne** (→ Nøglebundtet i det mørke kontor på 1. sal): pladerne i Lokale 0.3, Kursistkantinen og Lokale 1.4 skal trædes ned samtidig, så holdet skal fordele sig på begge etager. Der skal stå én person pr. plade pr. 8 spillere. Så åbner det mørke kontor ved Lærerværelserne, og nøglebundtet hænger på krogen derinde.
   - **Printerpapiret** (→ Printeren der virker): leveringsbilen kommer 90 sekunder inde i Akt 1, så holdet først kan kigge sig omkring. Bilen kører ind på parkeringspladsen og holder ved hoveddøren. Kasserne skal bæres fra pallen til Kopirummet.
   - **1000 × »Vi taler dansk«** (bonus): leveringsbilen kommer igen senere, og kasserne skal ud i klasselokalerne på begge etager. Djævlen starter så med 85 HP.
   - Bliver kasserne ikke båret ind, bærer chaufføren selv resten efter 2½ minut.
   - Starter nogen en jam-session, holder leveringerne pause: bilen kommer ikke midt i en sang, og en bil, der allerede er her, venter med kasserne, til musikken er slut. Chaufførens ur står stille imens.
   - **Tre skjulte bonusser** giver hver +10 % skade i duellen. Opgavetavlen nævner dem ikke, men GM-panelet viser, hvor langt holdet er:
     - **Modultesten** i Modultest-træningsrummet: fem spørgsmål med 8 sekunder til hvert. Tre rigtige er bestået, og et par kollegaer skal bestå (cirka hver tredje).
     - **Lyt til Bente sammen**: falder 2–3 kollegaer i snak med Frivillige-Bente på samme tid, hepper hun på holdet. Hun siger selv, at historien er bedst, når flere lytter.
     - **Skub Troels' bil**: står 2–5 kollegaer ved den havarerede bil og trykker BRUG på samme tid, ruller den væk fra Troels' plads.
3. **Akt 2 · Djævlen**: starter automatisk, når alle fem genstande er fundet og bøgerne er leveret. Alle figurer bliver teleporteret til Personalerummet og gangen foran, så ingen går glip af kampen.
   - **Fase 1 · Grammatikduellen**: 9 runder med kursistperler. Kursisterne fra kantinen hepper på storskærmen, når holdet rammer.
   - **Fase 2 · Djævlens raseri**: djævlen vokser, gløder rødt og får nye kræfter. Jo bedre fase 1 gik, jo færre HP får han (45–80).
     - I op til seks bølger kommer der hurtigere spørgsmål (8–10 sekunder), mens han kaster rødt blæk.
     - Røde ringe på gulvet viser, hvor blækket lander, og varslet bliver kortere for hver bølge. Nogle ringe sigter efter kollegaerne, så man skal flytte sig med piletasterne eller joysticket og svare på samme tid.
     - **Svar, før blækket rammer dig.** Bliver man ramt, før man har svaret, fryser figuren et par sekunder, telefonen vibrerer, og man kan ikke svare i den bølge. Et svar, der allerede er sendt, tæller stadig.
     - Djævlen heler lidt for hver, han rammer, så det betaler sig også at undvige efter svaret. Er hans raseri ikke brugt op efter seks bølger, kræver Fælles fodslag flere kollegaer.
     - Holder man telefonen på langs, står spørgsmålet i højre side og kortet til venstre.
   - **Fælles fodslag** slår ham ud, og til sidst flyver Jacob ind fra Costa Rica.
4. **Finale · Fredagsbar**: alle figurer samles i Lokale 0.1, der som altid til fester er lavet om til festlokale med bar, lyskæde og flag. Efter et par sekunder falder en enorm flaske **Winnies Rosé** ned midt i rummet, og proppen springer. På telefonen er der tre knapper: 🍺 Øl, 🍷 Rosé og 🥂 Skål!. Figurerne holder deres drik i hånden og siger skåltaler i talebobler. Karins guitar kan bruges igen og igen i finalen, så holdet kan spille sang efter sang. Med knappen ✍ **Hilsen** kan alle skrive en kort hilsen, der vises på storskærmen. Hilsnerne skifter hvert 6. sekund. Storskærmen zoomer ind på baren. Efter 60 sekunder kører rulleteksterne hen over baren og forsvinder igen, når de er færdige. Game Master kan også starte dem med "Rulletekster nu".

Game Master kan til enhver tid starte en bestemt sang på guitaren, skifte fase, løse en opgave (Løs rettebunken, Løs ordstillingen, Åbn pengeboksen, Åbn det mørke kontor), sende leveringsbilen ud, starte jam-sessionen og sende beskeder til alle skærme.

**🎬 Generalprøve** i GM-panelet fylder op med test-kollegaer (12 i alt) og kører hele spillet igennem af sig selv på cirka fem minutter: opgaverne løses én efter én, bilen kommer to gange, djævlen bliver slået i begge faser, og finalen slutter med rulletekster. Brug den med `&spil=test` til at tjekke storskærm og lyd dagen før.

**Lyd i huset**: når lyden er slået til, kan man høre festmusikken fra Lokale 0.1 tydeligere, jo tættere man kommer, og kaffemaskinen brygge i Personalekøkkenet.
Antallet af runder i duellen sættes med `&runder=5` på storskærmens adresse. **🔥 Fase 2 nu** i GM-panelet springer direkte til djævlens raseri. Vil man helt undvære fase 2, lægger man `&fase2=0` på storskærmens adresse.

## Kortet
Kortet er tegnet efter plantegningen ved indgangen. Begge etager ligger side om side ligesom på skiltet: 1. sal til venstre og stuen til højre. Stuen og 1. sal er forbundet af to trapper: én for enden af gangen ved Lokale 0.1 og én ved Lokale 0.3/Kursistkantinen. Går man op ad trinene, står man ved den samme trappe på den anden etage. Test-kollegaerne og de gule prikker bruger også trapperne.

Mod nord ligger en smal parkeringsplads og lige bag den banen, så toget kan ses fra Personalerummet. Her er bagindgangen, hvor leveringsbilen holder. Helt ved bagdøren ligger Troels' reserverede plads, og der holder en havareret bil. Leveringsbilen bakker ud samme vej, som den kom. Hovedindgangen ved "Du er her" vender ind mod gården i vinklen mellem de to fløje. Forpladsen er tegnet efter Street View: UCplus-flaget, det blå »UCplus Indgang«-skilt, bøgehæk med brune vinterblade, en lygtepæl og skiltet med parkering forbudt nede ved Dalgasgade. En flisesti fører langs den lange længe hen til cykelskuret, der står foran længen som på satellitbilledet. Det er langt og har et stejlt, mørkt tag med sne, en åben port med cykler og vedbend op ad væggen. Facaderne har hvid bræddebeklædning over grå mur, og på gavlen mod gården står UCplus Sprogcenter. Nye kollegaer dukker op ved hovedindgangen.

Rummene fordeler sig sådan:
- **Personalerummet** (stuen): kaffepausen i lobbyen, og her vågner djævlen.
- **Lokale 0.1** (stuen): festlokalet med bar, Karins guitar og fredagsbaren i finalen.
- **Chefens kontor** (stuen, bag receptionen): pengeboksen med kodelås og alarm. Fredagskassen ligger her, når den er åbnet.
- **Grupperum 1** (stuen): her står **Frivillige-Bente**. Falder man i snak med hende, fortæller hun om Troels' parkeringsplads helt ved døren. Troels siger selv, at han sagtens kan gå et stykke, men Bente insisterer, og man kan ikke gå fra hende. Man slipper først væk efter tre undskyldninger. Kommer man for tæt på, begynder hun selv at snakke.
- **Receptionen** (stuen) har et lille vindue ud til Indgangen.
- **Personalekøkkenet** og **Kopirummet** (stuen).
- **IT-kontoret** (stuen, ved siden af Testkontoret): IT-mandens kedelige kontor. Der er mere plads nu, hvor serveren er væk. Gætter man kodeordet til IT-mandens computer (det står på en gul lap), kommer diskokuglen, flaskerne og Pong frem.
- **IT-lokalet** (1. sal): kursisternes computere.
- **Kursistkantinen** (1. sal): fire kursister roser appen DanskPlus på ukrainsk, arabisk, spansk og polsk.
- **Modultest-træningsrummet** (1. sal, før Grupperum 2): den skjulte modultest.
- **Morfarrummet** (1. sal): personalets gamle madras. Tryk BRUG ved madrassen for at tage en lur.
- **Lokale 1.5** (1. sal): helt vildt varmt. Radiatorerne kan ikke skrues ned, termometeret viser 34 grader, og figurerne sveder.
- **Lærerværelset** (1. sal): rettebunken. **Lokale 1.1**: ordstillingen. **Lærerbiblioteket** er nu ét rum. **Kursistkantinen**: dagens ret.
- **Kontorerne på 1. sal** er mørke og låste. Det ved Lærerværelserne åbnes af trykpladerne, og her hænger nøglebundtet.

Rum, døre, trapper, møbler, trykplader, genstande og opgavepunkter er data øverst i scriptet i `index.html` (`ROOMS`, `DOORS`, `STAIR_ENDS`, `FURN`, `PLATES`, `ITEMS`, `NPCS`, `PZ_NPCS`, `NOTE_POS`, `SERVER` (pengeboksen), `PALLET`, `DEL_DEST`). Ledetråden "Tæl …" til pengeboksens kode tælles direkte i møbellisten, så den passer også, hvis møblerne flyttes.

Storskærmen følger holdet i Akt 1: den zoomer ud, når kollegaerne er spredt på begge etager, og ind, når de samles. Navneskiltene vokser, når der er zoomet ud.

## Ændringer i v1.5.1
- Sofaen i Personalerummet står nu mellem de to døre, så rummets navn kan læses.
- Troels' plads og den havarerede bil er flyttet hen helt ved bagindgangen, og Bente fortæller nu, hvorfor hun insisterer på den.

## Ændringer i v1.5
- Djævlekampen har fået en fase 2: djævlens raseri med rødt blæk, der skal undgås, mens man svarer. Man skal nå at svare, før blækket rammer, og hans HP i fase 2 afhænger af, hvor godt fase 1 gik.
- Djævlen venter med at vågne, til en igangværende jam-session er færdig.
- Storskærmen viser arenaen ved siden af duelpanelet i fase 1, så djævlen og figurerne ikke gemmer sig bag panelet.
- Generalprøve-knappen skal trykkes to gange ligesom Nulstil, fordi den nulstiller spillet. Knappen Fase 2 nu er kun aktiv under djævlekampen, og GM-panelet viser bølge, HP og antal ramt af blæk.
- Man kan ikke længere stå inde i djævlen.
- Alle bliver teleporteret til kampen, når djævlen vågner. Det gælder også, hvis man kommer ind midt i kampen.
- Leveringerne holder pause under jam-sessioner.
- Cykelskuret står nu foran den lange længe, og en flisesti fører derhen.
- Datoerne for åbning og lukning er fjernet fra skilte, flag og rulletekster.
- Facaden mod gården manglede på fire rum (Testkontoret, IT-kontoret, Testlokalet og Toiletterne). Nu har hele den lange længe vinduer.

## Ændringer i v1.4
- Serveren er flyttet ud af IT-kontoret. Den fjerde opgave er nu **chefens pengeboks** i Chefens kontor bag receptionen, med kodelås og alarm-lampespil, og genstanden hedder **Fredagskassen**.
- Nøglebundtet hænger i det mørke kontor på 1. sal, som trykpladerne åbner.
- Tre skjulte bonusser: modultesten, Bente for flere på én gang og Troels' bil, der kan skubbes væk.
- Hilsner på storskærmen i finalen, kursister der hepper i duellen, lyde i huset og knappen Generalprøve i GM-panelet.
- Forpladsen er tegnet efter Street View med cykelskur, bøgehæk og skilte. Facaderne har hvid bræddebeklædning over grå mur med UCplus Sprogcenter på gavlen. Flaget har fået den blå farve fra skiltene.
- Skiltene ved Dalgasgade og på Troels' plads vises nu i fuld bredde.

## Ændringer i v1.3
- Bygningen ligger nu som på satellitbilledet: hovedindgangen vender ind mod gården, en sti fører ned til Dalgasgade mod syd, og døren mod parkeringspladsen og banen er bagindgang. Flaget står ved hovedindgangen, og leveringsbilen holder ved bagindgangen.
- IT-mandens kontor med serveren og det hemmelige diskotek.
- Kursister i kantinen, der roser DanskPlus på fire sprog.
- Grupperum 2 hedder Modultest-træningsrum.

## Ændringer i v1.2
- Smallere parkeringsplads, så toget kan ses fra Personalerummet. En havareret bil holder på Troels' plads.
- Lille udeområde foran hoveddøren med UCplus-flaget i sitets blå farve (#00454e).
- TR-kontoret og TR-skabet er fjernet. Nøglebundtet ligger nu i Kontoret i stuen, og den fjerde genstand er Firewallen fra serveren i IT-lokalet, som kræver både kode og lampespil.
- Nye rum: Morfarrummet med madrassen og IT-lokalet. Lokale 1.5 er en hedebølge, og Lærerbiblioteket er slået sammen til ét rum.
- Frivillige-Bente i Grupperum 1 og et vindue fra receptionen ud til Indgangen.

## Ændringer i v1.1
- Nyt kort efter plantegningen: stuen og 1. sal med alle rum, to trapper mellem etagerne, parkeringsplads og bane mod nord.
- Fredagsbaren holdes i Lokale 0.1, ligesom festerne plejer. Karins guitar står der også.
- Toget kører forbi i Arriva-farver, og leveringsbilen kører ind på parkeringspladsen på samme side.
- Opgaverne er flyttet ud i de rigtige rum og fordelt på begge etager.

## Ændringer i v1.0
- Karins guitar virker nu også i finalen, og der er fem sange at vælge imellem.
- Alle sange er traditionelle eller over 100 år gamle, så melodier og tekster er frie at bruge.

## Ændringer i v0.9
- Ny finale: fredagsbar i Kantinen med øl, rosé, skåltaler og en kæmpe flaske Winnies Rosé.
- Rulleteksterne kommer nu efter et minut i baren i stedet for med det samme.

## Ændringer i v0.8
- Tre nye fællesopgaver i Akt 1: Rettebunken, Ordstillingen og TR-skabets kodelås. Hver låser én af genstandene op.
- Opgavetavle på storskærm, telefon og i GM-panelet.
- Mere tid i starten: papirbilen kommer efter 90 sekunder i stedet for 25, og bogbilen kommer senere.
- Klasse 2 er blevet ordstillings-lokale, så bordene er fjernet.

## Ændringer i v0.7
- Arkivdøren åbner nu også, når spillerens egen enhed er vært.
- Fællesaktivitet i Akt 1: leveringsbilen med printerpapir og 1000 × »Vi taler dansk«.
