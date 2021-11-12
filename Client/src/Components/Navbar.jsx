import React, {useEffect, useState} from "react";
import {AppBar, Box, Button} from '@mui/material';
import Cookies from 'js-cookie'



console.log(Cookies.get("jwt"));
function Navbar(){
  const [isActive, setActive] = useState(false);
  const [isArtist, setIsArtist] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState("");
  const[loggedIn, setLoggedIn] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  }
  const closeMenu = () => {
    setActive(false);
  }
  
  
  useEffect(() => {
  setIsAuthenticated(localStorage.getItem('isAuthenticated'));
  setIsArtist(localStorage.getItem('isArtist'));
  setLoggedIn(() => isAuthenticated === "Yes" ? true : false);
  }, [])
  console.log(isAuthenticated);
  
return <AppBar position="static" className="nav">
      <nav className="nav shift">
      <a href="/">  <h1 className="brand-name"> <img src="/navLogo.png" alt="Logo" className="logo" /> Trusic </h1></a>
      <ul className={isActive ? "nav-links active" : "nav-links"}>
      {isAuthenticated === "Yes" ?  <> 
      <li className="nav-item"><a className="nav-link" onClick={closeMenu} href="/logout">Log Out</a></li>
      {isArtist === "Yes" ? <li className="nav-item"><a className="nav-link" onClick={closeMenu} href="/upload">Upload</a></li> :
      null }
      <li className="nav-item"><a className="nav-link" onClick={closeMenu} href="/displaySongs">Music Player</a></li>
      </> : <> 
      <li className="nav-item"><a className="nav-link" onClick={closeMenu} href="/artistSignup">Artist Space</a></li>
      <li className="nav-item"><a className="nav-link" onClick={closeMenu} href="/login">Log in</a></li>
      <li className="nav-item"><a className="nav-link signup-nav" onClick={closeMenu} href="/signup">
      <Button className="signup-btn" variant="contained">Sign Up</Button>
      </a></li> </> } 
      
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