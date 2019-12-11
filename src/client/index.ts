import * as ReactDOM from "react-dom";
import { Body } from "./body";
import axios from "axios";

const ENDPOINT = "https://gyokuro.chao.tokyo/api/temperature";
const response = axios.get(ENDPOINT);

response.then(r => {
  ReactDOM.render(
    Body({ data: r.data.data }),
    document.getElementById("index")
  );
});
