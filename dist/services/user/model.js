"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _baseModel = require("../baseModel");

var _baseModel2 = _interopRequireDefault(_baseModel);

var _objection = require("objection");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class User extends _baseModel2.default {

	static get tableName() {
		return "user";
	}

	$beforeInsert() {}

	$beforeUpdate() {}
}

exports.default = User;