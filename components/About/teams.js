import React from "react";

export default function teams() {
  const teams = [
    {
      name: "Prince Kumar",
      image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
      position: "Founder & CEO",
      description:
        "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
      github:
        "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg",
      linkedin:
        "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg",
      instagram:
        "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg",
    },
    {
      name: "Praveen Dwivedi",
      image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
      position: "BI Engineer",
      description:
        "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
      github:
        "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg",
      linkedin:
        "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg",
      instagram:
        "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg",
    },
    {
      name: "Himanshu Shivgotra",
      image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
      position: "Frontend Developer",
      description:
        "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
      github:
        "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg",
      linkedin:
        "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg",
      instagram:
        "https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg",
    },
  ];
  return (
    <div className="bg-white dark:bg-gray-900">
      <div class="container flex justify-center mx-auto pt-16">
        <div>
          <p class="text-gray-500 dark:text-gray-200 text-lg text-center font-normal pb-3">
            Our Talented Team Member
          </p>
          <h1 class="xl:text-4xl text-3xl text-center text-gray-800 dark:text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            We have a great set of developers who help you to build up your
            business.
          </h1>
        </div>
      </div>
      <div class="w-full bg-gray-100 dark:bg-gray-800 px-10 pt-10">
        <div class="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
          >
            {teams.map((item) => (
              <div
                role="listitem"
                class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div class="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
                  <div class="absolute -mt-20 w-full flex justify-center">
                    <div class="h-32 w-32">
                      <img
                        src={item.image}
                        alt="Display Picture of Andres Berlin"
                        role="img"
                        class="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div class="px-6 mt-16">
                    <h1 class="font-bold dark:text-white text-3xl text-center mb-1">
                      {item.name}
                    </h1>
                    <p class="text-gray-800 dark:text-white text-sm text-center">
                      {item.position}
                    </p>
                    <p class="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
                      {item.description}
                    </p>
                    <div class="w-full flex justify-center pt-5 pb-5">
                      <a href="javascript:void(0)" class="mx-5">
                        <div aria-label="Github" role="img">
                          <img src={item.github} alt="github" />
                        </div>
                      </a>
                      <a href="javascript:void(0)" class="mx-5">
                        <div aria-label="Twitter" role="img">
                          <img src={item.linkedin} alt="twitter" />
                        </div>
                      </a>
                      <a href="javascript:void(0)" class="mx-5">
                        <div aria-label="Instagram" role="img">
                          <img src={item.instagram} alt="instagram" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
