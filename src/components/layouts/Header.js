import React, { useState } from "react";
import { Link } from "gatsby";
import { Tooltip } from 'react-tooltip'
import LILogo from "../../images/linkedinLogo.png"
import GHLogo from "../../images/githubLogo.png"
import EmailLogo from "../../images/emailIcon.png"

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuOpen = () => {
        setMenuOpen(true)
    }

    const handleMenuClose = () => {
        setMenuOpen(false)
    }

    const handleEmailClick = async () => {
        await navigator.clipboard.writeText("ccatack@gmail.com");
        
    }

    return (
        <div>
            <nav className="hidden lg:flex flex-row items-center bg-gradient-to-r from-transparent to-white h-16 z-40 fixed w-full">
                <img src="/favicon.ico.png" className="h-full ml-6"></img>
                <div className="flex flex-row items-center justify-end justify-self-end w-full">
                    <button className="ml-16">
                        <Link to="/">Home</Link>
                    </button>
                    <button className="ml-16">
                        <Link to="/Work">My Work</Link>
                    </button>
                    <button className="ml-16">
                        <Link to="/Resume">Resume</Link>
                    </button>
                    <button className="ml-16 mr-8">
                        <Link to="/About">About</Link>
                    </button>
                </div>
            </nav>

            <button onClick={handleMenuOpen} className="fixed z-10 flex w-full h-10 bottom-0 right-0 lg:hidden items-center justify-center bg-white shadow-[0_-2px_4px_0_rgba(0,0,0,0.1)]">
                <img src="/menuIcon.png" className="h-5/6 opacity-50"></img>
            </button>

            {menuOpen && <div className="fixed w-full h-full top-0 bottom-0 left-0 right-0 bg-gray-500/95 lg:hidden z-50 flex flex-col items-center justify-center text-white text-3xl space-y-12">
                <button onClick={handleMenuClose} className="fixed flex bottom-0 right-0 text-lg w-full h-20 items-center justify-center">
                    <img src="/closeIcon.png" className="h-3/4"></img>
                </button>
                <div className=" top-0 flex flex-row items-center h-12">
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
                <button className="">
                    <Link to="/">Home</Link>
                </button>
                <button className="">
                    <Link to="/Work">My Work</Link>
                </button>
                <button className="">
                    <Link to="/Resume">Resume</Link>
                </button>
                <button className="">
                    <Link to="/About">About</Link>
                </button>
            </div>}
        </div>
    )
}