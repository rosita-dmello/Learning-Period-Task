import React from "react";
import {Box, Button, TextField} from '@mui/material';
import GoogleButton from 'react-google-button'


function Register(){

  
    return <Box>
      <Box className= "signup-box container">
        <form className="form" action="/signup" method="post" >
          <h1> Sign Up </h1> 
          <a href="http://localhost:3001/auth/google"><GoogleButton className="gbtn" label='Sign up with Google'/></a>
          <hr/>
          <TextField id="name" label="Full Name" variant="outlined" name="name" margin="dense" fullWidth required/>
          <TextField id="phone" type="tel" label="Phone Number" variant="outlined" name="phone" margin="dense" fullWidth required/>
          <TextField id="email" label="Email" variant="outlined" name="email" margin="dense" fullWidth required/>
          <TextField id="password" label="Password" variant="outlined" name="password" margin="dense" type="password" fullWidth required/>
          <Button className="submitButton" type="submit" variant="contained" fullWidth>
            Register
          </Button>
        </form>
    </Box>
  
    </Box>
}

export default Register;