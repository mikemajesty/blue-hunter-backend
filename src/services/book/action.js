import bookService from "./service";
import insertValidator from "../validator/book/insert";
import findValidator from "../validator/book/find";
import findAuthorValidator from "../validator/author/find";

export const insert = (req, res, next) =>
  insertValidator(req.body).then(model =>
    bookService.insert(model))
      .then(result => res.status(201).send(result))
      .catch((err) => {
        console.log("Validation error", err);
        next();
      });

export const find = (req, res, next) =>
  findValidator({ title: req.params.title }).then(model =>
    bookService.find(model))
      .then(result => res.status(200).send(result))
      .catch((err) => {
        console.log("Validation error", err);
        next();
      });

export const findByAuthor = (req, res, next) =>
  findAuthorValidator({ name: req.params.name }).then(model =>
    bookService.findByAuthor(model))
      .then(result => res.status(200).send(result))
      .catch((err) => {
        console.log("Validation error", err);
        next();
      });

