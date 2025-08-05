"use client"

import NavBar from "@/components/layout/navbar"
import AboutSection from "./about-section"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="pt-16">
        <AboutSection />
      </div>
    </div>
  )
}
