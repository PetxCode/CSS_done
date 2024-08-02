import { FC } from "react";
import pix from "@/public/squirell-removebg-preview.png";
import pix1 from "@/public/squirell1.png";

import log from "@/public/tree-removebg-preview.png";
import log1 from "@/public/tree-removebg1.png";

import pix2 from "@/public/squirell2.png";
import log3 from "@/public/tree-removebg2.png";

import Image from "next/image";

interface iProps {
  value: boolean;
}

export const Display: FC<iProps> = ({ value }) => {
  const data = [
    {
      img: pix,
      log: log,
    },
    {
      img: pix1,
      log: log1,
    },
    {
      img: pix2,
      log: log3,
    },
  ];

  return (
    <main className="w-full bg-red-50 h-[95vh] relative">
      <div className="h-8 px-10 text-[#E38E6C] text-[20px] uppercase">
        {value && "Great Work"}
      </div>

      <div
        className={`w-full justify-between ${
          value ? " top-4" : "top-4"
        } absolute mt-10`}
      >
        {data?.map((el, i: number) => (
          <Image
            key={i}
            className={`animate-bounce backimg1 [&:nth-child(0)]:backimg  transition-all duration-300 absolute z-10
          ${
            value
              ? "top-3  left-[7.5rem] [&:nth-child(1)]:left-0 [&:nth-child(2)]:left-60 "
              : "top-3 left-0 [&:nth-child(1)]:left-[7.5rem] [&:nth-child(2)]:left-60"
          }
          h-[100px] w-[100px] flex justify-center items-center`}
            width={200}
            height={200}
            alt=""
            src={el.img}
          />
        ))}
      </div>

      <div className={`flex w-full justify-between top-10 absolute `}>
        {data?.map((el, i: number) => (
          <Image
            width={200}
            height={200}
            alt="kk"
            src={el.log}
            key={i}
            className="absolute top-3 left-[7.5rem] [&:nth-child(1)]:left-0 [&:nth-child(2)]:left-60 backtree rounded-md h-[100px] w-[100px] flex justify-center items-center"
          />
        ))}
      </div>
    </main>
  );
};
