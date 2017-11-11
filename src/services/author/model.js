import BaseModel from "../baseModel";
import { Model } from "objection";

class User extends BaseModel {

	static get tableName() {
		return "author";
	}

	$beforeInsert() {

	}

	$beforeUpdate() {
		
	}
}

export default User;