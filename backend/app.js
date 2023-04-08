// config enviroment variables
require("dotenv").config();

const express = require("express");
var session = require("express-session");
const lowerCase = require("./middlewares/lowerCase");
const schoolRouter = require("./routers/school");
const userRouter = require("./routers/user");
const classRouter = require("./routers/class");

const app = express();
const PORT = process.env.PORT || 5000;

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session
app.set("trust proxy", 1); // trust first proxy
var sess = {
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 },
};

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

app.use(session(sess));

// convert to lower case middleware
app.use(lowerCase);

// apis
app.use("/api/schools", schoolRouter);
app.use("/api/users", userRouter);
app.use("/api/classes", classRouter);

app.listen(PORT, () => {
  console.log("running on port " + PORT);
});
