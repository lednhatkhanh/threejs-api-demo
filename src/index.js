const express = require("express");
// const compression = require("compression");
const cors = require("cors");
const path = require("path");
const shrinkRay = require("shrink-ray");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
// app.use(compression({ filter: () => true }));
app.use(
  shrinkRay({
    filter() {
      return true;
    },
  }),
);

app.use(express.static(path.resolve(process.cwd(), "public")));

app.get("/", (_req, res) => res.json(JSON.stringify(JSON.parse({ hello: "World" }))));

app.listen(port, () => {
  console.log(`Server starts at ${port}`);
});
