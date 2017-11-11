import userService from "./service";
import insertValidator from "../validator/model/book/insert";
import findValidator from "../validator/model/book/find";

export const insert = (req, res, next) =>
  insertValidator(req.body).then(model =>
    userService.insert(model))
      .then(result => res.status(201).send(result))
      .catch((err) => {
        console.log("Validation error", err);
        next();
      });

export const find = (req, res, next) =>
  findValidator({ title: req.params.title }).then(model =>
    userService.find(model))
      .then(result => res.status(200).send(result))
      .catch((err) => {
        console.log("Validation error", err);
        next();
      });