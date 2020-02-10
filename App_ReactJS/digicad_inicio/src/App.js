import React from 'react';
import logo from './logo.svg';
import './App.css';
import Botao from './myButton';
import Texto from './myText';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Botao id="1"/>
        <Texto nome="Atanes"/>
        <Botao id="2"/>
        <Texto nome="Alexandre"/>
      </div>
    );
  }
}

export default App;
