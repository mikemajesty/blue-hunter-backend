import express from 'express';
const router = express.Router();
import user from './user/route';

router.get('/', (req, res) => {
  res.status(200).send();
});

router.use('/user', user);

router.use('/*', (req, res) => {
  res.status(400).send();
});

module.exports = router;