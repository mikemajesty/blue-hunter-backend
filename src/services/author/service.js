import AuthorModel from "./model";

export const insert = (book) =>
  AuthorModel
  .query()
  .insertGraph(book);

export default {
  insert
};