'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10 mt-8 md:mt-16 text-[#010B07] dark:text-white transition-colors duration-300">
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center md:justify-start"
      >
        <div className="relative bg-[#39B44A] rounded-3xl overflow-hidden w-[300px] sm:w-[360px] md:w-[400px] lg:w-[420px] shadow-md">
          <Image
            src="/images/smiling-professional.svg"
            alt="Smiling business professional"
            width={420}
            height={420}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </motion.div>

      {/* Middle: Text */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#010B07] dark:text-[#052D1B]">
          Your Ambition,<br /> 
          <span className="text-[#052D1B] dark:text-[#39B44A]">Financed</span>
        </h1>

        <p className="text-gray-600 dark:text-black max-w-sm">
          Fast, flexible loans designed for your growth. From launching a startup
          to upgrading your life, we provide the trusted support you need.
        </p>

        <Link
          href="https://wa.me/2349011141113"
          className="inline-flex items-center justify-between bg-white dark:bg-[#39B44A] rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_8px_rgba(255,255,255,0.1)] px-6 py-4 w-3/4 hover:shadow-md transition"
        >
          <span className="text-[#010B07] dark:text-white font-medium">
            Get a loan now
          </span>
          <span className="ml-3 bg-[#39B44A] dark:bg-white text-white dark:text-[#010B07] p-2 rounded-full transition-colors duration-300">
            <ArrowUpRight size={18} />
          </span>
        </Link>
      </motion.div>

      {/* Right: Stats */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 grid-rows-2 gap-4 w-full"
      >
        {/* Top Left - Larger */}
        <div className="bg-[#052D1B] dark:bg-[#1B3D2C] text-white rounded-2xl px-6 py-6 flex flex-col justify-center transition-colors duration-300">
          <h3 className="text-2xl font-bold leading-none mb-4">900K+</h3>
          <p className="text-sm text-gray-300 mt-1">Satisfied Customers</p>
        </div>

        {/* Top Right - Smaller */}
        <div className="bg-[#010B07] dark:bg-[#f1f5f3] text-white dark:text-[#010B07] rounded-2xl px-4 py-4 flex flex-col justify-center transform scale-90 origin-bottom-right transition-colors duration-300">
          <h3 className="text-3xl font-bold leading-none mb-3">Zero</h3>
          <p className="text-xs text-gray-300 dark:text-gray-600 mt-1">Hidden Fees</p>
        </div>

        {/* Bottom: Full Width */}
        <div className="col-span-2 bg-[#39B44A] dark:bg-[#2EA142] text-[#010B07] dark:text-white rounded-2xl px-6 py-6 mt-2 transition-colors duration-300">
          <h3 className="text-xl font-bold leading-snug">
            Flexible<br />Repayment
          </h3>
          <p className="text-sm mt-1">Choose a plan that fits your cash flow</p>
        </div>
      </motion.div>
    </section>
  )
}
