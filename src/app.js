const express = require("express");
const app = express();
const calculoRouter = require("./router/calculoRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/calcular", calculoRouter);

module.exports = app;
