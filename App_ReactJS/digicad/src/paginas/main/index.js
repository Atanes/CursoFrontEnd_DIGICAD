import React, { Component } from 'react';

export default class Main extends Component {

    constructor() {
          // eslint-disable-next-line no-this-before-super
          this.state = {
            'herois': []
        };

    }

    componentDidMount() {
        this.carregaInfo();
    }

    carregaInfo = async () => {
        try {
            fetch('http://api.tvmaze.com/search/shows?q=all')
                .then(response => response.json())
                .then(response => this.setState({ 'herois': response }));

        } catch (err) {
            console.log('Erro:', err);
        }

    }

    render() {
        return (
            <div className="lista-sumario">
                <h1>Sumário</h1>
                {this.state.herois.map(function (heroi, index) {
                    return (
                        <article key={index}>
                            <img src={heroi.show.image.medium} alt={heroi.show.name} />
                            <h3>{heroi.show.name}</h3>
                            {heroi.show.summary}
                        </article>
                    )

                })}
            </div>
        );
    }

}