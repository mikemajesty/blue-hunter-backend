import express from "express";

import { insert } from "./actions";

const router = express.Router();

router.post("/", insert);

export default router;