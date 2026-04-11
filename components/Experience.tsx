'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Freelance Web Developer',
      company: 'Fiverr (Remote)',
      period: '2023 – Present',
      description: 'Delivered 10+ full-stack applications with 100% client satisfaction. Specialized in React, Next.js, Node.js, and modern authentication systems.',
      achievements: [
        'Built secure authentication with Firebase and JWT',
        'Optimized databases (MongoDB, PostgreSQL, MySQL)',
        'Deployed applications on Vercel',
        'Maintained 100% client satisfaction rate',
      ],
    },
    {
      title: 'Front-End Developer Intern',
      company: 'Interns Pakistan (Remote)',
      period: 'Summer 2023',
      description: 'Designed responsive interfaces and enhanced UX across multiple platforms using React JS and TailwindCSS.',
      achievements: [
        'Created responsive designs with React JS',
        'Enhanced accessibility standards',
        'Improved UX across multiple platforms',
        'Collaborated with design team',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-6 lg:px-12 bg-cream-300">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-serif font-bold text-dark mb-16"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 lg:p-12 bg-white/40 border border-dark/10 rounded-lg hover-lift"
            >
              {/* Header */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <p className="text-sm font-medium text-dark/70 uppercase tracking-widest mb-2">Position</p>
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-dark">
                    {exp.title}
                  </h3>
                </div>

                <div>
                  <p className="text-sm font-medium text-dark/70 uppercase tracking-widest mb-2">Company</p>
                  <p className="text-xl font-medium text-dark">{exp.company}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-dark/70 uppercase tracking-widest mb-2">Period</p>
                  <p className="text-xl font-medium text-gold">{exp.period}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-dark/80 mb-8 leading-relaxed font-light">
                {exp.description}
              </p>

              {/* Achievements */}
              <div>
                <p className="text-sm font-medium text-dark/70 uppercase tracking-widest mb-4">Achievements</p>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-dark/80">
                      <span className="text-gold font-bold mt-1">→</span>
                      <span className="font-light">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-dark/10"
        >
          <h3 className="text-3xl font-serif font-bold text-dark mb-8">Education & Certifications</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="p-8 bg-white/40 border border-dark/10 rounded-lg">
              <p className="text-sm font-medium text-dark/70 uppercase tracking-widest mb-2">Degree</p>
              <h4 className="text-xl font-serif font-bold text-dark mb-4">
                B.S. Software Engineering
              </h4>
              <p className="text-dark/80 mb-3">COMSATS University Islamabad</p>
              <p className="text-sm text-dark/70">Expected 2026 • Final Sem GPA: 3.57/4.0</p>
            </div>

            {/* Certifications */}
            <div className="p-8 bg-white/40 border border-dark/10 rounded-lg">
              <p className="text-sm font-medium text-dark/70 uppercase tracking-widest mb-2">Certifications</p>
              <div className="space-y-3">
                <p className="text-dark/80">Machine Learning Specialization • DeepLearning.ai</p>
                <p className="text-dark/80">Python for Data Science, AI & Development • IBM</p>
                <p className="text-dark/80">Python Crash Course • Google</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
