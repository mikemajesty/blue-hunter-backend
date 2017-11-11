import { Model } from "objection";

class BaseModel extends Model {
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
export default BaseModel;