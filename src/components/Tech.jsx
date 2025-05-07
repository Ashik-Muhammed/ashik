import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",
      {
        opacity: 0,
        y: 60,
        scale: 0.8,
        rotate: -15,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".tech-icons-wrapper",
          start: "top 80%",
          end: "bottom 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="text-white text-3xl font-bold">Technical Highlights</h2>
        <p className="text-secondary mt-2 text-lg">Tools and technologies I frequently work with</p>
      </div>
      <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="tech-icon-wrapper w-28 h-28" key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              className="tech-icon w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
