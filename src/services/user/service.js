import UserModel from "./model";

export const insert = (user) => {
  return UserModel
    .query()
    .insertGraph(user);
};

export default {
  insert
};