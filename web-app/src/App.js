import React from "react";
import Navbar from "./Components/Navbar/index";
import Home from "./Components/Home";
import SightsList from "./Components/Sights/List";
import SightDetails from "./Components/Sights/Details";
import Login from "./Components/Login";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/sights" component={SightsList} />
    <Route path="/details" component={SightDetails} />
    <Route path="/login" component={Login} />
  </BrowserRouter>
);

export default App;
