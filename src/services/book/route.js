import express from "express";

import { insert, find } from "./action";

const router = express.Router();

router.post("/", insert);

router.use("/by-title/:title", find);

router.use('/*', (req, res) => res.status(404).send());


export default router;