import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Upload from "./Components/Upload"
import SingleUpload from "./Components/SingleUpload";
import MultipleUpload from "./Components/MultipleUpload"
import SongsDisplay from './Components/SongsDisplay';

function App() {
 

  return <main>
  <Navbar/>
  <BrowserRouter>
       <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Register}/>
          <Route path="/upload" component={Upload}/>
          <Route path="/singleUpload" component={() => <SingleUpload/>}/>
          <Route path="/multipleUpload" component={MultipleUpload}/>
          <Route path="/displaySongs" component={SongsDisplay}/>
    
        </Switch>
  </BrowserRouter>
  </main>
   
  
}

export default App;