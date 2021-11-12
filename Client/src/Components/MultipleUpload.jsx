import React, {useState} from "react";
import {Box, Button, TextField} from '@mui/material';
import {multipleFilesUpload} from "../data/api";

function MultipleUpload(){
    const [multipleFiles, setMultipleFiles] = useState("");
    const [title, setTitle] = useState("");
    const [uploaded, setUploaded] = useState(false);
    const [artistName, setArtistName] = useState("");

    const multipleFileChange = (event) => {
        setMultipleFiles(event.target.files);

    }
   
    const setArtist = (event) => {
      setArtistName(event.target.value);
    }
    
     const uploadMultipleFiles = async (event) => {

        const formData = new FormData();
        formData.append("title", title);
        formData.append("artist", artistName);
        for (let i=0; i<multipleFiles.length; i++) {
          formData.append("files", multipleFiles[i]);
        }
        await multipleFilesUpload(formData);
        
        setUploaded(true);

    }
    return <Box> {uploaded ? <Box>
          <h1>Congratulations! Your Album is uploaded! Would you like to display all Albums? </h1>
          <a href="/displaySongs"><Button> Yes, take me there </Button></a>
          <a href="/multipleUpload"><Button> No, I want to upload another Album </Button></a>
    </Box> : <Box className= "container">
        <form className="form"  onSubmit={(e) => {e.preventDefault();}}>
          <h1> Tell us more about your Album! </h1> 
          <TextField label="Album Title" variant="outlined" name="title" margin="dense" fullWidth required onChange={(event) => {setTitle(event.target.value)}}/>
          <TextField label="Artist Name" variant="outlined" name="artistName" margin="dense" fullWidth required onChange={setArtist}/>
          <label for="file">Select all files: </label>
            <input type="file" name="files" multiple onChange={multipleFileChange} accept="audio/mp3,audio/aac,audio/wav,audio/mpeg"/>
          <Button className="submitButton" type="submit" variant="contained" fullWidth onClick = {uploadMultipleFiles}>
            Upload!
          </Button>
        </form>
    </Box> }
    
    </Box>
  
    
}

export default MultipleUpload;