import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About'; // Assuming Process.js contains your farmers' content
import Login from './Login'; // Create this component as needed
import './h.css'; // Your styles
import Register from './Register'; // Cr
import FeedBack from './FeedBack';
import Farm from './Farm';
import Homee from './Homee';
import Researchs from './Researchs';
import ResearchMedia from './ResearchMedia';
import ResearchRate from './ResearchRate';

const App = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/homee" element={<Homee />} />
            <Route path="/about" element={<About />} />
            <Route path="/farmers" element={<Farm/>} />
            <Route path="/researchMedia" element={<ResearchMedia />} />
            <Route path="/researchRate" element={<ResearchRate />} />
            <Route path="/feedBack" element={<FeedBack />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/researchs" element={<Researchs />} />
          </Routes>
    </Router>
  );
};

export default App;
