import express from "express";

import { insert } from "./action";

const router = express.Router();

router.post("/", insert);

router.use('/*', (req, res) => res.status(404).send());


export default router;