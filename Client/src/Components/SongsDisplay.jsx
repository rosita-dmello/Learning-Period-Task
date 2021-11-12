import React, {useState, useEffect} from "react";
import {Box, Button} from '@mui/material';

import {getSingleFiles, getMultipleFiles} from "../data/api";

import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'


function SongsDisplay(){
    
    const [multipleFiles, setMultipleFiles] = useState([]);
    const [singleFiles, setSingleFiles] = useState([]);
    const [name, setName] = useState("");
    const [source, setSource] = useState("");
    let audioList = [{
        name: name,
        musicSrc: source
    }];
    
    const setSong = async (event) => {
        console.log(event.target.value);
        const requiredFile = singleFiles.find( ({ fileName }) => fileName === event.target.value );
        let path = convertString("http://localhost:3001/" + requiredFile.filePath);
        setSource(path);
        setName(requiredFile.songTitle);
        
    }
    const playAlbum = async(event, album) => {
        console.log(event.target.value);
        console.log(album);
        const requiredFile = album.files.find( ({ fileName }) => fileName === event.target.value );
        console.log(requiredFile);
        let path = convertString("http://localhost:3001/" + requiredFile.filePath);
        setName(requiredFile.fileName);
        setSource(path);
        // const list = [];
        // list.push({
        //     name: requiredFile.fileName,
        //     musicSrc: path
        // })
        // album.files.forEach((file) => {
        //     path = convertString("http://localhost:3001/" + file.filePath);
        //     list.push({
        //     name: file.fileName,
        //     musicSrc: path
        // })
        // })
        // audioList = list;
        
        
    }
    
     
    const convertString = (path) => {
        path = path.replace(/\\/g, "/");
        path = path.replace(/ /g, "%20");
        return path;
    }
    
    const getSingleFilesList = async () => {
        try {
            const filesList = await getSingleFiles();
            setSingleFiles(filesList);
            // setName(filesList[0].songTitle);
            // let path = "http://localhost:3001/" + filesList[0].filePath;
            // path = path.replace(/\\/g, "/");
            // path = path.replace(/ /g, "%20");
            // setSource(path);
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
    function Display() {
        return <Box>
     <Box>
      <h1>Single Tracks</h1>
        {singleFiles.map((file) => {
            return <Box className="tracks">
                <Button key={file._id} className="songName" value={file.fileName} onClick={setSong}>{file.songTitle}</Button>
            </Box>
        })}
        </Box>
        <Box>
        <h1>Albums</h1>
        {multipleFiles.map((album) => {
        return <Box>
            <Box key={album._id} className="albumTitle">
                <h2>{album.albumTitle}</h2>
            </Box>
            <Box className="tracks">
                {album.files.map((file) => {
                    return <Button key={file._id} className="songName" value={file.fileName} onClick={(event) => {playAlbum(event,album)}}>
                        {file.fileName}
                    </Button>
                })}
            </Box>
            </Box>
        })}
    </Box>
    <ReactJkMusicPlayer
      quietUpdate
      clearPriorAudioLists
      audioLists={audioList}
      theme="auto"
      mode="full"
      autoHiddenCover
      spaceBar
      toggleMode = {false}
      showMiniProcessBar = "true"
      showDownload = {false}
      showThemeSwitch = {false}
    />

    </Box>
    }

    return [audioList, Display]
    
}

export default SongsDisplay;
