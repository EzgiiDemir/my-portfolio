import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  shopify,
  threejs,
  git,
  nodejs,
} from "../assets";

import spotifyIcon from "../assets/png-transparent-spotify-logo-spotify.png";
import snkrIcon from "../assets/images.jpeg";
import vueIcon from "../assets/Vue.png";
import angularIcon from "../assets/images (1).png";
import frontendImage from "../assets/freecodecamp.org_certification_ezgiidemir__front-end-development-libraries - Google Chrome 27_06_2024 00_11_42.png";
import webImage from "../assets/UC-4223775d-fb35-423e-9159-8f692be8384d.jpg";
import wordpressImage from "../assets/CERTIFICATE_LANDING_PAGE~QTWXWC3UACKB.jpeg";
import seoImage from "../assets/CERTIFICATE_LANDING_PAGE~GX5ML4PHE958.jpeg";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Resume",
  },
];

const services: TService[] = [
  {
    title: "Front-End Development",
    icon: web,
  },
  {
    title: "Back-end Development",
    icon: backend,
  },
  {
    title: "UX & UI Development",
    icon: web,
  },
  {
    title: "Mobile Development",
    icon: mobile,
  },
];


const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Vue",
    icon: vueIcon,
  },
  {
    name: "Angular",
    icon: angularIcon,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences: TExperience[] = [
  {
    title: "Snkr hub",
    companyName: "React",
    icon: snkrIcon,
    iconBg: "rgb(231, 231, 231)",
    date: "March 2024 - April 2024",
    points: [
      "Created Snkr-hub single-page application using React, Redux Toolkit, and Tailwind CSS. Provides a seamless shopping experience for sneaker enthusiasts, enabling them to discover featured sneakers and manage their cart by adding or removing items. The app allows users to adjust item quantities and dynamically updates total prices. State management is efficiently handled with Redux Toolkit.",
      "Implemented responsive design and ensured cross-browser compatibility.",
    ],
    link: "https://snkrrhub.netlify.app/",
  },
  {
    title: "Spotify clone",
    companyName: "React",
    icon: spotifyIcon,
    iconBg: "rgb(20, 20, 20)",
    date: "May 2024 - June 2024",
    points: [
      "Created Spotify clone using React, Next.js, and Redux. Utilized React and Redux for user interface and data management, and Next.js for server-side rendering (SSR) and static site generation (SSG).",
      "Implemented responsive design and ensured cross-browser compatibility.",
    ],
    link: "https://ezgispotify.netlify.app/",
  },
  {
    title: "Nuxt e-commerce",
    companyName: "Vue",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - Fab 2024",
    points: [
      "Created e-commerce application using Vue.js, Nuxt.js, and Pinia for state management. Features a minimal UI, unique design, smooth experience, and fast optimized build, making it highly modularized and mobile-ready. The project includes components for product details, header, home, products, cart, contact form, footer, and newsletter. Development environment integrates tools like Nuxt DevTools, Vite, Prettier, Eslint, and AutoPrefixer.",
      "Implemented responsive design and ensured cross-browser compatibility.",
    ],
    link: "https://vuecommercee.netlify.app/", 
  },
];

const testimonials: TTestimonial[] = [
  {
    image: "https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s",
    testimonial: "You can check out my GitHub projects.",
    name: "Ezgi Demir",
    designation: "",
    company: "",
    link: "https://github.com/EzgiiDemir",
  },
  {
    image: "https://ezgiwith.wordpress.com/wp-content/uploads/2024/06/joao-ferrao-4yzrcdncrvg-unsplash-edited.jpg",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAxIzs2yRTPxONA1yBwMZdhkNwlqmIpxFug&s",
    testimonial: "Career guide for new graduates.",
    name: "Ezgi Demir",
    designation: "",
    company: "",
    link: "https://ezgiwith.wordpress.com/",
  },
  {
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*sFG7SjilM6ISpBAf4XT6-w.jpeg",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpGmTnrt225cF4zh1U7AO2B5bqfzYnIffUw&s",
    testimonial: "Software Development Trends in 2024: What You Need to Know.",
    name: "Ezgi Demir",
    designation: "",
    company: "",
    link: "https://medium.com/@ezgidemir824",
  },
];

const projects: TProject[] = [
  {
    name: "Front End Development",
    description: "I learned technologies like Bootstrap, jQuery, Sass, React, and Redux in the 'Front End Development Libraries' section of FreeCodeCamp. In this section, I learned to create responsive web designs with Bootstrap, manipulate the DOM and manage events with jQuery, write advanced and modular CSS with Sass, develop user interfaces with React, and manage application state with Redux. These skills helped me advance in modern web development and build a strong foundation in front-end development.",
    tags: [],
    image: frontendImage,
    sourceCodeLink: "https://www.freecodecamp.org/certification/ezgiidemir_/front-end-development-libraries",
  },
  {
    name: "SEO",
    description: "Through SEO learning, I have acquired strategies to rank my website higher on search engines. I conducted keyword research, optimized content accordingly, improved performance through technical SEO, and enhanced site value with link authority management. Considering mobile compatibility and local search optimization, I boosted site accessibility. By staying updated with SEO trends, I continuously adjusted strategies, resulting in increased organic traffic and long-term success for my website.",
    tags: [],
    image: seoImage,
    sourceCodeLink: "https://coursera.org/share/9dd2238b784a2cdab59b825a17f7a8de",
  },
  {
    name: "Web Development",
    description: "Through Udemy's 'The Complete Web Development Bootcamp,' I gained both fundamental and advanced web development skills. The course covers HTML, CSS, JavaScript, Bootstrap, jQuery, Node.js, Express.js, RESTful APIs, MongoDB, authentication, authorization, responsive design, AJAX, Fetch API, Git, GitHub, React, and Redux. I reinforced theoretical knowledge with practical projects, establishing a strong foundation in web development.",
    tags: [],
    image: webImage,
    sourceCodeLink: "http://ude.my/UC-4223775d-fb35-423e-9159-8f692be8384d",
  },
  {
    name: "Wordpress",
    description: "I learned how to install and configure WordPress, manage content, customize themes, handle plugins, implement security measures, optimize for SEO, enhance performance, use WooCommerce, perform backups, and customize using APIs. With these skills, I can effectively manage, optimize, and customize my own WordPress websites.",
    tags: [],
    image: wordpressImage,
    sourceCodeLink: "https://coursera.org/share/f7d7cdf34de4a6cb789ca34258e365ff",
  },
];

export { services, technologies, experiences, testimonials, projects };
