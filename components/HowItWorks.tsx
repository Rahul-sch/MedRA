'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from './ui/card'
import { MapPin, ScanEye, Shield } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MapPin,
    title: 'Position',
    description: "MedRa&apos;s mobile base autonomously drives to the optimal location in your lab. No manual positioning required—it knows where to go.",
    color: 'text-accent-500',
    bgColor: 'bg-accent-100',
  },
  {
    number: '02',
    icon: ScanEye,
    title: 'Track',
    description: 'Advanced sensors continuously monitor operator movement. Dual articulated robotic arms adjust the lead-glass shield in real-time to maintain alignment.',
    color: 'text-warning',
    bgColor: 'bg-warning-light',
  },
  {
    number: '03',
    icon: Shield,
    title: 'Protect',
    description: 'The transparent lead-glass panel blocks scatter radiation while maintaining clear visibility. Full-body protection without restricting your movement.',
    color: 'text-success',
    bgColor: 'bg-success-light',
  },
]

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const currentSection = sectionRef.current
    if (!currentSection) {
      return () => {
        observer.disconnect()
      }
    }

    observer.observe(currentSection)

    return () => {
      observer.unobserve(currentSection)
    }
  }, [])

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-sm lg:text-display-md text-text-primary mb-6">
            How{' '}
            <span className="text-accent-500">MedRa Works</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            Three intelligent steps to radiation-free protection.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className={`relative ${
                    isVisible ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: isVisible ? `${index * 0.2}s` : '0s',
                  }}
                >
                  {/* Connector Line (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border via-border to-transparent -z-10"></div>
                  )}

                  <Card className="h-full hover:shadow-soft-lg transition-shadow duration-300">
                    <CardContent className="p-8">
                      {/* Step Number */}
                      <div className="text-6xl font-bold text-text-primary/10 mb-4">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-xl ${step.bgColor} flex items-center justify-center mb-6`}>
                        <Icon className={`w-8 h-8 ${step.color}`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-text-primary mb-4">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Technical Specs Callout */}
          <div
            className={`mt-16 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.6s' }}
          >
            <Card className="bg-accent-50 border-accent-200">
              <CardContent className="p-8 lg:p-10">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent-600 mb-2">
                      Lead-Glass Composite
                    </div>
                    <p className="text-sm text-text-secondary">
                      Medical-grade transparent shielding with full visibility
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-600 mb-2">
                      Real-Time Tracking
                    </div>
                    <p className="text-sm text-text-secondary">
                      Millisecond response to operator movement patterns
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-600 mb-2">
                      Mobile Base
                    </div>
                    <p className="text-sm text-text-secondary">
                      Compatible with existing lab setups and workflows
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Image Placeholder */}
          <div
            className={`mt-12 ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.8s' }}
          >
            <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-accent-100 to-accent-50 border-2 border-accent-200 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Shield className="w-24 h-24 text-accent-400 mx-auto mb-4" />
                  <p className="text-text-tertiary">
                    [3D Render or Video]
                    <br />
                    MedRa Robot in Cath Lab Environment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
