import React from "react";
import Navigation from "../Navigation"

const Header = ({currentPage, handlePageChange}) => (
  <div className="bg-red-300 p-3">
    
    <h1 className="flex justify-center text-8xl">Richard Flores</h1>
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
  </div>
);

export default Header;