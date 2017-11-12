"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objection = require("objection");

class BaseModel extends _objection.Model {
  $toDatabaseJson() {
    const omit = this.constructor.getRelations();
    return this.$toJson(true, omit, null);
  }

  $beforeInsert() {}

  $beforeUpdate() {}
}
exports.default = BaseModel;