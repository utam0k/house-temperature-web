import * as React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  CartesianGrid,
  Tooltip
} from "recharts";

export interface Data {
  time: string;
  temperature: number;
  humidity: number;
  pressure: number;
}

interface Props {
  data: Data[];
}

export function Body({ data }: Props) {
  return (
    <>
      <h1>今日のちゃおハウス</h1>
      <p>
        <a href="https://github.com/chao7150/house-temperature-web">
          ソースコード
        </a>
      </p>
      <h2>気温</h2>
      <LineChart width={1000} height={400} data={data} syncId="chao">
        <Line type="monotone" dataKey="temperature" />
        <XAxis dataKey="time" interval={59} />
        <YAxis domain={[0, 40]} />
        <CartesianGrid />
        <ReferenceLine y={17} label="↓違法" stroke="red" />
        <Tooltip />
      </LineChart>
      <h2>湿度</h2>
      <LineChart width={1000} height={400} data={data} syncId="chao">
        <Line type="monotone" dataKey="humidity" />
        <XAxis dataKey="time" interval={59} />
        <YAxis domain={[0, 70]} />
        <CartesianGrid />
        <ReferenceLine y={40} label="↓違法" stroke="red" />
        <Tooltip />
      </LineChart>
      <h2>気圧</h2>
      <LineChart width={1000} height={400} data={data} syncId="chao">
        <Line type="monotone" dataKey="pressure" />
        <XAxis dataKey="time" interval={59} />
        <YAxis domain={["dataMin", "dataMax"]} />
        <CartesianGrid />
        <ReferenceLine y={1013} label="標準気圧" />
        <Tooltip />
      </LineChart>
    </>
  );
}
