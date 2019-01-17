import express from "express";

import { extract } from "./action";

const router = express.Router();

router.use("/", extract);

router.use('/*', (req, res) => res.status(404).send());

export default router;