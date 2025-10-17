'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FAQCTA() {
  return (
    <section
      className="w-[90%] md:w-[85%] mx-auto bg-white mt-15 mb-15 py-24 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)]"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* Left: Text + CTAs */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Have anymore Questions?
          </h2>

          <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
            We&apos;re here to help! If you have any further questions or need assistance, don&apos;t hesitate to reach out to our friendly team.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center md:items-center gap-6 md:gap-8">
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-between bg-[#39B44A] rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] px-8 py-4 w-[260px] hover:shadow-lg transition-all duration-300 group"
            >
              <span className="text-white font-semibold tracking-wide">
                Contact Us
              </span>
              <span className="ml-6 bg-black text-white p-2 rounded-full transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative w-[480px] h-[520px]">
            <Image
              src="/images/success-story.jpg"
              alt="Customer celebrating loan success"
              fill
              className="rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
