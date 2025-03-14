import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import meet from "@/public/meet.png";
import namemaster from "@/public/namemaster.png";
import tasbeeh from "@/public/tasbeeh.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Texinity Technologies, Islamabad, Pakistan",
    description:
      "Leading end-to-end mobile app development with React Native and Node.js. Deployed scalable apps with zero post-launch critical failures while maintaining highly positive user feedback.",
    icon: React.createElement(FaReact),
    date: "Oct 2024 - Present",
  },
  {
    title: "Associate Software Engineer",
    location: "Texinity Technologies, Islamabad, Pakistan",
    description:
      "Developed high-performance applications using React Native,Next.js and Node.js. Built web apps & cross-platform mobile apps with React Native, ensuring scalability and maintainability.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Sep 2024",
  },
  {
    title: "MERN Stack Developer Intern",
    location: "Texinity Technologies, Islamabad, Pakistan",
    description:
      "Implemented modern JavaScript (ES6) and React practices for efficient coding. Worked with React Native, Node.js, and Socket.io to build scalable applications.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - Aug 2023",
  },
  {
    title: "Graduated BS Computer Science",
    location: "COMSATS University, Islamabad, Pakistan",
    description:
      "Completed my degree with a focus on Object-Oriented Programming, Data Structures & Algorithms, and Databases. Achieved 1st position in the Final Year Project (AI Category) at COMSATS Project & Career Expo SP24.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
] as const;


export const projectsData = [
  {
    title: "Namemaster",
    description:
      "I worked as a full-stack developer on this gamified project. Users can play three levels of games to earn stars.",
    tags: ["React Native", "Node.js", "Express.js", "MongoDB", "Redux Toolkit"],
    imageUrl: namemaster,
  },
  {
    title: "Digital Tasbeeh Counter",
    description:
    "A digital Tasbeeh counter app for Muslims with Namaz timings, Duas, custom themes, multi-language support, and in-app purchases.",
    tags: ["React Native", "Expo", "RevenueCat", "Redux Toolkit"],
    imageUrl: tasbeeh,
  },
  {
    title: "Google Meet Clone",
    description:
      "A Google Meet clone with real-time video and audio calling.",
    tags: ["React Native", "WebRTC", "Node.js", "Express.js", "MongoDB", "Socket.io", "Redux Toolkit"],
    imageUrl: meet,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React Native",
  "React",
  "Next.js",
  "Redux",
  "Redux Toolkit",
  "Node.js",
  "NestJS",
  "Express.js",
  "REST APIs",
  "GraphQL",
  "MongoDB",
  "SQL",
  "PostgreSQL",
  "Git/Github",
  "Tailwind CSS",
  "WebRTC",
  "Socket.io",
  "Firebase",
  "Flask",
  "Python",
  "C++",
  "Java",
  "Rust",
] as const;
