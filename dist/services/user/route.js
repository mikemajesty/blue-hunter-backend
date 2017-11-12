"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _action = require("./action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.post("/", _action.insert);

router.use("/by-name/:fullName", _action.find);

router.use('/*', (req, res) => res.status(404).send());

exports.default = router;