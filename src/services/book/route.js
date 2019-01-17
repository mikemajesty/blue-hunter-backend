import express from "express";

import { insert, find, findByAuthor } from "./action";

const router = express.Router();

router.post("/", insert);

router.use("/by-title/:title", find);
router.use("/by-author/:name", findByAuthor);

router.use('/*', (req, res) => res.status(404).send());


export default router;