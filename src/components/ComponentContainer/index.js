// import React, { useState } from 'react';
// import Header from '../Header';
// import Footer from '../Footer';
// import Navigation from '../Navigation';
// import Project from '../Project';
// import Contact from '../Contact'
// import AboutMe from '../AboutMe'
// import Home from '../Home'


// function Portfolio() {
//   const [currentPage, handlePageChange] = useState('Home');

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'AboutMe':
//         return <AboutMe />;
//       case 'Project':
//         return <Project />;
//       case 'Contact':
//         return <Contact />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div>
      
//       <Header>
//       <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
//       </Header>  
//       <main>
//       <div>{renderPage(currentPage)}</div>
//       </main>
//       <Footer/>
//     </div>
//   );
// }

// export default Portfolio;
// {/* <div className="App">
//       <Header className="App-header">
//       <Navigation></Navigation>
//       </Header>
//       <main>

//       </main>
//     </div> */}