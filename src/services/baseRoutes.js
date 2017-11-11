import express from 'express';
const router = express.Router();
import user from './user/route';
import book from './book/route';
import author from './author/route';

router.get('/', (req, res) => 
  res.status(200).send()
);

router.use('/user', user);
router.use('/book', book);
router.use('/author', author);

router.use('/*', (req, res) =>
  res.status(404).send()
);

module.exports = router;