// "use client";

import React, { FC, ReactNode } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

interface iMain {
  children: ReactNode;
}
const LoaderSpin: FC<iMain> = ({ children }) => {
  return (
    <div>
      {children}

      {/* <ProgressBar
        height="4px"
        color="#E38E6C"
        options={{ showSpinner: true }}
        shallowRouting
      /> */}
    </div>
  );
};

export default LoaderSpin;
