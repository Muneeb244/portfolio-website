"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After earning my degree in{" "}
        <span className="font-medium">Computer Science</span>, I pursued my
        passion for{" "}
        <span className="font-medium">mobile and full-stack development</span>.
        With <span className="font-medium">1+ year</span> of experience, I
        specialize in{" "}
        <span className="font-medium">
          React Native, Expo, Next.js, Node.js, and MongoDB
        </span>, building high-performance, scalable mobile and web applications
        for iOS, Android, and the modern web.
      </p>

      <p className="mb-3">
        My expertise includes{" "}
        <span className="font-medium">
          state management (Redux, Zustand), real-time features (WebSockets,
          Firebase), push notifications, API integrations, and much more
        </span>. I enjoy tackling complex challenges, optimizing app performance, and developing mobile apps for seamless user experiences.
      </p>

      <p className="mb-3">
        I’m diving deep into{" "}
        <span className="font-medium">React Native</span>, focusing on{" "}
        <span className="font-medium">
          advanced features
        </span> to enhance performance, user experience, and app capabilities.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        Valorant, watching web series, and exploring new tech trends. I'm also
        passionate about{" "}
        <span className="font-medium">
          AI, backend development, and innovative mobile and web solutions
        </span>.
      </p>
    </motion.section>
  );
}
