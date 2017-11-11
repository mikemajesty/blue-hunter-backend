import express from "express";

import { insert } from "./action";

const router = express.Router();

router.post("/", function (req, res, next) {
	console.log('===================USER========================')
});

export default router;