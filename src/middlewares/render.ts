import { Body, Data } from "../client/sample";
import * as ReactDOMServer from "react-dom/server";

export const render = (req: { temp: Data[] }, res, next) => {
  res.send(ReactDOMServer.renderToString(Body({ data: req.temp })));
  next();
};
