'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

interface HeaderProps {
  onOpenModal?: () => void;
}

export default function Header({ onOpenModal }: HeaderProps = {}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="relative h-16 w-64">
              <Image
                src="/images/logo.png"
                alt="Roem Ventures"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">
                Services
              </a>
              <a href="#solutions" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">
                Solutions
              </a>
              <a href="#contact" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">
                Contact
              </a>
              <button 
                onClick={onOpenModal}
                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-gray-200">
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-sky-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-sky-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#solutions"
              className="block px-3 py-2 text-gray-700 hover:text-sky-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-sky-500 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button 
              onClick={() => {
                onOpenModal?.();
                setIsOpen(false);
              }}
              className="w-full text-left bg-sky-500 hover:bg-sky-600 text-white px-3 py-2 rounded-lg font-medium transition-colors mt-2"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}