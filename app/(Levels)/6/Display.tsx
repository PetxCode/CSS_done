import { FC } from "react";

interface iProps {
  value: boolean;
}

export const Display: FC<iProps> = ({ value }) => {
  const data = Array.from({ length: 1 });

  return (
    <main className="w-full h-[95vh] relative rounded-md">
      <div className="h-8 px-10 text-[#E38E6C] text-[20px] uppercase">
        {value && "Great Work"}
      </div>

      <div
        className={`w-full justify-between ${
          value ? "bottom-[54%]" : "top-4"
        } absolute mt-10`}
      >
        {data?.map((el, i: number) => (
          <div
            key={i}
            className={`animate-bounce backimg transition-all duration-300 absolute z-10
          ${
            value
              ? " right-[41%] "
              : "top-3  right-0 [&:nth-child(2)]:left-[44%] [&:nth-child(1)]:left-0"
          }
          h-[100px] w-[100px] flex justify-center items-center`}
          />
        ))}
      </div>

      <div className={`flex w-full justify-between bottom-[55%] absolute `}>
        {data?.map((el, i: number) => (
          <div
            key={i}
            className="absolute right-[41%] backtree rounded-md h-[100px] w-[100px] flex justify-center items-center "
          />
        ))}
      </div>
    </main>
  );
};
