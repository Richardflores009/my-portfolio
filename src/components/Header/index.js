import React from "react";
import Navigation from "../Navigation"
import About from "../AboutMe"

const Header = ({currentPage, handlePageChange}) => (
  <div className="bg-red-300 p-5">
    <div className="pb-1">
    <a href={<About/>} className="flex justify-start text-6xl sm:absolute md:justify-center sm:justify-center">Richard Flores</a>
    </div>
    
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
  </div>
);

export default Header;