import UserModel from "./model";

export const insert = (user) =>
  UserModel
  .query()
  .insertGraph(user);

export default {
  insert
};