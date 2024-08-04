"use client";
import { MdPermContactCalendar } from "react-icons/md";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { createUserName } from "./global/redux";
import { Loader, Play, TriangleAlert } from "lucide-react";

const page = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useRouter();
  return (
    <div className="h-[calc(100vh-30px)] w-[100%] bg-slate-300 flex flex-col justify-center items-center">
      <div className="w-full pt-[20px] flex flex-col items-center">
        <h1 className="text-[30px] font-bold">Welcome to Flex Squirelly</h1>
        <div className="w-full flex justify-center">
          <p className=" font-normal tracking-widest mt-5 w-[90%] md:w-[500px] text-center">
            This is a very simple Game that explore the possibility of you
            Mastering <strong>CSS-FLEX</strong> in a fun and simple way!
          </p>
        </div>
      </div>

      <div className="w-full items-center p-[40px] flex justify-center mt-10">
        <div className="w-full flex flex-col items-center">
          <h3 className="font-semibold mb-3">
            Kindly Input your player name to get started
          </h3>
          <div className="flex justify-start items-center gap-[20px] border rounded-md w-[80%] md:w-[500px] h-[45px] bg-white overflow-hidden mb-5">
            <MdPermContactCalendar className="ml-2 mr-0 pr-0 text-[28px]" />
            <input
              type="text"
              placeholder="Enter Your Player's Name"
              className=" border-l -ml-3 h-full w-full pl-2 rounded-lg outline-none "
              value={state}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setState(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="py-3 px-20 rounded-lg border  bg-blue-950 text-white"
            disabled={loading}
            onClick={() => {
              if (state !== "") {
                setLoading(true);
                dispatch(createUserName(state));

                navigate.push("/1");
              }
            }}
          >
            {loading ? (
              <div className="flex items-center">
                <Loader className="w-4 h-4 mr-2 mb-1 animate-spin" />
                <span>Loading...</span>
              </div>
            ) : (
              "Let's Go"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
