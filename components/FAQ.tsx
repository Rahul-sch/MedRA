'use client'

import { useEffect, useRef, useState } from 'react'
import { Accordion } from './ui/accordion'
import { Card } from './ui/card'

const faqs = [
  {
    title: 'When will MedRa units be available for delivery?',
    content: (
      <>
        <p>
          MedRa is currently in final development and regulatory review. We anticipate shipping the first production units in <strong>Q4 2026</strong>. Pre-order customers will receive priority placement in the fulfillment queue and will be notified 90 days prior to shipping with final delivery schedules.
        </p>
      </>
    ),
  },
  {
    title: 'What regulatory clearances does MedRa have?',
    content: (
      <>
        <p>
          MedRa is being designed to meet FDA 510(k) medical device requirements and IEC 60601 electrical safety standards for medical equipment. Our submission is currently under review. All units will ship with appropriate regulatory clearances for use in clinical settings. We are also pursuing CE marking for international markets.
        </p>
      </>
    ),
  },
  {
    title: 'What is the installation footprint and space requirements?',
    content: (
      <>
        <p>
          MedRa has a compact footprint of approximately <strong>4 feet × 4 feet (120cm × 120cm)</strong> at the base, with a vertical reach of up to 7 feet. The system is designed to integrate seamlessly into existing cath labs and interventional suites without requiring major infrastructure modifications.
        </p>
        <p className="mt-3">
          Standard ceiling height of 9-10 feet is recommended. Our installation team will conduct a pre-installation site survey to ensure compatibility with your facility layout.
        </p>
      </>
    ),
  },
  {
    title: 'Is training included? How long does it take to learn?',
    content: (
      <>
        <p>
          Yes! Every MedRa purchase includes <strong>comprehensive on-site training</strong> for your staff. Training typically requires 2-4 hours and covers:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>System operation and positioning controls</li>
          <li>Safety protocols and emergency procedures</li>
          <li>Maintenance and daily care</li>
          <li>Troubleshooting common issues</li>
        </ul>
        <p className="mt-3">
          Most operators become proficient within 1-2 procedures. We also provide online video tutorials and 24/7 technical support.
        </p>
      </>
    ),
  },
  {
    title: 'How much radiation protection does MedRa provide?',
    content: (
      <>
        <p>
          Clinical studies on robotic radiation protection systems show reduction in scatter radiation exposure of <strong>up to 97%</strong> to the operator's head, neck, and torso compared to traditional lead apron protection alone.
        </p>
        <p className="mt-3">
          MedRa uses lead-equivalent shielding materials (0.5mm Pb equivalent) and intelligent positioning to maintain optimal barrier protection throughout the procedure, significantly reducing lifetime cumulative radiation dose for interventional staff.
        </p>
      </>
    ),
  },
  {
    title: 'What payment options are available?',
    content: (
      <>
        <p>
          We offer flexible payment options for healthcare institutions:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Standard purchase with net-30 payment terms</li>
          <li>Multi-year equipment financing (24, 36, 48 month terms)</li>
          <li>Lease-to-own programs</li>
          <li>Institutional purchase orders accepted</li>
        </ul>
        <p className="mt-3">
          Pre-order customers will receive detailed pricing and payment information 120 days prior to shipping. Early-bird pricing is available for the first 50 units.
        </p>
      </>
    ),
  },
  {
    title: 'Is MedRa compatible with our existing imaging equipment?',
    content: (
      <>
        <p>
          Yes! MedRa is designed as a universal solution compatible with all major C-arm fluoroscopy systems and cath lab configurations from manufacturers including Siemens, Philips, GE Healthcare, and Canon Medical.
        </p>
        <p className="mt-3">
          The system operates independently and does not require integration with your imaging equipment. Our pre-installation survey will confirm compatibility with your specific lab setup.
        </p>
      </>
    ),
  },
  {
    title: 'What kind of maintenance does MedRa require?',
    content: (
      <>
        <p>
          MedRa is designed for minimal maintenance. Routine care includes:
        </p>
        <ul className="list-disc ml-6 mt-3 space-y-2">
          <li>Daily cleaning with hospital-grade disinfectant wipes</li>
          <li>Weekly visual inspection of shielding integrity</li>
          <li>Quarterly preventive maintenance (can be performed by facility biomedical engineering or MedRa service)</li>
        </ul>
        <p className="mt-3">
          All units include a 2-year warranty covering parts and labor. Extended service contracts are available. Average uptime exceeds 99%.
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
            Everything you need to know about MedRa. Can't find the answer you're looking for? Reach out to our team.
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
