import BaseModel from "../baseModel";
import { Model } from "objection";

class User extends BaseModel {

	static get tableName() {
		return "user";
	}

	$beforeInsert() {
		this.created_at = new Date();
		this.updated_at = this.created_at;
	}

	$beforeUpdate() {
		this.updated_at = new Date();
	}
}

export default User;