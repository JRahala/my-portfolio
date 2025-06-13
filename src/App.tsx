import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import ResearchEducation from './pages/ResearchEducation';
import AwardsMedia from './pages/AwardsMedia';
import CV from './pages/CV';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/research-education" element={<ResearchEducation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/awards-media" element={<AwardsMedia />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
