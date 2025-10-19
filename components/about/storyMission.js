'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function StoryMission() {
  return (
    <section
      className="w-[92%] sm:w-[90%] md:w-[85%] mx-auto rounded-3xl px-4 sm:px-6 md:px-12 py-10 md:py-16 mt-14 md:mt-20"
      style={{
        background: 'linear-gradient(to top right, #FECCB7 5%, #D8E3E2 95%)',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-[#052D1B] mb-10"
      >
        Story &amp; Mission
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden mx-auto"
        >
          <Image
            src="/images/story-mission-illustration.jpg"
            alt="Team collaboration illustration"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center md:text-left space-y-5"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#052D1B]">
            Our Why: Fueling Ambition, Responsibly
          </h3>

          <p className="text-gray-600 leading-relaxed">
            RhynoCredit was founded to bridge a gap — providing reliable financial
            tools for individuals and businesses often overlooked by traditional
            institutions.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Inspired by the resilience of the rhino, we stand for strength,
            stability, and trust. Our mission is to empower growth through access
            to credit and financial knowledge that creates lasting impact.
          </p>

          <p className="text-gray-700 font-medium">
            As a{' '}
            <span className="text-[#39B44A]">
              CBN-licensed Microfinance Bank
            </span>
            , we prioritize your growth, security, and financial confidence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
