import { ExternalLink, Github, Star } from 'lucide-react'

const projects = [
  {
    title: "AI-Powered E-commerce Platform",
    description: "Intelligent product recommendations and dynamic pricing system using machine learning algorithms.",
    technologies: ["Next.js", "Python", "TensorFlow", "AWS"],
    category: "AI/ML",
    image: "/api/placeholder/600/400",
    features: ["Personalized Recommendations", "Dynamic Pricing", "Inventory Optimization", "Customer Analytics"],
    metrics: {
      performance: "+45% Conversion Rate",
      efficiency: "60% Faster Processing"
    }
  },
  {
    title: "Healthcare Data Analytics Dashboard",
    description: "Real-time patient monitoring and predictive analytics for healthcare providers.",
    technologies: ["React", "Node.js", "PostgreSQL", "D3.js"],
    category: "Healthcare",
    image: "/api/placeholder/600/400",
    features: ["Real-time Monitoring", "Predictive Analytics", "HIPAA Compliance", "Custom Reports"],
    metrics: {
      performance: "99.9% Uptime",
      efficiency: "40% Faster Diagnosis"
    }
  },
  {
    title: "Smart City IoT Management",
    description: "Comprehensive IoT platform for managing smart city infrastructure and services.",
    technologies: ["React", "Python", "MongoDB", "Docker"],
    category: "IoT",
    image: "/api/placeholder/600/400",
    features: ["Device Management", "Data Visualization", "Automated Alerts", "Scalable Architecture"],
    metrics: {
      performance: "10k+ Devices Connected",
      efficiency: "30% Energy Savings"
    }
  }
]

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing successful projects that demonstrate our expertise in AI, web development, and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm text-blue-600 font-semibold mb-2">{project.category}</div>
                    <div className="text-gray-600">Project Preview</div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 ml-4">
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Github className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">Performance</div>
                      <div className="font-semibold text-green-600">{project.metrics.performance}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">Efficiency</div>
                      <div className="font-semibold text-blue-600">{project.metrics.efficiency}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-8">
            Ready to see what we can build for you?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}