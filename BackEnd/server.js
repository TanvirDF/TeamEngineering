//CHenged the import and export strutcture to allow for the DBUtils file to be used
const express = require("express");
const dotenv = require("dotenv");
//extra imports for the development environment
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

//A file consisting of DB utility functions, mongoose is imported here
const DBUtils = require("./utils/DBUtils")

//changed names to be clearer
const graduateRouter = require('./routes/graduate.routes.js');
const trainingRouter = require('./routes/training.routes.js');
const personalStoryRouter = require('./routes/personalStory.routes.js');
const informationRouter = require('./routes/information.routes.js');
const loginRouter = require("./routes/login.routes.js");

//Configuring path regardless of .env
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
const { NODE_ENV } = process.env;
require("dotenv").config({ path: `.env.${NODE_ENV}` });

const port = process.env.PORT;
const host = process.env.HOST;
const db = process.env.DB_URI;

const app = express();

// To log on req instead of res, so logs are recorded before a server crash
if (NODE_ENV === "development") app.use(morgan("dev"));

//Allows for better security when for connecting to server
app.use(cors());
app.use(bodyParser.json());
//Allows for static files to be shown i.e. images, will be useful later
app.use(express.static("public"));
//Allows for checking of incoming data form POST or PUT requests i.e. makes sure it is a json object or strings and arrays
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((_, res, next) => {
  res.header(
    `Access-Control-Allow-Headers`,
    `x-access-token, Origin, Content-Type, Accept`
  );
  next();
});

app.use('/graduate', graduateRouter)
app.use('/personalStory', personalStoryRouter)
app.use('/training', trainingRouter);
app.use('/information', informationRouter)
app.use("/login", loginRouter);

//Connecting to the data base
DBUtils.connect(db);

const server = app.listen(port, host, () => {
  const SERVER_HOST = server.address().address;
  const SERVER_PORT = server.address().port;
  console.log(`Server is running on http://${SERVER_HOST}:${SERVER_PORT}`);
});


module.exports = server;

