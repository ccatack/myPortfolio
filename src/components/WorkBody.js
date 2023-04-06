import React from "react";
import myWorkHeroAnim from "../animations/myWorkPageAnimationv2.mp4"

export default function WorkBody() {

    return (
        <div className="">
            <div className="relative">
                <video src={myWorkHeroAnim} autoPlay loop muted  className="absolute top-0 bottom-0 z-0"/>
                <div className="relative text-7xl z-10">
                    My Work
                </div>
            </div>
            <div className="w-1/3 ml-8 flex flex-col items-start">
                <div className="text-sm mt-2 ml-1">
                    Projects and experience from UI design to game
                    development.
                </div>
            </div>
        </div>
    )
}