import React from 'react';

function SideNav(props: SideNavProps) {
  return (
    <>
      <div className="pt-4 sidenav bg-light border-right px-2">
        <div className="text-muted mb-2 pl-2 text-bold"><b>General</b></div>
        <div className="list-group list-group-flush mb-2">
          <a className="list-group-item py-2 rounded d-flex justify-content-between align-items-center list-group-action list-group-item-light border-0">
            Overview
          </a>
        </div>

        <div className="text-muted mb-2 pl-2 text-bold"><b>Formulae</b></div>
        <div className="list-group list-group-flush">
          <a className="list-group-item py-2 rounded d-flex justify-content-between align-items-center list-group-action list-group-item-light border-0">
            Leaves
          </a>

          <a className="list-group-item py-2 rounded d-flex justify-content-between align-items-center list-group-action list-group-item-light border-0">
            Installed
          </a>        

          <a className="list-group-item py-2 rounded d-flex justify-content-between align-items-center list-group-action list-group-item-light border-0">
            Updates
          </a>

          <a className="list-group-item py-2 rounded d-flex justify-content-between align-items-center list-group-action list-group-item-light border-0">
            Discover
          </a>
        </div>

        <div className="text-muted mb-2 pl-2 text-bold"><b>Casks</b></div>
        <div className="list-group list-group-flush mb-2">
          <a className="list-group-item py-2 rounded d-flex justify-content-between align-items-center list-group-action list-group-item-light border-0">
            Installed
          </a>
        </div>      
      </div>        
    </>
  );
}

export default SideNav;





