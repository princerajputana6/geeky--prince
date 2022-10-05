import React from "react";
import Header from "../components/navbar";
import Footer from "../components/footer";
import Service from "../components/Services/Service";
import WhyChoose from "../components/Services/WhyChoose";

export default function Services() {
  return (
    <div>
      <Header />
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Services
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Enroll with Digital Business Team. We provide strategic expertise
            where it matters most.
          </p>
        </div>
        <WhyChoose />
        <Service />
      </section>
      <Footer />
    </div>
  );
}
