import React from "react";
import LILogo from "../../images/linkedinLogo.png"
import GHLogo from "../../images/githubLogo.png"
import EmailLogo from "../../images/emailIcon.png"

export default function Footer() {

    return (
        <div className="bg-white h-12 flex flex-row items-center justify-end">
            <div className="text-xs text-gray-500">Copyright 2023 Corbin Atack</div>
            <a href="https://www.linkedin.com/in/corbin-atack/" target="_blank">
                <img src={LILogo} className="ml-6 h-8 max-h-full opacity-40 hover:opacity-80 cursor-pointer"></img>
            </a>
            <a href="https://github.com/ccatack" target="_blank">
                <img src={GHLogo} className="ml-6 h-8 max-h-full opacity-40 hover:opacity-80 cursor-pointer"></img>
            </a>
            <a href="mailto:ccatack@gmail.com" target="_blank">
                <img src={EmailLogo} className="ml-6 mr-8 h-8 max-h-full opacity-40 hover:opacity-80 cursor-pointer"></img>
            </a>
        </div>
    )
}