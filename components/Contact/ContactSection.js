'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="bg-white py-12 w-[80%] md:w-[75%] mx-auto mt-10 mb-10 rounded-2xl">
      {/* Header */}
      <div className="text-center mb-4 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#010B07] mb-4"
        >
          Get in Touch with Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto"
        >
          Whether you have questions about our loan products, want to explore
          investment opportunities, or need support, our team is just a message
          away.
        </motion.p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[80%] md:w-[75%] mx-auto gap-8 mb-20">
        {[
          {
            icon: <Phone className="w-8 h-8 text-[#39B44A]" />,
            title: 'Call Us',
            detail: '+234 901 114 1113',
            highlight: '(Mon - Fri, 8:00 AM - 5:00 PM)',
          },
          {
            icon: <Mail className="w-8 h-8 text-[#39B44A]" />,
            title: 'Email Us',
            detail: 'support@rhynocredit.com',
            highlight: '(We respond within 24 hours)',
          },
          {
            icon: <MapPin className="w-8 h-8 text-[#39B44A]" />,
            title: 'Visit Our Office',
            detail: '23A, Adeola Odeku Street, Victoria Island, Lagos',
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#FBFCFD] rounded-3xl shadow-sm hover:shadow-md px-8 py-10 flex flex-col items-center text-center transition h-[250px] md:h-[260px] justify-center"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#39B44A]/10 mb-5">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-[#010B07] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mb-1">{item.detail}</p>
            {item.highlight && (
              <p className="text-black text-xs md:text-sm">{item.highlight}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
