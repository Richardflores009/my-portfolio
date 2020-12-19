import React from 'react';


function ProjectCard(props) {
  return (
    <div className="">
      <div className=" max-w-sm rounded overflow-hidden shadow-lg bg-white ">
      <img src={props.image} alt="Project" className="w-full" />
      <div className="px-6 py-4 text-center" ><a className=" font-bold text-black-500 text-xl mb-2" href={props.deployed}>{props.name}</a></div>
      <div className="px-6 py-4 "><a className=" font-bold text-xl mb-2" href={props.github}><img className="mx-auto" src={props.githubLogo} alt="Github Link"height="40" width="40"/></a></div>
    </div>
    </div>
    
  );
}

export default ProjectCard;
