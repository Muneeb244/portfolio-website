import meet from "@/public/meet.png";
import namemaster from "@/public/namemaster.png";
import naviq from "@/public/naviq.png";
import tasbeeh from "@/public/tasbeeh.png";
import { Briefcase, Code, GraduationCap } from "lucide-react";
import React from "react";

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
      "Develop responsive web (Next.js) and mobile (React Native) interfaces, build REST APIs with NestJS and PostgreSQL, write Python scripts for ETL jobs, integrate third-party services, and manage application state across the full stack.",
    icon: React.createElement(Code),
    date: "Oct 2024 - Present",
  },
  {
    title: "Associate Software Engineer",
    location: "Texinity Technologies, Islamabad, Pakistan",
    description:
      "Built web and cross-platform mobile apps with Next.js, React Native, and Node.js, working closely with senior engineers to ship production features.",
    icon: React.createElement(Briefcase),
    date: "May 2024 - Sep 2024",
  },
  {
    title: "MERN Stack Developer Intern",
    location: "Texinity Technologies, Islamabad, Pakistan",
    description:
      "Built web and mobile applications with React Native, Node.js, and Socket.IO, applying modern JavaScript (ES6) and React best practices.",
    icon: React.createElement(Briefcase),
    date: "July 2023 - Aug 2023",
  },
  {
    title: "Graduated BS Computer Science",
    location: "COMSATS University, Islamabad, Pakistan",
    description:
      "Completed my degree with a focus on Object-Oriented Programming, Data Structures & Algorithms, and Databases. Achieved 1st position in the Final Year Project (AI Category) at COMSATS Project & Career Expo SP24.",
    icon: React.createElement(GraduationCap),
    date: "2020 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "NavIQ",
    description:
      "AI-powered platform for higher education, combining integrations, analytics, intelligent capabilities, and a mobile app for AI-powered conversations.",
    tags: [
      "Next.js",
      "React",
      "React Native",
      "Expo",
      "NestJS",
      "GCS",
      "REST APIs",
      "SSE",
    ],
    imageUrl: naviq,
  },
  {
    title: "Namemaster",
    description:
      "A gamified platform where users can play through three levels of games, earn stars, and track their progress.",
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
    description: "A Google Meet clone with real-time video and audio calling.",
    tags: [
      "React Native",
      "WebRTC",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Redux Toolkit",
    ],
    imageUrl: meet,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Redux",
  "Redux Toolkit",
  "Node.js",
  "Express.js",
  "NestJS",
  "Python",
  "REST APIs",
  "GraphQL",
  "WebRTC",
  "Socket.IO",
  "PostgreSQL",
  "MongoDB",
  "SQL",
  "Firebase",
  "Tailwind CSS",
  "Git",
  "GitHub",
] as const;
