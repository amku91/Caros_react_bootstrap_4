import React, { Component } from 'react';

import './App.css';

import Header from './Components/Class/Header/Header';
import ContainerFluidPadding from './Components/Simple/ContainerFluidPadding/ContainerFluidPadding';
import Routes from './Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <ContainerFluidPadding></ContainerFluidPadding>
        <Routes></Routes>
      </div>
    );
  }
}

export default App;
