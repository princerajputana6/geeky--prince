import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How much does a new website cost?",
    answer:
      "Do you think it’s possible to calculate the exact cost for website development? Website development will be fully customizable, tailoring to the client’s requirements. Nowadays, you can find many options to develop your website. You can approach a website designer (Freelancer) or contact a website development agency, or you can try developing a website on your own using some well-performing website builders. Depending on the requirements and the method you choose to build your website, the cost keeps varying. ",
  },
  {
    question: "Will you maintain my site for me?",
    answer:
      "Regular maintenance is essential for a website to stabilize its flexibility and reliability. Proper maintenance would help in ensuring your website’s security, invite new visitors, boost traffic and more. Of course, we can help you out with proper and professional website maintenance in addition to development as it supports in achieving stabilized growth, keeping your business inclined.",
  },
  {
    question: "Will my website be mobile-friendly? ",
    answer:
      "Let it be a ticket booking, online order, browsing, etc. people are keen to do these tasks on the go. So, developing a responsive website will help in increasing the look and feel of your website on both small and large devices. It also increases the number of visitors, rankings in search engines. Yes, we ensure to develop a responsive website that would make your visitors appealing and deliver an optimized browsing experience.",
  },
  {
    question: "How long does it take to build a website? ",
    answer:
      "If you have chosen a professional website development company, then it would take around 1 to 4 months starting from scratch till the end for basic information websites with less functionality.",
  },
  {
    question: "How do you build my website? ",
    answer:
      "We build your website by understanding your requirements. We ensure to configure the best and suitable domain name, hosting providers, customized design and content. Furthermore, we build your website tailoring your needs, with SEO and speed optimization. The below screenshot shows the process flow that we follow at ColorWhistle.",
  },
  {
    question: "Can you help me improve my site without building a new website?",
    answer:
      "Through our maintenance service, we can help you in improving the design, features and overall performance of your website without the need for a new one. Our adroit UI UX experts can also help you with suggestions on improving user experience in an existing website hence, we can enhance your existing website without any hassle.",
  },
  {
    question: "What is your project management process?",
    answer:
      " Our project management process involves everything, right from scratch till delivering the project successfully. We first understand and plan based on the requirements, prioritize the tasks and start the execution with a well-structured process flow.During the execution, we ensure to track and monitor the progress of the project and during the final stage, we ensure to troubleshoot, test and deliver it along with a final report of the project.",
  },
  {
    question: "How does your design process work?",
    answer:
      "At Geeky Prince, we first,Design the wireframe -> Take the client’s approval-> Do revisions -> Finalize the framework and agree on the workflow.On agreeing on the workflow we,Design mockups in line with the approved wireframes -> Take the client’s approval -> Finalize the mockups and agree with the design. ",
  },
];
