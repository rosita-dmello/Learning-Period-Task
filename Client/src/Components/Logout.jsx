import React, { useEffect } from "react";
import {unauthenticate} from "../data/authoriseFunctions";
import { Redirect } from 'react-router-dom';
function Logout(props){
props.setLoggedIn(false);
useEffect(() => {
    unauthenticate();
    
}, [])
    return <Redirect to={{pathname:"/"}}></Redirect>
}

export default Logout;