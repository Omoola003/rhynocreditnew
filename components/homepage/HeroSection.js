'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10 mt-8 md:mt-16">
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center md:justify-start"
      >
        <div className="relative bg-[#39B44A] rounded-3xl overflow-hidden w-[300px] sm:w-[360px] md:w-[400px] lg:w-[420px]">
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
        <h1 className="text-4xl md:text-5xl font-bold text-[#010B07] leading-tight">
          Your Ambition,<br /> <span className="text-[#052D1B]">Financed</span>
        </h1>

        <p className="text-gray-500 max-w-sm">
          Fast, flexible loans designed for your growth. From launching a startup
          to upgrading your life, we provide the trusted support you need.
        </p>

        <Link
          href="/apply"
          className="inline-flex items-center justify-between bg-white rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] px-6 py-4 w-3/4 hover:shadow-md transition"
        >
          <span className="text-[#010B07] font-medium">Get a loan now</span>
          <span className="ml-3 bg-[#39B44A] text-white p-2 rounded-full">
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
        <div className="bg-[#052D1B] text-white rounded-2xl px-6 py-6 flex flex-col justify-center">
        <h3 className="text-2xl font-bold leading-none mb-4">900K+</h3>
        <p className="text-sm text-gray-200 mt-1">Satisfied Customers</p>
        </div>

        {/* Top Right - Smaller */}
        <div className="bg-[#010B07] text-white rounded-2xl px-4 py-4 flex flex-col justify-center scale-75 md:scale-80 origin-bottom-right">
        <h3 className="text-3xl font-bold leading-none mb-4">Zero</h3>
        <p className="text-xs text-gray-300 mt-1">Hidden Fees</p>
        </div>

        {/* Bottom: Full Width */}
        <div className="col-span-2 bg-[#39B44A] text-[#010B07] rounded-2xl px-6 py-6 mt-2">
          <h3 className="text-xl font-bold leading-snug">
            Flexible<br />Repayment
          </h3>
          <p className="text-sm mt-1">Choose a plan that fits your cash flow</p>
        </div>
      </motion.div>
    </section>
  )
}
