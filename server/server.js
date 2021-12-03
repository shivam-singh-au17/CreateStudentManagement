require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT

const connect = require("./src/config/db");

const studentcontroller = require("./src/controllers/student.controllers");
const loginController = require("./src/controllers/login.controlers");
const contestController = require("./src/controllers/contests.controllers");

app.use(cors());
app.use(express.json());



app.use(studentcontroller);
app.use(loginController);
app.use(contestController);

app.listen(port, async () => {

  await connect();
  console.log("Listening on post " + port);

})


module.exports = app;

