'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#010B07] text-[#010B07] dark:text-white px-6 text-center transition-colors duration-300">
      {/* Animated 404 Number */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[8rem] sm:text-[10rem] font-bold leading-none text-[#39B44A]"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-lg sm:text-xl max-w-md text-gray-600 dark:text-gray-300 mt-4"
      >
        Looks like you’ve wandered off the path.  
        The page you’re looking for doesn’t exist or might have been moved.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-10"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-[#39B44A] dark:bg-white text-white dark:text-[#010B07] rounded-full px-6 py-3 text-sm font-medium shadow-[0_4px_8px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.08)] hover:shadow-lg transition-all"
        >
          <ArrowLeft size={18} />
          Go Back Home
        </Link>
      </motion.div>

      {/* Subtle footer note */}
      <p className="mt-10 text-xs text-gray-400 dark:text-gray-500">
        © {new Date().getFullYear()} RhynoCredit
      </p>
    </section>
  )
}
