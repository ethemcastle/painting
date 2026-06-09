import { SiteHeader } from "@/components/site-header";
import {
  BeforeAfterSection,
  ColorShowcase,
  Contact,
  CtaBand,
  Gallery,
  Hero,
  LogoMarquee,
  Process,
  Services,
  SiteFooter,
  StatsBand,
  Testimonials,
  WhyUs,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <LogoMarquee />
        <StatsBand />
        <Services />
        <WhyUs />
        <Process />
        <BeforeAfterSection />
        <Gallery />
        <ColorShowcase />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
