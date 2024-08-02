import { FC } from "react";
import pix from "@/public/squirell-removebg-preview.png";
import pix1 from "@/public/squirell1.png";
import log from "@/public/tree-removebg-preview.png";
import log1 from "@/public/tree-removebg1.png";
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
  ];

  return (
    <main className="w-full h-[95vh] relative">
      <div className="h-8 px-10 text-[#E38E6C] text-[20px] uppercase">
        {value && "Great Work"}
      </div>

      <div
        className={`w-full justify-between ${
          value ? "-left-[8%] bottom-24" : "top-4"
        } absolute mt-10`}
      >
        {data?.map((el, i: number) => (
          <Image
            key={i}
            className={`animate-bounce backimg1 [&:nth-child(0)]:backimg  transition-all duration-300 absolute z-10
          ${
            value
              ? " [&:nth-child(1)]:left-64 [&:nth-child(0)]:left-[40%] [&:nth-child(2)]:left-[63%] "
              : "top-3 left-0 [&:nth-child(1)]:left-28 [&:nth-child(2)]:right-[63%]"
          }
          h-[100px] w-[100px] flex justify-center items-center`}
            width={200}
            height={200}
            alt=""
            src={el.img}
          />
        ))}
      </div>

      <div
        className={`flex w-full justify-between bottom-28 -left-[8%] absolute `}
      >
        {data?.map((el, i: number) => (
          <Image
            width={200}
            height={200}
            alt="kk"
            src={el.log}
            key={i}
            className="absolute top-0 left-0 [&:nth-child(1)]:left-[40%] [&:nth-child(2)]:left-[63%] backtree rounded-md h-[100px] w-[100px] flex justify-center items-center"
          />
        ))}
      </div>
    </main>
  );
};
