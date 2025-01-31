import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import Lottie from 'lottie-react';
import coolAnimation from './coolAnimation.json';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="footer-layout">
          <div className="animation-container">
            <Lottie animationData={coolAnimation} loop autoplay style={{ width: 80, height: 80 }} /> {/* Reduced size */}
          </div>

          <div className="social-icons">
            <motion.a
              href="https://www.linkedin.com/in/tamil-mughilan-426b21258/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="icon" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/tamilmughilan/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram className="icon" />
            </motion.a>

            <motion.a
              href="https://github.com/Tamilmughilan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="icon" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;