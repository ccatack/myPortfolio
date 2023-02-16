import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout(props) {

    return (
        <div className="bg-gray-200">
            <Header/>
            <body className="flex flex-col items-center">{props.children}</body>
            <Footer/>
        </div>
    )
}