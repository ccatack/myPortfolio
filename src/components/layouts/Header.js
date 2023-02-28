import React from "react";
import { Link } from "gatsby";

export default function Header() {

    return (
        <nav className="flex flex-row items-center justify-end bg-gradient-to-r from-transparent to-white h-12 fixed w-full">
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
        </nav>
    )
}