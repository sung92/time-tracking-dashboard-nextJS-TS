"use client";

import React, { FC } from "react";
import { useSelectedTime } from "../contexts/SelectedTime";
import Image from "next/image";

export const MainCard: React.FC = () => {
  const { select, setSelect } = useSelectedTime();
  return (
    <div className="flex max-w-[300px] flex-col rounded-[12px] bg-neutral-darkblue desktop:row-span-2">
      <div className="flex items-center justify-center gap-4 overflow-hidden rounded-[12px] bg-[#5747EA]/[0.85] p-[25px] font-light desktop:max-w-[250px] desktop:flex-col desktop:items-start desktop:gap-8 desktop:py-[40px] desktop:pb-[80px]">
        <Image
          src="/images/image-jeremy.png"
          className="rounded-full border-2 border-white"
          width={65}
          height={65}
          alt=""
        ></Image>
        <div className="flex flex-col gap-1 desktop:gap-0">
          <p className="text-[13px] text-white/[0.7]">Report for</p>
          <p className="text-[24px] text-white desktop:text-[40px] desktop:leading-10">
            Jeremy Robson
          </p>
        </div>
      </div>
      <ul
        role="list"
        className="flex justify-around p-[18px] text-[15px] text-neutral-desaturatedblue desktop:flex-col desktop:gap-4 desktop:py-[30px]"
      >
        <li
          onClick={() => setSelect("daily")}
          className={`cursor-pointer duration-300 hover:text-white ${
            select === "daily" ? "text-white" : ""
          }`}
        >
          Daily
        </li>
        <li
          onClick={() => setSelect("weekly")}
          className={`cursor-pointer duration-300 hover:text-white ${
            select === "weekly" ? "text-white" : ""
          }`}
        >
          Weekly
        </li>
        <li
          onClick={() => setSelect("monthly")}
          className={`cursor-pointer duration-300 hover:text-white ${
            select === "monthly" ? "text-white" : ""
          }`}
        >
          Monthly
        </li>
      </ul>
    </div>
  );
};
