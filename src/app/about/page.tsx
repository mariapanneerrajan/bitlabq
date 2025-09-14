/**
 * About Page Component - Information about BitLabQ
 * 
 * Features:
 * - Company mission and vision
 * - Values and principles
 * - Dark theme optimized
 * - Responsive design
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Handles only about page content
 * - Open/Closed: Easy to extend with new sections
 * - Interface Segregation: Clean component structure
 */
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              About BitLabQ
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are passionate software engineers committed to pushing the boundaries 
            of what&apos;s possible in technology 🚀
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Our Mission 🎯
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                To create exceptional open-source software products that embody excellence 
                in engineering, foster innovation, and contribute to the global developer 
                community. We believe in the power of clean code, thoughtful architecture, 
                and user-centric design to shape the future of software development.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Core Values 💎
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Value 1 */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-gray-400">
                We strive for perfection in every line of code, following SOLID principles 
                and best practices to deliver exceptional software.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-gray-400">
                We embrace cutting-edge technologies and forward-thinking approaches 
                to solve complex problems with elegant solutions.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-white mb-3">Open Source</h3>
              <p className="text-gray-400">
                We believe in transparency, collaboration, and giving back to the 
                community that has given us so much.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-3">Clean Design</h3>
              <p className="text-gray-400">
                Beautiful, intuitive interfaces that prioritize user experience 
                and accessibility in every interaction.
              </p>
            </div>
            
            {/* Value 5 */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-semibold text-white mb-3">Test-Driven</h3>
              <p className="text-gray-400">
                Comprehensive testing ensures reliability, maintainability, 
                and confidence in our software products.
              </p>
            </div>
            
            {/* Value 6 */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance</h3>
              <p className="text-gray-400">
                Optimized, efficient code that scales beautifully and provides 
                exceptional user experiences across all devices.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Technology Stack 🛠️
            </h2>
            <p className="text-xl text-gray-400">
              We leverage modern technologies to build exceptional products
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Frontend 🎨</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Next.js & React</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Modern CSS & Animations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Principles 📐</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• SOLID Design Principles</li>
                  <li>• Test-Driven Development</li>
                  <li>• Clean Architecture</li>
                  <li>• DRY & KISS Principles</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-xl border border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Explore Our Work? 🌟
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Check out our innovative products and see how we&apos;re pushing 
              the frontiers of software engineering.
            </p>
            <a
              href="/products"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Our Products 🚀
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
