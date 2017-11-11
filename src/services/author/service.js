import AuthorModel from "./model";

export const insert = (user) =>
  AuthorModel
  .query()
  .insertGraph(user);


export const find = (user) => 
  AuthorModel.query()
  .where('fullName', 'like', `%${user.fullName}%`)
  .catch(err => {
    console.log(err.stack);
  });

export default {
  insert,
  find
};