// config enviroment variables
require("dotenv").config();
const express = require("express");
const schoolsRouter = require("./routers/school");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// apis
app.use("/api/schools", schoolsRouter);

app.listen(PORT, () => {
  console.log("running on port 3000");
});
