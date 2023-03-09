// absolute path 
import * as React from "react"
import 'react-tooltip/dist/react-tooltip.css'
// relative path 
import "../../dist/output.css";
import PageLayout from "../components/layouts/PageLayout";
import HomeBody from "../components/HomeBody";
import Hero from "../components/layouts/Hero";


//auto formatting
//why homebody component

//use hero image and ditch body things
//make grid of elements/pixels which can be a color

export default function Home() {
  return (
     <PageLayout className="h-screen flex flex-col" hero={<Hero title="Corbin Atack" subtitle="Hi! I am newly graduated with a degree in computer science and art, looking for opportunities to leverage my skills in front end and full stack design and development." className="flex-grow bg-white" />} >
     </PageLayout>
  )
}
