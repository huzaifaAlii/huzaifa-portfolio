'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="pt-40 pb-20 px-6 lg:px-12 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm font-medium tracking-widest text-dark mb-6 uppercase"
            >
              Software Engineer & Full-Stack Developer
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl lg:text-7xl font-serif font-bold text-dark mb-8 leading-tight"
            >
              Huzaifa Ali
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-dark/80 mb-12 max-w-lg leading-relaxed font-light"
            >
              Crafting elegant, scalable digital solutions with modern web technologies. Specializing in full-stack development, clean architecture, and user-centric design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                href="#projects"
                className="btn btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work <FiArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#contact"
                className="btn btn-secondary flex items-center justify-center gap-2 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-6"
            >
              <motion.a
                href="https://github.com/huzaifaAlii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-gold transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/huzaifa-ali-a5903b276"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark hover:text-gold transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FiLinkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:02huzaifa.ali@gmail.com"
                className="text-dark hover:text-gold transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <FiMail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Elegant Image Container */}
              <div className="w-full aspect-square rounded-lg overflow-hidden bg-cream-200 border-2 border-dark/10 shadow-2xl relative">
                <Image 
                  src="/profile.jpg" // Ye file public folder mein honi chahiye
                  alt="Huzaifa Ali"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Decorative Element */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-dark/20 rounded-lg opacity-30"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero