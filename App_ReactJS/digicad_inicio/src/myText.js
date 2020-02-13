import React from 'react';

class Texto extends React.Component {
  render() {
    return <h2>Eu sou o {this.props.conteudo}</h2>;
  }
}

export default Texto;