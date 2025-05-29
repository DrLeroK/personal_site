import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaPython, FaJs, FaGitAlt, FaDocker, FaBootstrap } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiPostgresql } from 'react-icons/si';
import { FiBook, FiCode, FiActivity, FiMail, FiUser } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Home() {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const hobbiesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (heroRef.current) observer.observe(heroRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (hobbiesRef.current) observer.observe(hobbiesRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative opacity-0 min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 pt-16 sm:pt-20 px-4 pb-12 md:pb-16 lg:pb-0"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/dots.png')] bg-repeat opacity-30"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-24">
            <motion.div 
              className="w-full lg:w-2/5 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group">
                <img 
                  src="/images/latera2.jpg" 
                  alt="Latera Dereje" 
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-3/5 space-y-4 sm:space-y-6 mb-8 md:mb-12 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="mb-2">
                <motion.span 
                  className="text-base sm:text-lg font-mono text-cyan-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Hello, I'm
                </motion.span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400 py-1 sm:py-2">
                  Latera Dereje
                </h1>
                <motion.h2 
                  className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mt-1 sm:mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Full Stack Developer
                </motion.h2>
              </div>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                I specialize in crafting high-performance web applications with Django and React. I bridge the gap between elegant frontend design and robust backend architecture to deliver seamless digital experiences.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Link 
                  to="/portfolio" 
                  className="px-4 sm:px-5 py-2 sm:py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <span className="relative z-10">View My Work</span>
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
                <Link 
                  to="/contact" 
                  className="px-4 sm:px-5 py-2 sm:py-2.5 border border-gray-600 hover:border-cyan-400/50 text-white hover:text-cyan-100 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden bg-white/5 hover:bg-white/10"
                >
                  <FiMail className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative z-10">Contact Me</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        ref={skillsRef} 
        className="relative opacity-0 py-16 md:py-20 bg-white text-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-sm font-mono text-cyan-600">WHAT I DO</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-3 sm:mb-4">My Technical Skills</h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                name: 'Frontend', 
                icon: <FaReact className="text-3xl sm:text-4xl text-cyan-600" />,
                skills: [
                  { name: 'React', level: 81, icon: <FaReact /> },
                  { name: 'Bootstrap', level: 85, icon: <FaBootstrap /> },
                  { name: 'Tailwind CSS', level: 75, icon: <SiTailwindcss /> },
                ]
              },
              { 
                name: 'Backend', 
                icon: <SiDjango className="text-3xl sm:text-4xl text-cyan-600" />,
                skills: [
                  { name: 'Django', level: 89, icon: <SiDjango /> },
                  { name: 'Python', level: 90, icon: <FaPython /> },
                  { name: 'REST APIs', level: 85, icon: <FiCode /> },
                ]
              },
              { 
                name: 'Database', 
                icon: <SiPostgresql className="text-3xl sm:text-4xl text-cyan-600" />,
                skills: [
                  { name: 'PostgreSQL', level: 55, icon: <SiPostgresql /> },
                  { name: 'MongoDB', level: 40, icon: <FiCode /> },
                ]
              },
              { 
                name: 'DevOps', 
                icon: <FaDocker className="text-3xl sm:text-4xl text-cyan-600" />,
                skills: [
                  { name: 'Git', level: 80, icon: <FaGitAlt /> },
                  { name: 'CI/CD', level: 75, icon: <FiCode /> },
                ]
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-cyan-100 rounded-lg">
                      {category.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">{category.name}</h3>
                  </div>
                  <ul className="space-y-3 sm:space-y-4">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex flex-col">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-cyan-600">{skill.icon}</span>
                          <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                          <span className="ml-auto text-xs sm:text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                          <div 
                            className="bg-cyan-600 h-1.5 sm:h-2 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section 
        ref={hobbiesRef} 
        className="relative opacity-0 py-14 sm:py-16 md:py-20 bg-gray-900 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <span className="text-sm font-mono text-cyan-400">BEYOND CODING</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-3 sm:mb-4">My Interests & Hobbies</h2>
            <div className="w-16 sm:w-20 h-1 bg-cyan-500 mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {[
              {
                icon: <FiBook className="text-3xl sm:text-4xl text-cyan-400" />,
                title: 'Reading & Learning',
                desc: 'I constantly expand my knowledge through self helping books, documentaries, and online courses.',
                bg: "bg-[url('/images/books.jpg')]"
              },
              {
                icon: <FiActivity className="text-3xl sm:text-4xl text-cyan-400" />,
                title: 'Fitness & Wellness',
                desc: 'Regular gym exercise, basketball and calisthenics sessions keep me energized and focused. I believe a healthy body fuels a productive mind for coding.',
                bg: "bg-[url('/images/fitness.jpg')]"
              },
              {
                icon: <FiCode className="text-3xl sm:text-4xl text-cyan-400" />,
                title: 'Open Source',
                desc: 'Learning from open source projects helps me grow.',
                bg: "bg-[url('/images/opensource.jpg')]"
              }
            ].map((hobby, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-xl h-72 sm:h-80 md:h-96"
              >
                <div className={`absolute inset-0 ${hobby.bg} bg-cover bg-center transition-all duration-700 group-hover:scale-110`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50"></div>
                <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6 md:p-8">
                  <div className="mb-2 sm:mb-3 md:mb-4 p-2 sm:p-3 bg-cyan-600/20 backdrop-blur-sm rounded-lg w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center group-hover:bg-cyan-400/30 transition-colors duration-500">
                    {hobby.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-cyan-400 transition-colors duration-300">{hobby.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 opacity-90 group-hover:opacity-100 transition-opacity duration-300">{hobby.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 sm:py-20 bg-black text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/dots.png')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 relative"
        >
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-mono text-cyan-400">LET'S CONNECT</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 sm:mb-6">Ready to Bring Your Ideas to Life?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-gray-400">
              Whether you have a project in mind or just want to chat about tech, I'd love to hear from you. Let's create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link 
                to="/contact" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 flex items-center gap-2 group"
              >
                <FiMail className="group-hover:animate-pulse" />
                <span>Get In Touch</span>
              </Link>
              <Link 
                to="/portfolio" 
                className="px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-white hover:bg-white/10 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 group"
              >
                <FiUser className="group-hover:animate-pulse" />
                <span>View Portfolio</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}