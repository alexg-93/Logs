import React,{useEffect} from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




const SideNav = () => {

 
  
//   const handleCloseNav = () => {
//     let sidenav = document.querySelector("#slide-out");
//     let instance = M.Sidenav.getInstance(sidenav);
//     instance.close();
 
   
   
//   };

//   const handleOpenNav = () => {
//     let sidenav = document.querySelector("#slide-out");
//     let instance = M.Sidenav.getInstance(sidenav);
//     instance.open();
   
//   }

  return (

   <>
     <div>
     <ul
        id="nav-mobile"
        className="sidenav sidenav-fixed"

      >
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>

        <li>
          <a href="#!" className="subheader">
            Logs Section
          </a>
        </li>

        <li>
          <Link to="/completedlogs">Completed logs</Link>
        </li>
        
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <a href="#!" className="subheader">
            Techs Section
          </a>
        </li>
        <li>
          <Link to="/techs">
            Techs
          </Link>
        </li>
      </ul>
     </div>
    </>
       
  



  );
};

export default SideNav;
