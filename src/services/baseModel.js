import { Model } from "objection";

class BaseModel extends Model {
  $toDatabaseJson() {
    const omit = this.constructor.getRelations();
    return this.$toJson(true, omit, null);
  }

  $beforeInsert() {

  }
  
  $beforeUpdate() {

  }
}
export default BaseModel;