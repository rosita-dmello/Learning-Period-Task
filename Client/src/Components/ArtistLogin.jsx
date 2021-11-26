import React, {useState} from "react";
import {Box, TextField, Button} from '@mui/material';
import {authenticateArtist} from "../data/authoriseFunctions";
import {artistLoginPost} from "../data/api";
import { Redirect } from "react-router";

function ArtistLogin(){
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  
  const emailChange = (event) => {
    setEmail(event.target.value);
  }
  const passwordChange = (event) => {
    setPassword(event.target.value);
  }
  const sendLoginRequest = async () => {
        await artistLoginPost({email, password});
        console.log("done logging in as artist");
        authenticateArtist();
        setLoggedIn(true);

    }
  
    return loggedIn ? <Redirect to={{pathname: "/songsDisplay"}}/> : <Box className="artist-login">
      <Box className= "login-box container">
        <Box className="form">
          <h1> Log In as an Artist </h1> 
          <TextField label="Email" variant="outlined" name="email" margin="dense" fullWidth required onChange={emailChange}/>
          <TextField label="Password" variant="outlined" name="password" margin="dense" type="password" fullWidth required onChange={passwordChange}/>
          <Button className="submitButton" variant="contained" fullWidth onClick={sendLoginRequest}>
            Log in
          </Button>
        </Box>
    </Box>
    </Box> 
 
    
    
    
    
    
}

export default ArtistLogin;