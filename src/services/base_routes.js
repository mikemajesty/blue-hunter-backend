import express from 'express';
import extract from './extract/route';

const router = express.Router();

router.get('/', (req, res) => res.status(200).send());

router.use('/extract', extract);

router.use('/*', (req, res) =>
  res.status(404).send()
);

module.exports = router;