'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, Clock, Target, ArrowUpRight } from 'lucide-react'

const plans = [
  {
    icon: <TrendingUp className="w-10 h-10 text-[#39B44A]" />,
    title: 'Short Term Plan',
    rate: 'Up to 16%',
    duration: 'Duration: 6 months',
    description:
      'Perfect for investors who want flexibility and quick returns.',
    button: 'About Us',
  },
  {
    icon: <Clock className="w-10 h-10 text-[#39B44A]" />,
    title: 'Medium-Term Plan',
    rate: 'Up to 15%',
    duration: 'Duration: 12 months',
    description:
      'Balanced returns with moderate risk — ideal for consistent growth.',
    button: 'About Us',
  },
  {
    icon: <Target className="w-10 h-10 text-[#39B44A]" />,
    title: 'Long Term Plan',
    rate: 'Up to 18%',
    duration: 'Duration: 24 months',
    description:
      'Maximize your earnings while supporting long-term financial projects.',
    button: 'About Us',
  },
]

export default function InvestmentPlans() {
  return (
    <section className="relative w-[90%] md:w-[85%] mx-auto py-24 bg-white mt-10 mb-10 rounded-2xl">
      <div className="w-full mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#010B07] mb-4"
        >
          Choose the Right Plan for You
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 text-sm md:text-base mb-12"
        >
          Discover flexible investment plans tailored to meet your financial goals.
        </motion.p>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-10 shadow-md hover:shadow-lg border border-gray-100 transition flex flex-col items-center text-center h-full"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-[#39B44A]/10">
                {plan.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#010B07] mb-3">
                {plan.title}
              </h3>

              {/* Rate */}
              <p className="text-[#39B44A] text-3xl font-extrabold mb-2">
                {plan.rate}
              </p>

              {/* Duration */}
              <p className="text-gray-700 text-sm font-medium mb-4">
                {plan.duration}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                {plan.description}
              </p>

              {/* Text-based Link */}
              <Link
                href="/about"
                className="inline-flex items-center text-[#39B44A] font-semibold text-sm hover:text-[#010B07] transition"
              >
                <span>{plan.button}</span>
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
