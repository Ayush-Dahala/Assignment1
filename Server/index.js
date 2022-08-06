const express = require("express");
require("./config/configFile");
const app = express();
const details = require("./config/model");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/post", async (req, resp) => {
  let detail = new details(req.body);
  let data = await detail.save();
  resp.send(data);
});

app.put("/update/:name", async (req, resp) => {
  let data = await details.updateOne(req.params, { $set: req.body });
  resp.send(data);
});

app.get("/", async (req, resp) => {
  let data = await details.find();
  resp.send(data);
});


app.listen(4000);
