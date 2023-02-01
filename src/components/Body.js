import React from "react";

export default function Body() {

    return (
        <div className="bg-blue-200 flex flex-col items-center w-1/2">
            <div className="flex flex-row justify-center items-center w-1/2 p-3 mt-24">
                <div className="w-14 h-11 bg-black mr-24 rounded-3xl border-8 border-white hover:h-1"></div>
                <div className="w-14 h-11 bg-black ml-24 rounded-3xl border-8 border-white hover:h-1"></div>
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