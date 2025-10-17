'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactHero() {
  return (
    <section className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-[30%_5%_65%] items-center mt-10 md:mt-20 pb-10">
      {/* LEFT COLUMN — Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center md:justify-start w-full"
      >
        <div className="relative bg-[#39B44A] rounded-3xl overflow-hidden w-full max-w-[340px] aspect-square">
          <Image
            src="/images/contact-support.jpg"
            alt="Friendly customer support team"
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
          We Are Here to Help You Grow
        </h1>

        <p className="text-gray-500 leading-relaxed max-w-xl">
          Have a question, need loan advice, or want to start saving? 
          Our friendly team is ready to assist you. Reach out through any of the channels below.
        </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center md:items-center gap-6 md:gap-8">
            {/* Primary CTA */}
            <Link
              href="#contact-form"
              className="inline-flex items-center justify-between bg-[#39B44A] rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] px-4 py-2 w-[260px] hover:shadow-lg transition-all duration-300 group"
            >
              <span className="text-white font-semibold tracking-wide">
                Contact Us
              </span>
              <span className="ml-6 bg-black text-white p-2 rounded-full transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#faqs"
              className="flex items-center gap-3 text-[#39B44A] font-semibold text-lg hover:text-black transition-colors duration-300"
            >
              Frequently Asked Questions
              <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
      </motion.div>
    </section>
  )
}
