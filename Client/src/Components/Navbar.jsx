import React from "react";
import {AppBar} from '@mui/material';

function Navbar(){
  
return <AppBar position="static" className="nav">
      <nav className="nav shift">
      <a href="/">  <h1 className="brand-name"> 🎧 Truesic </h1></a>
      <ul className="nav-links">
      <li><a className="nav-link" href="/login">Log in</a></li>
      <li><a className="nav-link" href="/signup">Sign up</a></li>
      <li><a className="nav-link" href="http://localhost:3001/logout">Log Out</a></li>
      </ul>
      
      </nav>
    </AppBar>

}

export default Navbar;