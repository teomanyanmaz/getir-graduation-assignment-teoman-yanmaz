const express = require("express");
const config = require("./config");
const loaders = require("./loaders");
const RecordRoute = require("./routes/Records");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

config();
loaders();

const app = express();
app.use(express.json());
app.use(
  cors({
    methods: "*",
    origin: "*",
  })
);
const accesLogStream = fs.createWriteStream(
  path.join(__dirname, "logs/network", "access.log"),
  { flags: "a" }
);
app.use(morgan("combined", { stream: accesLogStream }));

app.use("/records", RecordRoute);
app.all("*", (req, res) => {
  res.status(404).json({
    code: 404,
    msg: "Not Found",
    error: "This url does not exist",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on: ${process.env.PORT}`);
});
