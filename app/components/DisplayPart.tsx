import { Dispatch, FC, SetStateAction, useState } from "react";

interface iProps {
  value: boolean;
}

export const DisplayPart: FC<iProps> = ({ value }) => {
  return (
    <div className={`flex w-full justify-between relative mt-10`}>
      <div
        className={`animate-bounce backimg transition-all duration-300 absolute z-10
          ${value ? "top-5 right-0  " : "top-0 left-0 "}
          h-[100px] w-[100px] flex justify-center items-center `}
      />

      <div className="absolute top-0 right-1 backtree rounded-md h-[100px] w-[100px] flex justify-center items-center " />
    </div>
  );
};
