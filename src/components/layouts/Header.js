import React from "react";
import { Link } from "gatsby";

export default function Header() {

    //CAN ANYBODY DEPLOY TO GHPAGES CUZ THEY HAVE THE DEPLOY SCRIPT?

    return (
        <nav className="flex flex-row items-center justify-end bg-gray-200 h-12">
            <button className="ml-12 text-lg">
                <Link to="/">Home</Link>
            </button>
            <button className="ml-12 text-lg">
                <Link to="/Work">My Work</Link>
            </button>
            <button className="ml-12 text-lg">
                <Link to="/Resume">Resume</Link>
            </button>
            <button className="ml-12 mr-12 text-lg">
                <Link to="/About">About</Link>
            </button>
        </nav>
    )
}