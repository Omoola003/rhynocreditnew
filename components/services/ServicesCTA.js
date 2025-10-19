'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesCTA() {
  return (
    <section
      className="w-[92%] sm:w-[90%] md:w-[85%] mx-auto bg-white mt-12 md:mt-20 mb-12 md:mb-20 py-14 md:py-24 rounded-3xl shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 px-4 sm:px-6 lg:px-10">
        
        {/* Left: Text + CTA */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Open your account today and gain access to financial empowerment
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
            Join thousands of Nigerians already enjoying smarter, faster, and more transparent financial services tailored for their growth.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 sm:gap-8">
            <Link
              href="/apply"
              className="inline-flex items-center justify-between bg-[#39B44A] rounded-full shadow-md px-6 py-4 w-full sm:w-[240px] text-center hover:shadow-lg transition-all duration-300 group"
            >
              <span className="text-white font-semibold tracking-wide">
                Apply for a loan
              </span>
              <span className="ml-5 bg-black text-white p-2 rounded-full transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-[380px] sm:max-w-[460px] aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/services-cta.jpg"
              alt="Customer celebrating loan success"
              fill
              className="object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
