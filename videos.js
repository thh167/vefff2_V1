import express from 'express';
import util from 'util';
import fs from 'fs';

const readFileAsync = util.promisify(fs.readFile);



/**
 * Higher-order fall sem umlykur async middleware með villumeðhöndlun.
 *
 * @param {function} fn Middleware sem grípa á villur fyrir
 * @returns {function} Middleware með villumeðhöndlun
 */
function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

/**
 * Les gögn async úr JSON skrá.
 *
 * @returns {object} Gögnum úr JSON skrá
 */
async function readList() {
  // hér væri líka hægt að gera bara `require('./lecrures.json')`  en sýnum
  // hvernig skjal lesið og JSON unnið
  const file = await readFileAsync('./videos.json');

  const json = JSON.parse(data);

  return json;
}

/**
 * Route handler sem birtir lista af vídjóum.
 *
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 */
async function list(req, res) {
  const title = 'Vídjó';
  const json = await readList();
  const { videos } = json;

  res.render('videos', { title, videos });
}


/**
 * Route handler sem birtir fyrirlestur. Ef fyrirlestur finnst ekki í JSON skrá
 * er kallað í next() sem mun enda í 404 handler.
 *
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 * @param {function} next Næsta middleware
 */
async function video(req, res, next) {
  const { slug } = req.params;

  const json = await readList();
  const { lectures } = json;

  const foundLecture = lectures.find(a => a.slug === slug);

  if (!foundLecture) {
    // sendum í 404 handler
    return next();
  }

  const { title } = foundLecture;

  return res.render('video', { title, video: foundLecture });
}

router.get('/', catchErrors(list));
router.get('/:slug', catchErrors(video));












////////////////////////////              ///////////////////////////////              //////////////////////////
/*
router.get('/', (req, res) => {
  res.send('Hvað er í gangi?!');
});

// Route sem inniheldur regexp og svarar fyrir /foo og /fooooo! o.s.fr
router.get(/foo.*$/, (req, res) => {
  res.send(`Þú ert á ${req.originalUrl}<br>url er ${req.url}`);
});

// Náum í gögn úr /bar route
// Ef við sleppum ? svarar þetta ekki fyrir /bar, aðeins /bar/x, /bar/foo o.sfr.
router.get('/bar/:data?', (req, res) => {
  res.send(`Data = ${req.params.data}`);
});

 */
