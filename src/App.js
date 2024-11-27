// import logo from './logo.svg';
import './App.css';

import React from 'react';
import "./index.css";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Project from './pages/Project/Project';
import Resume from './pages/Resume/Resume';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/resume" element={<Resume />}  />
    </Routes>
  );
}

export default App;
