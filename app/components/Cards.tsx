import React, { FC } from "react";
import { MainCard } from "./MainCard";
import { Card } from "./Card";

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

interface CardsProps {
  data: DataItem[];
}

export const Cards: FC<CardsProps> = ({ data }) => {
  return (
    <div className="grid gap-5 desktop:grid-cols-4 desktop:grid-rows-2">
      <MainCard />
      <SubCard data={data} />
    </div>
  );
};

export const SubCard: FC<CardsProps> = ({ data }) => {
  return data.map((el) => <Card el={el} key={el.title} />);
};
