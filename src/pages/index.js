// absolute path 
import * as React from "react"
import 'react-tooltip/dist/react-tooltip.css'
// relative path 
import "../../dist/output.css";
import PageLayout from "../components/layouts/PageLayout";
import Hero from "../components/layouts/Hero";
import Anim from "../animations/homepageHeroV2.mp4"

//FONTS
//DIALOGUE UI
//Darken about page image?

export default function Home() {
  return (
    <PageLayout className="h-screen flex flex-col" hero={<Hero title="Corbin Atack" subtitle="Hi! I am newly graduated with a degree in computer science and art, looking for opportunities to leverage my skills in front end and full stack design and development." className="mt-12 lg:mt-0 lg:flex-grow" />} >
      <video src={Anim} autoPlay muted className="hidden lg:block absolute right-0 -z-10 h-full" style={{clipPath: "inset(1px 1px)"}}></video>
      <div className="absolute bottom-24 right-[10%] flex h-12 w-full justify-center items-center lg:hidden">
        <div className="text-black text-md text-center rounded-md">
          See my work
        </div>
        <img src="/arrow.png" className="h-full mt-6"></img>
      </div>
    </PageLayout>
  )
}
