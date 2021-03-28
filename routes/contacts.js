const express = require("express");
const auth = require("../middleware/auth");
const User = require("../models/User");
const Contact = require("../models/Contact");
const { check, validationResult } = require("express-validator");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post(
  "/",
  [
    auth,
    [
      check("name", "Plese add name").not().isEmpty(),
      check("email", "Plese include a valid email").isEmail(),
      check("phone", "Plese include a Phone No").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

router.put("/:id", (req, res) => {
  res.send("cpuredfsf");
});

router.delete("/:id", (req, res) => {
  res.send("cdredfsf");
});

module.exports = router;
