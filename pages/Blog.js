import React from "react";
import Header from "../components/navbar";
import Footer from "../components/footer";
import BlogHero from "../components/Blog/Hero";
import Blogs from "../components/Blog/Blogs";

export default function Blog() {
  return (
    <div>
      <Header />
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Blogs
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Enroll with Digital Business Team. We provide strategic expertise
            where it matters most.
          </p>
        </div>
        <BlogHero />
        <Blogs />
      </section>
      <Footer />
    </div>
  );
}
