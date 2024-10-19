// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";


// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Rohan Nooniwal",
  tagline: "I work to develop webApps",
  img: profile,
  about: `I am a web developer and a student at IIITKota, CSE 4th year.
          My keen interest is in imagine and desgining good and efficient UI for the good.Also i am exploring emerging technology in machine learning and data science. `,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/rohan-nooniwal-161821242/",
  github: "https://github.com/rohan44942",
  twitter: "https://twitter.com/rohannooniwal39",
  instagram: "https://www.instagram.com/Rohannooniwal39",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Codesoft`,
    Location: "Bengaluru",
    Type: "Remote task work",
    Duration: "Aug 2023 - Sep 2023",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Udemy, YouTube, Google, Medium",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "Bachelor in Computer Science & Engineering",
    Company: `Indian Institute Of Information And Technology, Kota`,
    Location: "Kota",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Mark Your Route",
    image: projectImage1,
    description: `This is sample project of react and api calling (fake , real api) that help a user to mark its visited location across the world as an memory he/she can mark some notes on the pin location of map`,
    techstack: "React,Redux,context, API, ",
    previewLink: "https://google.com",
    githubLink: "https://github.com/rohan44942/worldTourMap",
  },
  {
    title: "Quiz app using react",
    image: projectImage2,
    description: `This is Quiz app developed using react`,
    techstack: "react",
    previewLink: "https://makeyourquiz1.netlify.app/",
    githubLink: "https://github.com/rohan44942/react-quiz-app",
  },
  {
    title: "sentiment_analysis_codemix_language",
    image: projectImage3,
    description: `The project presented encompasses two main models: a sentiment analysis model for Hindi-English code-mixed sentences and a food recommendation system based on user emotions.

The sentiment analysis model developed in this project is a robust data analytics tool designed to classify the sentiment of Hindi-English code-mixed sentences into positive or negative categories. Achieving an accuracy of over _85%, this model is primarily intended for research purposes. It has significant applications in improving the quality of products on e-commerce websites by interpreting user reviews and in identifying offensive comments on social media platforms. This can also assist the government in understanding public feedback from social media. Future work will involve extending this model to perform sentiment analysis on sentences extracted from videos and handling multiple languages using hybrid deep learning models.`,
    techstack: "CNN, LSTM, AdaBoost classifiers, Random Forest",
    previewLink: "https://google.com",
    githubLink: "https://github.com/rohan44942/sentiment_analysis_codemix_language",
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "Rohannooniwal39@gmail.com",
  phone: "+91 8813852121",
};
