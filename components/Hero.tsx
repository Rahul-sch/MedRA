'use client'

import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToPreorder = () => {
    const element = document.querySelector('#preorder')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Minimal Text */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Brand Name */}
            <h1 className="text-6xl lg:text-7xl font-bold text-accent-500 mb-4">
              MedRa
            </h1>

            {/* One-liner tagline */}
            <p className="text-lg text-black mb-8 max-w-md">
              Robotic radiation protection that replaces heavy lead vests
            </p>

            {/* CTA Button */}
            <Button
              size="xl"
              onClick={scrollToPreorder}
              className="group"
            >
              Pre-Order Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/medra-demo.mov" type="video/quicktime" />
                <source src="/videos/medra-demo.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
