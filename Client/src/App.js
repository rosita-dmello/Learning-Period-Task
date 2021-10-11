import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  

  return <main>
  <Navbar/>
  <BrowserRouter>
       <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Register}/>
    
        </Switch>
  </BrowserRouter>
  </main>
   
  
}

export default App;