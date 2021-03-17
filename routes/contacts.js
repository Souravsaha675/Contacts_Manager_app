const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("credfsf");
});

router.post("/", (req, res) => {
  res.send("cpredfsf");
});

router.put("/:id", (req, res) => {
  res.send("cpuredfsf");
});

router.delete("/:id", (req, res) => {
  res.send("cdredfsf");
});

module.exports = router;
