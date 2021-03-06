import React, { Component } from 'react';
import logo from './logo.svg';
import Level1 from './level-1-inline/Level1';
import Level2 from './level-2-css-in-css/Level2';
import Level3 from './level-3-css-in-js/Level3';
import './App.css';
import Level4 from "./level-4-conditional-styling/Level4";
import LevelWrapper from "./LevelWrapper";
import image from './bg_image.jpeg';




class App extends Component {

  render() {
    let allLevels = [ <Level1/>, <Level2/>, <Level3/>, <Level4/>];
    return (
      <div className="App" style={{background : image}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Component Styling - React Meetup #34</h1>
        </header>
        <p className="App-intro">
            {
                allLevels.map((level , index) => (
                    <LevelWrapper key={index} level={index}>
                        {level}
                    </LevelWrapper>
                ))
            }
        </p>
      </div>
    );
  }
}

export default App;
