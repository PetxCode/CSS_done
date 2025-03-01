import { Dispatch, FC, SetStateAction, useState } from "react";

interface iProps {
  value: boolean;
}

export const Display: FC<iProps> = ({ value }) => {
  const data = Array.from({ length: 2 });

  return (
    <main className="">
      <div className="h-8 px-10 text-[#E38E6C] text-[20px] uppercase ">
        {value && "Great Work"}
      </div>

      <div className={`flex w-full justify-between relative mt-10`}>
        {data?.map((el, i: number) => (
          <div
            key={i}
            className={`animate-bounce backimg transition-all duration-300 absolute z-10
          ${
            value
              ? "top-3 right-20 [&:nth-child(1)]:left-32"
              : "top-3 left-0 [&:nth-child(1)]:left-14"
          }
          h-[100px] w-[100px] flex justify-center items-center `}
          />
        ))}
      </div>

      <div className={`flex w-full justify-between relative `}>
        {data?.map((el, i: number) => (
          <div
            key={i}
            className="absolute top-0 right-20 [&:nth-child(1)]:left-32 backtree rounded-md h-[100px] w-[100px] flex justify-center items-center "
          />
        ))}
      </div>
    </main>
  );
};
