'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const loanProducts = [
  {
    title: 'Personal Loan',
    description:
      "Manage life's surprises and opportunities with a loan that fits your personal needs.",
    features: [
      'For Emergencies, Education, or Events',
      'Fast Disbursement',
      'No Collateral Required*',
    ],
    image: '/images/personal-loan.jpg',
    button: 'Apply Now',
  },
  {
    title: 'Business Loan',
    description:
      'Fuel your enterprise’s growth with capital for expansion, inventory, or equipment.',
    features: [
      'Tailored for SMEs and Startups',
      'Competitive Interest Rates',
      'Flexible Repayment Plans',
    ],
    image: '/images/business-loan.jpg',
    button: 'Fuel your Business',
  },
  {
    title: 'Mortgage/Home Loan',
    description:
      'Unlock the door to your own home. We make property ownership achievable.',
    features: ['Long-Term Repayment Tenure', 'Transparent Fee Structure'],
    image: '/images/auto-loan.jpg',
    button: 'Own your Home',
  },
  {
    title: 'Automobile Loan',
    description:
      'Get behind the wheel of your dream car or essential vehicle with our flexible auto financing.',
    features: [
      'New and Used Car Financing',
      'Quick Approval Process',
      'Affordable Down Payments',
    ],
    image: '/images/mortgage-loan.jpg',
    button: 'Finance your Vehicle',
  },
  {
    title: 'Gadget Loan',
    description:
      'Stay connected and productive. Upgrade your tech gadgets without straining your budget.',
    features: [
      'For Phones, Laptops, and Tablets',
      'Short-Term, Easy Repayment',
      'Minimal Documentation',
    ],
    image: '/images/gadget-loan.jpg',
    button: 'Upgrade your Tech',
  },
]

export default function LoanProducts() {
  return (
    <section className="relative py-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D8E3E2] to-[#FECCB7] -z-10" />

      <div className="w-[90%] md:w-[85%] mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#010B07] text-left mb-12"
        >
          Our Loan Products
        </motion.h2>

        {/* Scrollable Cards */}
        <div id="#services" className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 hide-scrollbar">
          {loanProducts.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="snap-start flex-shrink-0 basis-[calc(33.333%-1rem)] md:basis-[calc(33.333%-1rem)] lg:basis-[calc(30%-1rem)] min-w-[280px] bg-white rounded-3xl shadow-md hover:shadow-lg transition p-5"
            >
              {/* Image */}
              <div className="flex justify-center mb-4">
                <div className="relative w-[80%] aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#010B07]">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div>
                  <h4 className="text-[#39B44A] font-semibold mb-1 text-sm">
                    Key Features:
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside ml-2">
                    {product.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href="https://wa.me/2349011141113"
                  className="mt-3 inline-flex items-center justify-between bg-black text-white rounded-full px-4 py-2 w-full transition hover:bg-[#39B44A]"
                >
                  <span className="font-medium text-sm">{product.button}</span>
                  <span className="ml-3 bg-[#39B44A] text-white p-2 rounded-full">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar CSS */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;     /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;             /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  )
}
