'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _pg = require('pg');

var _pg2 = _interopRequireDefault(_pg);

var _objection = require('objection');

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _knexfile = require('./database/knexfile');

var _knexfile2 = _interopRequireDefault(_knexfile);

var _base_routes = require('./services/base_routes');

var _base_routes2 = _interopRequireDefault(_base_routes);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());

const knex = process.env.ENV === 'production' ? new _knex2.default(_knexfile2.default.production) : new _knex2.default(_knexfile2.default.development);

knex.migrate.latest().then(() => knex.seed.run());

_objection.Model.knex(knex);

const PORT = process.env.PORT || 3000;

app.use('/', _base_routes2.default);

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));