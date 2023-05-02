import React from "react";
import classNames from "classnames";

export default function Hero(props) {
  return (
    <div
      className={classNames(
        "flex flex-col justify-center w-full h-[26rem] items-center lg:items-start",
        props.className
      )}
    >
      <div className="flex flex-col justify-center w-5/6 lg:ml-8">
        <div className="text-5xl lg:text-7xl">{props.title}</div>
        <div className="text-sm mt-2 lg:w-1/3 ml-1">{props.subtitle}</div>
        {props.children}
      </div>
    </div>
  );
}
