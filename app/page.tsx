import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import ClinicalImpact from '@/components/ClinicalImpact'
import SocialProof from '@/components/SocialProof'
import PreorderForm from '@/components/PreorderForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <ClinicalImpact />
      <SocialProof />
      <PreorderForm />
      <FAQ />
      <Footer />
    </main>
  )
}
