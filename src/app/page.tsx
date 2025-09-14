import Link from "next/link";

/**
 * Home Page Component - Main landing page for BitLabQ
 * 
 * Features:
 * - Futuristic hero section with gradient text
 * - Responsive design optimized for mobile and desktop
 * - Dark theme with modern aesthetics
 * - Call-to-action buttons
 * - Animated background elements
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Focuses solely on homepage presentation
 * - Open/Closed: Easy to extend with new sections
 * - Interface Segregation: Clean component structure
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Brand */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                BitLabQ
              </span>
            </h1>
            
            {/* Tagline */}
            <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light">
              <span className="inline-block">Excellence in Software Engineering</span>
              <span className="text-3xl ml-2">⚡</span>
            </div>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Pushing the frontiers of software engineering with high-quality, 
              open-source products that embody innovation and futuristic design 🚀✨
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/products"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center space-x-2">
                  <span>Explore Products</span>
                  <span className="text-xl">🚀</span>
                </span>
              </Link>
              
              <Link
                href="/about"
                className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300 hover:bg-gray-800/50"
              >
                <span className="flex items-center space-x-2">
                  <span>Learn More</span>
                  <span className="text-xl">👨‍💻</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Preview Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Makes Us Different 🌟
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our commitment to excellence drives every line of code we write
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Precision Engineering</h3>
              <p className="text-gray-400">
                Every product is crafted with meticulous attention to detail and architectural excellence
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-semibold text-white mb-3">Future-Ready</h3>
              <p className="text-gray-400">
                Built with cutting-edge technologies and forward-thinking design principles
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-3">Open Source</h3>
              <p className="text-gray-400">
                Committed to transparency and community-driven development
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
