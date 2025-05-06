
import {
project1,
  Flutter,
  Android,
  dart,
  java,
  office,
  C,
  logo,
  R,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  python,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import gdsc from "../assets/company/gdsc.png";
import tc from "../assets/company/tc.png";
import ucek from "../assets/company/ucek.png";
import icc from "../assets/company/icc.png";
import sk from "../assets/company/sk.jpg";

export const navLinks = [


  {
    id: "about",
    title: "About",

  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: python,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
    {
    title: "App Developer",
    icon:Android,
  },

];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
    {
    name: "Java",
    icon: java,
  },
      {
    name: "Dart",
    icon: dart,
  },
        {
    name: "C",
    icon: C,
  },
    {
    name: "R",
    icon: R,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
    {
    name: "Android Studio",
    icon: Android,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
        {
    name: "Office",
    icon: office,
  },


];

const experiences = [
  {
    title: "Java & Python Intern",
    company_name: "Skill Haara T&P Services Pvt Ltd",
    icon: sk,
    iconBg: "#E6DEDD",
    date: "Mar 2023 – Sept 2023",
    points: [
      "Gained foundational knowledge in Java and Python programming.",
      "Assisted in software development processes and coding tasks.",
      "Participated in team meetings and observed real-world workflows.",
    ],
  },
    {
    title: "Team Member",
    company_name: "GDSC Workspace",
    icon: gdsc,
    iconBg: "#383E56",
    date: "Apr 2022 – Present",
    points: [
      "Collaborated with a student developer community focused on innovation.",
      "Contributed to workshops and events to enhance team learning.",
    ],
  },
    {
    title: "Club Member",
    company_name: "Industry Connect Club",
    icon: icc,
    iconBg: "#E6DEDD",
    date: "Mar 2023 – Mar 2024",
    points: [
      "Interacted with professionals to understand career and industry trends.",
      "Attended professional development events and resume-building sessions.",
    ],
  },
    {
    title: "Student Volunteer",
    company_name: "Kerala Tourism Club",
    icon: tc,
    iconBg: "#383E56",
    date: "Jun 2023 – Sept 2024",
    points: [
      "Supported tourism events and provided visitor assistance.",
      "Participated in local cultural activities and outreach programs.",
    ],
  },
  {
    title: "Class Representative",
    company_name: "University College of Engineering, Karyavattom",
    icon: ucek,
    iconBg: "#E6DEDD",
    date: "Dec 2020 – Sept 2024",
    points: [
      "Acted as liaison between students and faculty.",
      "Organized class meetings and relayed academic concerns.",
    ],
  },
];

const testimonials = [

];

const projects = [
  {
    name: "CrediScope - Loan Risk Predictor",
    description:
      "A machine learning project that predicts loan repayment outcomes using models like Decision Trees, Random Forest, and Gradient Boosting. Focused on handling class imbalance and evaluating performance through cross-validation.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "scikit-learn", color: "green-text-gradient" },
      { name: "pandas", color: "pink-text-gradient" },
      { name: "matplotlib", color: "yellow-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/Ashik-Muhammed/CrediScope",
  },
  {
    name: "Airscroll - Hand Scroll Controller",
    description:
      "A computer vision application that uses webcam hand gesture detection to control scroll actions on-screen. Built using MediaPipe and PyAutoGUI, it detects raised fingers to scroll up or down.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "mediapipe", color: "pink-text-gradient" },
      { name: "pyautogui", color: "white-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/Ashik-Muhammed/AirScroll",
  },
  {
    name: " FreshGuard - Food Freshness Detection System",
    description:
      "A system leveraging sensors and basic algorithms to monitor and display food freshness status in real time. Designed to help consumers track perishability and improve food safety.",
    tags: [
      { name: "sensors", color: "green-text-gradient" },
      { name: "python", color: "blue-text-gradient" },
      { name: "data-analysis", color: "pink-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/Ashik-Muhammed/freshgaurd",
  },
];


export { services, technologies, experiences, testimonials, projects };
