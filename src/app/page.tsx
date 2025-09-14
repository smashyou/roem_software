"use client";

import { useState } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TechStackSection from '@/components/TechStackSection'
import ServicesDropdownSection from '@/components/ServicesDropdownSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import ProjectInquiryModal from '@/components/ProjectInquiryModal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onOpenModal={openModal} />
      <main className="min-h-screen">
        <HeroSection onOpenModal={openModal} />
        <TechStackSection onOpenModal={openModal} />
        <div id="about">
          <AboutSection onOpenModal={openModal} />
        </div>
        <div id="services">
          <ServicesSection onOpenModal={openModal} />
        </div>
        <div id="solutions">
          <ServicesDropdownSection onOpenModal={openModal} />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <ProjectInquiryModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}