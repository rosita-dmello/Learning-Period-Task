import React, {useState, useEffect} from "react";
import {Box, TextField, Button} from '@mui/material';
import GoogleButton from 'react-google-button'
import {loginPost, oAuthGet, checkUser} from "../data/api";
import {authenticate} from "../data/authoriseFunctions";
import { Redirect } from "react-router";
import GoogleLogin from "react-google-login";

function Login(props){
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [error, setError] = useState({emailError: "", passwordError: ""});

 const responseGoogle = (response) => {
   console.log(response);
 };

  const emailChange = (event) => {
    setEmail(event.target.value);
  }
  const passwordChange = (event) => {
    setPassword(event.target.value);
  }
  const sendLoginRequest = async () => {
        const receivedData = await loginPost({
          email: email,
          password: password
        });
        console.log("done logging in");
        if (receivedData.user.success !== false) {
          authenticate();
          props.setLoggedIn(true);
        }
        else {
          console.log(receivedData.user.message);
          if (receivedData.user.message === "Incorrect email") {
            setError({emailError: "No user found with this email"})
          }
          if (receivedData.user.message === "Incorrect password") {
            setError({passwordError: "Incorrect Password. Please try again."})
          }
        }
        
    }
    
   
    return props.loggedIn ? (
      <Redirect to={{ pathname: "/displaySongs" }} />
    ) : (
      <Box className="user-login">
        <Box className="login-box">
          <Box className="form">
            <h1> Log In </h1>
            <GoogleLogin
              clientId="528399711394-h2hv2d0vv41jd6hm63l16h64si0k4ucv.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            {/* <GoogleButton className="gbtn" label='Log in with Google' onClick={() => {
            const newWindow = window.open("http://localhost:3001/auth/google", "_self");
            if(newWindow.closed) {
              console.log("Logged in");
            }
            }
            }/> */}
            <hr />
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              margin="dense"
              fullWidth
              required
              onChange={emailChange}
            />
            <p className="error">{error.emailError}</p>
            <TextField
              label="Password"
              variant="outlined"
              name="password"
              margin="dense"
              type="password"
              fullWidth
              required
              onChange={passwordChange}
            />
            <p className="error">{error.passwordError}</p>
            <Button
              className="submitButton"
              variant="contained"
              fullWidth
              onClick={sendLoginRequest}
            >
              Log in
            </Button>
          </Box>
        </Box>
      </Box>
    );
}

export default Login;