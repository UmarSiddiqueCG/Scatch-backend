const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("First Route Owner");
});

module.exports = router;
