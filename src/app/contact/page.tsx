/**
 * Contact Page Component - Contact information and form for BitLabQ
 * 
 * Features:
 * - Contact information display
 * - Social media links
 * - Dark theme optimized
 * - Responsive design
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Handles only contact page content
 * - Open/Closed: Easy to extend with new contact methods
 * - Interface Segregation: Clean contact card components
 */
export default function Contact() {
  const contactMethods = [
    {
      title: "Email",
      description: "Reach out for collaborations, questions, or just to say hello!",
      value: "hello@bitlabq.com",
      href: "mailto:hello@bitlabq.com",
      emoji: "📧",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "GitHub",
      description: "Follow our open-source projects and contributions",
      value: "@bitlabq",
      href: "https://github.com/bitlabq",
      emoji: "🐙",
      color: "from-gray-600 to-gray-800"
    },
    {
      title: "LinkedIn",
      description: "Connect with us professionally and stay updated",
      value: "BitLabQ",
      href: "https://linkedin.com/company/bitlabq",
      emoji: "💼",
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Twitter",
      description: "Follow us for tech insights and product updates",
      value: "@bitlabq",
      href: "https://twitter.com/bitlabq",
      emoji: "🐦",
      color: "from-sky-500 to-blue-600"
    }
  ];

  const projectTypes = [
    {
      title: "Open Source Collaboration",
      description: "Join us in building amazing open-source tools",
      emoji: "🤝"
    },
    {
      title: "Technical Consulting",
      description: "Architecture reviews and technical guidance",
      emoji: "🏗️"
    },
    {
      title: "Product Development",
      description: "Custom software solutions and product development",
      emoji: "🚀"
    },
    {
      title: "Code Reviews",
      description: "Expert code reviews and quality assessments",
      emoji: "🔍"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let&apos;s collaborate on something amazing! We&apos;re always excited to discuss 
            new projects and opportunities 🌟
          </p>
        </div>

        {/* Contact Methods Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How to Reach Us 📱
            </h2>
            <p className="text-lg text-gray-400">
              Choose your preferred way to connect
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{method.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                      {method.description}
                    </p>
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${method.color} text-white text-sm rounded-full font-medium`}>
                      {method.value}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* What We Can Help With Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How We Can Help 🛠️
            </h2>
            <p className="text-lg text-gray-400">
              Areas where we excel and love to collaborate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projectTypes.map((type, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="text-3xl">{type.emoji}</div>
                  <h3 className="text-lg font-semibold text-white">{type.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Response Time Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-xl border border-gray-700 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Quick Response Guaranteed ⚡
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We typically respond to emails within 24 hours during business days. 
              For urgent matters, feel free to mention it in your subject line!
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="text-2xl mb-2">📧</div>
                <div className="text-white font-semibold">Email</div>
                <div className="text-sm text-gray-400">24 hours</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="text-2xl mb-2">💼</div>
                <div className="text-white font-semibold">LinkedIn</div>
                <div className="text-sm text-gray-400">48 hours</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <div className="text-2xl mb-2">🐦</div>
                <div className="text-white font-semibold">Twitter</div>
                <div className="text-sm text-gray-400">Same day</div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours Section */}
        <section className="mb-20">
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-6">
              Our Working Hours 🕐
            </h2>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between items-center">
                <span>Monday - Friday</span>
                <span className="text-green-400">9:00 AM - 6:00 PM PST</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Saturday</span>
                <span className="text-yellow-400">10:00 AM - 2:00 PM PST</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sunday</span>
                <span className="text-red-400">Closed</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              * Emergency support available 24/7 for critical issues
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Start Something Amazing? 🎉
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to explore possibilities, 
              we&apos;d love to hear from you. Let&apos;s build the future together!
            </p>
            <a
              href="mailto:hello@bitlabq.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Send us an Email 📧
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
