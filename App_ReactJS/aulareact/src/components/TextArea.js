import React from 'react';

const TextArea = (props) => (
    <div className="form-group row">
        <div className={props.colLabel}>
            <label htmlFor={props.id}>{props.textoLabel}</label>
        </div>
        <div className={props.colInput}>
            <textarea className="form-control" id={props.id} rows="3"></textarea>
        </div>
        
    </div>
);
export default TextArea;