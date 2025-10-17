'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, CircleHelp } from 'lucide-react'
import Image from 'next/image'

const faqs = [
  {
    question: 'How do I open a savings account?',
    answer:
      'You can open a savings account online through our website. Simply complete the savings application form, verify your details, and your account will be activated instantly.',
  },
  {
    question: 'What savings products do you offer?',
    answer:
      'We offer flexible savings options tailored to your needs — including Target Savings, Fixed Deposit, and Business Savings plans with competitive interest rates.',
  },
  {
    question: 'Are my savings safe with RhynoCredit?',
    answer:
      'Yes, your savings are secure. RhynoCredit operates under regulatory supervision and holds a Lagos State Money Lending License, ensuring compliance and customer protection.',
  },
  {
    question: 'How can I check my account balance or loan statement?',
    answer:
      'You can easily check your account balance or download your loan statement by logging into your RhynoCredit dashboard online or contacting our support team.',
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
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#010B07] text-center mb-16"
        >
          Savings Questions
        </motion.h2>

        {/* Two-Column Layout — Image LEFT, FAQs RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN — Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-start"
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

          {/* RIGHT COLUMN — FAQ List */}
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
        </div>
      </div>
    </section>
  )
}
