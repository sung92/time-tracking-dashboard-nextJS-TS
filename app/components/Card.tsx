"use client";

import React, { FC } from "react";
import { useSelectedTime } from "../contexts/SelectedTime";

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

interface CardProp {
  el: DataItem;
}

export const Card: FC<CardProp> = ({ el }) => {
  const { select } = useSelectedTime();

  let title = el.title.split(" ").join("-").toLowerCase();
  const selectUpper = select.charAt(0).toUpperCase() + select.slice(1);
  let time = selectUpper.replace("ly", "");
  if (time === "Dai") time = "Day";
  let timeframe;
  let current;

  if (select === "weekly") {
    timeframe = el.timeframes.weekly.previous;
    current = el.timeframes.weekly.current;
  }
  if (select === "daily") {
    timeframe = el.timeframes.daily.previous;
    current = el.timeframes.daily.current;
  }

  if (select === "monthly") {
    timeframe = el.timeframes.monthly.previous;
    current = el.timeframes.monthly.current;
  }

  let background;

  if (title === "work") background = "bg-primary-lightredw";
  if (title === "play") background = "bg-primary-softblue";
  if (title === "study") background = "bg-primary-lightreds";
  if (title === "exercise") background = "bg-primary-limegreen";
  if (title === "social") background = "bg-primary-violet";
  if (title === "self-care") background = "bg-primary-softorange";

  return (
    <>
      <div
        className={`${background} rounded-[15px] bg-[top_-0.4rem_right_0.6rem] bg-no-repeat`}
        style={{ backgroundImage: `url('./images/icon-${title}.svg')` }}
      >
        <div className="mt-[37px] flex flex-col gap-2 rounded-[12px] bg-neutral-darkblue p-[20px] hover:bg-neutral-darkbluehover desktop:mt-[52px] desktop:cursor-pointer">
          <div className="flex w-full items-center justify-between">
            <p className="text-white">{el.title}</p>
            <div className="group cursor-pointer">
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                  fill="#BBC0FF"
                  fillRule="evenodd"
                  className="group-hover:fill-white group-hover:duration-300"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between desktop:flex-col desktop:items-start">
            <p className="text-[32px] font-light text-white desktop:text-[56px]">
              {current}hrs
            </p>
            <p className="text-[12px] text-neutral-paleblue">
              Last {time} - {timeframe}
              hrs
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
