'use client'

import { motion } from 'framer-motion'

export default function Problem() {
  return (
    <section
      id="problem"
      className="py-16 bg-gray-50"
    >
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          The Problem
        </h2>
        <p className="text-lg text-gray-700">
          Traditional lead vests weigh 15-25 pounds. They cause chronic back and neck injuries, yet are worn daily for hours. 60% of interventionalists report musculoskeletal pain from lead vest use.
        </p>
      </motion.div>
    </section>
  )
}
