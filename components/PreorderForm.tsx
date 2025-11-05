'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent } from './ui/card'
import { CheckCircle, Calendar, DollarSign, TrendingDown, Package } from 'lucide-react'

const benefits = [
  {
    icon: TrendingDown,
    text: "Special early-bird pricing for first 50 units",
  },
  {
    icon: Calendar,
    text: "Priority shipping - Q4 2026",
  },
  {
    icon: Package,
    text: "Free installation & comprehensive training",
  },
  {
    icon: DollarSign,
    text: "Flexible payment terms available",
  },
]

export default function PreorderForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    role: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('Pre-order form submitted:', formData)
    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', institution: '', role: '' })
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="preorder"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-background-secondary"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success-light border border-success mb-6">
              <Package className="w-4 h-4 text-success-dark" />
              <span className="text-sm font-semibold text-success-dark">
                Pre-Orders Now Open - Limited Availability
              </span>
            </div>
            <h2 className="text-display-sm lg:text-display-md text-text-primary mb-6">
              Secure Your{' '}
              <span className="text-accent-500">Early Access</span>
            </h2>
            <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              Join the waitlist to lock in special launch pricing and priority delivery. First 50 units ship Q4 2026.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left - Benefits */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                What's Included
              </h3>
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-4 ${
                      isVisible ? 'animate-slide-up' : 'opacity-0'
                    }`}
                    style={{
                      animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <p className="text-text-primary font-medium leading-relaxed">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                )
              })}

              {/* Trust Badge */}
              <Card className="bg-accent-50 border-accent-200 mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-accent-600" />
                    <span className="font-semibold text-accent-700">
                      No Payment Required
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Reserve your spot with zero commitment. Payment details collected closer to shipping date. Cancel anytime.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <Card className="shadow-soft-lg">
                <CardContent className="p-8 lg:p-10">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Dr. Jane Smith"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="jsmith@hospital.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <Label htmlFor="institution" className="mb-2 block">
                          Institution / Hospital
                        </Label>
                        <Input
                          id="institution"
                          name="institution"
                          type="text"
                          placeholder="Metropolitan Medical Center"
                          value={formData.institution}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <Label htmlFor="role" className="mb-2 block">
                          Your Role
                        </Label>
                        <Input
                          id="role"
                          name="role"
                          type="text"
                          placeholder="e.g., Interventional Radiologist, Cath Lab Manager"
                          value={formData.role}
                          onChange={handleChange}
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="pt-4">
                        <Button
                          type="submit"
                          size="xl"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Lock in Your Unit'}
                        </Button>
                      </div>

                      <p className="text-xs text-text-tertiary text-center mt-4">
                        By submitting, you agree to receive updates about MedRa. We respect your privacy and will never share your information.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-8 animate-scale-in">
                      <div className="w-20 h-20 rounded-full bg-success-light flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-success" />
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary mb-4">
                        You're on the List!
                      </h3>
                      <p className="text-text-secondary leading-relaxed max-w-md mx-auto">
                        Thank you for your interest in MedRa. We'll reach out shortly with more details about your pre-order and early access benefits.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
