import BookModel from "./model";
import AuthorModel from "../author/model";

export const insert = (book) =>
  BookModel
  .query()
  .insertGraph(book);

export const find = (book) =>
  BookModel
  .query()
  .select('book.id', 'book.title', 'author.name as author', 'book.yearPublished', 'book.price', 'book.rating', 'book.img')
  .join('author', 'book.authorId', 'author.id')
  .where(BookModel.raw('lower("title")'), 'like', `%${book.title.toLowerCase()}%`);

export const findByAuthor = (author) =>
  BookModel
  .query()
  .select('book.id', 'book.title', 'author.name as author', 'book.yearPublished', 'book.price', 'book.rating', 'book.img')
  .join('author', 'book.authorId', 'author.id')
  .where(AuthorModel.raw('lower("name")'), 'like', `%${author.name.toLowerCase()}%`);

export default {
  insert,
  find,
  findByAuthor
};