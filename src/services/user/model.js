import BaseModel from "../baseModel";
import { Model } from "objection";

class User extends BaseModel {

	static get tableName() {
		return "user";
	}

	$beforeInsert() {

	}

	$beforeUpdate() {
		
	}
}

export default User;