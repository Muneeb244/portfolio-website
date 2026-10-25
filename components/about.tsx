"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="flex flex-col gap-3">
        <p>
          I hold a degree in{" "}
          <span className="font-medium">Computer Science</span> and have{" "}
          <span className="font-medium">3+ years of experience</span> as a{" "}
          <span className="font-medium">full stack engineer</span>, building
          scalable, high-performance web and mobile applications. My core stack
          includes{" "}
          <span className="font-medium">
            React, Next.js, React Native (Expo), Node.js, NestJS, and PostgreSQL
          </span>
          .
        </p>

        <p>
          I've worked with{" "}
          <span className="font-medium">US-based clients and remote teams</span>
          , collaborating on requirements, implementing features, and delivering
          solutions that meet business needs. My experience includes real-time
          features, third-party API integrations, push notifications, and state
          management with Redux and Zustand.
        </p>

        <p>
          I enjoy solving{" "}
          <span className="font-medium">
            complex problems, optimizing performance, and building intuitive
            user experiences
          </span>
          . I'm also expanding my expertise in AI integrations and intelligent
          systems to build smarter, more capable applications.
        </p>

        <p>
          <span className="italic">Outside of work,</span> I enjoy exploring new
          technologies, playing Valorant, and following tech and gaming content.
          I'm particularly interested in{" "}
          <span className="font-medium">
            AI, backend systems, and scalable solutions
          </span>
          .
        </p>
      </div>
    </motion.section>
  );
}
