const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoose.set("debug", true);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
