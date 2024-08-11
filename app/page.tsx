import { promises as fs } from "fs";
import { Cards } from "./components/Cards";

type Timeframes = {
  current: number;
  previous: number;
};

type DataItem = {
  title: string;
  timeframes: {
    daily: Timeframes;
    weekly: Timeframes;
    monthly: Timeframes;
  };
};

type FetchedData = DataItem[];

export const revalidate = 14400;

export default async function Home() {
  const res = await fs.readFile(process.cwd() + "/data.json", "utf8");
  const data: FetchedData = JSON.parse(res);
  // const res = await fetch("http://localhost:4000/data");
  // const data: FetchedData = await res.json();

  return (
    <main>
      <Cards data={data} />
    </main>
  );
}
