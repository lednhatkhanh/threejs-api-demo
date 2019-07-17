const express = require("express");
const compression = require("compression");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 4000;

app.use(cors());
app.use(compression({ filter: () => true }));
app.use(express.static(path.join(__dirname + "../public")));

app.get("/", (_req, res) => res.json(JSON.stringify(JSON.parse({ hello: "World" }))));

app.listen(port, () => {
  console.log(`Server starts at ${port}`);
});
