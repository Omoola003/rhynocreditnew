'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function ContactFormSection() {
  return (
    <section
      id="contact-form"
      className="w-[80%] md:w-[75%] mx-auto py-12 bg-[#D8E3E2] rounded-3xl mt-10 mb-20"
    >
      <div className="w-[90%] md:w-[60%] mx-auto text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#010B07] mb-10"
        >
          Send Us a Message
        </motion.h2>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-10 transition-all duration-300"
        >
          {/* Full Name */}
          <div className="mb-6 text-left">
            <label className="block text-[#010B07] font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full rounded-full border bg-white border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#39B44A]"
            />
          </div>

          {/* Email Address */}
          <div className="mb-6 text-left">
            <label className="block text-[#010B07] font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-full border bg-white border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#39B44A]"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-6 text-left">
            <label className="block text-[#010B07] font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your Phone Number"
              className="w-full rounded-full border bg-white border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#39B44A]"
            />
          </div>

          {/* Subject Title */}
          <div className="mb-6 text-left">
            <label className="block text-[#010B07] font-semibold mb-2">
              Subject Title
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              className="w-full rounded-full border bg-white border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#39B44A]"
            />
          </div>

          {/* Message */}
          <div className="mb-8 text-left">
            <label className="block text-[#010B07] font-semibold mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Enter Message"
              className="w-full rounded-3xl border bg-white border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#39B44A]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex items-center justify-between bg-[#39B44A] rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] px-4 py-2 w-[260px] hover:shadow-lg transition-all duration-300 group"
          >
            <span className="text-white font-semibold tracking-wide">
              Submit
            </span>
            <span className="ml-6 bg-black text-white p-2 rounded-full transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </button>
        </motion.form>
      </div>
    </section>
  )
}
