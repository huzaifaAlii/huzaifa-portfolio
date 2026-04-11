'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-navy-950 text-cream-300 py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-cream-300/80 font-light">
            Designed & Developed with careful attention to detail
          </p>

          <p className="text-cream-300/60 text-sm">
            © {new Date().getFullYear()} Huzaifa Ali. All rights reserved.
          </p>

          <p className="text-cream-300/50 text-xs tracking-widest pt-4">
            Built with Next.js • Styled with TailwindCSS • Deployed on Vercel
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
