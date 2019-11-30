import React from 'react';
import Navbar from './Components/Navbar/index';
import Home from './Components/Home';
import Search from './Components/Seach';
import SightDetails from './Components/Sights/Details';
import Login from './Components/Login';
import Administration from './Components/Administration';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/sights" component={Search} />
    <Route path="/details/:id" component={SightDetails} />
    <Route path="/login" component={Login} />
    <Route path="/admin" component={Administration} />
  </BrowserRouter>
);

export default App;
