
import React, { Component } from 'react';
import './App.css';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { Gallery } from './components/gallery';

class App extends Component{
  constructor(){
    super();
      this.state = {}
    };
  

render() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gallery />

    </div>
  );
}
}

export default App;
