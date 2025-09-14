/**
 * Products Page Component - Showcase of BitLabQ products
 * 
 * Features:
 * - Product showcase grid
 * - Future product roadmap
 * - Dark theme optimized
 * - Responsive design
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Handles only products page content
 * - Open/Closed: Easy to extend with new product categories
 * - Interface Segregation: Clean product card components
 */
export default function Products() {
  // Sample products - these would typically come from a CMS or API
  const currentProducts = [
    {
      id: 1,
      name: "BitLabQ Website",
      description: "This very website - a showcase of modern web development with Next.js, TypeScript, and Tailwind CSS",
      status: "Live",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      emoji: "🌐",
      github: "#",
      demo: "/",
    }
  ];

  const upcomingProducts = [
    {
      id: 1,
      name: "CodeFlow IDE",
      description: "Next-generation IDE with AI-powered code completion and intelligent debugging capabilities",
      status: "In Development",
      tech: ["Electron", "TypeScript", "AI/ML"],
      emoji: "💻",
      eta: "Q2 2025",
    },
    {
      id: 2,
      name: "DevMetrics Dashboard",
      description: "Comprehensive analytics platform for tracking development team productivity and code quality",
      status: "Planning",
      tech: ["React", "Node.js", "PostgreSQL"],
      emoji: "📊",
      eta: "Q3 2025",
    },
    {
      id: 3,
      name: "CloudSync CLI",
      description: "Universal command-line tool for seamless multi-cloud deployment and management",
      status: "Research",
      tech: ["Go", "Docker", "Kubernetes"],
      emoji: "☁️",
      eta: "Q4 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Our Products
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative software solutions designed to push the boundaries of what&apos;s possible 🚀
          </p>
        </div>

        {/* Current Products Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Live Products ✨
            </h2>
            <p className="text-lg text-gray-400">
              Currently available and actively maintained
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentProducts.map((product) => (
              <div key={product.id} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{product.emoji}</div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                    {product.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{product.name}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {product.tech.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={product.demo}
                    className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors duration-200"
                  >
                    View Demo
                  </a>
                  <a
                    href={product.github}
                    className="flex-1 text-center px-4 py-2 border border-gray-600 text-gray-300 text-sm font-medium rounded-lg hover:border-gray-500 hover:text-white transition-colors duration-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Products Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Coming Soon 🔮
            </h2>
            <p className="text-lg text-gray-400">
              Exciting products currently in development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingProducts.map((product) => (
              <div key={product.id} className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl opacity-70">{product.emoji}</div>
                  <div className="text-right">
                    <span className="block px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full border border-orange-500/30 mb-1">
                      {product.status}
                    </span>
                    <span className="text-xs text-gray-500">ETA: {product.eta}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{product.name}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {product.tech.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <span className="px-4 py-2 bg-gray-700/50 text-gray-400 text-sm rounded-lg">
                    Stay Tuned! 👀
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Philosophy Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-xl border border-gray-700 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Our Product Philosophy 🎯
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Quality First 💎</h3>
                <p className="text-gray-400 text-sm">
                  Every product is built with meticulous attention to code quality, 
                  following SOLID principles and best practices.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">User-Centric 👥</h3>
                <p className="text-gray-400 text-sm">
                  We design with the end-user in mind, prioritizing intuitive 
                  interfaces and exceptional user experiences.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Open Source 🌍</h3>
                <p className="text-gray-400 text-sm">
                  Transparency and community collaboration drive our development 
                  process and product evolution.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Future-Ready 🚀</h3>
                <p className="text-gray-400 text-sm">
                  Built with modern technologies and architectures that scale 
                  and adapt to tomorrow&apos;s challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Have an Idea? Let&apos;s Build It Together! 💡
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              We&apos;re always excited to collaborate on innovative projects. 
              Reach out to discuss your next big idea!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch 📧
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
