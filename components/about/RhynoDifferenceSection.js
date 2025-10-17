'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RhynoDifferenceSection() {
  const features = [
    {
      title: 'We Listen',
      description:
        'We design our loan products around the real, evolving needs of Nigerians.',
      image: '/images/listen.jpg',
    },
    {
      title: 'We Educate',
      description:
        'We go beyond transactions by providing financial literacy resources to help you make informed decisions.',
      image: '/images/educate.jpg',
    },
    {
      title: 'We Simplify',
      description:
        'We’ve cut the bureaucracy to offer a fast, digital-first experience that respects your time.',
      image: '/images/simplify.jpg',
    },
    {
      title: 'We Protect',
      description:
        'Your security and data privacy are paramount. We operate under the strict guidelines of the Central Bank of Nigeria.',
      image: '/images/protect.jpg',
    },
  ];

  return (
    <section className="w-full py-12 px-6 md:px-12">
      {/* Section Heading - no background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-[#39B44A] mb-2">
          What Makes Us Different?
        </h2>
        <p className="text-lg text-gray-700 dark:text-white font-medium">
          The RhynoCredit Difference
        </p>
      </div>

    {/* Features Section with Angled Gradient Background */}
    <div className="w-[90%] md:w-[85%] mx-auto bg-gradient-to-br from-white via-[#ECEEF2] to-[#E9EBEF] py-16 rounded-3xl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {features.map((feature, index) => (
        <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } gap-8`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
            <Image
                src={feature.image}
                alt={feature.title}
                className="rounded-lg shadow-lg"
                width={400}
                height={400}
                objectFit="cover"
            />
            </div>

            {/* Text */}
            <div className="md:w-3/4 text-center md:text-left ml-0 md:ml-14 mr-0 md:mr-28">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
            <p className="text-gray-700 text-lg">{feature.description}</p>
            </div>
        </motion.div>
        ))}
    </div>
    </div>
    </section>
  );
}
