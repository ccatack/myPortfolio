import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import Hero from "../components/layouts/Hero";
import myWorkHeroAnim from "../animations/myWorkPageAnimation2.mp4";
import workData from "../data/workExp.js";
import { Disclosure } from "@headlessui/react";
import { withPrefix } from "gatsby";
export { Head } from "../components/layouts/PageLayout";

export default function Work() {
  const workTiles = workData.map((item) => {
    return (
      <div
        key={item.id}
        className="flex flex-col lg:flex-row lg:p-8 lg:h-72 lg:justify-between"
      >
        <div className="lg:grid lg:w-[45%] grid-rows-[2fr_6fr_1fr]">
          <div className="flex flex-row text-lg">
            <div className="hidden lg:block lg:text-2xl titles2">
              {item.projectTitle}
            </div>
            <div className="flex flex-col lg:hidden mb-2 w-full">
              {" "}
              {/* disclosure container */}
              <Disclosure>
                <Disclosure.Button className="pb-1 text-xl text-left flex flex-row justify-between items-center">
                  <div className="flex flex-row titles2">
                    {item.projectTitle}
                    {item.link && (
                      <a
                        href={item.link}
                        className="mt-1 lg:mt-2 ml-2"
                        target="_blank"
                      >
                        <img
                          src={withPrefix("/linkIcon.png")}
                          className="max-h-5"
                        ></img>
                      </a>
                    )}
                  </div>
                  <img
                    src={withPrefix("/expandIcon.png")}
                    className="h-6 ui-open:rotate-[270deg] ui-open:transform opacity-60"
                  ></img>
                </Disclosure.Button>
                <Disclosure.Panel className="p-2 text-base text-gray-500 bg-[#F6EEF2] rounded-lg">
                  {item.projectDescription}
                </Disclosure.Panel>
              </Disclosure>
            </div>
          </div>
          <div className="hidden lg:block text-md">
            {item.projectDescription}
          </div>
          <div className="hidden lg:block text-center text-xs text-[#006caf]">
            {item.stack}
          </div>
        </div>
        {item.image && (
          <img
            src={withPrefix(item.image)}
            className="rounded-lg bg-white"
          ></img>
        )}
        {item.video && (
          <video
            src={withPrefix(item.video)}
            autoPlay
            loop
            muted
            className="rounded-lg"
          />
        )}
        <div className="lg:hidden text-center text-xs text-[#006caf] mb-8">
          {item.stack}
        </div>
      </div>
    );
  });

  return (
    <PageLayout
      hero={
        <Hero
          title="My Work"
          subtitle="Projects and experience from UI design to game development."
          className=""
        >
          <video
            src={myWorkHeroAnim}
            autoPlay
            loop
            muted
            className="lg:absolute mt-6 lg:mt-28 lg:mr-20 top-0 bottom-0 right-0 -z-10 md:h-1/2 lg:h-1/3"
          />
        </Hero>
      }
    >
      <div className="flex justify-center">
        <div className="w-5/6 lg:w-3/4 mb-12">{workTiles}</div>
      </div>
    </PageLayout>
  );
}
