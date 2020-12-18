import React from "react";
import Navigation from "../Navigation"

const Header = ({currentPage, handlePageChange}) => (
  <div className="header-div">
    <h1 className="head">Richard Flores</h1>
    
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
  </div>
);

export default Header;