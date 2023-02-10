import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout(props) {

    return (
        <div>
            <Header/>
            <body className="flex flex-col items-center">{props.children}</body>
            <Footer/>
        </div>
    )
}