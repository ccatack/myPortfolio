import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import Hero from "../components/layouts/Hero";
import { withPrefix } from "gatsby";
import skillData from "../data/skillData";

export { Head } from "../components/layouts/PageLayout";

export default function Resume() {
  const skillTiles = skillData.map((item) => {
    return (
      <div
        key={item.id}
        className="flex flex-col h-32 w-32 items-center p-2 shadow-md rounded-md bg-white"
      >
        <img src={withPrefix(item.image)} className="h-2/3"></img>
        <div className="mt-4">{item.title}</div>
      </div>
    );
  });

  return (
    <PageLayout
      className=""
      hero={
        <Hero
          className=""
          title="Let's Work Together"
          subtitle="With my ability to collaborate and love for learning, I could be a great fit for your team."
        ></Hero>
      }
    >
      <div className="flex flex-col p-4">
        <div className="titles2 text-3xl lg:ml-8">My go-to tools:</div>
        <div className="mt-4 grid grid-cols-[1fr_1fr] gap-[20px] self-center lg:self-auto lg:flex lg:flex-row lg:justify-evenly lg:mt-12 ">
          {skillTiles}
        </div>
      </div>

      <div className="flex flex-col space-y-12 lg:mb-12 lg:mt-12 lg:h-[60rem] items-center justify-center">
        <div className="flex flex-row justify-between w-full">
          <div className="titles2 text-3xl self-start ml-4 lg:ml-12">
            Resume
          </div>
          <a
            href="/Resume.pdf"
            download="Corbin_Atack_Resume"
            className="hidden lg:block lg:self-end text-center bg-[#006caf] text-white text-sm px-8 py-4 rounded-md lg:w-1/6 lg:mr-[10%]"
          >
            Download Resume
          </a>
        </div>
        <iframe
          src={withPrefix("/Resume.pdf")}
          className="w-[90%] w-[80%] h-full"
        ></iframe>
      </div>
    </PageLayout>
  );
}
