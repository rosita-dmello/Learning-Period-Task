import React, {useState} from "react";
import {Box, Button, TextField} from '@mui/material';
import {singleFileUpload} from "../data/api";
// import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

function SingleUpload(){
    const [singleFile, setSingleFile] = useState("");
    const [uploaded, setUploaded] = useState(false);
    const [songTitle, setSongTitle] = useState("");
    const [artistName, setArtistName] = useState("");

    const singleFileChange = (event) => {
        setSingleFile(event.target.files[0]);
    }
    const setTitle = (event) => {
        setSongTitle(event.target.value);
    }
    const setArtist = (event) => {
      setArtistName(event.target.value);
    }

    const uploadSingleFile = async (event) => {
        
        const formData = new FormData();
        formData.append("file", singleFile);
        formData.append("title", songTitle);
        formData.append("artist", artistName);
        await singleFileUpload(formData);
        setUploaded(true);
        console.log(singleFile);

    }

   
    return  <Box> {uploaded ? <Box>
          <h1>Congratulations! Your song is uploaded! Would you like to display all singles? </h1>
          <a href="/displaySongs"><Button> Yes, take me there </Button></a>
          <a href="/singleUpload"><Button> No, I want to upload another track </Button></a>
    </Box> : <Box className= "container">
        <form className="form" onSubmit={(e) => {e.preventDefault();}}>
          <h1> Tell us more about your track! </h1> 
          <TextField label="Track Title" variant="outlined" name="trackTitle" margin="dense" fullWidth required onChange={setTitle}/>
          <TextField label="Artist Name" variant="outlined" name="artistName" margin="dense" fullWidth required onChange={setArtist} />
          <label>Select a file: </label>
            <input type="file" name="file" onChange={singleFileChange}/>
          <Button className="submitButton" type="submit" variant="contained" fullWidth onClick = {uploadSingleFile}>
            Upload!
          </Button>
        </form>
    </Box> }
    
    </Box>
  
    
}

export default SingleUpload;