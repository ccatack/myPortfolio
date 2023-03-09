import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout(props) {

    /* add prop for hero components */

    return (
        <div className={props.className}>
            <Header/>
            {props.hero}
            {props.children}
            <Footer/>
        </div>
    )
}


// custom compontent option
// function PageHeaderHero({ title, imgBackgrounURl, ...others }) { 
//     return (
//         <div>
//             {/* render page header */}

//         </div>
//     )
// }

/* 
    <PageLayout hero={<PageHeaderHero title="Hello" imgBackground="kljiht"><video></video> </PageHeaderHero>}

*/

// other option 
/* 
    <PageLayout pageTitle="Title" heroImage="imgURL" ?heroContent={} />

*/
