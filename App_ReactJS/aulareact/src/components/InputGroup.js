import React from 'react';

const InputGroup = (props) => (
    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id={props.id}>
                <i className={props.simbolo}></i>
            </span>
        </div>
        <input type={props.tipo} className="form-control" id={props.id}/>
    </div>
)
export default InputGroup;
