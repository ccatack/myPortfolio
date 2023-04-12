import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import Hero from "../components/layouts/Hero";
import signature from "../images/signature.png"

export default function About() {

    return (
        <PageLayout hero={<Hero title="About Me" className="bg-[#2a2d29] lg:bg-[url('/corb123.png')] bg-no-repeat bg-cover text-white" ></Hero>}>
            <div className="text-sm flex flex-col items-center justify-center">
                <div className="w-5/6 lg:w-1/2 mt-14">
                    Hello, I’m Corbin Atack! I am a newly graduated student of Whitman College 
                    looking to get started in the software development industry. I have
                    skills in full stack and front end development. Since graduating, I 
                    have been focused expanding my technical skill set by working on personal 
                    projects. I have also been working on my design skills, leveraging
                    my arts background and computer science degree in tandem. I see
                    design and development both as creative practices and I am so excited
                    to get started with designing and building beautifully functional
                    software in an industry setting. <br /> <br />
                    I also do other things! I am especially passionate about Ultimate
                    Frisbee. I currently play for Seattle BFG, former national and world
                    club champs. I also play for the Seattle Cascades, the pro team in
                    Seattle. My other hobbies include creating digital art (see my art
                    blog) and printmaking.
                </div>
                <img src={signature} className="w-1/3 lg:w-1/6 mb-12"></img>
            </div>
        </PageLayout>
    )
}