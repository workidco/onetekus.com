import AboutSection from "@/sections/AboutSection"
import ClientLogoSection from "@/sections/ClientLogoSection"
import HeroSection from "@/sections/HeroSection"
import IndustriesSection from "@/sections/IndustriesSection"
import ServiceSection from "@/sections/ServiceSection"
import StatsSection from "@/sections/StatsSection"
import TechStackSection from "@/sections/TechStackSection"

const page = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ClientLogoSection />
      <TechStackSection />
      <AboutSection />
      <ServiceSection />
      <IndustriesSection />
    </div>
  )
}

export default page