'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from './ui/card'
import { AlertTriangle, Activity, Briefcase } from 'lucide-react'

export default function Problem() {
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
      id="problem"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-background-secondary"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-sm lg:text-display-md text-text-primary mb-6">
            The Hidden Cost of{' '}
            <span className="text-accent-500">Radiation Protection</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            Every day, interventional radiologists and cath lab staff face an impossible choice: protect themselves from radiation or protect their bodies from chronic pain.
          </p>
        </div>

        {/* Main Problem Statement */}
        <div className="max-w-4xl mx-auto mb-12">
          <div
            className={`bg-white rounded-2xl p-8 lg:p-12 shadow-soft-lg ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <p className="text-xl lg:text-2xl text-text-primary leading-relaxed mb-6">
              Traditional lead vests weigh <strong>15–25 pounds</strong> and are worn for hours every day. While they offer essential radiation protection, they come at a devastating cost: chronic back, neck, and joint pain that shortens medical careers and reduces quality of life.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              The current standard of protection is outdated—forcing clinicians to choose between their safety and their health. Meanwhile, radiation exposure remains a constant threat, with cumulative doses increasing year after year.
            </p>
          </div>
        </div>

        {/* Statistics Callout */}
        <div
          className={`max-w-5xl mx-auto mb-12 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          <Card className="bg-destructive/5 border-destructive/20">
            <CardContent className="p-8 lg:p-10">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-destructive mb-3">
                    60%
                  </div>
                  <p className="text-lg text-text-primary font-semibold mb-2">
                    of interventionalists report back or neck injury related to lead vest use
                  </p>
                  <p className="text-text-secondary">
                    Source: Occupational Health Study of Interventional Radiologists, Journal of Vascular and Interventional Radiology
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            className={`${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  Physical Burden
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Wearing 15-25 lb lead vests for hours daily causes chronic musculoskeletal injuries, forcing many specialists to retire early or reduce procedural volume.
                </p>
              </CardContent>
            </Card>
          </div>

          <div
            className={`${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-warning-light flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-warning-dark" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  Radiation Exposure
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Despite wearing lead, clinicians still face cumulative radiation exposure to eyes, extremities, and poorly covered areas—increasing long-term health risks.
                </p>
              </CardContent>
            </Card>
          </div>

          <div
            className={`${
              isVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-success-light flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-success-dark" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  Outdated Standard
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Traditional shielding hasn't evolved with modern imaging technology. Mobile C-arms and complex procedures demand better protection solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Transition to Solution */}
        <div className="text-center mt-16">
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            It's time for a new standard—one that protects both from radiation <em>and</em> from physical injury.
          </p>
        </div>
      </div>
    </section>
  )
}
