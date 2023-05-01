import React, { useState } from "react";
import { Link } from "gatsby";
import { Tooltip } from "react-tooltip";
import LILogo from "../../images/linkedinLogo.png";
import GHLogo from "../../images/githubLogo.png";
import EmailLogo from "../../images/emailIcon.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleEmailClick = async () => {
    await navigator.clipboard.writeText("ccatack@gmail.com");
  };

  return (
    <div className="">
      <nav className="hidden lg:flex flex-row items-center bg-gradient-to-r from-transparent to-white h-16 z-40 fixed w-full">
        <Link to="/" className="h-full">
          <img src="/favicon.ico.png" className="h-full ml-6"></img>
        </Link>
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

      {!menuOpen && (
        <button
          onClick={handleMenuOpen}
          className="fixed z-10 flex w-12 h-12 bottom-[3%] right-1/2 translate-x-1/2 lg:hidden items-center justify-center bg-white rounded-full border-2 border-black"
        >
          <img src="/menuIcon.png" className="h-4/5"></img>
        </button>
      )}

      {menuOpen && (
        <div className="fixed w-full h-full bg-white/90 lg:hidden z-50 flex flex-col items-center justify-end text-3xl space-y-12 animate-slide">
          <div className=" top-0 flex flex-row items-center h-12">
            <a
              href="https://www.linkedin.com/in/corbin-atack/"
              target="_blank"
              title="LinkedIn"
            >
              <img
                src={LILogo}
                className="ml-6 h-8 max-h-full opacity-60 hover:opacity-100 cursor-pointer"
              ></img>
            </a>
            <a href="https://github.com/ccatack" target="_blank" title="GitHub">
              <img
                src={GHLogo}
                className="ml-6 h-8 max-h-full opacity-60 hover:opacity-100 cursor-pointer"
              ></img>
            </a>
            <a
              onClick={() => handleEmailClick()}
              data-tooltip-id="my-tooltip"
              title="Copy Email"
            >
              <img
                src={EmailLogo}
                className="ml-6 mr-8 h-8 max-h-full opacity-60 hover:opacity-100 cursor-pointer"
              ></img>
            </a>
            <Tooltip
              id="my-tooltip"
              content="Email Copied"
              events={["click"]}
              offset={10}
              place="top"
              delayHide={1000}
              noArrow={true}
            />
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
          <button
            onClick={handleMenuClose}
            className="flex text-lg w-full h-28 items-center justify-center"
          >
            <img src="/closeIcon.png" className="h-1/2"></img>
          </button>
        </div>
      )}
    </div>
  );
}
