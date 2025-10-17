'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, CircleHelp } from 'lucide-react'
import Image from 'next/image'

const faqs = [
  {
    question: 'What documents do I need for a loan application?',
    answer:
      'You’ll need a valid means of identification, proof of income or employment, and a recent utility bill. Additional documents may apply depending on the loan type.',
  },
  {
    question: 'How long does loan approval take?',
    answer:
      'Our loan approval process is quick and digital — once your documents are verified, approvals typically take less than 24 hours.',
  },
  {
    question: 'What types of loans do you offer?',
    answer:
      'We offer a range of flexible loans including Personal Loans, Business Loans, Automobile Loans, Mortgage/Home Loans, and Gadget Loans.',
  },
  {
    question: 'What is the maximum loan amount I can get?',
    answer:
      'The maximum loan amount depends on your income, credit history, and loan type. Eligible applicants can access up to ₦5,000,000 based on evaluation.',
  },
  {
    question: 'What happens if I miss a repayment?',
    answer:
      'If you miss a repayment, you may incur a small penalty fee. We encourage customers to reach out early — our support team can help restructure your repayment plan to avoid default.',
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
          Loan Questions
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
