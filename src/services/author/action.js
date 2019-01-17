import authorService from "./service";
import insertValidator from "../validator/author/insert";

export const insert = (req, res, next) =>
  insertValidator(req.body).then(model =>
    authorService.insert(model))
      .then(result => res.status(201).send(result))
      .catch((err) => {
        console.log("Validation error", err);
        next();
      });