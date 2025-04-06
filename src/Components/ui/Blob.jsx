import React from "react";
import "./generalComponentStyle.css";

const Blob = React.forwardRef(
  (
    {
      position = "absolute",
      WidthHeight = "w-[500px] h-[500px]",
      transform = "",
      borderRoundness = "rounded-full",
      customClass = "",
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`${customClass} ${WidthHeight} ${position} ${transform} ${borderRoundness} blob`}
      ></div>
    );
  }
);

export default Blob;
