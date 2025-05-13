import type { Product, Technology } from "./types";

export const SOCIALS = [
  {
    name: "GitHub",
    url: "https://www.github.com/russellgn",
    logoSrc: "/images/github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/russell-gundani-26528b236/",
    logoSrc: "/images/linkedin.svg",
  },
];

export const TECHNOLOGIES: Technology[] = [
  // server
  {
    name: "Rust",
    logoSrc: "/images/tech-logos/rust.svg",
  },
  {
    name: "Axum.rs",
    logoSrc: "/images/tech-logos/axum2.png",
  },
  {
    name: "Java",
    logoSrc: "/images/tech-logos/java-icon.svg",
  },
  {
    name: "Spring Boot",
    logoSrc: "/images/tech-logos/springio-icon.svg",
  },
  {
    name: "Python",
    logoSrc: "/images/tech-logos/python-5.svg",
  },
  {
    name: "Django",
    logoSrc: "/images/tech-logos/django.svg",
  },
  // web
  {
    name: "TypeScript",
    logoSrc: "/images/tech-logos/typescript.svg",
  },
  {
    name: "React Js",
    logoSrc: "/images/tech-logos/react-2.svg",
  },
  {
    name: "Next Js",
    logoSrc: "/images/tech-logos/next-js.svg",
  },
  {
    name: "Tailwind CSS",
    logoSrc: "/images/tech-logos/tailwind-css-2.svg",
  },
  // mobile and desktop
  {
    name: "Tauri",
    logoSrc: "/images/tech-logos/tauri.svg",
  },
  {
    name: "React Native",
    logoSrc: "/images/tech-logos/reactnative.svg",
  },
];

export const PRODUCTS: Product[] = [
  {
    name: "Task Bridge",
    url: "https://github.com/RussellGN/Task-Bridge",
    description:
      "A software dev-cycle solution for  GitHub-averse or non-technical project managers.",
    desktopScreenShotSrc: "/images/screenshots/task-bridge.png",
  },
  // {
  //    name: "Gum Inc",
  //    url: "https://gum-inc.vercel.app",
  //    description: "A platform for businesses, professionals, creatives and other entities to connect and grow.",
  //    desktopScreenShotSrc: "/images/screenshots/gum-inc-pc.png",
  //    mobileScreenShotSrc: "/images/screenshots/gum-inc.png",
  // },
  // {
  //    name: "Zim Auto Trade",
  //    url: "https://zim-auto-trade.vercel.app",
  //    description: "Zim Auto Trade is a marketplace connecting buyers and sellers of second-hand vehicles nation-wide (Zimbabwe).",
  //    desktopScreenShotSrc: "/images/screenshots/zim-auto-trade-pc.png",
  //    mobileScreenShotSrc: "/images/screenshots/zim-auto-trade.png",
  // },
];
