import React from 'react';
import Botao from './myButton';
import Texto from './myText';

class FormEnd extends React.Component {
    constructor() {
        super();

        this.state = {
            cep: '',
            rua: '',
            complemento: '',
            bairro: '',
            cidade: '',
            estado: '',
        };

    }

    buscaCEP(cep) {

        const url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url).then(response => {
            return response.json();
        })
            .then(data => {
                if (data.erro) {
                    alert("O CEP DIGITADO ESTÁ INVÁLIDO");
                    return;
                }
                this.prencheCampos(data);

            })


    }

    prencheCampos(data) {
        document.getElementById("rua").value = data.logradouro
        document.getElementById("complemento").value = data.complemento;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("estado").value = data.uf;

    }

    handleCepChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        this.mostraValor(e.target.value);
    }

    componentDidMount() {
        this.getInitialState();
    }

    getInitialState() {
        return { cep: '' };
    }

    mostraValor(nrcep) {
        this.buscaCEP(nrcep);
    }

    render() {
        return (
            <div className="container">
                <Texto conteudo="Formulário para pesquisa de endereço - API ViaCep + React" />
                <form className="form-inline">
                    <div className="form-group">
                        <label className="mr-sm-2">CEP</label>
                        <input className="form-control mb-2 mr-sm-2" type="text" id="cep" name="cep"
                            required placeholder="Insira o seu CEP" pattern="\d{5}-?\d{3}"
                            onChange={this.handleCepChange} />
                    </div>
                    <div className="form-group">
                        <label className="mr-sm-2">Rua</label>
                        <input type="text" className="form-control mb-2 mr-sm-2" id="rua" placeholder="..."
                        />
                    </div>
                    <div className="form-group">
                        <label className="mr-sm-2">Complemento</label>
                        <input type="text" className="form-control mb-2 mr-sm-2" id="complemento" placeholder="..."
                        />
                    </div>
                    <div className="form-group">
                        <label className="mr-sm-2">Bairro</label>
                        <input type="text" className="form-control mb-2 mr-sm-2" id="bairro" placeholder="..."
                        />
                    </div>
                    <div className="form-group">
                        <label className="mr-sm-2">Cidade</label>
                        <input type="text" className="form-control mb-2 mr-sm-2" id="cidade" placeholder="..."
                        />
                    </div>
                    <div className="form-group">
                        <label className="mr-sm-2">Estado</label>
                        <input type="text" className="form-control mb-2 mr-sm-2" id="estado" placeholder="..."
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" id="btnPesquisar" className="btn btn-primary mb-2">Pesquisa</button>
                        <button type="button" id="btnLimpar" className="btn btn-danger mb-2">Limpar</button>
                        <Botao tipo="submit" texto="Enviar" />
                    </div>
                </form>
            </div>

        )
    }
}

export default FormEnd;