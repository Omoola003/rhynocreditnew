'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function InvestHero() {
  return (
    <section className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-[30%_5%_65%] items-center mt-10 md:mt-20 pb-10">
      {/* LEFT COLUMN — Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center md:justify-start w-full"
      >
        <div className="relative bg-[#39B44A] rounded-3xl overflow-hidden w-full max-w-[340px] aspect-square scale-x-[-1] shadow-md dark:shadow-[0_4px_12px_rgba(255,255,255,0.08)]">
          <Image
            src="/images/invest-with-us.jpg"
            alt="Empowered business people illustration"
            fill
            className="object-cover rounded-3xl opacity-95 dark:opacity-90"
            priority
          />
        </div>
      </motion.div>

      {/* SPACER */}
      <div className="hidden md:block" />

      {/* RIGHT COLUMN — Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="space-y-6 w-full ml-2 text-[#010B07] dark:text-white transition-colors duration-300"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#010B07] dark:text-[#39B44A]">
          Grow Your Savings, Secure Your Future
        </h1>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
          Your financial goals are within reach. Save smarter with RhynoCredit and earn
          competitive returns in a safe, CBN-licensed environment.
        </p>

        <Link
          href="/coming-soon"
          className="inline-flex items-center justify-between bg-[#39B44A] dark:bg-white rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.08)] px-6 py-4 w-[280px] hover:shadow-md transition-colors duration-300"
        >
          <span className="text-white dark:text-[#010B07] font-medium">
            Invest Now
          </span>
          <span className="ml-12 bg-black dark:bg-[#39B44A] text-white p-2 rounded-full transition-colors duration-300">
            <ArrowUpRight size={18} />
          </span>
        </Link>
      </motion.div>
    </section>
  )
}
