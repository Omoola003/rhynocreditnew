'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, CircleHelp } from 'lucide-react'
import Image from 'next/image'

const faqs = [
  {
    question: 'Is RhynoCredit a licensed financial institution?',
    answer:
      'Yes. RhynoCredit is a licensed microfinance and lending institution operating under regulatory oversight, including NDPC, FCCPC, and the Lagos State Money Lending License.',
  },
  {
    question: 'Where is your office located?',
    answer:
      'Our head office operates digitally from Lagos, Nigeria, but our loan and savings services are accessible nationwide through our online platform.',
  },
  {
    question: 'How do I contact customer service?',
    answer:
      'You can reach our support team via email at support@rhynocredit.com or call 09011141113. We’re available to assist with applications, repayment, or general inquiries.',
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="w-[90%] md:w-[85%] mx-auto py-24 bg-[#D8E3E2] rounded-3xl mt-10 mb-10">
      <div className="w-[90%] md:w-[85%] mx-auto">
        {/* Section Header (Centered) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#010B07] text-center mb-16"
        >
          General Questions
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
