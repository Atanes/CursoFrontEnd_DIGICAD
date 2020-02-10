import React from 'react';
import ReactDOM from 'react-dom';

class Texto extends React.Component {
  render() {
    return <h2>Eu sou o {this.props.nome}</h2>;
  }
}

export default Texto;