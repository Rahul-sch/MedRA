'use client'

import { motion } from 'framer-motion'

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
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
          How It Works
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          MedRa autonomously positions itself in your lab, tracks your movement with sensors, and adjusts the transparent lead-glass shield in real-time. Constant protection, zero weight.
        </p>
      </motion.div>
    </section>
  )
}
