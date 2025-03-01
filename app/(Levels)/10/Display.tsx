import { FC } from "react";

interface iProps {
  value: boolean;
}

export const Display: FC<iProps> = ({ value }) => {
  const data = Array.from({ length: 2 });

  return (
    <main className="w-full h-[95vh] relative">
      <div className="h-8 px-10 text-[#E38E6C] text-[20px] uppercase">
        {value && "Great Work"}
      </div>

      <div
        className={`w-full justify-between ${
          value ? "bottom-56" : "top-4"
        } absolute mt-10`}
      >
        {data?.map((el, i: number) => (
          <div
            key={i}
            className={`animate-bounce backimg transition-all duration-300 absolute z-10
          ${
            value
              ? "left-0 [&:nth-child(1)]:top-32"
              : "top-3 left-0 [&:nth-child(1)]:left-24"
          }
          h-[100px] w-[100px] flex justify-center items-center`}
          />
        ))}
      </div>

      <div className={`flex w-full justify-between bottom-60 absolute `}>
        {data?.map((el, i: number) => (
          <div
            key={i}
            className="absolute top-0 left-0 [&:nth-child(1)]:top-32 backtree rounded-md h-[100px] w-[100px] flex justify-center items-center"
          />
        ))}
      </div>
    </main>
  );
};
