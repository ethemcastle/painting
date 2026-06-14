import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import {
  Cta,
  FooterWordmark,
  Process,
  Projects,
  Promises,
  Services,
  SiteFooter,
  Stats,
  Testimonials,
} from "@/components/sections";
import { SiteHeader } from "@/components/site-header";
import { SwatchTray } from "@/components/swatch-tray";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <SwatchTray />
        <Marquee />
        <Stats />
        <Promises />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
        <Cta />
        <FooterWordmark />
      </main>
      <SiteFooter />
    </>
  );
}
