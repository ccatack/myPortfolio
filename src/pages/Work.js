import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import WorkBody from "../components/WorkBody";
import Hero from "../components/layouts/Hero";
import myWorkHeroAnim from "../animations/myWorkPageAnimationv2.mp4"

export default function Work() {

    return (
        <PageLayout 
            hero={<Hero title="My Work" subtitle="Projects and experience from UI design to game development." className="">
                <video src={myWorkHeroAnim} autoPlay loop muted  className="absolute top-0 bottom-0 right-0 -z-10"/>
                </Hero>} >
        </PageLayout>
    )
}