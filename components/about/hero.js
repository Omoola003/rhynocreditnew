'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutHeroSection() {
  return (
    <section className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-[30%_5%_65%] items-center mt-10 md:mt-20 pb-10">
      {/* LEFT COLUMN — Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center md:justify-start w-full"
      >
        <div className="relative bg-[#39B44A] rounded-3xl overflow-hidden w-full max-w-[340px] aspect-square shadow-md dark:shadow-[0_4px_12px_rgba(255,255,255,0.08)]">
          <Image
            src="/images/about-hero-illustration.jpg"
            alt="Empowered business people illustration"
            fill
            className="object-cover rounded-3xl opacity-95 dark:opacity-90"
            priority
          />
        </div>
      </motion.div>

      {/* SPACER — middle empty column */}
      <div className="hidden md:block" />

      {/* RIGHT COLUMN — Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="space-y-6 w-full ml-2 text-[#010B07] dark:text-white transition-colors duration-300"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#010B07] dark:text-gray-600">
          More than just a lender.
          <span className="text-[#052D1B] dark:text-[#39B44A]">
            {' '}
            Your partner for growth.
          </span>
        </h1>

        <p className="text-gray-600 dark:text-black leading-relaxed max-w-xl">
          At RhynoCredit, we&apos;re building a financial ecosystem rooted in
          resilience, trust, and empowerment, providing the support you need to
          thrive.
        </p>

        <Link
          href="/coming-soon"
          className="inline-flex items-center justify-between bg-white dark:bg-[#39B44A] rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.08)] px-6 py-4 w-[280px] hover:shadow-md transition"
        >
          <span className="text-[#010B07] dark:text-white font-medium">
            Apply for a loan
          </span>
          <span className="ml-12 bg-[#39B44A] dark:bg-black text-white p-2 rounded-full">
            <ArrowUpRight size={18} />
          </span>
        </Link>
      </motion.div>
    </section>
  )
}
