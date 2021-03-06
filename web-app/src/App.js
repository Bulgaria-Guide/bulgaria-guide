import React from 'react';
import Navbar from './Components/Navbar/index';
import Home from './Components/Home';
import SightDetails from './Components/Sights/Details';
import SightForm from './Components/Sights/New';
import Login from './Components/Login';
import Register from './Components/Register';
import Administration from './Components/Administration';
import { BrowserRouter, Route } from 'react-router-dom';
import AccountProvider from './context/account';

const App = () => (
  <AccountProvider>
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/sight/add" component={SightForm} />
      <Route path="/details/:id" component={SightDetails} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/admin" component={Administration} />
    </BrowserRouter>
  </AccountProvider>
);

export default App;
