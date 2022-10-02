import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import dynamic from "next/dynamic";

const Video = dynamic(() => import("../components/video"));

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
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
