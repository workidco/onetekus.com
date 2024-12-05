import AboutSection from "@/sections/AboutSection"
import ClientLogoSection from "@/sections/ClientLogoSection"
import ContactForm from "@/sections/ContactSection"
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
      <ContactForm />
    </div>
  )
}

export default page