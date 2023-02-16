// absolute path 
import * as React from "react"
// relative path 
import "../../dist/output.css";
import PageLayout from "../components/layouts/PageLayout";
import HomeBody from "../components/HomeBody";

//CAN ANYBODY DEPLOY TO GHPAGES CUZ THEY HAVE THE DEPLOY SCRIPT?
//HOW DO I MAKE IT SO THAT HOME PAGE IS EXACT SIZE OF SCREEN?

export default function Home() {
  return (
     <PageLayout>
        <HomeBody/>
     </PageLayout>
  )
}
