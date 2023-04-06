import React, { useState } from "react";
import { Link } from "gatsby";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuOpen = () => {
        setMenuOpen(true)
    }

    const handleMenuClose = () => {
        setMenuOpen(false)
    }

    return (
        <div>
            <nav className="hidden md:flex flex-row items-center bg-gradient-to-r from-transparent to-white h-16 z-40 fixed w-full">
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

            <button onClick={handleMenuOpen} className="fixed z-10 flex w-10 h-10 md:hidden">
                Menu
            </button>

            {menuOpen && <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 bg-gray-500/95 md:hidden z-50 flex flex-col items-center justify-center text-white text-3xl space-y-12">
                <button onClick={handleMenuClose} className="absolute top-0 left-0 text-lg">
                    Close Menu
                </button>
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