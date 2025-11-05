'use client'

import { Button } from './ui/button'
import { ArrowRight, Shield, Zap, Users } from 'lucide-react'

export default function Hero() {
  const scrollToPreorder = () => {
    const element = document.querySelector('#preorder')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-background via-background-secondary to-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-50 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 border border-accent-200 mb-6">
              <Shield className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-semibold text-accent-700">
                Next-Generation Radiation Protection
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-display-md lg:text-display-lg text-text-primary mb-6 leading-tight">
              The Future of Radiation Protection{' '}
              <span className="text-accent-500">Has Arrived</span>
            </h1>

            {/* Sub-heading */}
            <p className="text-xl lg:text-2xl text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              MedRa replaces heavy lead vests with an intelligent robotic shield that protects your team—without the pain.
            </p>

            {/* Key Benefits - Quick Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-success-light flex items-center justify-center">
                  <Shield className="w-5 h-5 text-success-dark" />
                </div>
                <span className="text-sm font-medium text-text-secondary">
                  No Heavy Lead Vests
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-accent-600" />
                </div>
                <span className="text-sm font-medium text-text-secondary">
                  Autonomous Positioning
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-warning-light flex items-center justify-center">
                  <Users className="w-5 h-5 text-warning-dark" />
                </div>
                <span className="text-sm font-medium text-text-secondary">
                  Dual Robotic Arms
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="xl"
                onClick={scrollToPreorder}
                className="group"
              >
                Join the Pre-Order List
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="xl"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector('#problem')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Learn More
              </Button>
            </div>

            {/* FDA Badge */}
            <p className="text-sm text-text-tertiary mt-6">
              Class I FDA Clearance in progress · Early access for 2026 deployments
            </p>

            {/* Trust Badge */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm text-text-tertiary mb-3">
                Pilot partnership with Providence Hospital
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-8 opacity-60">
                {/* Placeholder for hospital/institution logos */}
                <div className="h-8 w-24 bg-text-tertiary/10 rounded"></div>
                <div className="h-8 w-24 bg-text-tertiary/10 rounded"></div>
                <div className="h-8 w-24 bg-text-tertiary/10 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-slide-up lg:animate-fade-in">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl bg-gradient-to-br from-accent-100 to-accent-50 border-2 border-accent-200 shadow-2xl overflow-hidden">
              {/* Placeholder for product image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Shield className="w-32 h-32 text-accent-400 mx-auto mb-4" />
                  <p className="text-text-tertiary text-sm">
                    [Product Hero Image]
                    <br />
                    MedRa System in Lab Environment
                  </p>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute top-8 left-8 bg-white rounded-lg shadow-soft-lg p-4 animate-scale-in">
                <div className="text-2xl font-bold text-accent-500">0 lbs</div>
                <div className="text-xs text-text-secondary">Lead Vest Weight</div>
              </div>

              <div className="absolute bottom-8 right-8 bg-white rounded-lg shadow-soft-lg p-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-2xl font-bold text-success">100%</div>
                <div className="text-xs text-text-secondary">Mobility Freedom</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
