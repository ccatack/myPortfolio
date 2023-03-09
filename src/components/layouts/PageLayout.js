import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout(props) {

    return (
        <div className={props.className}>
            <Header/>
            {props.hero}
            {props.children}
            <Footer/>
        </div>
    )
}
