'use client'

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-12 bg-cream-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-dark mb-12">About Me</h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="text-lg text-dark/80 leading-relaxed font-light">
                I'm a Software Engineering student at COMSATS University Islamabad with a passion for building elegant, scalable solutions that solve real-world problems. With expertise in full-stack development, I bring together clean architecture, modern technologies, and user-centric design principles.
              </p>

              <p className="text-lg text-dark/80 leading-relaxed font-light">
                Over the past few years, I've worked on diverse projects—from e-commerce platforms with AI-powered features to responsive web applications. I'm driven by the challenge of writing clean, maintainable code and creating seamless user experiences.
              </p>

              <p className="text-lg text-dark/80 leading-relaxed font-light">
                When I'm not coding, I'm exploring emerging technologies, contributing to open-source projects, or helping others understand complex concepts. I believe in continuous learning and pushing the boundaries of what's possible on the web.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-8 border border-dark/10 rounded-lg hover-lift"
              >
                <p className="text-4xl font-serif font-bold text-dark mb-2">10+</p>
                <p className="text-sm font-medium text-dark/70 tracking-wide">Projects Delivered</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-8 border border-dark/10 rounded-lg hover-lift"
              >
                <p className="text-4xl font-serif font-bold text-dark mb-2">100%</p>
                <p className="text-sm font-medium text-dark/70 tracking-wide">Client Satisfaction</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-8 border border-dark/10 rounded-lg hover-lift"
              >
                <p className="text-4xl font-serif font-bold text-dark mb-2">MERN</p>
                <p className="text-sm font-medium text-dark/70 tracking-wide">Stack Specialist</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-8 border border-dark/10 rounded-lg hover-lift"
              >
                <p className="text-4xl font-serif font-bold text-dark mb-2">2024</p>
                <p className="text-sm font-medium text-dark/70 tracking-wide">Still Learning</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
