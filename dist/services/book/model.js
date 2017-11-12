"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _base_model = require("../base_model");

var _base_model2 = _interopRequireDefault(_base_model);

var _model = require("../author/model");

var _model2 = _interopRequireDefault(_model);

var _objection = require("objection");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class User extends _base_model2.default {

	static get tableName() {
		return "book";
	}

	$beforeInsert() {}

	$beforeUpdate() {}

	static get relationMappings() {
		return {
			author: {
				relation: _objection.Model.BelongsToOneRelation,
				modelClass: _model2.default,
				join: {
					from: 'book.authorId',
					to: 'author.id'
				}
			}
		};
	}
}

exports.default = User;