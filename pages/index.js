import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import dynamic from "next/dynamic";

const Benefits = dynamic(() => import("../components/benefits"));
const Footer = dynamic(() => import("../components/footer"));
const Testimonials = dynamic(() => import("../components/testimonials"));
const Cta = dynamic(() => import("../components/cta"));
const Faq = dynamic(() => import("../components/faq"));

const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Geeky Prince</title>
        <meta
          name="description"
          content="Geeky Prince Pvt. Ltd. is a Software Development company who help other companies to grow digitally."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Geeky Prince Benefits"
        title="Why you should Choose Geeky Prince?"
      >
        We offer the best destination for startup businesses to stand up
        powerfully in the Global economic market.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      ></SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Geeky Prince gonna clear all your doubt with this FAQ
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
