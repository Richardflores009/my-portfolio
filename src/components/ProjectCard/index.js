import React from 'react';
import './style.css';

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img  src={props.image} alt="Project"height="195" width="200" />
      </div>
      <div className="content">
        <ul>
          <li>
            <a className="title" href={props.deployed}>{props.name}</a> 
          </li>
          <li>
            <a className="github" href={props.github}><img src={props.githubLogo} alt="Github Link"height="40" width="40"/></a> 
          </li>
          {/* <li>
            <a href={props.deployed}><img src={props.deployedLogo} alt="Deployed Link"height="30" width="50"/></a> 
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
