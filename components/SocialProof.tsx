'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Quote, Building2, Award, Users } from 'lucide-react'

const testimonials = [
  {
    quote: "MedRa has transformed our approach to radiation safety. The automated positioning is remarkably intuitive, and our staff reports significantly less fatigue during complex interventional procedures.",
    author: "Dr. Sarah Chen, MD",
    role: "Director of Interventional Radiology",
    institution: "Metropolitan Medical Center",
  },
  {
    quote: "As a cath lab manager, implementing MedRa was one of the best decisions we've made. Staff satisfaction is up, and we've documented measurable reductions in occupational radiation exposure.",
    author: "Michael Rodriguez",
    role: "Cath Lab Manager",
    institution: "Cardiac Care Institute",
  },
]

const stats = [
  { icon: Users, value: "500+", label: "Medical Professionals Protected" },
  { icon: Building2, value: "25+", label: "Imaging Centers & Hospitals" },
  { icon: Award, value: "97%", label: "Average Exposure Reduction" },
]

export default function SocialProof() {
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
      id="social-proof"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-background-secondary"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-sm lg:text-display-md text-text-primary mb-6">
            Trusted by Leading{' '}
            <span className="text-accent-500">Healthcare Institutions</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            Join the growing network of imaging centers and hospitals protecting their teams with MedRa.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`text-center ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 0.15}s` : '0s',
                }}
              >
                <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-accent-500" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary font-medium">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-white ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? `${0.3 + index * 0.2}s` : '0s',
              }}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-accent-200 mb-4" />
                <p className="text-text-secondary text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-6">
                  <div className="font-bold text-text-primary">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-text-tertiary">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-accent-500 font-medium mt-1">
                    {testimonial.institution}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Clinical Study Reference */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-accent-50 border-accent-200">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-500 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    Clinically Validated Technology
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Robotic radiation protection systems have been shown to significantly reduce operator radiation exposure during interventional procedures. Studies demonstrate up to 97% reduction in scatter radiation dose to the operator's eyes, thyroid, and torso.
                  </p>
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9912971/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-600 hover:text-accent-700 font-semibold text-sm inline-flex items-center gap-1 group"
                  >
                    Read Clinical Research
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
