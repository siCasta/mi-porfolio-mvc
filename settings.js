const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "./public");

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares

// routes

// Static files
app.use(express.static(publicPath));

module.exports = app;