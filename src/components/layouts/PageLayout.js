import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout(props) {
  return (
    <div className={props.className}>
      <Header />
      {props.hero}
      {props.children}
      <Footer />
    </div>
  );
}

export function Head() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
        rel="stylesheet"
      ></link>
    </>
  );
}
