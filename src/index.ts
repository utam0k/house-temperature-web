import * as express from "express";
import { fetchTemp } from "./fetchTemp";

const app = express();

app.use(fetchTemp);
app.get("/", (req, res) => res.send("Hello, World!"));
app.listen(3000, () => console.log("Example app listening on port 3000!"));
