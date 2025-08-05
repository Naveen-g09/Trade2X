"use client"
import NavBar from "@/components/layout/navbar"
import HeroSection from "@/components/dashboard/hero-section"
import ToolsSection from "@/components/dashboard/tools-section"
import ContactSection from "@/components/contact/contact-section"
import AboutSection from "@/components/about/about-section"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="pt-16">
        <HeroSection />
        <ToolsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  )
}
