const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("gaefsef");
});

router.post("/", (req, res) => {
  res.send("gpaefsef");
});

module.exports = router;
