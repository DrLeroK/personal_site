import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-12">
        {/* Brand Section */}
        <div className="md:col-span-2">
          <Link 
            to="/" 
            className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white hover:from-cyan-400 hover:to-cyan-200 transition-all duration-300 inline-block mb-3 sm:mb-4"
          >
            Latera Dereje
          </Link>
          <p className="text-sm sm:text-base text-gray-400 max-w-md">
            Full Stack Developer specializing in Django & React. I craft high-performance web applications with elegant interfaces and robust architectures.
          </p>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Navigation</h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
            <li>
              <Link 
                to="/" 
                className="hover:text-cyan-400 transition-colors duration-300 hover:pl-1 block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/portfolio" 
                className="hover:text-cyan-400 transition-colors duration-300 hover:pl-1 block"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="hover:text-cyan-400 transition-colors duration-300 hover:pl-1 block"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Connect</h3>
          <div className="flex space-x-3 sm:space-x-4">
            <a 
              href="https://github.com/DrLeroK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xl sm:text-2xl"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/latera-dereje" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xl sm:text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 border-t border-gray-800">
        <div className="text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Latera Dereje. All rights reserved.
        </div>
      </div>
    </footer>
  )
}