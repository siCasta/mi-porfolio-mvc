const express = require("express");
const app = express();
const path = require("path");

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares

// routes
const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

const aboutRoutes = require("./routes/about");
app.use('/about', aboutRoutes);

// Static files
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

module.exports = app;