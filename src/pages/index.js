// absolute path 
import * as React from "react"
import 'react-tooltip/dist/react-tooltip.css'
// relative path 
import "../../dist/output.css";
import PageLayout from "../components/layouts/PageLayout";
import Hero from "../components/layouts/Hero";


//auto formatting


export default function Home() {
  return (
    <PageLayout className="h-screen flex flex-col" hero={<Hero title="Corbin Atack" subtitle="Hi! I am newly graduated with a degree in computer science and art, looking for opportunities to leverage my skills in front end and full stack design and development." className="bg-[url('/test.png')] bg-no-repeat bg-cover flex-grow bg-white" />} >
      <div className="flex justify-center items-center lg:hidden">
        <a href="/Work" className="bg-[#006caf] text-white text-sm text-center px-4 py-2 rounded-md w-1/2 mb-72 mt-[-10rem]">
          See my work
        </a>
      </div>
    </PageLayout>
  )
}
