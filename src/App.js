import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
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
    <main className="bg-green-500 min-h-screen">
      <Header currentPage={currentPage} handlePageChange={handlePageChange}>
      
      </Header>

      
       
      <div className="p-48">
      <div >{renderPage(currentPage)}</div>
      
      </div>
      <div className="">
      <Footer/>
      </div>
      
      
      
    </main>
  );
}


export default App;
