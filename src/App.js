// import logo from './logo.svg';
import './App.css';

import React from 'react';
import "./index.css";
import Home from './pages/Home/Home';
import Project from './pages/Project/ProjectPage';
import { Route, Routes } from 'react-router-dom';
// import About from './pages/About/About';
// import Resume from './pages/Resume/Resume';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />}  /> */}
    </Routes>
  );
}

export default App;
