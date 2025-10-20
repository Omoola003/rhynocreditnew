'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ComingSoonPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#FBFCFD] text-[#010B07] relative overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center px-6 z-10"
      >
        <Image
          src="/images/og-image.png"
          alt="RhynoCredit Logo"
          width={250}
          height={140}
          className="mb-6"
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#052D1B] leading-tight">
          We’re almost ready to serve you better
        </h1>

        <p className="max-w-2xl text-base md:text-lg text-gray-700 mb-6">
          Our online loan application system is being finalized to make access to credit 
          <span className="text-[#39B44A] font-semibold"> faster, easier,</span> and 
          <span className="text-[#39B44A] font-semibold"> more secure</span> for you.
        </p>

        <p className="max-w-lg text-sm md:text-base text-gray-600 mb-10">
          Soon, you’ll be able to apply directly from this page — no paperwork, no stress, 
          just seamless financing with RhynoCredit’s trusted support.
        </p>

        <div className="bg-[#39B44A] text-white px-8 py-3 rounded-full font-semibold shadow-md cursor-default">
          Loan Application Underway
        </div>
      </motion.div>

      {/* Decorative / Visual Accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute bottom-0 left-0 w-full h-[45vh] bg-gradient-to-t from-[#39B44A] to-transparent"
      />

    <div className="top-8 left-8 mt-10 mb-10">
        <Link href="/" className="flex items-center gap-2 text-sm hover:underline">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
    </div>

      {/* Footer Tagline */}
      <footer className="absolute bottom-8 text-sm text-gray-600 z-10">
        fueling your business journey...
      </footer>
    </section>
  )
}
