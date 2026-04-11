'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'Python', 'C++', 'Java', 'HTML5', 'CSS3'],
    },
    {
      title: 'Frontend',
      skills: ['React JS', 'Next.js', 'TailwindCSS', 'Bootstrap', 'Redux Toolkit'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'RESTful APIs', 'Authentication'],
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose', 'Prisma', 'TypeORM'],
    },
    {
      title: 'Tools & Cloud',
      skills: ['Git', 'Docker', 'Firebase', 'Vercel', 'JWT', 'Multer'],
    },
    {
      title: 'AI/ML',
      skills: ['scikit-learn', 'NumPy', 'Pandas', 'Machine Learning Basics'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-6 lg:px-12 bg-cream-300">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-serif font-bold text-dark mb-16"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-white/40 border border-dark/10 rounded-lg hover-lift backdrop-blur-sm"
            >
              <h3 className="text-xl font-serif font-bold text-dark mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-dark/5 text-dark text-sm font-medium rounded-full border border-dark/10 hover:bg-gold hover:text-dark transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
