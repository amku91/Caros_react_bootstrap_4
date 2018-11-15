import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Components/Class/Home/Home';

const Routes = () => {
    return (
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
    );
}

export default Routes;