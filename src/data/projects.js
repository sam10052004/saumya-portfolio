import taskManagerImage from "../assets/images/project-task-manager.png";
import fakeNewsImage from "../assets/images/project-fake-news.png";
import crimeAnalysisImage from "../assets/images/project-crime-analysis.png";

export const projects = [
  {
    title: "Team Task Manager",
    type: "FULL-STACK WEB APPLICATION",
    description:
      "A MERN application for managing projects, assigning tasks and tracking team progress with JWT authentication and role-based access control.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: taskManagerImage,
    github: "https://github.com/sam10052004/team-task-manager",
    demo: "https://dashing-seahorse-654e21.netlify.app/login",
  },
  {
    title: "Fake News Detection",
    type: "MACHINE LEARNING / NLP",
    description:
      "An NLP-based project for classifying news content using a combination of text and credibility-related features.",
    technologies: ["Python", "BERT", "CNN", "NLP"],
    image: fakeNewsImage,
    github:
      "https://github.com/sam10052004/Fake-News-Detection-BERT-CNN-Metadata-Hybrid-Ensemble",
    demo: "",
  },
  {
    title: "Crime Data Analysis",
    type: "DATA ANALYSIS / MACHINE LEARNING",
    description:
      "A data analysis project using dimensionality reduction and clustering to identify patterns in crime data.",
    technologies: ["Python", "PCA", "K-Means", "Data Analysis"],
    image: crimeAnalysisImage,
    github: "https://github.com/sam10052004/Crime-Data-Analysis-and-Prediction",
    demo: "",
  },
];
