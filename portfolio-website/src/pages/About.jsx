import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Updated CSS file for the About page

function About() {
  const sections = useRef([]);

  const scrollToSection = (index) => {
    sections.current[index].scrollIntoView({ behavior: 'smooth' });
  };

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
    <div className="about-page2">
      {/* Space-themed Animation Background */}
      <div className="space-animation"></div>

      {/* Section 1: Header */}
      <section className="section about-header2 left-aligned" ref={(el) => (sections.current[0] = el)}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Technical Background
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I am currently pursuing B.Tech in Information Technology at SSN College of Engineering, Chennai. My interest lies in developing practical solutions through technology, and I enjoy working on projects that challenge me and have real-world applications. Over time, I have gained experience in full-stack development, mobile applications, and system optimization, allowing me to build scalable and efficient solutions.
My academic journey has provided me with a strong technical foundation, and my projects and internship experiences have helped me bridge the gap between theory and real-world implementation. I continuously explore new technologies to improve my problem-solving and development skills, ensuring that I stay adaptable in a fast-evolving industry.
        </motion.p>
        <div className="scroll-indicator" onClick={() => scrollToSection(1)}>
          <span>Know More</span>
          <div className="arrow"></div>
        </div>
      </section>

      {/* Section 2: Education */}
      <section className="section about-education2 right-aligned" ref={(el) => (sections.current[1] = el)}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Education
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <li>
            <strong>SSN College of Engineering, Chennai</strong> <br />
            B.Tech in Information Technology, Cumulative GPA: 8.161
          </li>
          <li>
            <strong>DAV Senior Secondary School, Chennai</strong> <br />
            Cut-off: 197.5
          </li>
        </motion.ul>
        <div className="scroll-indicator" onClick={() => scrollToSection(2)}>
          <div className="arrow"></div>
        </div>
      </section>

      {/* Section 3: Skills */}
      <section className="section about-skills2 left-aligned" ref={(el) => (sections.current[2] = el)}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Technical Skills
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <li>Programming: Python, Java, C++</li>
          <li>Web Technologies: HTML, CSS, JavaScript, ReactJs, ASP.NET, Django</li>
          <li>Mobile Development: Flutter, Dart, ReactNative</li>
          <li>Databases: Oracle, MySQL, Firebase, MongoDB, Microsoft SQL Server</li>
        </motion.ul>
        <div className="scroll-indicator" onClick={() => scrollToSection(3)}>
          <div className="arrow"></div>
        </div>
      </section>

      {/* Section 4: Projects */}
      <section className="section about-projects2 left-aligned" ref={(el) => (sections.current[3] = el)}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <div className="project-list2">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card2"
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
      </section>
    </div>
  );
}

export default About;