import BaseModel from "../base_model";
import Author from "../author/model";
import { Model } from "objection";

class User extends BaseModel {

	static get tableName() {
		return "book";
	}

	$beforeInsert() {

	}

	$beforeUpdate() {
		
	}

	static get relationMappings() {
		return {
			author: {
				relation: Model.BelongsToOneRelation,
				modelClass: Author,
				join: {
					from: 'book.authorId',
					to: 'author.id'
				}
			}
		};
	}
}

export default User;