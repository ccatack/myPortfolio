import React from "react";
import signature from "../images/signature.png"

export default function AboutBody() {

    return (
        <div className="space-y-64 bg-[url('/corb123.png')] bg-no-repeat bg-contain pt-36">
            <div className="text-7xl ml-8 text-white">
                About Me
            </div>
            <div className="text-sm flex flex-col items-center justify-center">
                <div className="w-1/2">
                    Hi I’m Corbin! I’m a newly graduated student of Whitman College 
                    looking to get started in the software development industry. I have
                    skills in full stack and front end development. Since graduating, I 
                    have been focused expanding my skill set by working on personal 
                    projects. I have also been working on my design skills, leveraging
                    my arts background and computer science degree in tandem. I see
                    design and development as a creative practice and I am so excited
                    to get started with designing and building beautifully functional
                    software in an industry setting.
                </div>
                <div className="w-1/2 mt-4">
                    I also do other things! I am especially passionate about Ultimate
                    Frisbee. I currently play for Seattle BFG, former national and world
                    club champs. I also play for the Seattle Cascades, the pro team in
                    Seattle. My other hobbies include creating digital art (see my art
                    blog) and printmaking.
                </div>
                <img src={signature} className="w-1/6"></img>
            </div>
        </div>
    )
}