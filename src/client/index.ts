import * as ReactDOM from "react-dom";
import { Body } from "./sample";
import axios from "axios";

const ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://gyokuro.chao.tokyo/api/temperature"
    : "/api";
const response = axios.get(ENDPOINT);

response.then(r => {
  ReactDOM.render(
    Body({ data: r.data.data }),
    document.getElementById("index")
  );
});
