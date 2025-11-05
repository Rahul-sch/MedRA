import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import SocialProof from '@/components/SocialProof'
import PreorderForm from '@/components/PreorderForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <SocialProof />
      <PreorderForm />
      <FAQ />
      <Footer />
    </main>
  )
}
