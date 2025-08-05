"use client"

import NavBar from "@/components/layout/navbar"
import ContactSection from "./contact-section"

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="pt-16">
        <ContactSection />
      </div>
    </div>
  )
}
