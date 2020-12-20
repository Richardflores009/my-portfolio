import React from 'react';

function NavTabs(props) {
  const tabs = ['About Me', 'Project', 'Resume', 'Contact' ];
  return (
    
    <ul className="flex justify-center w-50  ">
      {tabs.map(tab => (
        <li className="p-5 align-middle text-2xl" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className=
              'focus:ring-2 focus:ring-red-500 mx-auto rounded p-3 bg-red-400'
          
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;
