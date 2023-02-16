import React from "react";
import LILogo from "../../images/linkedinLogo.png"
import GHLogo from "../../images/githubLogo.png"
import EmailLogo from "../../images/emailIcon.png"

export default function Footer() {

    return (
        <div className="bg-white h-12 flex flex-row items-center justify-end">
            <div className="text-xs text-gray-400">Copyright 2023 Corbin Atack</div>
            <img src={LILogo} className="ml-6 h-8 max-h-full"></img>
            <img src={GHLogo} className="ml-4 h-8 max-h-full"></img>
            <img src={EmailLogo} className="ml-4 mr-6 h-8 max-h-full"></img>
        </div>
    )
}