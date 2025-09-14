import Image from 'next/image'

interface HeroSectionProps {
  onOpenModal: () => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 pt-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative h-32 w-80 sm:h-40 sm:w-96 md:h-48 md:w-[600px]">
            <Image
              src="/images/logo.png"
              alt="Roem Ventures"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <p className="text-xl sm:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto">
          Transforming Ideas into Intelligent Software Solutions
        </p>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          We specialize in AI-powered applications and cutting-edge software development. 
          Partner with us to build the future of your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onOpenModal}
            className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your Project
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            Our Services
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}