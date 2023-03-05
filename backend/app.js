// config enviroment variables
require("dotenv").config();
const express = require("express");
const schoolRouter = require("./routers/school");
const schoolAddressRouter = require("./routers/schoolAddress");
const userRouter = require("./routers/user");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// apis
app.use("/api/schools", schoolRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log("running on port 3000");
});
