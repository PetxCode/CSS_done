"use client";

import React, { useContext, useEffect, useState } from "react";
import { QuestionPart } from "../../components/QuestionPart";
import { DisplayPart } from "../../components/DisplayPart";
import data from "../../data/data.json";
import { Context } from "../../global/provider";
import { usePathname } from "next/navigation";
const page = () => {
  const { entry, setEntry, user } = useContext(Context);
  const [text, setText] = useState<string>("");

  const path = usePathname();
  const val = path.replace("/", "");

  let showPath = parseInt(val);

  useEffect(() => {
    setEntry(false);
  }, []);

  return (
    <div className="min-h-[calc(100vh-20px)] ">
      <div className="grid w-full grid-cols-1 lg:grid-cols-7 gap-4 min-h-[calc(100vh-20px)]">
        <QuestionPart
          answer={data[showPath! - 1]?.answer}
          question={data[showPath! - 1]?.question}
          insight={data[showPath! - 1]?.insight}
          setText={setText}
          text={text}
          showPath={showPath}
        />

        <div className="min-h-[500px] order-1 lg:order-2 col-span-1 lg:col-span-3 p-4">
          <DisplayPart value={entry} />
        </div>
      </div>
    </div>
  );
};

export default page;
