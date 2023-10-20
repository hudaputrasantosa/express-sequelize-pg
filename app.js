const express = require("express");
const app = express();
const port = 3000;
const allRouters = require("./routes/index.js");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", allRouters);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
