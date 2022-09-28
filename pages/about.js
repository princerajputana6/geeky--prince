import React from "react";

export default function about() {
  return (
    <div>
      <section id="about" class="relative pt-20 about-area">
        <div class="container">
          <div class="row">
            <div class="w-full lg:w-1/2">
              <div
                class="mx-4 mt-12 about-content wow fadeInLeftBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div class="mb-4 section-title">
                  <div class="line"></div>
                  <h3 class="title">
                    Quick & Easy <span>to Use Tailwind Template</span>
                  </h3>
                </div>
                <p class="mb-8">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing.
                </p>
                <a href="javascript:void(0)" class="main-btn gradient-btn">
                  Try it Free
                </a>
              </div>
            </div>
            <div class="w-full lg:w-1/2">
              <div
                class="mx-4 mt-12 text-center about-image wow fadeInRightBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <img src="/img/about1.svg" alt="about" />
              </div>
            </div>
          </div>
        </div>
        <img src="/img/about-shape-1.svg" alt="shape" />
      </section>
    </div>
  );
}
