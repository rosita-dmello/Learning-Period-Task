import React, {useState} from "react";
import {Box, Button, TextField} from '@mui/material';
import GoogleButton from 'react-google-button'
import {signupPost} from "../data/api";
import {authenticate} from "../data/authoriseFunctions";

function Register(){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [phone, setPhone] = useState("");
const [name, setName] = useState("");

  const emailChange = (event) => {
    setEmail(event.target.value);
  }
  const passwordChange = (event) => {
    setPassword(event.target.value);
  }
  const sendSignupRequest = async () => {
console.log({name, phone, email, password});
        await signupPost({name, phone, email, password});
        console.log("signing up done");
        authenticate();
    }
  
    return <Box>
      <Box className= "signup-box container">
        <Box className="form">
          <h1> Sign Up </h1> 
          <a href="http://localhost:3001/auth/google"><GoogleButton className="gbtn" label='Sign up with Google'/></a>
          <hr/>
          <TextField id="name" label="Full Name" variant="outlined" name="name" margin="dense" fullWidth required value={name} onChange={(event) => {setName(event.target.value);}}/>
          <TextField id="phone" type="tel" label="Phone Number" variant="outlined" name="phone" margin="dense" fullWidth required value={phone} onChange={(event) => {setPhone(event.target.value);}}/>
          <TextField id="email" label="Email" variant="outlined" name="email" margin="dense" fullWidth required value={email} onChange={emailChange}/>
          <TextField id="password" label="Password" variant="outlined" name="password" margin="dense" type="password" fullWidth required value={password} onChange={passwordChange}/>
          <Button className="submitButton" onClick={sendSignupRequest} variant="contained" fullWidth>
            Register
          </Button>
        </Box>
    </Box>
  
    </Box>
}

export default Register;