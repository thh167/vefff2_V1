import express from 'express';

export const router = express.Router();

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
