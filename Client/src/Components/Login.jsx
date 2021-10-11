import React from "react";
import {Box, TextField, Button} from '@mui/material';
import GoogleButton from 'react-google-button'
function Login(){


    return <Box>
      <Box className= "login-box container">
        <form className="form" action="/login" method="post" >
          <h1> Log In </h1> 
          <a href="http://localhost:3001/auth/google"><GoogleButton className="gbtn" label='Log in with Google'/></a>
          <hr/>
          <TextField id="email" label="Email" variant="outlined" name="email" margin="dense" fullWidth required/>
          <TextField id="password" label="Password" variant="outlined" name="password" margin="dense" type="password" fullWidth required/>
          <Button className="submitButton" type="submit" variant="contained" fullWidth>
            Log in
          </Button>
        </form>
    </Box>
    </Box>
}

export default Login;