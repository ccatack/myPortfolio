import React from "react";
import { Tooltip } from 'react-tooltip'
import LILogo from "../../images/linkedinLogo.png"
import GHLogo from "../../images/githubLogo.png"
import EmailLogo from "../../images/emailIcon.png"

export default function Footer() {

    const getYear = () => {
        return new Date().getFullYear()
    }

    const handleEmailClick = async () => {
        await navigator.clipboard.writeText("ccatack@gmail.com");
        
    }

    return (
        <div className="hidden bg-white h-12 lg:flex flex-row items-center justify-end">
            <div className="text-xs text-gray-500">Copyright {getYear()} Corbin Atack</div>
            <a href="https://www.linkedin.com/in/corbin-atack/" target="_blank" title="LinkedIn">
                <img src={LILogo} className="ml-6 h-8 max-h-full opacity-40 hover:opacity-80 cursor-pointer"></img>
            </a>
            <a href="https://github.com/ccatack" target="_blank" title="GitHub">
                <img src={GHLogo} className="ml-6 h-8 max-h-full opacity-40 hover:opacity-80 cursor-pointer"></img>
            </a>
            <a onClick={() => handleEmailClick()} data-tooltip-id="my-tooltip" title="Copy Email" >
                <img src={EmailLogo} className="ml-6 mr-8 h-8 max-h-full opacity-40 hover:opacity-80 cursor-pointer"></img>
            </a>
            <Tooltip id="my-tooltip" content="Email Copied" events={['click']} offset={10} place="top" delayHide={1000} noArrow={true} />
        </div>
    )
}