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
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
