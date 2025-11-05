'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type AccordionItemProps = {
  title: string
  children: React.ReactNode
  isOpen?: boolean
  onToggle?: () => void
}

const AccordionItem = ({ title, children, isOpen = false, onToggle }: AccordionItemProps) => {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left font-medium text-text-primary hover:text-accent-500 transition-colors"
      >
        <span className="text-lg">{title}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 text-text-tertiary transition-transform duration-300',
            isOpen && 'rotate-180 text-accent-500'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <div className="text-text-secondary leading-relaxed pr-8">
          {children}
        </div>
      </div>
    </div>
  )
}

type AccordionProps = {
  items: Array<{
    title: string
    content: React.ReactNode
  }>
  allowMultiple?: boolean
  defaultOpenIndex?: number
}

const Accordion = ({ items, allowMultiple = false, defaultOpenIndex }: AccordionProps) => {
  const [openIndices, setOpenIndices] = React.useState<number[]>(
    defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  )

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      )
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]))
    }
  }

  return (
    <div className="divide-y divide-border">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndices.includes(index)}
          onToggle={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}

export { Accordion, AccordionItem }
