'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _route = require('./user/route');

var _route2 = _interopRequireDefault(_route);

var _route3 = require('./book/route');

var _route4 = _interopRequireDefault(_route3);

var _route5 = require('./author/route');

var _route6 = _interopRequireDefault(_route5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.get('/', (req, res) => {
  res.sendfile('index.html');
});

router.use('/user', _route2.default);
router.use('/book', _route4.default);
router.use('/author', _route6.default);

router.use('/*', (req, res) => res.status(404).send());

module.exports = router;