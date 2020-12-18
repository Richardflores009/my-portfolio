import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'


function App() {
  const [currentPage, handlePageChange] = useState('About Me');

  const renderPage = () => {
    switch (currentPage) {
      case 'About Me':
        return <AboutMe />;
      case 'Project':
        return <Project />;
      case 'Contact':
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };
  return (
    <div>
      <Header/>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
       
      <main>
      <div>{renderPage(currentPage)}</div>
      </main>
      <footer>
      <Footer/>
      </footer>
      
    </div>
  );
}


export default App;
