/**
 * Footer Component - Site footer for BitLabQ
 * 
 * Features:
 * - Copyright notice
 * - Dark theme optimized
 * - Responsive design
 * - Clean and minimal layout
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Handles only footer content
 * - Open/Closed: Easy to extend with additional footer sections
 * - Interface Segregation: Simple, focused component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Brand */}
            <div className="flex items-center space-x-2">
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                BitLabQ
              </div>
              <span className="text-lg">⚡</span>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>© {currentYear} BitLabQ. All rights reserved. 🚀</p>
              <p className="mt-1">Pushing the frontiers of software engineering ✨</p>
            </div>
          </div>

          {/* Additional Footer Content */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs">
              Built with ❤️ using Next.js, TypeScript & Tailwind CSS 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
