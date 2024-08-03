"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { createUserName } from "./global/redux";

const page = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  const navigate = useRouter();
  return (
    <div className="h-[calc(100vh-30px)] w-[100%] bg-[#e38e6c]">
      <div className="w-full pt-[20px] text-center">
        <h1 className="text-[30px] font-bold">Welcome to Flex Squirelly</h1>
      </div>
      <div className="w-full p-[40px]">
        <div>
          <h3 className="font-semibold mb-3">
            Kindly Input your player name to get started
          </h3>
          <div className="flex justify-start items-center gap-[20px]">
            <input
              type="text"
              placeholder="Prince"
              className="h-[40px] pl-2 rounded-lg outline-none border"
              value={state}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setState(e.target.value);
              }}
            />
            <button
              type="submit"
              className="py-2 px-4 rounded-lg border bg-blue-500 text-white"
              onClick={() => {
                if (state !== "") {
                  dispatch(createUserName(state));

                  navigate.push("/1");
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
