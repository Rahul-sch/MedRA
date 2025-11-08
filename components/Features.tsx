'use client'

import { motion } from 'framer-motion'

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 bg-white"
    >
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          The Solution
        </h2>
        <p className="text-lg text-gray-700">
          MedRa is a mobile robotic base with dual articulated arms that hold a transparent lead-glass shield. It tracks your movement and provides full radiation protection—zero pounds on your body.
        </p>
      </motion.div>
    </section>
  )
}
