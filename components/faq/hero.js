'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function FAQPageHero() {
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
            src="/images/contact-support.jpg"
            alt="Friendly customer support team"
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
          We Are Here to Help You Grow
        </h1>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
          Have a question, need loan advice, or want to start saving?
          Our friendly team is ready to assist you. Reach out through any of the channels below.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
          {/* Primary CTA */}
          <Link
            href="/coming-soon"
            className="inline-flex items-center justify-between bg-[#39B44A] dark:bg-white rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.08)] px-4 py-2 w-[260px] hover:shadow-lg transition-all duration-300 group"
          >
            <span className="text-white dark:text-[#010B07] font-semibold tracking-wide">
              Apply for a loan
            </span>
            <span className="ml-6 bg-black dark:bg-[#39B44A] text-white p-2 rounded-full transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/contact"
            className="flex items-center gap-3 text-[#39B44A] dark:text-[#39B44A] font-semibold text-lg hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            Contact Us
            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
