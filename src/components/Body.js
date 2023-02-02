import React from "react";

export default function Body() {

    return (
        <div className="bg-blue-200 flex flex-col items-center w-1/2">
            <div className="flex flex-row justify-between items-center w-1/2 p-3 mt-24">
                <div className="group w-1/5 h-11 rounded-3xl flex items-center">
                    <div className="w-full h-11 bg-black rounded-3xl border-8 border-white group-hover:h-1"></div>
                </div>
                <div className="group w-1/5 h-11 rounded-3xl flex items-center">
                    <div className="w-full h-11 bg-black rounded-3xl border-8 border-white group-hover:h-1"></div>
                </div>
            </div>
            <div className="mt-8 bg-blue-400 w-28 text-center">
                nose
            </div>
            <div className="mt-8">
                mouf
            </div>
        </div>
    )
}