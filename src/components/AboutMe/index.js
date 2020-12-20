import React from "react";
import selfie from "../../assets/img/rich.png"

const AboutMe = () => (
  <div className="text-center">
    <div className="" >
    <h1 className="font-sans text-6xl pb-10" >About Me</h1>
    <img  className="mx-auto pb-10" src={selfie} alt="Project"height="200" width="170" />
    <p className="font-sans text-center text-lg" >
    Richard Flores is a Software Developer , with experience building applications for Front End and Back End projects. His background in managing large scale event production, band management, and many software development proficiencies help him leverage a collabrotive and fast paced approach. Richard is fueled by her passion for understanding the nuances of how software works. He considers gimself a ‘forever student,’ eager to both build on his academic foundations in Back End and Front End development and stay in tune with the latest digital technologies  through continued coursework.
    His hunger for knowledge and determination to turn information into action has contributed to his most recent successes, where he built many collabrative projects and many on his own. Meanwhile, he vastly improved his productivity by asking questions, commenting code and keeping an organizied code base. 
    Richard believes mindfulness in the workplace is key to success - a tenet he lives out through his interests in yoga, meditation, photography, and playing guitar. Richard is currently working as a freelance video director/audio engineer and is always interested in a challenge. Reach out to Richardflores009@gmail.com to connect!
    </p>
  </div>
  
  </div>
  
);

export default AboutMe;