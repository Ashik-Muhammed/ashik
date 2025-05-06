import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Define core strengths
const strengths = [
  {
    title: "Problem Solver",
    description: "Quick to identify bugs and implement efficient solutions using logical thinking and debugging tools.",
  },
  {
    title: "Fast Learner",
    description: "Adapts rapidly to new frameworks and technologies, with a strong foundation in JavaScript and Python.",
  },
  {
    title: "Team Player",
    description: "Works collaboratively in cross-functional teams with clear communication and Agile methodologies.",
  },
  {
    title: "UI Focused",
    description: "Designs and builds clean, user-friendly interfaces using React, Tailwind CSS, and Figma.",
  },
  {
    title: "Backend Capable",
    description: "Implements robust APIs and handles databases with Node.js, Express, and MongoDB.",
  },
  {
    title: "Consistent & Committed",
    description: "Delivers work on time with a detail-oriented approach and consistent improvement mindset.",
  },
];

// Animated card for each strength
const StrengthCard = ({ title, description }) => {
  const cardRef = React.useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-black-200 p-8 rounded-2xl xs:w-[320px] w-full h-full shadow-md"
    >
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <div>
          <p className={styles.sectionSubText}>What I Bring to the Table</p>
          <h2 className={styles.sectionHeadText}>Core Strengths</h2>
        </div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center`}
      >
        {strengths.map((item, index) => (
          <StrengthCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
