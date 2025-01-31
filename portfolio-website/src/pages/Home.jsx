import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg'; // Replace with actual profile picture path
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; // Import social media icons
import './Home.css'; // Ensure the styles are applied

function Home() {
  const sections = useRef([]);

  const scrollToSection = (index) => {
    sections.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      {/* Background Section */}
      <div className="background-image-container">
        <motion.img
          src={profilePic}
          alt="Profile Background"
          className="background-image"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="overlay"></div>
      </div>

      {/* Section 1: Introduction */}
      <section className="section intro-section" ref={(el) => (sections.current[0] = el)}>
        <motion.h1
          className="stylish-name"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Tamil Mughilan
        </motion.h1>
        <p className="small-note">Software Developer | I Code. I Build. I Solve.</p>

        {/* Social Media Links */}
        <div className="social-media-links">
          <motion.a
            href="https://www.linkedin.com/in/tamil-mughilan-426b21258/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaLinkedin className="social-icon" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/tamilmughilan/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaInstagram className="social-icon" />
          </motion.a>
          <motion.a
            href="https://github.com/Tamilmughilan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaGithub className="social-icon" />
          </motion.a>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          onClick={() => scrollToSection(1)}
        >
          <span>Know More</span>
          <div className="arrow"></div>
        </motion.div>
      </section>

      {/* Section 2: About Me */}
      <section className="section about-section" ref={(el) => (sections.current[1] = el)}>
        <div className="content-left">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
I am a software developer currently pursuing B.Tech in Information Technology at SSN College of Engineering, Chennai. I enjoy working on real-world projects that challenge me and lead to meaningful solutions. During my internship, I experienced the satisfaction of building and deploying a project that directly improved workflows. This reinforced my passion for developing practical, impactful solutions that create value.            </motion.p>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection(2)}>
          <div className="arrow"></div>
        </div>
      </section>

      {/* Section 3: Experience */}
      <section className="section experience-section" ref={(el) => (sections.current[2] = el)}>
        <div className="content-right">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
I completed my internship at CPCL's Information Systems Department in July 2024, where I worked on both front-end and back-end development. My role involved developing a mobile application to streamline operations, providing me with valuable hands-on experience and the satisfaction of seeing a project make a real impact.            </motion.p>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection(3)}>
          <div className="arrow"></div>
        </div>
      </section>

      {/* Section 4: Skills */}
      <section className="section skills-section" ref={(el) => (sections.current[3] = el)}>
        <div className="content-left">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Strength
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
           Throughout my experience, I have worked on a range of projects, from building systems to enhance user experiences to automating processes that save time and effort. I find it rewarding to see my work translate into tangible results, especially when collaborating with a team to accomplish complex goals.
           </motion.p>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection(4)}>
          <div className="arrow"></div>
        </div>
      </section>

      {/* Section 5: Contact */}
      <section className="section contact-section" ref={(el) => (sections.current[4] = el)}>
        <div className="content-right">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Reflections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
Early in my journey, I pursued ambitious ideas without fully considering feasibility, such as designing a piezoelectric energy-generating shoe. While these projects encouraged creativity, I’ve learned the importance of balancing innovation with practicality. Now, I focus on building a strong foundation, refining my skills, and approaching complex projects with a more structured, scalable approach.
</motion.p>
        </div>
      </section>
    </div>
  );
}

export default Home;