'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from './ui/card'
import { HeartPulse, TrendingUp, Users, Award } from 'lucide-react'

const impacts = [
  {
    icon: HeartPulse,
    title: 'Reduce Operator Fatigue',
    description: 'Eliminate the physical burden of 15-25 lb lead vests. Surgeons and staff work comfortably without chronic back, neck, and joint pain.',
  },
  {
    icon: TrendingUp,
    title: 'Improve Procedural Throughput',
    description: 'Faster setup and positioning means more efficient workflows. Staff can maintain peak performance throughout long procedural days.',
  },
  {
    icon: Users,
    title: 'Enable Safer Long Careers',
    description: 'By removing musculoskeletal strain and reducing radiation exposure, MedRa helps interventionalists practice safely for decades—not just years.',
  },
]

export default function ClinicalImpact() {
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
      id="clinical-impact"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-background-secondary to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-sm lg:text-display-md text-text-primary mb-6">
            Protect People,{' '}
            <span className="text-accent-500">Extend Careers</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            By removing the physical burden of lead, MedRa prevents chronic musculoskeletal injuries, reduces radiation exposure, and enhances workflow safety.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <div
                key={index}
                className={`${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 0.15}s` : '0s',
                }}
              >
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-accent-100 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-accent-600" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">
                      {impact.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {impact.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Main Value Proposition */}
        <div
          className={`max-w-4xl mx-auto ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <Card className="bg-success-light/30 border-success">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-success flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    The Clinical Difference
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-4">
                    MedRa isn't just about radiation safety—it's about career sustainability. Interventional radiologists, cardiologists, and electrophysiologists can perform at their best without sacrificing their bodies.
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    Every procedure protected by MedRa is a step toward a healthier, longer career in interventional medicine.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics Row */}
        <div
          className={`mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.7s' }}
        >
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-accent-500 mb-2">
              0 lbs
            </div>
            <p className="text-text-secondary font-medium">
              Lead vest weight to carry
            </p>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-accent-500 mb-2">
              100%
            </div>
            <p className="text-text-secondary font-medium">
              Mobility and comfort
            </p>
          </div>
          <div>
            <div className="text-4xl lg:text-5xl font-bold text-accent-500 mb-2">
              Decades
            </div>
            <p className="text-text-secondary font-medium">
              Extended career potential
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
