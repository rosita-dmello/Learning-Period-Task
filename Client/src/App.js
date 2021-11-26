

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import "./App.css";
// import protectRoutes from "./Components/protectRoutes";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Upload from "./Components/Upload"
import SingleUpload from "./Components/SingleUpload";
import MultipleUpload from "./Components/MultipleUpload"
import SongsDisplay from "./Components/SongsDisplay";
import ArtistRegister from "./Components/ArtistRegister";
import ArtistLogin from "./Components/ArtistLogin";
import ProtectedRoute from "./Components/ProtectedRoute";
import ArtistOnly from "./Components/ArtistOnly"
import Logout from "./Components/Logout";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import Footer from "./Components/Footer"
function App() {


const [audioList, Display] = SongsDisplay();
  return <main>
  <Navbar/>
  <BrowserRouter>
       <Switch>
          <Route path="/" exact> <Home/> </Route>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Register}/>
          <Route path="/artistLogin" component={ArtistLogin}/>
          <Route path="/artistSignup" component={ArtistRegister}/>
          <ArtistOnly path="/upload"><Upload/></ArtistOnly>
          <ArtistOnly path="/singleUpload"><SingleUpload/></ArtistOnly>
          <ArtistOnly path="/multipleUpload"><MultipleUpload/></ArtistOnly>
          <ProtectedRoute path="/displaySongs"><Display/></ProtectedRoute>
          <Route path="/logout" component={Logout}/>
    
        </Switch>
  </BrowserRouter>
  <Footer/>

  
  </main>
   
}

export default App;