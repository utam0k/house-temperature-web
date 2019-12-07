import * as express from "express";
import { fetchTemp } from "./middlewares/fetchTemp";
import { render } from "./middlewares/render";

const app = express();

app.use(fetchTemp);
app.use(render);
app.get("/");
app.listen(3000, () => console.log("Example app listening on port 3000!"));
