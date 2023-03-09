import React from "react";
import classNames from "classnames";

export default function Hero(props) {

  return (
    <div className={classNames("relative flex flex-col justify-center w-full h-[26rem]", props.className)}>
        {props.children}
        <div className="ml-8">
          <div className="text-7xl" >{props.title}</div>
          <div className="text-sm w-1/3 ml-1" >{props.subtitle}</div>
        </div>
    </div>
    )
}