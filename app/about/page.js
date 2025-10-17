import CoreValues from "@/components/about/CoreValues";
import AboutHeroSection from "@/components/about/hero";
import StoryMission from "@/components/about/storyMission";
import RhynoDifferenceSection from "@/components/about/RhynoDifferenceSection";
import RegulatoryCommitment from "@/components/about/RegulatoryCommitment";
import SuccessStorySection from "@/components/about/SuccessStorySection";


export default function About() {
  return (
    <>
        <AboutHeroSection />
        <StoryMission />
        <CoreValues />
        <RhynoDifferenceSection />
        <RegulatoryCommitment />
        <SuccessStorySection  />
    </>
  )
}