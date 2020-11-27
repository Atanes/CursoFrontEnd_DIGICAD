import React from 'react';

const InputGroupInLine = (props) => (
    <div className="form-group row">
        <div className={props.colLabel}>
            <label htmlFor={props.id} className="col-form-label">{props.textoLabel}</label>
        </div>
        <div className={props.colInput}>
            <input type="email" className="form-control" id={props.id} />
        </div>
    </div>
);
export default InputGroupInLine;



