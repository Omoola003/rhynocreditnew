'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export default function AudienceSection() {
  const audiences = [
    {
      title: 'For <br /> Startups',
      description:
        'Empowering early-stage founders with the right funding solutions to launch, scale, and thrive.',
      image: '/images/startup-team.jpg',
      icon: <ArrowUpRight size={20} />,
    },
    {
      title: 'For Small <br /> Businesses',
      description:
        'Flexible loan options that help small businesses expand operations, hire talent, and grow sustainably.',
      image: '/images/sme-meeting.jpg',
      icon: <ArrowUpRight size={20} />,
    },
    {
      title: 'For <br /> Individuals',
      description:
        'Access quick, secure, and affordable personal loans tailored to your unique financial needs.',
      image: '/images/individual-loan.jpg',
      icon: <ArrowUpRight size={20} />,
    },
  ]

  return (
    <section className="w-[90%] md:w-[85%] mx-auto mt-20 md:mt-28 text-center text-[#010B07] dark:text-white transition-colors duration-300">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-4 mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#052D1B] dark:text-[#39B44A]">
          Our services are designed for everyone
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Whether you’re just starting, growing, or managing personal goals — Rhyno
          Credit has a financing solution that fits you.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {audiences.map((audience, index) => (
          <motion.div
            key={audience.title}
            initial={{
              opacity: 0,
              y: index === 1 ? -10 : 20,
              scale: index === 1 ? 1.05 : 1,
            }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: 'spring',
              stiffness: 200,
            }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,0.08)] dark:shadow-[0_6px_16px_rgba(255,255,255,0.08)] group cursor-pointer bg-[#f9faf9] dark:bg-[#0d0d0d] transition-all duration-300"
          >
            {/* Background Image */}
            <Image
              src={audience.image}
              alt={audience.title}
              width={500}
              height={400}
              className="object-cover w-full h-[360px] transition-transform duration-500 group-hover:scale-105 opacity-95 dark:opacity-90"
            />

            {/* Blurred Bottom Overlay */}
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-lg bg-white/25 dark:bg-black/40 p-6 flex items-center justify-between">
              <div className="text-left">
                <h3
                  className="text-lg md:text-xl font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] leading-snug"
                  dangerouslySetInnerHTML={{ __html: audience.title }}
                />
              </div>

              <div className="bg-[#39B44A] dark:bg-[#2EA142] p-3 rounded-full text-white shadow-md transition-transform duration-300 group-hover:rotate-45">
                {audience.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
