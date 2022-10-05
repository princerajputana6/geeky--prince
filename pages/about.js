import React from "react";
import Header from "../components/navbar";
import Teams from "../components/About/teams";
import Services from "../components/About/services";
import Footer from "../components/footer";

export default function about() {
  return (
    <div>
      <Header />
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            About Us
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Enroll with Digital Business Team. We provide strategic expertise
            where it matters most
          </p>
        </div>
        <div class="relative overflow-hidden bg-white dark:bg-gray-900">
          <div class="mx-auto max-w-7xl">
            <div class="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
              <svg
                class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <main class="mx-auto  max-w-7xl px-4  sm:px-6   lg:px-8 ">
                <div class="sm:text-center lg:text-left">
                  <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    <span class="block xl:inline ">About </span>
                    <br />
                    <span class="block text-indigo-600 xl:inline underline pb-4">
                      Geeky Prince
                    </span>
                  </h1>
                  <p class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                    Geeky Prince Pvt. Ltd. is an IT Solution Provider,
                    supporting small businesses and start-ups from the very
                    beginning, till increasing revenue and expanding business.
                    We provide services in Website building, managing companies
                    portfolio and their Tech stacks.
                  </p>
                  <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div class="rounded-md shadow">
                      <a
                        href="#"
                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                      >
                        Get Free consultation
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
        </div>
        <br />
        <Services />
        <br />
        <Teams />
        <Footer />
      </section>
    </div>
  );
}
