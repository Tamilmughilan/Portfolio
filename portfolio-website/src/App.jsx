import React from 'react';
import './styles.css'; // Import global styles
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/projectDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router basename="/Portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;