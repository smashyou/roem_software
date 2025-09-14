import { Bot, Brain, Globe, Cloud, BarChart3, Shield } from 'lucide-react'

interface ServicesSectionProps {
  onOpenModal?: () => void;
}

const services = [
  {
    icon: Bot,
    title: "AI Application Development",
    description: "Custom AI-powered applications using machine learning, natural language processing, and computer vision technologies for intelligent automation and decision-making.",
    features: ["Custom ML Models", "NLP Integration", "Computer Vision", "AI Chatbots", "Recommendation Systems", "Predictive Analytics"],
    technologies: ["TensorFlow", "PyTorch", "OpenAI GPT", "Hugging Face", "LangChain", "Scikit-learn", "OpenCV", "NLTK", "spaCy", "Keras"]
  },
  {
    icon: Brain,
    title: "AI/ML Strategy Consulting",
    description: "Strategic guidance on implementing AI solutions that drive business growth, optimize operations, and create competitive advantages through data-driven insights.",
    features: ["AI Roadmapping", "Data Strategy", "Model Architecture", "ROI Analysis", "Technology Assessment", "Team Training"],
    technologies: ["MLOps", "Kubeflow", "MLflow", "Weights & Biases", "DataRobot", "H2O.ai", "Apache Airflow", "Databricks", "Jupyter", "Python"]
  },
  {
    icon: Globe,
    title: "Full-Stack Development",
    description: "End-to-end web and mobile applications built with modern frameworks, ensuring scalable architecture, optimal performance, and exceptional user experiences.",
    features: ["React/Next.js", "Progressive Web Apps", "Mobile Apps", "API Development", "Real-time Features", "E-commerce Solutions"],
    technologies: ["React", "Next.js", "Vue.js", "Node.js", "Express", "FastAPI", "React Native", "Flutter", "TypeScript", "GraphQL", "REST APIs", "WebSocket"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure, automated deployment pipelines, and DevOps practices for reliable, secure, and efficient software delivery at scale.",
    features: ["Cloud Migration", "CI/CD Pipelines", "Container Orchestration", "Monitoring & Logging", "Auto-scaling", "Infrastructure as Code"],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "ELK Stack", "Ansible"]
  },
  {
    icon: BarChart3,
    title: "Data Engineering & Analytics",
    description: "Build robust data pipelines, real-time analytics platforms, and data warehouses to unlock actionable insights from your business data.",
    features: ["Data Pipelines", "Real-time Analytics", "Data Warehousing", "ETL/ELT Processes", "Business Intelligence", "Data Visualization"],
    technologies: ["Apache Spark", "Kafka", "Airflow", "Snowflake", "BigQuery", "Redshift", "Elasticsearch", "Tableau", "Power BI", "dbt", "Pandas", "Apache Flink"]
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security assessments, implementation of best practices, and ongoing monitoring to protect your digital assets and ensure compliance.",
    features: ["Security Audits", "Penetration Testing", "Compliance (SOC2, GDPR)", "Threat Detection", "Security Training", "Incident Response"],
    technologies: ["OWASP", "Burp Suite", "Metasploit", "Nessus", "Wireshark", "Splunk", "SIEM", "OAuth", "JWT", "SSL/TLS", "Vault", "Zero Trust"]
  }
]

export default function ServicesSection({ onOpenModal }: ServicesSectionProps = {}) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-sky-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software development services with a focus on AI and modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className="group p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:border-sky-200"
              >
                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-sky-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 text-sky-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-sky-50 text-sky-700 text-xs font-medium rounded border border-sky-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={onOpenModal}
            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}