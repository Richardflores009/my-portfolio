import React from "react";
import resume from '../../assets/img/resume.pdf'

const Resume = () => (
  <div className=" ">
    <div className="mb-4 p-2 bg-blue-400 hover:bg-blue-500 w-40 rounded">
    <a className="font-bold " href={resume} download>Download Resume</a>
    </div>
    <div className="pb-10">
    <h1 className=' text-3xl pb-5'>Front End Developer skills</h1>
    <ol>
      <li className="pb-2">
      1. HTML/CSS
      </li>
      <li className="pb-2">
      2. JAVASCRIPT/JQUERY
      </li>
      <li className="pb-2">
      3. CSS AND JAVASCRIPT FRAMEWORKS
      </li>
      <li className="pb-2">
      4. CSS PREPROCESSING
      </li>
      <li className="pb-2">
      5. VERSION CONTROL/GIT
      </li>
      <li className="pb-2">
      6. TESTING/DEBUGGING
      </li>
      <li className="pb-2">
      7. BROWSER DEVELOPER TOOLS
      </li>
    </ol>
    </div>
    <h1 className=' text-3xl pb-5'>Back End Developer skills</h1>
    <ol>
      <li className="pb-2">
      1. HTML/CSS
      </li>
      <li className="pb-2">
      2. JAVASCRIPT/JQUERY
      </li>
      <li className="pb-2">
      3. CSS AND JAVASCRIPT FRAMEWORKS
      </li>
      <li className="pb-2">
      4. SQL
      </li>
      <li className="pb-2">
      5. Git 
      </li>
      <li className="pb-2">
      6. NODE.JS
      </li>
      <li className="pb-2">
      7. Communication 
      </li>
    </ol>
  
  </div>
  
);

export default Resume;