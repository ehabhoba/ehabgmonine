import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
 

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
