import userService from "./service";
import validator from "../validator/user";

export const insert = (req, res, next) => {
	console.log('foi')
	validator(req.body).then(model => {
    console.log('validou', model);
    return userService.insert(model);
  }).then(result => {
    res.status(201).send(result);
  }).catch((err) => {
    console.log("validator customer error", err);
    next();
  });
};