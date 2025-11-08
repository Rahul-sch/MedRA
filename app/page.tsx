import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import PreorderForm from '@/components/PreorderForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <PreorderForm />
      <Footer />
    </main>
  )
}
