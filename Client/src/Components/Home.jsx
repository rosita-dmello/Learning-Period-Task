import React from "react";
import {Box, Button} from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeadphones, faCompactDisc } from '@fortawesome/free-solid-svg-icons'
function Home(){


    return <Box>
    <Box className="container-home container hero">
        <h1>Welcome to Trusic</h1>
        <p>A New Experience to the World of Music.</p>
    </Box>
    <Box className="second-container container-home">
        {/* <h2>The Gems of the Musical World are just one click away</h2>
        <p>Sign Up to Trusic now and listen to the Entire Collection for free</p> */}
        <Box className="row features">
            <Box className="column">
                <p><FontAwesomeIcon icon={faStar} className="feature-icon"/></p>
                <h3>High Quality Music Anytime</h3>
                
            </Box>
            <Box className="column">
                <p><FontAwesomeIcon icon={faHeadphones} className="feature-icon"/></p>
                <h3>Listen through Any Device</h3>
                
            </Box>
            <Box className="column">
                <p><FontAwesomeIcon icon={faCompactDisc} className="feature-icon"/></p>
                <h3>Ever Growing Collection</h3>
                
            </Box>
        </Box>
    </Box>
    <Box className="container container-home third-container">
        <h2>Showcase your Musical Talent to the whole world</h2>
        <p>Sign Up as an Artist now and Upload your music for Free!</p>
    </Box>
     </Box>
}

export default Home;