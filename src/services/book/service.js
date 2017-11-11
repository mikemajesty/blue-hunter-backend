import BookModel from "./model";

export const insert = (book) =>
  BookModel
  .query()
  .insertGraph(book);


export const find = (book) =>
  BookModel
  .query()
  .select('id', 'title', 'yearPublished', 'price', 'rating')
  .eager('[author]').modifyEager('author', builder => {
    builder.select('name', 'gender', 'age', 'country');
  })
  .where('title', 'like', `%${book.title}%`);

export const findByAuthor = (author) =>
   BookModel
  .query()
  .select('id', 'title', 'yearPublished', 'price', 'rating')
  .eager('[author]').modifyEager('author', builder => {
    builder.select('name', 'gender', 'age', 'country')
    .where('name', 'like', `%${author.name}%`)
  })

export default {
  insert,
  find,
  findByAuthor
};