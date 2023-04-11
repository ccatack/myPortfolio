import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import Hero from "../components/layouts/Hero";
import myWorkHeroAnim from "../animations/myWorkPageAnimation2.mp4"
import workData from "../data/workExp.js"

export default function Work() {

    const workTiles = workData.map( item => {
        return (
            <div key={item.id} className="flex flex-col lg:flex-row lg:p-8 lg:h-72 lg:justify-between" >
                <div className="lg:grid lg:w-[45%] grid-rows-[2fr_6fr_1fr]">
                    <div className="flex flex-row text-lg">
                        <div className="lg:text-2xl">{item.projectTitle}</div>
                        <div className="lg:hidden">{item.mobileDescription}</div>
                        {item.link && <a href={item.link} className="mt-2 ml-2" target="_blank"><img src="/linkIcon.png" className="max-h-5"></img></a>}
                    </div>
                    <div className="hidden lg:block text-md">{item.projectDescription}</div>
                    <div className="hidden lg:block text-center text-xs text-[#006caf]">{item.stack}</div>
                </div>
                {item.image && <img src={item.image} className="rounded-lg bg-white"></img>}
                {item.video && <video src={item.video} autoPlay loop muted className="rounded-lg"/>}
                <div className="lg:hidden text-center text-xs text-[#006caf] mb-8">{item.stack}</div>
            </div>
        )
    }
    )

    return (
        <PageLayout 
            hero={<Hero title="My Work" subtitle="Projects and experience from UI design to game development." className="">
                <video src={myWorkHeroAnim} autoPlay loop muted  className="lg:absolute mt-6 lg:mt-28 lg:mr-20 top-0 bottom-0 right-0 -z-10 md:h-1/2 lg:h-1/3"/>
                </Hero>} >
            <div className="flex justify-center">
                <div className="w-5/6 lg:w-3/4 mb-12">
                    {workTiles}
                </div>
            </div>
        </PageLayout>
    )
}