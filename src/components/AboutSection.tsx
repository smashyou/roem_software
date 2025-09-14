interface AboutSectionProps {
  onOpenModal: () => void;
}

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "5+", label: "Years Experience" },
  { number: "24/7", label: "Support Available" }
]

const values = [
  {
    title: "Innovation First",
    description: "We stay ahead of technology trends and implement cutting-edge solutions that give our clients a competitive advantage."
  },
  {
    title: "Quality Driven",
    description: "Every line of code is crafted with precision. We follow industry best practices and maintain the highest quality standards."
  },
  {
    title: "Client Partnership",
    description: "We work as an extension of your team, understanding your business goals and delivering solutions that drive real results."
  },
  {
    title: "Agile Delivery",
    description: "Fast, iterative development cycles ensure you see progress quickly and can adapt to changing requirements."
  }
]

export default function AboutSection({ onOpenModal }: AboutSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-sky-500">Roem Ventures</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are a forward-thinking software development company specializing in AI-powered solutions 
              and modern web technologies. Our team combines deep technical expertise with strategic business 
              insight to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded on the principle that technology should solve real business problems, we partner with 
              companies of all sizes to transform their ideas into scalable, intelligent software solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-sky-500 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Values</h3>
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-sky-500 to-sky-700 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you leverage AI and modern technology 
            to achieve your business objectives.
          </p>
          <button 
            onClick={onOpenModal}
            className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}