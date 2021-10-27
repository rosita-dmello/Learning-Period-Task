import React, {useState, useEffect} from "react";
import {Box} from '@mui/material';

import {getSingleFiles, getMultipleFiles} from "../data/api";


function SongsDisplay(){
    
    const [multipleFiles, setMultipleFiles] = useState([]);
    const [singleFiles, setSingleFiles] = useState([]);
    

  
    const getSingleFilesList = async () => {
        try {
            const filesList = await getSingleFiles();
            setSingleFiles(filesList);
        
        }
        catch (err) {
            console.log(err);
        }
    }
    const getMultipleFilesList = async () => {
        try {
            const filesList = await getMultipleFiles();
            setMultipleFiles(filesList);
        
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getSingleFilesList();
        getMultipleFilesList();
    }, []);
    console.log(multipleFiles);


    return <Box>
     <Box>
      <h1>Single Tracks</h1>
        {singleFiles.map((file) => {
            return <Box  className="tracks">
                <h2>{file.fileName}</h2>
            </Box>
        })}
        </Box>
        <Box>
        <h1>Albums</h1>
        {multipleFiles.map((album) => {
            return <Box>
            <Box key={album._id} className="albumTitle">
                <h2>{album.title}</h2>
            </Box>
            <Box className="tracks">
                {album.files.map((file) => {
                    return <Box key={file._id}>
                        {file.fileName}
                    </Box>
                })}
            </Box>
            </Box>
        })}
    </Box>
  
    </Box>
    
}

export default SongsDisplay;
