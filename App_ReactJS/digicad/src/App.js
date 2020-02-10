import React, { Component } from 'react';
import Header from "./componentes/cabecalho";
import "./estilo-global.css";
import "./paginas/main/estilo.css"
import Main from './paginas/main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
