'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CoreValues() {
  const values = [
    {
      title: 'Trust',
      quote: '“Finally, a Lender I Can Trust.”',
      text: "I was hesitant about online lenders, but seeing 'CBN Licensed' on their site gave me confidence. The entire process was transparent and secure. Highly recommend.",
      name: 'Emmanuel S.',
      role: 'Port Harcourt',
      avatar: '/images/avatar3.jpg',
    },
    {
      title: 'Empowerment',
      quote: '“They Believed in My Vision When Others Didn’t.”',
      text: 'As a small business owner, getting a loan used to be a nightmare. RhynoCredit believed in my vision. Their business loan helped me stock my inventory.',
      name: 'Tunde Adebayo',
      role: "Owner of Tunde's Essentials",
      avatar: '/images/avatar2.jpg',
    },
    {
      title: 'Ease',
      quote: '“Repayment Made Stress-Free.”',
      text: 'What I love most is the flexible repayment. I could choose a plan that perfectly matched my cash flow. It made paying back the loan so easy.',
      name: 'Kevin J.',
      role: 'Freelancer',
      avatar: '/images/avatar5.jpg',
    },
  ]

  return (
    <section className="w-[90%] md:w-[85%] mx-auto mt-16 md:mt-20 py-12 px-6 md:px-12 bg-white rounded-3xl">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-[#010B07] mb-14"
      >
        Our Core Values
      </motion.h2>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {values.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-3xl shadow-[0_6px_16px_rgba(0,0,0,0.06)] p-8 flex flex-col justify-between"
            style={{
              background:
                'linear-gradient(to top right, #FECCB7 5%, #D8E3E2 95%)',
            }}
          >
            <div>
              <h3 className="text-[#052D1B] text-2xl font-extrabold mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-[#010B07] text-lg font-bold mb-4 italic">
                {item.quote}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>

            {/* Avatar + Name */}
            <div className="mt-8 border-t border-white/30 pt-4 flex items-center gap-3">
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
                <p className="text-sm font-semibold text-[#010B07]">
                  {item.name}
                </p>
                <p className="text-xs text-gray-600">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
