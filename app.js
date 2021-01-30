import express from 'express';
import {router} from './videos.js';



const app = express();

// Þetta verður aðgengilegt gegnum `local.bar` í template
app.locals.importantize = str => `${str}!`;

const viewsPath = new URL('./views', import.meta.url).pathname;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // `title` verður aðgengilegt sem breyta í template
  res.render('index', { title: 'Forsíða' });
});

app.get('/videos', (req, res) => {
  const staff = ['Jón', 'Gunna'];
  const extra = '<p><strong>Þessi síða er í vinnslu</strong></p>';

  // Getum sent eins mikið og við viljum af gögnum til template gegnum hlut
  res.render('videos', { title: 'Um', staff, extra });
});

app.use('/', router);

const hostname = '127.0.0.1';
const port = 3001;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/**
 * Middleware sem sér um 404 villur.
 *
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 * @param {function} next Næsta middleware
 */
function notFoundHandler(req, res, next) { // eslint-disable-line
  const title = 'Fannst ekki';
  const message = 'Ó nei, efnið finnst ekki!';
  res.status(404).render('error', { title, message });
}

/**
 * Middleware sem sér um villumeðhöndlun.
 *
 * @param {object} err Villa sem kom upp
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 * @param {function} next Næsta middleware
 */
function errorHandler(err, req, res, next) { // eslint-disable-line
  console.error(err);
  const title = 'Villa kom upp';
  const message = '';
  res.status(500).render('error', { title, message });
}

app.use(notFoundHandler);
app.use(errorHandler);
