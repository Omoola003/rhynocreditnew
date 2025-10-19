'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CoreValues() {
  const values = [
    {
      title: 'Trust',
      quote: '“Finally, a Lender I Can Trust.”',
      text: "I was hesitant about online lenders, but seeing 'CBN Licensed' on their site gave me confidence. The entire process was transparent and secure.",
      name: 'Emmanuel S.',
      role: 'Port Harcourt',
      avatar: '/images/avatar3.jpg',
    },
    {
      title: 'Empowerment',
      quote: '“They Believed in My Vision When Others Didn’t.”',
      text: 'As a small business owner, getting a loan used to be a nightmare. RhynoCredit believed in my vision and helped me grow.',
      name: 'Tunde Adebayo',
      role: "Owner of Tunde's Essentials",
      avatar: '/images/avatar2.jpg',
    },
    {
      title: 'Ease',
      quote: '“Repayment Made Stress-Free.”',
      text: 'The flexible repayment plan matched my cash flow perfectly — paying back was easy and stress-free.',
      name: 'Kevin J.',
      role: 'Freelancer',
      avatar: '/images/avatar5.jpg',
    },
  ]

  return (
    <section className="w-[92%] sm:w-[90%] md:w-[85%] mx-auto mt-14 md:mt-20 py-10 md:py-16 bg-white rounded-3xl px-4 sm:px-6 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-[#010B07] mb-12"
      >
        Our Core Values
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {values.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-3xl shadow p-8 bg-gradient-to-tr from-[#FECCB7] to-[#D8E3E2]"
          >
            <div>
              <h3 className="text-[#052D1B] text-2xl font-bold mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-[#010B07] text-lg font-semibold mb-4 italic text-center">
                {item.quote}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed text-center">{item.text}</p>
            </div>

            <div className="mt-6 border-t border-white/30 pt-4 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#010B07]">{item.name}</p>
                <p className="text-xs text-gray-600">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
