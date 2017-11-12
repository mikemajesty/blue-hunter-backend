import express from 'express';
import user from './user/route';
import book from './book/route';
import author from './author/route';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendfile('index.html');
});

router.use('/user', user);
router.use('/book', book);
router.use('/author', author);

router.use('/*', (req, res) =>
  res.status(404).send()
);

module.exports = router;