import React from 'react';
import FriendCard from '../ProjectCard';
import Wrapper from '../Wrapper';
import deployedImg from '../../assets/img/logo192.png'
import gitHubImg from '../../assets/img/github.png' 
import projects from '../projects.json';
// import './App.css';

function Project() {
  // const [friendsList, setFriendsList] = useState(projects);


  return (
    <Wrapper>
      <h1 className="title">Portfolio</h1>
      {projects.map(project => (
        <FriendCard
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
    </Wrapper>
  );
}

export default Project;
