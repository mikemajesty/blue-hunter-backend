import BookModel from "./model";

export const insert = (book) =>
  BookModel
  .query()
  .insertGraph(book);

export const find = (book) =>
  BookModel
  .query()
  .select('book.id', 'book.title', 'author.name as author', 'book.yearPublished', 'book.price', 'book.rating', 'book.img')
  .join('author', 'book.authorId', 'author.id')
  .where('title', 'like', `%${book.title}%`);

export const findByAuthor = (author) =>
  BookModel
  .query()
  .select('book.id', 'book.title', 'author.name as author', 'book.yearPublished', 'book.price', 'book.rating', 'book.img')
  .join('author', 'book.authorId', 'author.id')
  .where('author.name', 'like', `%${author.name}%`);

export default {
  insert,
  find,
  findByAuthor
};