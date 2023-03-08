// absolute path 
import * as React from "react"
import 'react-tooltip/dist/react-tooltip.css'
// relative path 
import "../../dist/output.css";
import PageLayout from "../components/layouts/PageLayout";
import HomeBody from "../components/HomeBody";

//CAN ANYBODY DEPLOY TO GHPAGES CUZ THEY HAVE THE DEPLOY SCRIPT?

//HOW TO MAKE MARGINS RESIZE WITH VW?
   //HOW TO CENTER BIG TEXT WITHIN IMAGE?

//HOW TO MAKE VIDEO WORK AS A BACKGROUND - dont want to have to use absolute positioning?

export default function Home() {
  return (
     <PageLayout className="h-screen flex flex-col">
        <HomeBody/>
     </PageLayout>
  )
}
