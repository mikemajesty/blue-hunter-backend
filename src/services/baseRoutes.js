import express from 'express';
const router = express.Router();
import user from './user/route';

router.get('/', (req, res) => {
  res.render('../index.html');
});

router.use('/user', user);

router.use('/*', (req, res) => {
  res.status(404).send();
});

module.exports = router;