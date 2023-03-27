import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import Hero from "../components/layouts/Hero";
import myWorkHeroAnim from "../animations/myWorkPageAnimationv2.mp4"
import workData from "../data/workExp.js"

export default function Work() {

    const workTiles = workData.map( item => {
        return (
            <div key={item.id} className="flex flex-row p-8 h-72 justify-between" >
                <div style={{
                    display: "grid",
                    gridTemplateRows: "2fr 6fr 1fr",
                    width: "45%"
                }}>
                    <div className="flex flex-row">
                        <div className="text-2xl">{item.projectTitle}</div>
                        {item.link && <a href={item.link} className="mt-2 ml-2" target="_blank"><img src="/linkIcon.png" className="max-h-5"></img></a>}
                    </div>
                    <div className="text-md">{item.projectDescription}</div>
                    <div className="text-center text-xs text-[#006caf]">{item.stack}</div>
                </div>
                {item.image && <img src={item.image} className="rounded-lg bg-white"></img>}
                {item.video && <video src={item.video} autoPlay loop muted className="rounded-lg"/>}
            </div>
        )
    }
    )

    return (
        <PageLayout 
            hero={<Hero title="My Work" subtitle="Projects and experience from UI design to game development." className="">
                <video src={myWorkHeroAnim} autoPlay loop muted  className="absolute top-0 bottom-0 right-0 -z-10"/>
                </Hero>} >
            <div className="flex justify-center">
                <div className="w-3/4">
                    {workTiles}
                </div>
            </div>
        </PageLayout>
    )
}