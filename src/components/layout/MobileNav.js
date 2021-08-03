import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const MobileNav = () => {


    // const handleCloseNav = () => {
    //     let sidenav = document.querySelector("#mobile-demo")
    //     let instance = M.Sidenav.getInstance(sidenav);
    //     instance.close();
      
    // }
    
    
    

    return (
     <div>
        
    <nav className="nav-extended hide-on-large-only blue" style={{width:'100%'}} >
   
     
      
      <ul id="nav-mobile" className="" style={{display:'flex',justifyContent:'center'}}>
        <li><Link to="/">Home</Link></li>  
        <li><Link to="/completedlogs">Completed logs</Link></li>
        <li><Link to="/techs">Techs</Link></li>
      </ul>

 
  </nav>

 
  {/* <ul className="sidenav" id="mobile-demo">
    <li><a href="/">Home</a></li>
    <li><a href="/completedlogs">Completed logs</a></li>
    <li><a href="/team">Team</a></li>
  </ul>  */}



 
</div>
    )
}

export default MobileNav
