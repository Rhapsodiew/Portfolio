import React from 'react';
import { ProjectData, ProjectCard } from '../../components/Project'; // Import des données et des composants
import './ProjectPageStyles.css'; // Import des styles
import Navbar from '../../components/Navbar';

const Project = () => {
  return (
    <div className="projectpage">
      <Navbar />
      <div className='projectpage-container'>
        <h2 className='projectpage-title'>My Projects</h2>
        <div className="projectpage-cards">
          {ProjectData.map(project => (
            <div className='projectpage-card'>
              <ProjectCard 
                key={project.id} 
                title={project.title} 
                img={project.img} 
                description={project.description} 
                git={project.git} 
                techno={project.techno} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
