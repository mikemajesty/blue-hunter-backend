import express from "express";

import { insert } from "./action";

const router = express.Router();

router.post("/", function (req, res, next) {
	console.log('===================INSERT USER========================')
});

router.use("/by-name", function (req, res, next) {
	console.log('===================GET USER========================')
});

export default router;