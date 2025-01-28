import React from 'react';
import './styles.css'; // Import global styles
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/projectDetail';
import About from './pages/About'; // Added About Page
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} /> {/* Added Route for About */}
        <Route path="/contact" element={<Contact />} /> {/* Added Route for Contact */}
        <Route path="/projects/:id" element={<ProjectDetail />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
