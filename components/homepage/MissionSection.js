'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function MissionSection() {
  return (
    <section
      className="w-[90%] md:w-[85%] mx-auto rounded-3xl px-6 md:px-12 py-12 md:py-20 mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16"
      style={{
        background: 'linear-gradient(to top right, #FECCB7 5%, #D8E3E2 95%)',
      }}
    >
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center md:justify-start"
      >
        <div className="rounded-3xl overflow-hidden w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px]">
          <Image
            src="/images/female-portrait.svg"
            alt="Confident businesswoman portrait"
            width={460}
            height={460}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </motion.div>

      {/* Right: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
          <h2 className="text-3xl md:text-4xl font-bold text-[#052D1B] leading-snug">
            Discover the mission & <br /> story behind our company
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-md">
            Rhyno Credit was founded with one clear mission — to make financial
            support simple, transparent, and within reach for everyone. We believe
            access to credit should empower dreams, not complicate them. Through
            innovation, trust, and deep understanding of local realities, we’re
            redefining how individuals and small businesses experience lending in
            today’s world.
          </p>

          <p className="text-gray-700 leading-relaxed max-w-md">
            Our story is rooted in the belief that financial growth begins with
            accessibility and confidence. By bridging the gap between opportunity
            and financing, Rhyno Credit stands as a dependable partner for
            Nigerians and business owners seeking to grow with assurance. We lead
            with empathy, efficiency, and integrity — ensuring every client feels
            seen, supported, and secure.
          </p>

        <Link
          href="/about"
          className="inline-flex items-center text-[#39B44A] font-semibold hover:underline hover:underline-offset-4 transition"
        >
          About Us
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </motion.div>
    </section>
  )
}
