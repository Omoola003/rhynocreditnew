'use client'

import { motion } from 'framer-motion'
import { Wallet, FileText, Banknote, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: <FileText className="w-10 h-10 text-[#39B44A]" />,
    title: 'Apply Online',
    description: 'Complete a straightforward application.',
  },
  {
    icon: <Wallet className="w-10 h-10 text-[#39B44A]" />,
    title: 'Choose Your Plan',
    description: 'Pick a savings product that fits your goal.',
  },
  {
    icon: <Banknote className="w-10 h-10 text-[#39B44A]" />,
    title: 'Fund Your Account',
    description: 'Transfer your initial deposit securely.',
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-[#39B44A]" />,
    title: 'Watch Your Money Grow',
    description: 'Earn interest and track your progress.',
  },
]

export default function BeginJourney() {
  return (
    <section className="relative w-[90%] md:w-[85%] mx-auto py-24 bg-[#D8E3E2] rounded-2xl">
      <div className="w-[90%] md:w-[85%] mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#010B07] mb-4"
        >
          Begin Your Journey in Minutes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-700 text-sm md:text-base mb-12"
        >
          Start your savings or investment plan with a few simple steps.
        </motion.p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#39B44A]/10 mb-6">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#010B07] mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
