'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const trustReasons = [
  {
    title: 'Security',
    description:
      'Your data and transactions are safe with our CBN-licensed, NDIC-insured platform.',
    image: '/images/security.jpg',
  },
  {
    title: 'Speed',
    description:
      'Experience our fully digital, rapid application and approval process.',
    image: '/images/speed.jpg',
  },
  {
    title: 'Support',
    description:
      'Our dedicated team is here to guide you at every step.',
    image: '/images/support.jpg',
  },
]

export default function WhyTrustRhynoCredit() {
  return (
    <section className="relative">
      {/* Top Title Section (White Background) */}
      <div className="bg-white py-20">
        <div className="w-[90%] md:w-[85%] mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#010B07]"
          >
            Why Thousands Trust RhynoCredit for Their Financial Needs
          </motion.h2>
        </div>
      </div>

      {/* Gradient Section with Cards */}
      <div className="w-[90%] md:w-[85%] mx-auto bg-gradient-to-br from-[#FFFFFF] via-[#ECEEF2] to-[#E9EBEF] py-24 rounded-2xl">
        <div className="w-[90%] md:w-[85%] mx-auto space-y-16">
          {trustReasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } items-center bg-white rounded-3xl shadow-md hover:shadow-lg transition overflow-hidden`}
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-64 md:h-80">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#010B07] mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
