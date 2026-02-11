import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { Audience } from "@/components/audience"
import { Packages } from "@/components/packages"
import { CaseStudy } from "@/components/case-study"
import { Technology } from "@/components/technology"
import { Integrations } from "@/components/integrations"
import { AboutMe } from "@/components/about-me"
import { OrderForm } from "@/components/order-form"
import { FAQ } from "@/components/faq"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Audience />
      <Packages />
      <CaseStudy />
      <Technology />
      <Integrations />
      <AboutMe />
      <OrderForm />
      <FAQ />
      <Footer />
    </div>
  )
}
