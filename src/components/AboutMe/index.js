import React from "react";
import selfie from "../../assets/img/rich.png"

const AboutMe = () => (
  <div className="text-center">
    <div className="" >
    <h1 className="font-sans text-6xl pb-10" >About Me</h1>
    <img  className="mx-auto pb-10" src={selfie} alt="Project"height="200" width="170" />
    <p className="font-sans text-center text-lg" >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
      varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
      Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
      imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum ligula
      in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit.
      Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
      consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
      fames ac ante ipsum primis in faucibus.
    </p>
  </div>
  
  </div>
  
);

export default AboutMe;