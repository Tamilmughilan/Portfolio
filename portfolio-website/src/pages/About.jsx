import React from "react";
import { motion } from "framer-motion";

function About() {
  const projects = [
    {
      id: 1,
      name: "CPCLeServe",
      techLearned: [
        "Flutter for cross-platform UI",
        "ASP.NET Core for backend",
        "Microsoft SQL Server for data management",
      ],
    },
    {
      id: 2,
      name: "Resume-JD Similarity Evaluation",
      techLearned: [
        "Python for data processing",
        "BERT for NLP embeddings",
        "PyTorch for AI model training",
      ],
    },
    {
      id: 3,
      name: "Alumni Management System",
      techLearned: [
        "HTML, CSS, JavaScript for frontend",
        "Firebase for database and authentication",
      ],
    },
    {
      id: 4,
      name: "LIDAR-based Obstacle Detection",
      techLearned: [
        "Arduino Nano for hardware integration",
        "TF Mini LIDAR for obstacle detection",
        "C for embedded programming",
      ],
    },
    {
      id: 5,
      name: "Django Chat Application",
      techLearned: [
        "Django for backend development",
        "WebSockets for real-time messaging",
        "User authentication and profile management",
        "Database persistence for chat history",
      ],
    },
    {
      id: 6,
       name: "Quiz App",
      techLearned: [
        "Flutter and Dart for mobile UI",
        "Provider for state management",
        "Theming and UI enhancements",
      ],
    },
  ];

  return (
    <div className="about">
      {/* Header Section */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>About Me</h1>
        <p>
          Currently pursuing my B.Tech in Information Technology at SSN College
          of Engineering, I enjoy solving real-world problems through
          technology. I take immense satisfaction in completing tasks and
          contributing to impactful projects.
        </p>
      </motion.div>

      {/* Education Section */}
      <motion.div
        className="about-education"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Education</h2>
        <ul>
          <li>
            <strong>SSN College of Engineering, Chennai</strong> <br />
            B.Tech in Information Technology, Cumulative GPA: 8.161
          </li>
          <li>
            <strong>DAV Senior Secondary School, Chennai</strong> <br />
            Cut-off: 197.5
          </li>
        </ul>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="about-skills"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Technical Skills</h2>
        <ul>
          <li>Programming: Python, Java, C++</li>
          <li>Web Technologies: HTML, CSS, JavaScript, ReactJs, ASP.NET, Django</li>
          <li>Mobile Development: Flutter, Dart, ReactNative</li>
          <li>Databases: Oracle, MySQL, Firebase, MongoDB, Microsoft SQL Server</li>
        </ul>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className="about-projects"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{project.name}</h3>
              <ul>
                {project.techLearned.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default About;
