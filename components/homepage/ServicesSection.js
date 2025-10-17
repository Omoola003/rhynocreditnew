'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Briefcase, UserPlus, Layers } from 'lucide-react'
import Link from 'next/link'

export default function ServicesSection() {
  const services = [
    {
      title: 'Business Loans',
      icon: <Briefcase size={24} />,
      color: '#39B44A',
    },
    {
      title: 'Personal Loans',
      icon: <UserPlus size={24} />,
      color: '#39B44A',
    },
    {
      title: 'And so much more',
      icon: <Layers size={24} />,
      color: '#39B44A',
    },
  ]

  return (
    <section
      className="w-[90%] md:w-[85%] mx-auto rounded-3xl px-6 md:px-12 py-12 md:py-16 mt-15 md:mt-20"
      style={{
        background: 'linear-gradient(to top right, #FECCB7 5%, #D8E3E2 95%)',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1.1fr] items-end gap-8 md:gap-12">
        {/* Left: Text + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#052D1B] leading-snug">
            Browse our set of services <br /> and offerings
          </h2>

          <p className="text-gray-600 max-w-md">
            We offer a wide variety of services to help you get the funding you
            need. Whether you’re an individual or SME, we’ve got you covered.
          </p>

          {/* Long CTA button */}
          <Link
            href="/services"
            className="inline-flex items-center justify-between bg-[#39B44A] text-white rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.15)] px-6 py-4 w-[70%] sm:w-[70%] md:w-[65%] font-medium hover:opacity-90 transition"
          >
            <span className="text-base">Services</span>
            <span className="ml-3 bg-[#010B07] text-white p-2 rounded-full">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </motion.div>

        {/* Right: Service Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-end items-end"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -3 }}
                className={`bg-white text-[#010B07] rounded-2xl shadow-[0_4px_10px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center text-center p-6 transition duration-300 ${
                  index === 2
                    ? 'md:col-span-1 md:col-start-3 h-[120px]'
                    : 'h-[160px]'
                }`}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full mb-4"
                  style={{ backgroundColor: service.color }}
                >
                  {service.icon}
                </div>
                <h3 className="font-semibold text-sm leading-snug">
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
