// absolute path 
import * as React from "react"
// relative path 
import "../../dist/output.css";
import PageLayout from "../components/layouts/PageLayout";
import HomeBody from "../components/HomeBody";

export default function Home() {
  return (
     <PageLayout>
        <HomeBody/>
     </PageLayout>
  )
}
