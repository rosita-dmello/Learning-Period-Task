import React, {useState} from "react";
import {Box, TextField, Button} from '@mui/material';
import GoogleButton from 'react-google-button'
import {loginPost} from "../data/api";
import {authenticate} from "../data/authoriseFunctions";
import { Redirect } from "react-router";

function Login(){
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
        await loginPost({
          email: email,
          password: password
        });
        console.log("done logging in");
        authenticate();
        setLoggedIn(true);
    }
  
    return loggedIn ? <Redirect to={{pathname: "/"}}/> : <Box>
      <Box className= "login-box container">
        <Box className="form">
          <h1> Log In </h1> 
          <a href="http://localhost:3001/auth/google"><GoogleButton className="gbtn" label='Log in with Google'/></a>
          <hr/>
          <TextField label="Email" variant="outlined" name="email" margin="dense" fullWidth required onChange={emailChange}/>
          <TextField label="Password" variant="outlined" name="password" margin="dense" type="password" fullWidth required onChange={passwordChange}/>
          <Button className="submitButton" variant="contained" fullWidth onClick={sendLoginRequest}>
            Log in
          </Button>
        </Box>
    </Box>
    </Box>
}

export default Login;