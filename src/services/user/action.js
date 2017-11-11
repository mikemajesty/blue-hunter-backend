import userService from "./service";
import validator from "../validator/model/user";

export const insert = (req, res, next) =>
  validator(req.body).then(model =>
    userService.insert(model))
      .then(result => res.status(201).send(result))
      .catch((err) => {
        console.log("validator user error", err);
        next();
      });