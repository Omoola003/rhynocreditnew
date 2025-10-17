'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowUpRight, CircleHelp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const faqs = [
  {
    question: 'What documents do I need for a loan application?',
    answer:
      'You typically need a valid means of identification, proof of income, and a recent utility bill. Requirements may vary based on loan type.',
  },
  {
    question: 'How long does loan approval take?',
    answer:
      'Our digital approval process usually takes less than 24 hours once all required documents are submitted.',
  },
  {
    question: 'How do I open a savings account?',
    answer:
      'Simply complete our online savings application form. Your account will be set up in minutes and you can start saving immediately.',
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white">
      <div className="w-[90%] md:w-[85%] mx-auto">
        {/* Section Header (Centered) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#010B07] text-center mb-16"
        >
          Frequently Asked Questions (FAQ)
        </motion.h2>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN — FAQ List */}
          <div>
            <ul className="space-y-8">
              {faqs.map((faq, index) => (
                <li key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <CircleHelp
                        size={22}
                        className="text-[#39B44A] flex-shrink-0"
                      />
                      <span className="text-lg md:text-xl font-semibold text-[#010B07]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`text-[#39B44A] transition-transform duration-300 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-gray-600 text-sm md:text-base leading-relaxed mt-3 pl-9"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>

            {/* View All Link */}
            <div className="mt-10 pl-9">
              <Link
                href="/faq"
                className="inline-flex items-center gap-3 text-[#39B44A] font-semibold text-lg hover:text-black transition-colors duration-300"
              >
                View All FAQ’s
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN — Illustration Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[400px] aspect-square rounded-3xl overflow-hidden bg-[#D8E3E2]">
              <Image
                src="/images/faq-illustration.jpg"
                alt="FAQ Support Illustration"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
