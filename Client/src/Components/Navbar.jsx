import React from "react";
import {AppBar} from '@mui/material';
// import AlbumIcon from '@mui/icons-material/Album';

function Navbar(){



return <AppBar position="static" className="nav">
      <nav class="nav shift">
      <h1 class="brand-name"> 🎧 Truesic</h1>
      <ul class="nav-links">
      <li><a class="nav-link" href="/login">Log in</a></li>
      <li><a class="nav-link" href="/signup">Sign up</a></li>
      <li><a class="nav-link" href="/logout">Log Out</a></li>
      </ul>
      
      </nav>
    </AppBar>

}

export default Navbar;