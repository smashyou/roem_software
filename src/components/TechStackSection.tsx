"use client";

interface TechStackSectionProps {
  onOpenModal: () => void;
}

const techStacks = [
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Material-UI", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "C#", category: "Backend" },
  { name: ".NET", category: "Backend" },
  { name: "Ruby on Rails", category: "Backend" },
  { name: "Go", category: "Backend" },

  // AI/ML
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "Scikit-learn", category: "AI/ML" },
  { name: "OpenAI", category: "AI/ML" },
  { name: "Hugging Face", category: "AI/ML" },
  { name: "LangChain", category: "AI/ML" },
  { name: "Pandas", category: "AI/ML" },
  { name: "NumPy", category: "AI/ML" },

  // Cloud
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Docker", category: "Cloud" },
  { name: "Kubernetes", category: "Cloud" },
  { name: "Terraform", category: "Cloud" },
  { name: "Jenkins", category: "Cloud" },
  { name: "GitHub Actions", category: "Cloud" },

  // Database
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Elasticsearch", category: "Database" },
  { name: "DynamoDB", category: "Database" },
  { name: "Snowflake", category: "Database" },
  { name: "BigQuery", category: "Database" },

  // Mobile
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "Swift", category: "Mobile" },
  { name: "Kotlin", category: "Mobile" },
  { name: "Ionic", category: "Mobile" },
  { name: "Expo", category: "Mobile" },
];

const categoryColors = {
  Frontend: "bg-blue-100 text-blue-700 border-blue-200",
  Backend: "bg-green-100 text-green-700 border-green-200",
  "AI/ML": "bg-purple-100 text-purple-700 border-purple-200",
  Cloud: "bg-orange-100 text-orange-700 border-orange-200",
  Database: "bg-red-100 text-red-700 border-red-200",
  Mobile: "bg-indigo-100 text-indigo-700 border-indigo-200",
};

export default function TechStackSection({ onOpenModal }: TechStackSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-sky-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Your Tech Stack.{" "}
            <span className="text-sky-500">We Have It Covered.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From cutting-edge AI frameworks to enterprise-grade infrastructure,
            we master the technologies that power modern applications.
          </p>
        </div>

        {/* Continuous scroll animation */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll space-x-8 py-4">
              {[...techStacks, ...techStacks].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className={`flex-shrink-0 px-6 py-3 rounded-full border text-sm font-medium whitespace-nowrap ${
                    categoryColors[tech.category as keyof typeof categoryColors]
                  }`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* Fade out edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-sky-50 to-transparent pointer-events-none"></div>
        </div>

        {/* Category breakdown */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
          {Object.entries(categoryColors).map(([category, colorClass]) => (
            <div key={category} className="text-center">
              <div
                className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${colorClass} mb-2`}
              >
                {category}
              </div>
              <div className="text-sm text-gray-600">
                {techStacks.filter((tech) => tech.category === category).length}
                + Technologies
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-8">
            Don&apos;t see your preferred technology? We adapt quickly to new tools
            and frameworks.
          </p>
          <button 
            onClick={onOpenModal}
            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Discuss Your Tech Requirements
          </button>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
