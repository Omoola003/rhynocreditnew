'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function RegulatoryCommitment() {
  return (
    <section
      className="w-full py-20"
      style={{
        background: 'linear-gradient(to top right, #FECCB7 5%, #D8E3E2 95%)',
      }}
    >
      <div className="w-[90%] md:w-[85%] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Regulatory Commitment
          </h2>

          <p className="text-gray-700 text-lg mb-10 leading-relaxed">
            We operate as a fully regulated Microfinance Bank under the supervision of the{' '}
            <span className="font-semibold text-gray-900">Central Bank of Nigeria (CBN)</span>. Your
            deposits are insured by the{' '}
            <span className="font-semibold text-gray-900">
              Nigeria Deposit Insurance Corporation (NDIC)
            </span>
            , and we hold a{' '}
            <span className="font-semibold text-gray-900">Lagos State Money Lending License</span>.
            <br />
            <br />
            This means you can partner with us with absolute confidence, knowing your financial
            journey is secure and protected.
          </p>

          <Link
            href="https://wa.me/2349011141113"
            className="inline-flex items-center justify-items-stretch bg-[#39B44A] rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] px-8 py-4 w-[260px] hover:shadow-lg transition duration-300 group"
          >
            <span className="text-white font-semibold tracking-wide justify-end">
              Apply for a loan
            </span>
            <span className="ml-8 bg-black text-white p-2 rounded-full transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </motion.div>

        {/* Right: Image */}
        <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        >
        <div className="w-[500px] h-[600px] relative">
            <Image
            src="/images/regulatory.jpg"
            alt="Regulatory Compliance Illustration"
            fill
            className="rounded-xl shadow-lg object-cover"
            />
        </div>
        </motion.div>
      </div>
    </section>
  );
}
