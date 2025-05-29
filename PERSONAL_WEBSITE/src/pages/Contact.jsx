import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiX } from 'react-icons/si'

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    return () => setIsLoaded(false)
  }, [])

  if (!isLoaded) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full"
        />
      </div>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-mono text-cyan-400">CONTACT ME</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Reach out through any of these channels.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 sm:gap-10 bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-800 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500"
        >
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Contact Information</h2>
            
            <ContactItem 
              icon={<FaEnvelope className="text-cyan-400 text-lg sm:text-xl" />} 
              label="Email" 
              value="lateradrj94@gmail.com" 
              href="mailto:lateradrj94@gmail.com"
            />
            
            <ContactItem 
              icon={<FaPhoneAlt className="text-cyan-400 text-lg sm:text-xl" />} 
              label="Phone" 
              value="+251 969456482" 
              href="tel:+251969456482"
            />
          </div>

          {/* Social Links */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Connect With Me</h2>
            
            <div className="space-y-3 sm:space-y-4">
              <SocialLink
                href="https://www.linkedin.com/in/latera-dereje"
                icon={<FaLinkedin className="text-blue-500" />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://x.com/Latidan543"
                icon={<SiX className="text-white" />}
                label="X (Twitter)"
              />
              <SocialLink
                href="https://github.com/DrLeroK"
                icon={<FaGithub className="text-gray-400" />}
                label="GitHub"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Contact info item component
function ContactItem({ icon, label, value, href }) {
  return (
    <motion.div 
      whileHover={{ x: 5 }}
      className="flex items-start gap-3 sm:gap-4 group"
    >
      <div className="p-2 sm:p-3 bg-gray-800 rounded-lg group-hover:bg-cyan-400/10 transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h3 className="text-xs sm:text-sm font-semibold text-gray-400">{label}</h3>
        <a 
          href={href} 
          className="text-base sm:text-lg text-white hover:text-cyan-400 transition-colors duration-300"
        >
          {value}
        </a>
      </div>
    </motion.div>
  )
}

// Social link item component
function SocialLink({ href, icon, label }) {
  return (
    <motion.a
      whileHover={{ x: 5 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 sm:gap-4 group"
    >
      <div className="p-2 sm:p-3 bg-gray-800 rounded-lg group-hover:bg-cyan-400/10 transition-colors duration-300">
        {icon}
      </div>
      <span className="text-base sm:text-lg text-white group-hover:text-cyan-400 transition-colors duration-300">
        {label}
      </span>
    </motion.a>
  )
}