import React, { Component } from 'react';
import api from '../../EXTERNA-API/api';

export default class Main extends Component {

    constructor() {
        super();

        this.state = {
            'herois': []
        };

    }

    componentDidMount() {
        //this.getHerois();
        this.carregaInfo();
    }

    carregaInfo = async () => {
        try {
            fetch('http://api.tvmaze.com/search/shows?q=hulk')
                .then(response => response.json())
                .then(response => this.setState({ 'herois': response }));

        } catch (err) {
            console.log('Erro:', err);
        }

    }

    getHerois() {
        fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
            .then(response => response.json())
            .then(response => this.setState({ 'herois': response }));
    }

    getImagen(h) {
        if (h.show.image.medium !== 'null' && h.show.image.medium !== 'undefined') { //Se data tiver um valor
            return 'Tem Imagem';
        } else {
            return 'Não tem Imagem';
        }
    }


    render() {
        return (
            <div className="lista-sumario">
                <h1>Sumário</h1>
                {this.state.herois.map(function (heroi, index) {
                    var imagem = getImagen(heroi);
                    return (
                        <article key={index}>
                            <h2>{imagem}</h2>
                            <h3>{heroi.show.name}</h3>
                            {heroi.show.summary}
                        </article>
                    )

                })}
            </div>
        );
    }

}