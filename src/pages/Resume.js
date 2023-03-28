import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import Hero from "../components/layouts/Hero";

export default function Resume() {

    return (
        <PageLayout className="" hero={<Hero className="" title="Let's Work Together" subtitle="With my ability to collaborate and love for learning, I could be a great fit for your team."></Hero> }>
            <div className="flex flex-col space-y-12 mb-12 mt-[-10%] lg:h-[60rem] items-center justify-center">
                <a href="/Resume.pdf" download="Corbin_Atack_Resume" className="lg:self-end text-center bg-[#006caf] text-white text-sm px-8 py-4 rounded-md lg:w-1/6 mr-[10%]">
                    Download Resume
                </a>
                <iframe src="/Resume.pdf" className="w-[80%] h-full hidden lg:block"></iframe>
            </div>
        </PageLayout>
    )
}