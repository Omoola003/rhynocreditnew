'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MissionSection() {
  return (
    <section
      className="w-[92%] sm:w-[90%] md:w-[85%] mx-auto rounded-3xl px-4 sm:px-6 md:px-12 py-10 md:py-20 mt-16 md:mt-28 flex flex-col md:grid md:grid-cols-2 items-center gap-10 md:gap-16"
      style={{
        background: 'linear-gradient(to top right, #FECCB7 5%, #D8E3E2 95%)',
      }}
    >
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center md:justify-start"
      >
        <div className="rounded-3xl overflow-hidden w-full max-w-[360px] sm:max-w-[420px] aspect-square">
          <Image
            src="/images/founder.jpg"
            alt="Founder portrait"
            width={420}
            height={420}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </motion.div>

      {/* Right: Text */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="space-y-5 text-center md:text-left"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#052D1B]">
          Meet the Founder — Olatunde Davids
        </h3>

        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Olatunde Davids blends operational discipline with customer-focused
          solutions, bringing a wealth of experience from advertising,
          international client services, and structured court administration. He
          combines financial acumen, people awareness, and technical expertise to
          lead Rhyno Credit with vision and precision.
        </p>

        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          A graduate of Banking and Finance, Olatunde also holds a Master’s in
          Personnel Psychology and certifications from NIIT in Oracle 10g and Java
          Administration. His cross-disciplinary knowledge blends structure with
          creativity — vital for shaping a financial brand that understands both
          numbers and people.
        </p>

        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          His background in opportunity facilitation, compliance, and service
          delivery fuels Rhyno Credit’s mission to provide transparent,
          dependable, and easily accessible financing that helps individuals and
          small businesses grow with confidence.
        </p>
      </motion.div>
    </section>
  )
}
