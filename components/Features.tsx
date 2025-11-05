'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Shield, Zap, Users, Cpu, HeartPulse, Settings, CheckCircle, Clock } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Mobile Robotic Base',
    description: 'Autonomous navigation system positions the shield exactly where needed. The compact base moves smoothly through your lab without interfering with workflow or equipment.',
    color: 'text-success',
    bgColor: 'bg-success-light',
  },
  {
    icon: Cpu,
    title: 'Dual Articulated Arms',
    description: 'Two independent robotic arms provide full range of motion and precise positioning. Adjusts shield height, angle, and distance to maintain optimal coverage as you move.',
    color: 'text-accent-500',
    bgColor: 'bg-accent-100',
  },
  {
    icon: Shield,
    title: 'Transparent Lead-Glass Shield',
    description: 'Medical-grade lead-glass composite blocks scatter radiation while maintaining complete visual clarity. See your patient and equipment clearly without compromising protection.',
    color: 'text-accent-600',
    bgColor: 'bg-accent-100',
  },
  {
    icon: Zap,
    title: 'Real-Time Position Tracking',
    description: 'Advanced sensors continuously monitor operator position and automatically adjust shield alignment. Millisecond response times ensure constant protection throughout procedures.',
    color: 'text-warning',
    bgColor: 'bg-warning-light',
  },
  {
    icon: Settings,
    title: 'Seamless Lab Integration',
    description: 'Compatible with existing C-arm systems, imaging equipment, and lab layouts. Install in hours, not days. Works with all major fluoroscopy manufacturers.',
    color: 'text-text-secondary',
    bgColor: 'bg-background-tertiary',
  },
  {
    icon: CheckCircle,
    title: 'Medical-Grade Construction',
    description: 'Built to FDA Class I medical device standards with hospital-grade materials. Designed for the demands of high-volume interventional labs.',
    color: 'text-success-dark',
    bgColor: 'bg-success-light',
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
            Meet MedRa —{' '}
            <span className="text-accent-500">Robotic Lead Shielding</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            A mobile robotic base with dual articulated arms that automatically position a transparent lead-glass shield. Full-body radiation protection without the weight.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
