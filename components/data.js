import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Benefits with Geeky Prince",
  desc: "The main aim of our Company is to help the startups to grow significantly. We are bringing the innovation & inspiration for the startups to grow considerably.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Best business idea's ",
      desc: "Our agency runs on creativity & we offer the best business ideas.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Best Tech Stack",
      desc: "We are using the best tech stacks for makes your business more smoother and faster.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Business Growth",
      desc: "We are not only helping you with website creation apart from this we are also helping you with business flows so that make your business reliable.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Services we are offering at Geeky Prince",
  desc: "Here wr are offering you a lot of  services listed below.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Website design and development",
      desc: "We have highly professional & experienced designers that will help you in creating the perfect design for your business website.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "App development",
      desc: "If you need a professional app for your business, then you must also contact us because we offer the best App Design & Development services.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Business Consulting",
      desc: "We have highly certified & experienced designers that will be able to create the objectives of business & comprehend your vision in order to create fantastic designs. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
