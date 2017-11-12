"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _base_model = require("../base_model");

var _base_model2 = _interopRequireDefault(_base_model);

var _objection = require("objection");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class User extends _base_model2.default {

	static get tableName() {
		return "user";
	}

	$beforeInsert() {}

	$beforeUpdate() {}
}

exports.default = User;