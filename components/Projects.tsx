'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiArrowRight } from 'react-icons/fi'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN e-commerce application with role-based authentication, product management, AI shopping assistant, and support ticketing system.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'OpenAI API', 'Multer'],
      features: [
        'Role-based auth (Buyer/Seller/Admin)',
        'AI product recommendation',
        'Image upload & management',
        'Support ticket system',
      ],
      github: 'https://github.com/huzaifaAlii/E-CommerWebsite',
      impact: 'Production-ready app serving multiple user roles',
      image: '/ecommerce-website.jpg', 
    },
    {
      title: 'Full-Stack Projects',
      description: 'Multiple responsive web applications built with modern tech stack, deployed on Vercel with 100% client satisfaction.',
      tech: ['React', 'Next.js', 'TailwindCSS', 'Express', 'PostgreSQL'],
      features: [
        'Responsive design',
        'Authentication systems',
        'Database optimization',
        'API integration',
      ],
      github: 'https://github.com/huzaifaAlii',
      impact: '10+ successful projects delivered',
      image: '/fullstack.jpg', 
    },
    {
      title: 'Freelance Solutions',
      description: 'Custom web solutions for diverse clients on Fiverr, specializing in fast delivery, clean code, and excellent user experience.',
      tech: ['Full Stack', 'Firebase', 'WebSockets', 'REST APIs'],
      features: [
        'Quick turnaround',
        'Client satisfaction',
        'Scalable solutions',
        'Maintenance support',
      ],
      github: 'https://github.com/huzaifaAlii',
      impact: '100% client satisfaction rate',
      image: '/freelance.jpg',
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 lg:px-12 bg-cream-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-dark mb-16">Featured Work</h2>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-start pb-12 border-b border-dark/10 last:border-b-0"
              >
                {/* Content */}
                <div className="space-y-6">
                  <h3 className="text-3xl font-serif font-bold text-dark">{project.title}</h3>
                  <p className="text-lg text-dark/80 leading-relaxed font-light">{project.description}</p>
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-dark/70 uppercase tracking-widest">Key Features</p>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-dark/80">
                          <span className="text-gold mt-1">→</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-dark/5 text-dark text-xs font-medium rounded-full">{tech}</span>
                    ))}
                  </div>
                  <div className="pt-6 space-y-4">
                    <p className="text-sm font-medium text-gold tracking-widest uppercase">{project.impact}</p>
                    
                    {/* Dark View Code Button */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-dark text-white px-7 py-3 flex items-center gap-2 hover:bg-dark/90 transition-all rounded-md font-medium"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiGithub size={18} /> View Code
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Visual Section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="hidden lg:block relative aspect-square rounded-lg overflow-hidden bg-white border border-dark/10 shadow-lg flex items-center justify-center text-6xl"
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority 
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Explore More Projects Link (Optional but recommended) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <a
              href="https://github.com/huzaifaAlii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-dark hover:text-gold transition-colors font-semibold tracking-wide border-b border-transparent hover:border-gold pb-1"
            >
              Explore More Projects <FiArrowRight />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects