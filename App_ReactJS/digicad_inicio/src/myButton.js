import React from 'react';

class Botao extends React.Component {
  render() {
    return <button className="btn btn-primary mb-2" type={this.props.tipo}>{this.props.texto}</button>;
  }
}

export default Botao;
