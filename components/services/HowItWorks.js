'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const steps = [
  {
    title: 'Apply Online',
    description: 'Fill out a simple, secure application in minutes.',
  },
  {
    title: 'Get Approved',
    description: 'Receive a fast decision from our team.',
  },
  {
    title: 'Receive Your Funds',
    description: 'Get the money disbursed directly to your account.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 bg-white mt-10 mb-10">
      <div className="w-[90%] md:w-[85%] mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#010B07] mb-4"
        >
          Get Your Funds in 3 Simple Steps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 text-sm md:text-base mb-12"
        >
          Fast, simple, and stress-free — getting your funds has never been easier.
        </motion.p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-green-600 rounded-3xl p-8 shadow-md hover:shadow-lg transition flex flex-col items-left text-left"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center mb-4 rounded-full bg-white">
                <CheckCircle className="text-black w-8 h-8" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#010B07] mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-white/95 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
