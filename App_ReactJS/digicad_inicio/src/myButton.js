import React from 'react';
import ReactDOM from 'react-dom';

class Botao extends React.Component {
  render() {
    return <button>Botão {this.props.id}</button>;
  }
}

export default Botao;
