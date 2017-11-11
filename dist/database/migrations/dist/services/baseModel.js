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

  $beforeInsert() {
    this.created_at = new Date();
    this.updated_at = this.created_at;
  }
  $beforeUpdate() {
    this.updated_at = new Date();
  }
}
exports.default = BaseModel;