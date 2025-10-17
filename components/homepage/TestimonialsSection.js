'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

export default function TestimonialsSection() {
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  const testimonials = [
    {
      quote: 'A Lifesaver in My Moment of Need',
      text: `I needed a quick loan for a family emergency. RhynoCredit's process was incredibly fast. I applied in the morning and had the funds by afternoon. A lifesaver!`,
      name: 'Chiamaka O.',
      role: 'Lagos',
      avatar: '/images/avatar1.jpg',
    },
    {
      quote: 'They Believed in My Vision When Others Didn’t',
      text: `As a small business owner, getting a loan used to be a nightmare. RhynoCredit believed in my vision and helped me stock my inventory.`,
      name: 'Tunde Adebayo',
      role: "Owner of Tunde's Essentials",
      avatar: '/images/avatar2.jpg',
    },
    {
      quote: 'Finally, a Lender I Can Trust.',
      text: `I was hesitant about online lenders, but seeing “CBN Licensed” on their site gave me confidence. The entire process was transparent and secure.`,
      name: 'Emmanuel S.',
      role: 'Port Harcourt',
      avatar: '/images/avatar3.jpg',
    },
    {
      quote: 'Customer Service That Actually Cares.',
      text: `I had a question about my repayment schedule. The support team was so patient and friendly, walking me through everything.`,
      name: 'Aisha B.',
      role: 'Abuja',
      avatar: '/images/avatar4.jpg',
    },
    {
      quote: 'Repayment Made Stress-Free.',
      text: `What I love most is the flexible repayment. I could choose a plan that perfectly matched my cash flow.`,
      name: 'Kelvin J.',
      role: 'Freelancer',
      avatar: '/images/avatar5.jpg',
    },
  ]

  // enable click-drag scroll
  const handleMouseDown = (e) => {
    setIsDragging(true)
    scrollRef.current.startX = e.pageX - scrollRef.current.offsetLeft
    scrollRef.current.scrollLeftStart = scrollRef.current.scrollLeft
  }

  const handleMouseLeave = () => setIsDragging(false)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - scrollRef.current.startX) * 1.3
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeftStart - walk
  }

  return (
    <section
      className="w-[90%] md:w-[85%] mx-auto rounded-3xl px-6 md:px-12 py-20 mt-20 md:mt-28 mb-12 select-none"
      style={{
        background: 'linear-gradient(to top right, #FECCB7 5%, #D8E3E2 95%)',
      }}
    >
      <div className="mb-10 md:mb-14 text-left space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-[#052D1B] leading-snug">
          You’re in <br /> good hands
        </h2>
      </div>

      {/* smooth horizontal scrollable area */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth cursor-grab ${
          isDragging ? 'cursor-grabbing' : ''
        } hide-scrollbar`}
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] h-[380px] bg-white rounded-3xl shadow-[0_6px_16px_rgba(0,0,0,0.08)] p-6 flex flex-col justify-between snap-center"
          >
            <div>
              <h3 className="text-lg font-semibold text-[#052D1B] mb-3 leading-snug">
                “{item.quote}”
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
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
                <p className="text-[#010B07] font-semibold text-sm">
                  {item.name}
                </p>
                <p className="text-gray-500 text-xs">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
