import * as express from "express";
import * as path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "../dist")));
app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname, "../dist")
  };
  console.log(options);
  res.sendFile("index.html", options);
});
app.listen(3000, () => console.log("Example app listening on port 3000!"));
