const express = require("express");
const path = require("path");

const port = Number(process.env.PORT) || 8080;

const app = express();

// log
app.all("*", (req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// static files
app.use(express.static(path.resolve("public")));

// API
app.get("/data.json", (req, res) => {
  const data = {
    date: new Date(),
    message: "Hello World!",
  };
  res.json(data);
});

// start
app.listen(port, () => console.log("Listening at", port));
