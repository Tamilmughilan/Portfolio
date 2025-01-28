import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
    { 
        id: 1,
        name: 'CPCLeServe', 
        link: 'https://github.com/Tamilmughilan/CPCLeServe',
        description: 'A project for managing CPCL e-serve.',
        images: ['/assets/cpcl1.jpg', '/assets/cpcl2.jpg'],
        screenRecording: '/assets/cpcl_video.mp4',
      },
      { 
        id: 5,
        name: 'YouScrape', 
        link: 'https://github.com/Tamilmughilan/YouScrape',
        description: 'This project allows you to scrape YouTube video details such as title, description, view count, like count, and comment count using the YouTube API. You can also fetch the channel name associated with the video.',
        images: ['/assets/scrape1.jpg'],
        screenRecording: '/assets/django.mp4',
      },
      { 
        id: 3,
        name: 'Django Chat', 
        link: 'https://github.com/Tamilmughilan/Django_chat',
        description: 'Real-time chat using Django.',
        images: ['/assets/django1.jpg','/assets/django2.jpg','/assets/django3.jpg','/assets/django4.jpg'],
        screenRecording: '',
      },
      { 
        id: 2,
        name: 'Alumni Management', 
        link: 'https://github.com/Tamilmughilan/AlumniManagement',
        description: 'Digitizing alumni interactions.',
        images: [],
        screenRecording: '',
      },
      
      { 
        id: 4,
        name: 'Parse-X', 
        link: 'https://github.com/Tamilmughilan/Parse-X',
        description: 'Real-time chat using Django.',
        images: ['assets/chat1.jpg'],
        screenRecording: '',
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
        images: ['assets/chat1.jpg'],
        screenRecording: '/assets/quiz_app.mp4',
      },
      
];

function Projects() {
  return (
    <div className="projects">
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id} className="project-card">
          <h3>{project.name}</h3>
        </Link>
      ))}
    </div>
  );
}

export default Projects;
