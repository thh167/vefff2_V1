# Vef2 2021, verkefni 1

[Kynning í fyrirlestri](https://youtu.be/pCEHnurbuCU).

Verkefnið er byggt á [hópverkefni 2 í vefforritun 1, árið 2020](https://github.com/vefforritun/vef1-2020-h2).

Í grunninn skal smíða eins vef: lítinn myndbandavef sem nýtir gögn úr JSON skrá. Það sem er ólíkt er, er að vefurinn notar bakenda til að útbúa efni og senda með HTTP yfir í framenda. Þ.e.a.s. **engin JavaScript kóði er keyrður á framenda**, aðeins bakenda.

Gögn skulu lesin úr `videos.json` skjali sem gefið er, og engar upplýsingar skulu „harðkóðaðar“ í HTML/EJS. Skrifa þarf Node.js forrit til að lesa gögnin, ekki skal nota fetch/Ajax til að sækja þau á framenda.

### Myndbandalisti

Þegar vefur er opnaður skal lista upp alla flokka í þeirri röð sem þeir eru skilgreindir í `videos.json` ásamt öllum myndböndum sem eru í þeim flokki:

* Plakat fyrir myndband
* Lengd sem liggur ofan á plakati formuð í mínútur og sekúndur, t.d. `30:20` væri 30 mín og 20 sek, sjá fyrirmynd, í fyrirmynd er bakgrunnslitur `rgba(0, 0, 0, 0.5)`
* Aldur myndbands formað eftir eftirfarandi reglum og mun á eintölu og fleirtölu (ekki þarf þó að gera ráð fyrir eintölu í 21, 31 o.s.fr.)
  - Ef aldur er meiri en eitt ár (365 dagar) er birt `Fyrir X ári/árum síðan`
  - Annars, ef aldur er meiri en mánuður (30 dagar) er birt `Fyrir X mánuði/mánuðum síðan`
  - Annars, ef aldur er meiri en vika (7 dagar) er birt `Fyrir X viku/vikum síðan`
  - Annars, ef aldur er meiri en dagur (24 klst) er birt `Fyrir X degi/dögum síðan`
  - Annars, er aldur í klukkustundum birtur `Fyrir x klukkustund/klukkustundum síðan`

### Myndband

Þegar myndband er valið er farið á aðra síðu með auðkenni á myndbandi í slóð, t.d. `/1`. Þá er athugað hvort til sé myndband með auðkenni `1` og það birt, annars eru `404` skilaboð birt.

## Útfærsla

Fyrirlesa skal lesa _asynchronously_ af disk með callbacks, promises eða `async await`. Nota þarf `fs` pakkann í node.

Notast skal við [EJS template](https://github.com/mde/ejs) til að útbúa HTML. Útbúa skal `header.ejs` og `footer.ejs` sem önnur template nota. `views/` mappa ætti að innihalda template skrár.

Setja skal upp villumeðhöndlun fyrir almennar villur og ef beðið er um slóð sem ekki er til (404). Skilaboð skulu birt notanda um hvað gerðist („Síða fannst ekki“ – „Villa kom upp“).

`app.js` skal setja upp Express vefþjón en virkni fyrir myndbönd skal útfærð í `src/videos.js`.

Nota skal `app.locals` til að gera föll aðgengileg í EJS template til að forma aldur og tíma lengd. Þau ættu að eiga heima undir `./src`.

`public/` inniheldur þau gögn sem ættu að vera aðgengileg með _static middleware_ í express. CSS ætti að vera geymt í þessari möppu. `public/videos/` inniheldur myndir og video sem `videos.json` vísar í.

Öll dependency skulu skráð í `package.json` sem `devDependency` eða `dependency`, eftir því hvað við á.

`npm start` skal keyra upp vefþjón á `localhost` porti `3000`.

Gott getur verið að setja upp `dev` script sem keyrir `nodemon` ásamt Sass virkni ef það er notað.

## Útlit

Fyrirmyndir að útliti eru í `fyrirmynd/`, ekki þarf að fylgja útliti nákvæmlega, það er aðeins til viðmiðunnar en skal þó vera nothæft. Hér er tækifæri til að dusta rykið af HTML og CSS eða byrja að skoða það (ef engin fyrri reynsla) til að lenda ekki eftir á, seinna í námskeiðinu.

Það er í lagi að hjálpast töluvert mikið að með útlitið, það getur tekið mikinn tíma ef reynsla er ekki til staðar.

Nota má Sass til að setja upp útlit.

Setja skal upp stylelint sem „lintar“ CSS eða Sass.

## Tæki og tól

Setja skal upp eftirfarandi:

* `stylelint`
* `eslint` til að linta JavaScript kóða

Þegar verkefni er metið er:

* `npm install` keyrt fyrst sem sækir öll dependency
* `npm start` á að keyra upp express vefþjón á porti `3000`
* `npm test` sem á að keyra eslint og stylelint, og sýna engar villur

Verkefnið skal innihalda `package.json` og `package-lock.json` sem innihalda öll notuð tól.

Þegar verkefnið er sótt verður `npm install` keyrt á undan öllum öðrum skipunum.
Setja skal upp Sass og stylelint með `stylelint-config-sass-guidelines` og `stylelint-config-standard` fyrir verkefnið.

## Mat

* 20% Tól & linterar keyra skv. forskrift, snyrtilegur kóði
* 20% Útlit skv. forskrift
* 20% Express þjónn settur upp með EJS templateum
* 20% Forsíðu virkni
* 20% Videosíðu virkni

## Sett fyrir

Verkefni sett fyrir í fyrirlestri fimmtudaginn 14. janúar 2021.

## Skil

Skila skal í Canvas í seinasta lagi fyrir lok dags fimmtudaginn 28. janúar 2021.

Skilaboð skulu innihalda slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)). Notendanöfn þeirra eru:

TBD

Hver dagur eftir skil dregur verkefni niður um 10%, allt að 20% ef skilað laugardaginn 30. janúar 2020 en þá lokar fyrir skil.

## Einkunn

Sett verða fyrir 6 minni verkefni þar sem 5 bestu gilda 8% hvert, samtals 40% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.

---

> Útgáfa 0.1
