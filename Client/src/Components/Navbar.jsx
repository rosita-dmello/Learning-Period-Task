import React, {useState} from "react";
import {AppBar, Box} from '@mui/material';
import Cookies from 'js-cookie'

console.log(Cookies.get("jwt"));
function Navbar(){
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  }
  const closeMenu = () => {
    setActive(false);
  }
return <AppBar position="static" className="nav">
      <nav className="nav shift">
      <a href="/">  <h1 className="brand-name"> 🎧 Truesic </h1></a>
      <ul className={isActive ? "nav-links active" : "nav-links"}>
      <li className="nav-item"><a className="nav-link" onClick={closeMenu} href="/login">Log in</a></li>
      <li className="nav-item"><a className="nav-link" onClick={closeMenu} href="/signup">Sign up</a></li>
      <li className="nav-item"><a className="nav-link" onClick={closeMenu} href="http://localhost:3001/logout">Log Out</a></li>
      <li className="nav-item"><a className="nav-link" onClick={closeMenu} href="/upload">Upload</a></li>
      </ul>
      <Box className={isActive ? "hamburger active" : "hamburger"} onClick={toggleClass} >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
      </Box>
      
      </nav>
    </AppBar>

}

export default Navbar;