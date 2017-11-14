import UserModel from "./model";

export const insert = (user) =>
  UserModel
  .query()
  .insertGraph(user);

export const find = (user) => 
  UserModel.query()
  .where(UserModel.raw('lower("fullName")'), 'like', `%${user.fullName.toLowerCase()}%`)
  .catch(err => {
    console.log(err.stack);
  });

export default {
  insert,
  find
};