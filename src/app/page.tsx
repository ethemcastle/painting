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
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
  INSTAGRAM_URL,
  SERVICES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: {
        "@id": `${SITE_URL}/#business`,
      },
    },
    {
      "@type": "HousePainter",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      legalName: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: [
        `${SITE_URL}/projects/p1-after.jpg`,
        `${SITE_URL}/projects/p2-after.jpg`,
        `${SITE_URL}/projects/p3-after.jpg`,
      ],
      description: SITE_DESCRIPTION,
      telephone: BUSINESS_PHONE,
      email: BUSINESS_EMAIL,
      address: {
        "@type": "PostalAddress",
        ...BUSINESS_ADDRESS,
      },
      areaServed: {
        "@type": "City",
        name: "Philadelphia",
        containedInPlace: {
          "@type": "State",
          name: "Pennsylvania",
        },
      },
      sameAs: [INSTAGRAM_URL],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Painting and home improvement services",
        itemListElement: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service,
            areaServed: "Philadelphia, PA",
          },
        })),
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
