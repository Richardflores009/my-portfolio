import React from "react";
import githubLogo from '../../assets/img/github.png'
import linkedInLogo from '../../assets/img/linkedin.png'
import './style.css';

const Footer = () => (
  <footer className="footer">
     <a className="github" href="https://github.com/Richardflores009"><img src={githubLogo} alt="Github Link"height="55" width="55"/></a>
     <a className="linkedin" href="https://www.linkedin.com/in/richard-flores-7a19578b/"><img src={linkedInLogo} alt="linkedin Link"height="55" width="55"/></a>  
  </footer>
);

export default Footer;