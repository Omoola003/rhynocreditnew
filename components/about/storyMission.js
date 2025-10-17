'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function StoryMission() {
  return (
    <section
      className="w-[90%] md:w-[85%] mx-auto rounded-3xl px-6 md:px-12 py-12 md:py-16 mt-16 md:mt-20"
      style={{
        background: 'linear-gradient(to top right, #FECCB7 5%, #D8E3E2 95%)',
      }}
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-[#052D1B] mb-12"
      >
        Story &amp; Mission
      </motion.h2>

      {/* Content — Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left — Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[300px] md:h-[420px] rounded-3xl overflow-hidden"
        >
          <Image
            src="/images/story-mission-illustration.jpg"
            alt="Team collaboration illustration"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right — Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-left space-y-5"
        >
          <h3 className="text-3xl font-semibold text-[#052D1B]">
            Our Why: Fueling Ambition, Responsibly
          </h3>

          <p className="text-gray-600 leading-relaxed">
            RhynoCredit was founded to bridge a gap: providing straightforward,
            reliable financial tools for the driven individuals and businesses
            often overlooked by traditional finance.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Inspired by the resilience of the rhino, we deliver strength,
            stability, and unwavering support. Our mission is to be the financial
            partner that empowers your growth — not just with credit, but with the
            knowledge to use it wisely.
          </p>

          <p className="text-gray-700 font-medium">
            As a{' '}
            <span className="text-[#39B44A]">
              CBN-licensed Microfinance Bank
            </span>
            , your growth and financial well-being are at the heart of everything we do.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
