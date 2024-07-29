// External Dependecies
const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require('path');
// Internal Dependencies
const  errorHandler = require('./middlewares/errorHandler');

const app = express();




// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);app.use(bodyParser.json({ limit: "1mb" }));
app.use(bodyParser.urlencoded({ limit: "1mb", extended: true }));

// Routes
app.get('/', (req, res) => res.send('Welcome to the backend!'));


// Error Handling
app.use(errorHandler);


module.exports = app
