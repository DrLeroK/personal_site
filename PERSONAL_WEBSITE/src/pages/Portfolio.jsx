import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState({})

  const projects = [
    {
      id: 1,
      title: 'Food Ordering Platform',
      description: 'Our Food Ordering Platform is a modern web application designed to simplify the way customers order meals and how restaurants manage their services. Built using Django REST Framework (DRF) for the backend and React (Vite) with Tailwind CSS on the frontend, this platform provides a seamless, responsive, and intuitive user experience for all types of users.The platform enables customers to browse menus, place orders, and track deliveries in real time. On the other side, admins and restaurant staff get a comprehensive dashboard to manage menus, orders, users, and deliveries effectively.',
      images: [
        '/ordering/menu2.PNG',
        '/ordering/admin_dashboard.PNG',
        '/ordering/menu_detail.PNG',
        '/ordering/cart.PNG'
      ],
      tags: ['React', 'Django', 'SQL', 'REST API', 'Tailwind CSS']
    },
    {
      id: 2,
      title: 'Inventory Management System',
      description: 'The Inventory Management System is a robust web application built to streamline and simplify how businesses handle their stock, sales, and personnel. Developed using Django and equipped with a full authentication system, it offers comprehensive features for managing products, tracking sales, generating invoices and bills, and overseeing employee activities.',
      images: [
        '/inventory/dashboard.PNG',
        '/inventory/landingpage.PNG',
        '/inventory/create_sale.PNG',
        '/inventory/product_management.PNG'
      ],
      tags: ['HTML/CSS', 'Bootstrap', 'Node.js', 'SQL']
    },
    {
      id: 3,
      title: 'FindJob - Job Portal',
      description: 'FindJob is a comprehensive job portal designed to connect job seekers with employers. Built with React for the frontend and Django REST Framework (DRF) for the backend, this platform provides a user-friendly interface for both job seekers and employers. Job seekers can create profiles, search for jobs, and apply directly through the platform, while employers can post job listings, manage applications, and communicate with candidates.',
      images: [
        '/findjob/home.PNG',
        '/findjob/employer_dashboard2.PNG',
        '/findjob/job_seeker_dashboard2.PNG',
        '/findjob/job_seeker3.PNG'
      ],
      tags: ['React', 'Django', 'SQL', 'REST API', 'Tailwind CSS']
    }
  ]

  useEffect(() => {
    const loadImages = async () => {
      const imageLoadPromises = projects.flatMap(project => 
        project.images.map((image, index) => 
          new Promise((resolve) => {
            const img = new Image()
            img.src = image
            img.onload = () => {
              setLoadedImages(prev => ({
                ...prev,
                [`${project.id}-${index}`]: true
              }))
              resolve()
            }
            img.onerror = () => resolve()
          })
        )
      )

      await Promise.all(imageLoadPromises)
      setIsLoading(false)
    }

    loadImages()
  }, [])

  if (isLoading) {
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
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-mono text-cyan-400">MY WORK</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">
            Project Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Selected projects showcasing my expertise in full-stack development and problem-solving capabilities.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12">
                <div className="lg:w-1/2">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">{project.title}</h2>
                  <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                    {project.tags.map((tag, index) => (
                      <motion.span 
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-800 text-gray-200 text-xs sm:text-sm rounded-full"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {project.images.map((image, index) => (
                      <motion.div 
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="relative overflow-hidden rounded-lg sm:rounded-xl aspect-square shadow-lg hover:shadow-cyan-500/20 transition-all"
                      >
                        <img 
                          src={image} 
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 md:mt-24 text-center"
        >
          <span className="text-sm font-mono text-cyan-400">LET'S CONNECT</span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Have a project in mind?</h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
            I'm available for new challenges and would love to hear about your ideas.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-bold transition-colors duration-300 shadow-lg hover:shadow-cyan-500/30"
          >
            Let's Discuss Your Project
          </Link>
        </motion.div>
      </div>
    </div>
  )
}