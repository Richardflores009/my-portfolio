import React from 'react';

function NavTabs(props) {
  const tabs = ['About Me', 'Project', 'Contact'];
  return (
    
    <ul className="flex justify-center w-50  ">
      {tabs.map(tab => (
        <li className="p-5 align-middle text-2xl" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;
