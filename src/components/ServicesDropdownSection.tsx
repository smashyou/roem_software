"use client";

import { useState } from "react";
import {
  ChevronDown,
  Clock,
  TrendingUp,
  Shield,
  Users,
  Zap,
  Target,
} from "lucide-react";
import Image from "next/image";

interface ServicesDropdownSectionProps {
  onOpenModal?: () => void;
}

const servicesData = {
  "ai-development": {
    title: "AI Application Development",
    subtitle:
      "Transform your business with intelligent automation and decision-making systems",
    description:
      "Custom AI-powered applications using machine learning, natural language processing, and computer vision technologies for intelligent automation and decision-making.",
    image: "/images/ai_app.jpg",
    keyBenefits: [
      {
        icon: Zap,
        title: "Intelligent Automation",
        description:
          "Automate complex processes with AI that learns and adapts to your business needs, reducing manual effort by up to 80%.",
      },
      {
        icon: Target,
        title: "Enhanced Decision Making",
        description:
          "Leverage predictive analytics and machine learning to make data-driven decisions with confidence.",
      },
      {
        icon: TrendingUp,
        title: "Competitive Advantage",
        description:
          "Stay ahead of the competition with cutting-edge AI solutions that differentiate your business.",
      },
      {
        icon: Shield,
        title: "Scalable Solutions",
        description:
          "Build AI systems that grow with your business, handling increased workloads seamlessly.",
      },
    ],
    process: [
      {
        step: "Discovery & Analysis",
        description:
          "We analyze your business processes and identify optimal AI implementation opportunities.",
      },
      {
        step: "AI Strategy Design",
        description:
          "Design a comprehensive AI roadmap aligned with your business objectives and technical requirements.",
      },
      {
        step: "Model Development",
        description:
          "Build and train custom AI models using your data and industry best practices.",
      },
      {
        step: "Integration & Testing",
        description:
          "Seamlessly integrate AI solutions into your existing systems with thorough testing.",
      },
    ],
    technologies: [
      "TensorFlow",
      "PyTorch",
      "OpenAI GPT",
      "Hugging Face",
      "LangChain",
      "Scikit-learn",
      "OpenCV",
      "NLTK",
      "spaCy",
      "Keras",
    ],
  },
  "custom-software": {
    title: "Custom Software Development",
    subtitle:
      "Whatever problem you're solving, choose the right tech and build the right solution",
    description:
      "End-to-end custom software solutions built with modern frameworks, ensuring scalable architecture, optimal performance, and exceptional user experiences.",
    image: "/images/swdev.jpg",
    keyBenefits: [
      {
        icon: Users,
        title: "Full Ownership",
        description:
          "Own 100% of your software with no subscription fees, vendor lock-in, or licensing restrictions.",
      },
      {
        icon: Zap,
        title: "Flexibility",
        description:
          "Custom solutions that adapt to your specific business processes and can evolve with your needs.",
      },
      {
        icon: TrendingUp,
        title: "Competitive Advantage",
        description:
          "Build unique capabilities that differentiate you from competitors using off-the-shelf solutions.",
      },
      {
        icon: Shield,
        title: "Scalability",
        description:
          "Architecture designed to handle growth, from startup to enterprise-level traffic and complexity.",
      },
    ],
    process: [
      {
        step: "Requirements Analysis",
        description:
          "Deep dive into your business processes, user needs, and technical requirements.",
      },
      {
        step: "Architecture Design",
        description:
          "Design scalable system architecture and create detailed technical specifications.",
      },
      {
        step: "Development & Testing",
        description:
          "Agile development with continuous testing, code reviews, and quality assurance.",
      },
      {
        step: "Deployment & Support",
        description:
          "Production deployment with monitoring, documentation, and ongoing support.",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "Vue.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
  },
  "mvp-builder": {
    title: "MVP Builder",
    subtitle: "Go to market quickly with a high-quality Minimum Viable Product",
    description:
      "Rapid development of market-ready MVPs that validate your business idea and attract early customers with minimal investment.",
    image: "/images/MVP.png",
    keyBenefits: [
      {
        icon: Clock,
        title: "Time to Market",
        description:
          "Launch your product 3x faster with our streamlined MVP development process and proven methodologies.",
      },
      {
        icon: Shield,
        title: "Reduced Risk",
        description:
          "Validate your product assumptions with real users before investing in full-scale development.",
      },
      {
        icon: TrendingUp,
        title: "Cost Effective",
        description:
          "Minimize initial investment while maximizing learning and market validation opportunities.",
      },
      {
        icon: Target,
        title: "Market Validation",
        description:
          "Gather real user feedback and iterate based on actual market demand and user behavior.",
      },
    ],
    process: [
      {
        step: "Product Scope Definition",
        description:
          "Define core features and user stories that deliver maximum value with minimum complexity.",
      },
      {
        step: "Design & Prototyping",
        description:
          "Create user-centered designs and interactive prototypes to validate the user experience.",
      },
      {
        step: "MVP Development",
        description:
          "Build your MVP with focus on core functionality and rapid iteration capabilities.",
      },
      {
        step: "Launch & Optimize",
        description:
          "Deploy your MVP and implement analytics to measure user engagement and gather feedback.",
      },
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Vercel",
      "Stripe",
      "Analytics",
      "Firebase",
      "Tailwind",
    ],
  },
  "dedicated-teams": {
    title: "Dedicated Teams",
    subtitle:
      "Handpicked front-end & full-stack software developers perfectly tailored to your needs",
    description:
      "Highly skilled development teams that work exclusively on your projects, providing consistent quality and deep domain expertise.",
    image: "/images/dedicated.jpg",
    keyBenefits: [
      {
        icon: Users,
        title: "Vetted Talent",
        description:
          "Top 1% developers rigorously screened for technical skills, communication, and cultural fit.",
      },
      {
        icon: Shield,
        title: "Reduced Cost & Risk",
        description:
          "Lower overhead costs and reduced hiring risks compared to building internal teams.",
      },
      {
        icon: Clock,
        title: "Quick Scaling",
        description:
          "Scale your development capacity up or down based on project needs and business priorities.",
      },
      {
        icon: Target,
        title: "Domain Expertise",
        description:
          "Teams with deep knowledge in your industry and technology stack for faster delivery.",
      },
    ],
    process: [
      {
        step: "Team Requirements",
        description:
          "Define your project needs, technical requirements, and team composition preferences.",
      },
      {
        step: "Candidate Selection",
        description:
          "Handpick developers from our talent pool based on your specific requirements.",
      },
      {
        step: "Team Integration",
        description:
          "Onboard your dedicated team with your processes, tools, and project context.",
      },
      {
        step: "Ongoing Management",
        description:
          "Continuous collaboration with regular check-ins, reporting, and team optimization.",
      },
    ],
    technologies: [
      "React",
      "Angular",
      "Vue.js",
      "Node.js",
      "Python",
      "Java",
      "C#",
      "AWS",
      "Azure",
      "DevOps Tools",
    ],
  },
  "ux-ui-design": {
    title: "UX/UI Design",
    subtitle:
      "Design an engaging product that is easy-to-use, attractive and functional",
    description:
      "User-centered design that creates intuitive, engaging, and conversion-optimized experiences across all digital touchpoints.",
    image: "/images/uiux.png",
    keyBenefits: [
      {
        icon: Users,
        title: "User-Centered Design",
        description:
          "Research-driven design process that prioritizes user needs and behaviors for optimal experiences.",
      },
      {
        icon: TrendingUp,
        title: "Increased Conversions",
        description:
          "Designs that drive user engagement and conversion rates through strategic UX optimization.",
      },
      {
        icon: Zap,
        title: "Faster Development",
        description:
          "Detailed design systems and prototypes that streamline development and reduce iterations.",
      },
      {
        icon: Shield,
        title: "Brand Consistency",
        description:
          "Cohesive design language that strengthens your brand identity across all platforms.",
      },
    ],
    process: [
      {
        step: "User Research",
        description:
          "Conduct user interviews, surveys, and competitive analysis to understand your audience.",
      },
      {
        step: "Information Architecture",
        description:
          "Structure content and create user flows that guide users toward their goals.",
      },
      {
        step: "Design & Prototyping",
        description:
          "Create wireframes, visual designs, and interactive prototypes for validation.",
      },
      {
        step: "Testing & Refinement",
        description:
          "Conduct usability testing and refine designs based on user feedback and data.",
      },
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Principle",
      "InVision",
      "Framer",
      "Webflow",
      "Zeppelin",
      "Abstract",
      "Maze",
    ],
  },
};

const serviceKeys = Object.keys(servicesData) as Array<
  keyof typeof servicesData
>;

export default function ServicesDropdownSection({ onOpenModal }: ServicesDropdownSectionProps = {}) {
  const [activeService, setActiveService] =
    useState<keyof typeof servicesData>("ai-development");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentService = servicesData[activeService];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-sky-500">Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep-dive into our comprehensive solutions designed to transform your business through cutting-edge technology
          </p>
        </div>

        {/* Service Selector Dropdown */}
        <div className="relative mb-16">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full max-w-md mx-auto flex items-center justify-between bg-white border border-gray-300 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <span className="text-lg font-semibold text-gray-900">
              {currentService.title}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                isDropdownOpen ? "transform rotate-180" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-full max-w-md mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              {serviceKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveService(key);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-6 py-3 hover:bg-gray-50 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg ${
                    activeService === key
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-900"
                  }`}
                >
                  {servicesData[key].title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Service Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {currentService.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {currentService.subtitle}
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {currentService.description}
            </p>
            <button 
              onClick={onOpenModal}
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </button>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden h-80">
              <Image
                src={currentService.image}
                alt={currentService.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Key Benefits
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentService.keyBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-sky-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h3>
          <div className="space-y-8">
            {currentService.process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <div className="flex-grow bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {step.step}
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Technologies We Use
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {currentService.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-sky-50 text-sky-700 text-sm font-medium rounded-full border border-sky-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
