'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function WhyChooseRhynoCredit() {
  return (
    <section
      className="w-full py-14 md:py-20"
      style={{
        background: 'linear-gradient(to top right, #FECCB7 5%, #D8E3E2 95%)',
      }}
    >
      <div className="w-[92%] sm:w-[90%] md:w-[85%] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 px-4 sm:px-6 lg:px-10">
        
        {/* Left: Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Why Choose RhynoCredit
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
            Choose RhynoCredit for a savings experience where your security and growth are our top priority. 
            As a fully licensed Microfinance Bank by the{' '}
            <span className="font-semibold text-gray-900">Central Bank of Nigeria (CBN)</span> with all deposits 
            insured by the{' '}
            <span className="font-semibold text-gray-900">Nigeria Deposit Insurance Corporation (NDIC)</span>, 
            we offer a solid foundation of <span className="font-semibold">trust and safety</span> for your funds.
            <br /><br />
            Your money doesn’t just sit idle — it grows through <span className="font-semibold">competitive interest rates</span> 
            designed to help you meet your financial goals and stay ahead of inflation. This balance of 
            security and rewarding growth gives you real <span className="font-semibold">peace of mind</span>, 
            knowing your finances are handled by a transparent and resilient institution.
          </p>

          <Link
            href="/coming-soon"
            className="inline-flex items-center justify-center md:justify-between bg-[#39B44A] rounded-full shadow-md px-6 py-4 w-full sm:w-[240px] text-center hover:shadow-lg transition duration-300 group"
          >
            <span className="text-white font-semibold tracking-wide">
              Invest Now
            </span>
            <span className="ml-4 bg-black text-white p-2 rounded-full transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full max-w-[380px] sm:max-w-[460px] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/regulatory.jpg"
              alt="Regulatory Compliance Illustration"
              fill
              className="object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.03]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
