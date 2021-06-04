const express = require(`express`);
require("dotenv").config();

const app = express();
app.use(express.json({ extended: false }));

const session = require("express-session");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 3000 * 60 * 60,
    },
  })
);

app.use("/api/bot", require("./routes/api/bot"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
