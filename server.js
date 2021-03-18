const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json({ expected: false }));

app.get("/", (req, res) => {
  res.json({ msg: "Hello" });
});

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
