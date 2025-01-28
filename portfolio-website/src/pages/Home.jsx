import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg'; // Replace with actual profile picture path
import './Home.css'; // Ensure the styles are applied

function Home() {
  return (
    <div className="home">
  

      <div className="about-section">
        <motion.div
          className="about-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          
        </motion.div>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
            <div className="profile-image">
            <motion.img
              src={profilePic}
              alt="Profile"
              className="profile-img"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="about-details">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm Tamil Mughilan👾
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
             I am a software developer currently pursuing B.Tech in Information Technology at SSN College of Engineering, Chennai. I enjoy working on projects that challenge me and provide a sense of accomplishment. During my internship at Chennai Petroleum Corporation Limited (CPCL), I discovered the dopamine kick that comes with completing tasks and delivering solutions. This experience fueled my passion for working on real-time projects that create meaningful outcomes.
            </motion.p>

            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              My Internship Experience
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              I completed my internship at CPCL in the Information Systems Department in July 2024, where I gained hands-on experience working on both front-end and back-end development. The internship involved developing a mobile app that streamlined operations, which gave me a sense of pride in seeing the project come to life and improve the work processes.
            </motion.p>

            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Key Strengths & Projects
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Throughout my experience, I have worked on a range of projects, from building systems to enhance user experiences to automating processes that save time and effort. I find it rewarding to see my work translate into tangible results, especially when collaborating with a team to accomplish complex goals.
            </motion.p>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Reflections
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Earlier in my journey, I got carried away by ambitious project ideas and unrealistic expectations, such as attempting to develop a self-sufficient product using Piezoelectric crystals to generate energy during walking. While these ideas were high in potential, I learned that the key to success is focusing on achievable goals and learning the necessary technologies during the build. This realization has helped me focus more on developing my competence and working on projects that align with my current skill level, while still pushing the boundaries of innovation.
            </motion.p>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Interests & Hobbies
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Outside of my professional life, I am passionate about sports—especially tennis and football, but I enjoy playing and watching a variety of sports like volleyball, basketball, and table tennis. Driving is another activity I enjoy, as it gives me a sense of freedom and relaxation.
            </motion.p>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Future Goals
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
               am eager to continue working on real-time projects with organizations where I can contribute and see the direct impact of my work. My goal is to apply what I’ve learned and keep expanding my knowledge, all while enjoying the process of growth and accomplishment.
            </motion.p>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
