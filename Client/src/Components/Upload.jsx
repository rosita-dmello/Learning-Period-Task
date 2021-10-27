import React from "react";
import {Box, Button} from '@mui/material';


function Upload(){

  
    return  <Box className= "container">
        <form className="form" >
          <h1> Hi! Do you want to upload a Single track or an Album? </h1>
          <Button className="submitButton" variant="contained" fullWidth>
          <a href="/singleUpload">
            Single
          </a> </Button>
          <Button className="submitButton" variant="contained" fullWidth>
          <a href="/multipleUpload">
            Album
          </a> </Button>
        </form>
    </Box>
  
    
}

export default Upload;