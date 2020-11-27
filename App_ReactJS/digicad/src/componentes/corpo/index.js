import React from 'react';
import './corpo.css';

const Corpo = (props) => (
    <div id="title-body">
        <h1>Curso ReactJS - {props.empresa}</h1>
        <img src="../imagens/mundomelhor.png"></img>
    </div>
);
export default Corpo;