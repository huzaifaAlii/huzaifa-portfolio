'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('Sending...')

    // Web3Forms API Integration
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        access_key: "4ab064cd-dcde-430c-b90d-a7a121356d91", // Aapki access key
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })
    })

    const result = await response.json()
    if (result.success) {
      setStatus('Message sent successfully! ✅')
      setFormData({ name: '', email: '', message: '' })
    } else {
      setStatus('Something went wrong. Please try again. ❌')
    }
    setIsSubmitting(false)
  }

  const contactLinks = [
    { label: 'GitHub', value: 'github.com/huzaifaAlii', href: 'https://github.com/huzaifaAlii', icon: FiGithub },
    { label: 'LinkedIn', value: 'linkedin.com/in/huzaifa-ali', href: 'https://linkedin.com/in/huzaifa-ali-a5903b276', icon: FiLinkedin },
    { label: 'Email', value: '02huzaifa.ali@gmail.com', href: 'mailto:02huzaifa.ali@gmail.com', icon: FiMail },
    { label: 'Phone', value: '+92 302 0006408', href: 'tel:+923020006408', icon: FiPhone },
    { label: 'Location', value: 'Lahore, Pakistan', href: '#', icon: FiMapPin },
  ]

  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-cream-300 mb-8">Let&apos;s Work Together</h2>
          <p className="text-xl text-cream-300/80 mb-16 max-w-2xl font-light">
            Interested in building something incredible? I&apos;d love to hear about your project.
          </p>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="space-y-4 pt-8">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <a key={index} href={link.href} className="flex items-center gap-4 p-4 bg-cream-300/10 border border-cream-300/20 rounded-lg hover:bg-cream-300/20 transition-all group">
                      <Icon className="text-gold flex-shrink-0" size={20} />
                      <div className="flex-1">
                        <p className="text-sm text-cream-300/70 font-medium tracking-widest">{link.label}</p>
                        <p className="text-cream-300 font-light">{link.value}</p>
                      </div>
                      <FiArrowRight className="text-cream-300/40 group-hover:text-gold transition-colors" size={18} />
                    </a>
                  )
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-cream-300 mb-2">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-cream-300/10 border border-cream-300/20 text-cream-300 rounded-lg focus:outline-none focus:border-gold transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-cream-300 mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-cream-300/10 border border-cream-300/20 text-cream-300 rounded-lg focus:outline-none focus:border-gold transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-cream-300 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full px-4 py-3 bg-cream-300/10 border border-cream-300/20 text-cream-300 rounded-lg focus:outline-none focus:border-gold transition-all resize-none" />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary font-semibold tracking-wide"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status && <p className="text-sm text-cream-300/60 text-center mt-4">{status}</p>}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact