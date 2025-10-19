'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function RegulatoryCommitment() {
  return (
    <section
      className="w-full py-14 md:py-20"
      style={{
        background: 'linear-gradient(to top right, #FECCB7 5%, #D8E3E2 95%)',
      }}
    >
      <div className="w-[92%] sm:w-[90%] md:w-[85%] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Regulatory Commitment
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We operate as a fully regulated Microfinance Bank under the supervision of the{' '}
            <span className="font-semibold text-gray-900">Central Bank of Nigeria (CBN)</span>.
            Your deposits are insured by the{' '}
            <span className="font-semibold text-gray-900">Nigeria Deposit Insurance Corporation (NDIC)</span>,
            and we hold a{' '}
            <span className="font-semibold text-gray-900">Lagos State Money Lending License</span>.
            <br />
            <br />
            Partner with us confidently — your financial journey is secure and protected.
          </p>

          <Link
            href="https://wa.me/2349011141113"
            className="inline-flex items-center justify-center md:justify-between bg-[#39B44A] rounded-full shadow-md px-6 py-4 w-full sm:w-[240px] mx-auto md:mx-0 text-white font-semibold hover:shadow-lg transition"
          >
            Apply for a loan
            <span className="ml-4 bg-black p-2 rounded-full">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full max-w-[380px] sm:max-w-[450px] aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/regulatory.jpg"
              alt="Regulatory Compliance Illustration"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
