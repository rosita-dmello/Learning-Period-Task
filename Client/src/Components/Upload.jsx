import React from "react";
import {Box, Button} from '@mui/material';


function Upload(){

  
    return  <Box className= "container">
        <Box className="form upload-box" >
          <h1> Hi! Do you want to upload a Single track or an Album? </h1>
          <a href="/singleUpload">
          <Button className="submitButton" variant="contained" fullWidth>
            Single
          </Button>
           </a>
           <a href="/multipleUpload">
          <Button className="submitButton" variant="contained" fullWidth>
            Album
           </Button>
           </a>
        </Box>
    </Box>
  
    
}

export default Upload;