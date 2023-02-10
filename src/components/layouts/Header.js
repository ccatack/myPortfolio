import React from "react";

export default function Header() {

    return (
        <nav className="flex flex-row items-center justify-end bg-gray-200 h-12">
            <button className="ml-12 text-lg">Home</button>
            <button className="ml-12 text-lg">My Work</button>
            <button className="ml-12 text-lg">Resume</button>
            <button className="ml-12 mr-12 text-lg">About</button>
        </nav>
    )
}