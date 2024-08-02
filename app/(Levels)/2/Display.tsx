import { Dispatch, FC, SetStateAction, useState } from "react";

interface iProps {
  value: boolean;
}

export const Display: FC<iProps> = ({ value }) => {
  return (
    <main>
      <div className="h-8 text-[#E38E6C] text-[20px] uppercase ">
        {value && "Great Work"}
      </div>
      <div className={`flex w-full justify-between relative mt-10`}>
        <div
          className={`animate-bounce backimg transition-all duration-300 absolute z-10
          ${value ? "top-5 right-1/3" : "top-0 left-0 "}
          h-[100px] w-[100px] flex justify-center items-center `}
        />

        <div className="absolute top-0 right-1/3 backtree rounded-md h-[100px] w-[100px] flex justify-center items-center " />
      </div>
    </main>
  );
};
