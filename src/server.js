const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Note = require("./routes/Note");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
//true hoga to nested objects de sakte ho
//false hoga to nested obj ko solve nahi kar payega (not correct)
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://sumit1372:sumit1372@clusternotesapp.w0tgx2f.mongodb.net/notesdb"
  )
  .then(function () {
    app.get("/", function (req, res) {
      const response = { message: "API Works!" };
      res.json(response);
    });

    const noteRouter = require("./models/Node");
    app.use("/notes", noteRouter);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log("server started at PORT:" + PORT);
});
