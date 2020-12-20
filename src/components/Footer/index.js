import React from "react";
import githubLogo from '../../assets/img/github.png'
import linkedInLogo from '../../assets/img/linkedin.png'
import redditLogo from '../../assets/img/reddit.webp'


const Footer = () => (
  <footer className="flex justify-center bg-pink-400">
     <a className="p-5" href="https://github.com/Richardflores009"><img src={githubLogo} alt="Github Link"height="55" width="55"/></a>
     <a className="p-5" href="https://www.linkedin.com/in/richard-flores-7a19578b/"><img src={linkedInLogo} alt="linkedin Link"height="55" width="55"/></a>
     <a className="p-5" href="https://www.reddit.com/user/DickFlowersOfficial"><img src={redditLogo} alt="Reddit Link"height="55" width="55"/></a>    
  </footer>
);

export default Footer;