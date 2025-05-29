import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md py-2 border-b border-gray-800' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink 
              to="/" 
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white hover:from-cyan-400 hover:to-cyan-200 transition-all duration-300"
            >
              Latera Dereje
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  isActive 
                    ? 'text-white bg-gray-800/50'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                `px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  isActive 
                    ? 'text-white bg-gray-800/50'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                }`
              }
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                  isActive 
                    ? 'text-white bg-gray-800/50'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                }`
              }
            >
              Contact
            </NavLink>
            
            {/* Social Icons - Desktop */}
            <div className="ml-6 flex items-center space-x-4 border-l border-gray-800 pl-6">
              <a 
                href="https://github.com/DrLeroK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/latera-dereje" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive 
                  ? 'text-white bg-gray-800/50'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => 
              `block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive 
                  ? 'text-white bg-gray-800/50'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
              }`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive 
                  ? 'text-white bg-gray-800/50'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
              }`
            }
          >
            Contact
          </NavLink>
          
          {/* Social Icons - Mobile */}
          <div className="flex items-center space-x-6 px-3 py-4">
            <a 
              href="https://github.com/DrLeroK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/latera-dereje" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}