import UserModel from "./model";

export const insert = (user) =>
  UserModel
  .query()
  .insertGraph(user);

export const find = (user) => 
  UserModel.query()
  .where('fullName', 'like', `%${user.fullName}%`)
  .catch(err => {
    console.log(err.stack);
  });

export default {
  insert,
  find
};