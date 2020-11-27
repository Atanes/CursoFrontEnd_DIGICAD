import React, { Component } from "react";
import "./conversor.css"

export default class Conversor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
            simbolo_moeda: "",
        };

        this.converter = this.converter.bind(this);
    }

    converter() {
        let de_para = this.props.moedaA + "_" + this.props.moedaB;
        let url =
            "https://free.currconv.com/api/v7/convert?q=" +
            de_para + "&compact=ultra&apiKey=fe631ff96e63f697d2cb";

        switch (this.props.moedaB) {
            case 'BRL':
                this.setState({ simbolo_moeda: 'R$' });
                break;
            case 'USD':
                this.setState({ simbolo_moeda: 'US$' });
                break;
            case 'EUR':
                this.setState({ simbolo_moeda: '€' });
                break;
            case 'CAD':
                this.setState({ simbolo_moeda: 'CAD $' });
                break;
            default:
                this.setState({ simbolo_moeda: '' });

        }

        fetch(url)
            .then((res) => {
                return res.json();
            }).then((json) => {
                let cotacao = json[de_para];
                let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2);
                this.setState({ moedaB_valor });
            });
    }

    render() {
        return (
            <div className="conversor">
                <h2>
                    Conversor de valores: {this.props.moedaA} para {this.props.moedaB}
                </h2>
                <input
                    type="text"
                    onChange={(Event) => {
                        this.setState({ moedaA_valor: Event.target.value });
                    }}
                ></input>
                <input type="button" value="Converter" onClick={this.converter}></input>
                <h2>{this.state.simbolo_moeda} {this.state.moedaB_valor}</h2>
            </div>
        );
    }
}
