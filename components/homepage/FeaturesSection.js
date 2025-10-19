'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
  const features = [
    { title: 'Security' },
    { title: 'Customer-Centric' },
    { title: 'Speed & Convenience' },
  ]

  return (
    <section className="w-[90%] md:w-[85%] mx-auto mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 items-center gap-16 text-[#010B07] dark:text-white transition-colors duration-300">
      {/* Left: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#052D1B] dark:text-[#39B44A] leading-snug mb-4">
            Why Choose <br /> Rhyno Credit
          </h2>
          <p className="text-gray-600 dark:text-black text-base md:text-lg max-w-md leading-relaxed">
            Built on trust, speed, and customer satisfaction — Rhyno Credit ensures
            you get secure, accessible, and efficient financial solutions that
            help you move faster.
          </p>
        </div>

        {/* Features list */}
        <div className="flex flex-col space-y-5">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ x: 6 }}
              className="flex items-center text-[#010B07] dark:text-black font-semibold text-lg cursor-pointer group"
            >
              <div className="relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[2px] before:h-6 before:bg-[#39B44A] before:opacity-0 group-hover:opacity-100 before:transition-all before:duration-300 pl-4">
                <span className="group-hover:text-[#39B44A] transition-colors duration-300">
                  {feature.title}
                </span>
              </div>
              <ChevronRight
                size={20}
                className="ml-2 text-gray-400 dark:text-black group-hover:text-[#39B44A] transition-colors duration-200"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right: Image Grid */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-5 justify-items-center"
      >
        {/* Top Left */}
        <div className="rounded-2xl overflow-hidden h-[160px] md:h-[180px] hover:scale-[1.02] transition-transform duration-300 bg-white dark:bg-[#1a1a1a] shadow-md dark:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
          <Image
            src="/images/team-presentation.png"
            alt="Team presentation"
            width={300}
            height={180}
            className="object-cover w-full h-full opacity-95 dark:opacity-90 transition-opacity duration-300"
          />
        </div>

        {/* Right Large Image (spans two rows) */}
        <div className="row-span-2 rounded-2xl overflow-hidden h-[320px] md:h-[380px] hover:scale-[1.02] transition-transform duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.06)] bg-white dark:bg-[#0e0e0e]">
          <Image
            src="/images/brainstorm-session.png"
            alt="Board meeting"
            width={400}
            height={380}
            className="object-cover w-full h-full opacity-95 dark:opacity-90 transition-opacity duration-300"
          />
        </div>

        {/* Bottom Left */}
        <div className="rounded-2xl overflow-hidden h-[140px] md:h-[160px] hover:scale-[1.02] transition-transform duration-300 bg-white dark:bg-[#1a1a1a] shadow-md dark:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
          <Image
            src="/images/board-meeting.png"
            alt="Brainstorm session"
            width={300}
            height={160}
            className="object-cover w-full h-full opacity-95 dark:opacity-90 transition-opacity duration-300"
          />
        </div>
      </motion.div>
    </section>
  )
}
