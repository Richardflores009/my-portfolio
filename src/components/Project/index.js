import React, { useState } from 'react';
import FriendCard from '../ProjectCard';
import Wrapper from '../Wrapper';
import projects from '../projects.json';
// import './App.css';

function Project() {
  const [friendsList, setFriendsList] = useState(projects);


  return (
    <Wrapper>
      <h1 className="title">Portfolio</h1>
      {friendsList.map(project => (
        <FriendCard
          id={project.id}
          key={project.id}
          name={project.name}
          image={project.image}
          github={project.github}
          deployed={project.deployed}
        />
      ))}
    </Wrapper>
  );
}

export default Project;
