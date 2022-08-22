//CHenged the import and export strutcture to allow for the DBUtils file to be used
const express = require("express");
const dotenv = require("dotenv");
//extra imports for the development environment
const morgan = require("morgan");
const cors = require("cors");

//A file consisting of DB utility functions, mongoose is imported here
const DBUtils = require("./utils/DBUtils")

//changed names to be clearer
const graduateRouter = require('./routes/graduate.routes.js');
const profileRouter = require('./routes/profile.routes.js');

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
//Allows for static files to be shown i.e. images, will be useful later
app.use(express.static("public"));
//Allows for checking of incoming data form POST or PUT requests i.e. makes sure it is a json object or strings and arrays
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/graduate', graduateRouter)
app.use('/profile', profileRouter)


const server = app.listen(port, host, () => {
  const SERVER_HOST = server.address().address;
  const SERVER_PORT = server.address().port;
  console.log(`Server is runnning on http://${SERVER_HOST}:${SERVER_PORT}`);
});

//Uses a utility function to check against the test .env, if it's not testing then it connects to DB
if (!DBUtils.isTestEnv()) {
  (async () => {
    await DBUtils.connect(db);
  })();
}


module.exports = server;

