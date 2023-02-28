// absolute path 
import * as React from "react"
// relative path 
import "../../dist/output.css";
import PageLayout from "../components/layouts/PageLayout";
import HomeBody from "../components/HomeBody";

//CAN ANYBODY DEPLOY TO GHPAGES CUZ THEY HAVE THE DEPLOY SCRIPT?

//HOW TO MAKE MARGINS RESIZE WITH VW?
   //HOW TO CENTER BIG TEXT WITHIN IMAGE?

export default function Home() {
  return (
     <PageLayout className="h-screen flex flex-col">
        <HomeBody/>
     </PageLayout>
  )
}
