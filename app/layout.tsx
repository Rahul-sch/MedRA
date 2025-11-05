import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'MedRa - Robotic Lead Shield System | Pre-Order Now',
  description: 'Revolutionary robotic lead shield system for interventional radiology and fluoroscopy labs. Protect your team with automated, full-body radiation protection. Pre-orders now open.',
  keywords: 'radiation protection, interventional radiology, lead shield, robotic shield, fluoroscopy, cath lab safety, medical device',
  authors: [{ name: 'MedRa' }],
  openGraph: {
    title: 'MedRa - Robotic Lead Shield System',
    description: 'Protect your team with automated, full-body radiation protection. Pre-orders now open.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
