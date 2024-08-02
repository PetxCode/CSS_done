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
    <main className="w-full h-[95vh] relative">
      <div className="h-8 px-10 text-[#E38E6C] text-[20px] uppercase">
        {value && "Great Work"}
      </div>

      <div className={`w-full justify-between mt-5 absolute`}>
        {data?.map((el, i: number) => (
          <Image
            key={i}
            className={`animate-bounce backimg1 [&:nth-child(0)]:backimg  transition-all duration-300 absolute z-10 
          ${
            value
              ? `absolute 
              left-[0%]  
            [&:nth-child(0)]:top-2 

            [&:nth-child(1)]:left-[40%] 
            [&:nth-child(1)]:top-0
            
            [&:nth-child(2)]:left-[80%]
            [&:nth-child(2)]:top-0
            
            [&:nth-child(3)]:left-[0%]
            [&:nth-child(3)]:top-60
            
            [&:nth-child(4)]:left-[40%]
            [&:nth-child(4)]:top-60
            
            [&:nth-child(5)]:left-[80%]
            [&:nth-child(5)]:top-60
            
            [&:nth-child(6)]:left-[0%]
            [&:nth-child(6)]:top-[30rem] 

            [&:nth-child(7)]:left-[40%]
            [&:nth-child(7)]:top-[30rem] 
            
            [&:nth-child(8)]:left-[80%]
            [&:nth-child(8)]:top-[30rem] 
              
              backtree rounded-md h-[100px] w-[100px] flex justify-center items-center`
              : `left-[0%] 
              [&:nth-child(1)]:left-[10%]
              [&:nth-child(2)]:left-[20%]
              [&:nth-child(3)]:left-[30%]
              [&:nth-child(4)]:left-[40%]
              [&:nth-child(5)]:left-[50%]
              [&:nth-child(6)]:left-[60%]
              [&:nth-child(7)]:left-[70%]
              [&:nth-child(8)]:left-[80%]
              `
          }
          h-[100px] w-[100px] flex justify-center items-center`}
            width={200}
            height={200}
            alt=""
            src={el.img}
          />
        ))}
      </div>

      {/* LOG */}
      <div className={`flex w-full justify-between top-10 absolute `}>
        {data?.map((el, i: number) => (
          <Image
            width={200}
            height={200}
            alt="kk"
            src={el.log}
            key={i}
            className="absolute
            left-[0%]  
            [&:nth-child(0)]:top-2 

            [&:nth-child(1)]:left-[40%] 
            [&:nth-child(1)]:top-0
            
            [&:nth-child(2)]:left-[80%]
            [&:nth-child(2)]:top-0
            
            [&:nth-child(3)]:left-[0%]
            [&:nth-child(3)]:top-60
            
            [&:nth-child(4)]:left-[40%]
            [&:nth-child(4)]:top-60
            
            [&:nth-child(5)]:left-[80%]
            [&:nth-child(5)]:top-60
            
            [&:nth-child(6)]:left-[0%]
            [&:nth-child(6)]:top-[30rem] 

            [&:nth-child(7)]:left-[40%]
            [&:nth-child(7)]:top-[30rem] 
            
            [&:nth-child(8)]:left-[80%]
            [&:nth-child(8)]:top-[30rem] 
            
            backtree rounded-md h-[100px] w-[100px] flex justify-center items-center"
          />
        ))}
      </div>
    </main>
  );
};
