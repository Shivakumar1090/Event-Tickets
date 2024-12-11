const express = require("express");
const cors = require("cors");
const ConnectDB = require('./db/conn');

const app = express();

require("dotenv").config();
const port = process.env.PORT || 5000;

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//json
app.use(express.json({ extended: false }));
app.use(cors());

// Mongoose Database connection
ConnectDB();

//Routes
app.use("/user", require('./routes/user_routes'));

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
