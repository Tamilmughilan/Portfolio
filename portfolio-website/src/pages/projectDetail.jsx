import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

// Import images
import cpcl1 from '../assets/cpcl1.jpg';
import cpcl2 from '../assets/cpcl2.jpg';
import scrape1 from '../assets/scrape1.jpg';
import django1 from '../assets/django1.jpg';
import django2 from '../assets/django2.jpg';
import django3 from '../assets/django3.jpg';
import django4 from '../assets/django4.jpg';
import parse1 from '../assets/parse1.png';
import parse2 from '../assets/parse2.png';
import parse3 from '../assets/parse3.png';
import parse4 from '../assets/parse4.png';
import quiz1 from '../assets/quiz1.jpg';
import quiz2 from '../assets/quiz2.jpg';
import quiz3 from '../assets/quiz3.jpg';

const projects = [
  { 
    id: 1,
    name: 'CPCLeServe', 
    link: 'https://github.com/Tamilmughilan/CPCLeServe',
    description: `The CPCL eServe Mobile App is designed for Chennai Petroleum Corporation Limited (CPCL), a central government refinery, to provide seamless and efficient digital services. The app is ready to be deployed on CPCL's servers and integrates features to streamline employee operations and interactions.`,
    images: [cpcl1, cpcl2],
    videoEmbed: 'https://www.youtube.com/embed/KGPek00NTPc',
  },
  { 
    id: 5,
    name: 'YouScrape', 
    link: 'https://github.com/Tamilmughilan/YouScrape',
    description: `This project allows you to scrape YouTube video details such as title, description, view count, like count, and comment count using the YouTube API. You can also fetch the channel name associated with the video.

Tech Stack
Python: Ensure you have Python 3.6 or higher installed on your machine.
Google API Client: This project uses Google's API client to interact with the YouTube API.`,
    images: [scrape1],
    videoEmbed: 'https://www.youtube.com/embed/uvcHlsURvmY',
  },
  { 
    id: 3,
    name: 'Django Chat', 
    link: 'https://github.com/Tamilmughilan/Django_chat',
    description: `A simple and feature-rich chat application built using Django, featuring user authentication, CRUD operations, WebSockets, and real-time messaging.\n
Features:
-CRUD operations for users (Create, Read, Update, Delete)
-Create and join chat rooms, and engage in group chats
-User-friendly, responsive UI
-WebSocket integration for real-time communication
-Authentication for WebSockets to prevent unauthorized access
-Profile management with username and profile picture
-Persistent message storage in the database
`,
    images: [django1, django2, django3, django4],
    videoEmbed: '',
  },
  { 
    id: 2,
    name: 'Alumni Management', 
    link: 'https://github.com/Tamilmughilan/AlumniManagement',
    description: `The Alumni Management System is a project focused on digitizing alumni interactions, enabling better communication and collaboration between alumni and the institution. It provides tools for managing alumni data, organizing events, and fostering a strong alumni network.`,
    images: [],
    videoEmbed: '',
  },
  
  { 
    id: 4,
    name: 'Parse-X', 
    link: 'https://github.com/Tamilmughilan/Parse-X',
    description: `Parse-X is a Resume and JD (Job Description) comparison software with advanced features designed to streamline the hiring process. It evaluates resumes against job descriptions and calculates the ATS (Applicant Tracking System) score to identify the best candidates. 

Key Features:
- Resume and JD Evaluation    : Compares resumes with job descriptions to find the best match based on keywords, skills, and experience.
- ATS Score Calculation       : Analyzes resumes to generate an ATS score, ensuring candidates meet organizational standards.
- Job Application Management  : Enables organizations to post job openings and manage applications effectively.
- Student Applications       : Allows students to apply for job postings directly through the platform.
- Candidate Sorting          : Automatically sorts and filters candidates based on resume-JD compatibility and ATS scores, providing a ranked list of suitable candidates.

This project simplifies recruitment by combining automation, efficiency, and accurate evaluation.`,
    images: [parse1, parse2, parse3, parse4],
    videoEmbed: '',
  },
  { 
    id: 6,
    name: 'Quiz app', 
    link: 'https://github.com/Tamilmughilan/Parse-X',
    description: `Flutter Quiz App
This is a simple Flutter Quiz App where users can take a quiz with multiple choice questions. The app features displaying the user's score after completing the quiz. It has a dark themed look which is not harsh for the users eyes.

Features
-Start Quiz
-Multiple-choice questions with options
-Display the total score upon quiz completion
-Intuitive UI design

Technologies Used
-Flutter
-Dart
-Provider for state management`,
    images: [quiz1, quiz2, quiz3],
    videoEmbed: 'https://www.youtube.com/embed/1Tp-jVzCrjk',
  },
];

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail-container">
      <div className="project-detail">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub Repository</a>

        <div className="screenshots">
          {project.images.length > 0 ? (
            project.images.map((img, index) => (
              <img key={index} src={img} alt={`Screenshot ${index + 1}`} />
            ))
          ) : (
            <p className="no-data">No screenshots available</p>
          )}
        </div>

        {project.videoEmbed ? (
          <div className="video-container">
            <iframe 
              width="100%" 
              height="400" 
              src={project.videoEmbed} 
              title={`${project.name} demo`}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        ) : (
          <p className="no-data">No screen recording available</p>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;