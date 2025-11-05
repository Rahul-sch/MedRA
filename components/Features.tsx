'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Shield, Zap, Users, Cpu, HeartPulse, Settings, CheckCircle, Clock } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Maximum Radiation Protection',
    description: 'Reduce scatter radiation exposure by up to 97% with our advanced lead-equivalent shielding system, protecting operators and staff from harmful ionizing radiation.',
    color: 'text-success',
    bgColor: 'bg-success-light',
  },
  {
    icon: Zap,
    title: 'Hands-Free Automated Operation',
    description: 'Robotic positioning system adjusts seamlessly to operator movements and procedure requirements. Focus on patient care, not manual shield adjustments.',
    color: 'text-accent-500',
    bgColor: 'bg-accent-100',
  },
  {
    icon: Users,
    title: 'Full-Body Staff Protection',
    description: 'Comprehensive coverage for physicians, nurses, and technologists. Ergonomic design reduces physical strain and fatigue during lengthy procedures.',
    color: 'text-warning',
    bgColor: 'bg-warning-light',
  },
  {
    icon: Cpu,
    title: 'Smart AI-Powered Tracking',
    description: 'Intelligent positioning algorithms predict operator movement patterns and automatically adjust shield placement in real-time for optimal protection.',
    color: 'text-accent-600',
    bgColor: 'bg-accent-100',
  },
  {
    icon: HeartPulse,
    title: 'Preserve Long-Term Health',
    description: 'Reduce lifetime cumulative radiation dose for medical staff. Protect against radiation-induced cataracts, thyroid disease, and malignancies.',
    color: 'text-success-dark',
    bgColor: 'bg-success-light',
  },
  {
    icon: Settings,
    title: 'Seamless Lab Integration',
    description: 'Compact footprint fits existing cath labs and fluoroscopy suites. Easy installation with minimal downtime. Compatible with all major imaging systems.',
    color: 'text-text-secondary',
    bgColor: 'bg-background-tertiary',
  },
  {
    icon: CheckCircle,
    title: 'Regulatory Compliant',
    description: 'Designed to meet FDA 510(k) and IEC 60601 medical device standards. Built with hospital-grade materials and comprehensive safety certifications.',
    color: 'text-accent-700',
    bgColor: 'bg-accent-50',
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    description: 'Quick 5-minute setup between procedures. Minimal training required. Full technical support and on-site installation assistance included with every unit.',
    color: 'text-warning-dark',
    bgColor: 'bg-warning-light',
  },
]

export default function Features() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-sm lg:text-display-md text-text-primary mb-6">
            Why MedRa is the Future of{' '}
            <span className="text-accent-500">Radiation Safety</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            Purpose-built for interventional radiology and fluoroscopy labs. Every feature designed to protect your team and enhance procedural efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className={`group hover:scale-[1.02] transition-all duration-300 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-4">
            Ready to transform your lab's radiation safety?
          </p>
          <a
            href="#preorder"
            className="text-accent-500 font-semibold hover:text-accent-600 transition-colors inline-flex items-center gap-2 group"
          >
            Reserve your MedRa unit today
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
