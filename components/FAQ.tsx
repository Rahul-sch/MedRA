'use client'

import { useEffect, useRef, useState } from 'react'
import { Accordion } from './ui/accordion'
import { Card } from './ui/card'

const faqs = [
  {
    title: 'When will MedRa be available?',
    content: (
      <>
        <p>
          MedRa is currently in final development and FDA clearance review. We anticipate shipping the first production units in <strong>early 2026</strong>. Pre-order customers will receive priority placement in the fulfillment queue and will be notified 90 days prior to shipping with final delivery schedules.
        </p>
        <p className="mt-3">
          Our pilot partnership with Providence Hospital begins in Q2 2025, providing real-world validation before broader deployment.
        </p>
      </>
    ),
  },
  {
    title: 'Does it integrate with existing imaging systems?',
    content: (
      <>
        <p>
          Yes! MedRa works seamlessly with all major C-arm fluoroscopy systems and cath lab configurations from manufacturers including Siemens, Philips, GE Healthcare, and Canon Medical.
        </p>
        <p className="mt-3">
          The system operates independently and doesn&apos;t require integration with your imaging equipment. It simply provides radiation shielding—your existing workflows, software, and imaging protocols remain unchanged.
        </p>
      </>
    ),
  },
  {
    title: 'What training is required?',
    content: (
      <>
        <p>
          Every MedRa purchase includes <strong>comprehensive on-site training</strong> for your staff. Training typically requires 2-4 hours and covers system operation, safety protocols, and basic maintenance.
        </p>
        <p className="mt-3">
          Most operators become proficient within 1-2 procedures. The system is designed to be intuitive—it automatically positions itself and tracks operator movement without manual adjustments.
        </p>
        <p className="mt-3">
          We also provide online video tutorials, 24/7 technical support, and periodic refresher training as needed.
        </p>
      </>
    ),
  },
  {
    title: 'How much shielding does it provide?',
    content: (
      <>
        <p>
          Clinical studies on robotic radiation protection systems show reduction in scatter radiation exposure of <strong>up to 97%</strong> to the operator&apos;s head, neck, and torso compared to traditional lead apron protection alone.
        </p>
        <p className="mt-3">
          MedRa uses medical-grade lead-glass composite shielding (0.5mm Pb equivalent) with intelligent real-time positioning to maintain optimal barrier protection throughout the procedure—without the weight of wearable lead.
        </p>
      </>
    ),
  },
  {
    title: 'Can it move autonomously between rooms?',
    content: (
      <>
        <p>
          MedRa is designed for use within a single procedural room. The mobile base can be manually repositioned between procedures within the same lab or moved to adjacent rooms as needed.
        </p>
        <p className="mt-3">
          The autonomous navigation system operates within the designated lab space—positioning itself optimally relative to the C-arm and operator without requiring manual adjustments during procedures.
        </p>
        <p className="mt-3">
          For multi-room facilities, we recommend deploying one MedRa unit per high-volume procedural room to ensure consistent protection and availability.
        </p>
      </>
    ),
  },
]

export default function FAQ() {
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
      id="faq"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-display-sm lg:text-display-md text-text-primary mb-6">
            Frequently Asked{' '}
            <span className="text-accent-500">Questions</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            Everything you need to know about MedRa. Can&apos;t find the answer you&apos;re looking for? Reach out to our team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          className={`max-w-4xl mx-auto ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <Card className="shadow-soft-lg">
            <div className="p-6 lg:p-10">
              <Accordion items={faqs} allowMultiple={false} />
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="bg-accent-50 border border-accent-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-3">
              Still have questions?
            </h3>
            <p className="text-text-secondary mb-6">
              Our team is here to help. Schedule a personalized demo or consultation to learn how MedRa can transform radiation safety in your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@medra.example.com"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 py-3 rounded-md text-sm font-semibold bg-accent-500 text-white hover:bg-accent-600 transition-colors"
              >
                Contact Sales
              </a>
              <a
                href="#preorder"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 py-3 rounded-md text-sm font-semibold border-2 border-accent-500 text-accent-500 bg-white hover:bg-accent-50 transition-colors"
              >
                Join Pre-Order List
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
