const listRouter = require("./listRouter");
const express = require("express");

const router = express.Router();

router.use("/list", listRouter);

module.exports = router;
