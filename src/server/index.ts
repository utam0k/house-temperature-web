import * as express from "express";
import * as path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "../dist")));
app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname, "../dist")
  };
  res.sendFile("index.html", options);
});
app.listen(3000);
