import express from "express";

import { insert } from "./action";

const router = express.Router();

router.post("/", insert);

router.use("/by-name", function (req, res, next) {
	console.log('===================GET USER========================')
});

export default router;