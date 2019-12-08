import * as ReactDOM from "react-dom";
import { Body } from "./sample";

const sampleData = {
  data: [
    { time: "00:10:00", temperature: 22.6, humidity: 37, pressure: 1018.4 },
    { time: "00:15:00", temperature: 22.9, humidity: 34.7, pressure: 1018.4 },
    { time: "00:20:00", temperature: 22.9, humidity: 35.5, pressure: 1018.4 },
    { time: "00:25:00", temperature: 22.9, humidity: 36, pressure: 1018.5 }
  ]
};

ReactDOM.render(Body(sampleData), document.getElementById("index"));
