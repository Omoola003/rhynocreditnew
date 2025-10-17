'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesHero() {
  return (
    <section className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-[30%_5%_65%] items-center mt-10 md:mt-20 pb-10">
      {/* LEFT COLUMN — Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center md:justify-start w-full"
      >
        <div className="relative bg-[#39B44A] rounded-3xl overflow-hidden w-full max-w-[340px] aspect-square scale-x-[-1]">
          <Image
            src="/images/financial-solution.jpg"
            alt="Empowered business people illustration"
            fill
            className="object-cover rounded-3xl"
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
        className="space-y-6 w-full ml-2"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#010B07] leading-tight">
          Financial Solutions for Every Step of Your Journey
        </h1>

        <p className="text-gray-500 leading-relaxed max-w-xl">
          From kickstarting your business to upgrading your lifestyle, discover a range of simple, secure, and flexible loan products designed just for you.
        </p>

        <Link
          href="/apply"
          className="inline-flex items-center justify-between bg-black rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] px-6 py-4 w-[280px] hover:shadow-md transition"
        >
          <span className="text-white font-medium">Apply for a loan</span>
          <span className="ml-12 bg-[#39B44A] text-white p-2 rounded-full">
            <ArrowUpRight size={18} />
          </span>
        </Link>
      </motion.div>
    </section>
  )
}
