import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import ResumeBody from "../components/ResumeBody";
import Hero from "../components/layouts/Hero";

export default function Resume() {

    return (
        <PageLayout hero={<Hero title="Let's Work Together" subtitle="I am great fit for your team with my ability to collaborate and love for learning." />}>
        </PageLayout>
    )
}