'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-navy-900"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-serif font-bold text-cream-300 tracking-tight"
          whileHover={{ scale: 1.05 }}
        >
          HA
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-cream-300 text-sm font-medium tracking-wide hover:text-gold transition-colors"
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cream-300 text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-navy-950 px-6 py-4 space-y-3"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-cream-300 text-sm font-medium hover:text-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
