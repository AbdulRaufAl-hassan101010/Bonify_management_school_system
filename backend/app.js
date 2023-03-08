// config enviroment variables
require("dotenv").config();
const express = require("express");
const lowerCase = require("./middlewares/lowerCase");
const schoolRouter = require("./routers/school");
const userRouter = require("./routers/user");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// convert to lower case middleware
app.use(lowerCase);

// apis
app.use("/api/schools", schoolRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log("running on port 3000");
});
