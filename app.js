import express from 'express';
import { router } from './videos.js';

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

const hostname = '127.0.0.1';
const port = 3001;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
