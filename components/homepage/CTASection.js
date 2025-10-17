'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function CallToActionSection() {
  return (
    <section
      className="w-[90%] md:w-[85%] mx-auto rounded-3xl shadow-[0_6px_12px_rgba(0,0,0,0.08)] backdrop-blur-md px-6 md:px-12 py-12 md:py-16 mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
      style={{
        background: 'white',
      }}
    >
      {/* Left: Text + CTA */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#052D1B] leading-snug">
          Open your account today and get access to financial empowerment
        </h2>

        <Link
          href="/apply"
          className="inline-flex items-center justify-between bg-[#39B44A] text-white rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.15)] px-6 py-3 w-fit font-medium hover:opacity-90 transition"
        >
          <span>Apply for a loan</span>
          <span className="ml-3 bg-[#010B07] text-white p-2 rounded-full">
            <ArrowUpRight size={18} />
          </span>
        </Link>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex justify-center md:justify-end"
      >
        <div className="rounded-3xl overflow-hidden w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px]">
          <Image
            src="/images/account-access.svg"
            alt="Financial empowerment illustration"
            width={460}
            height={460}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </motion.div>
    </section>
  )
}
