import React from 'react';
import ProjectCard from '../ProjectCard';

import deployedImg from '../../assets/img/logo192.png'
import gitHubImg from '../../assets/img/github.png' 
import projects from '../projects.json';
// import './App.css';

function Project() {
  // const [friendsList, setFriendsList] = useState(projects);


  return (
    <div  className="container mx-auto">
  
      <h1 className="flex justify-center mb-24 text-6xl">Portfolio</h1>
      <div className="grid sm:grid-cols-4 gap-4 sm:grid-cols ">
      {projects.map(project => (
        <ProjectCard
          id={project.id}
          key={project.id}
          name={project.name}
          image={project.image}
          github={project.github}
          deployed={project.deployed}
          githubLogo={gitHubImg}
          deployedLogo={deployedImg}
        />
      ))}
      </div>
      
   
    </div>
    
  );
}

export default Project;
