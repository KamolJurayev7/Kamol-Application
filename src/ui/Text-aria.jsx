import React from 'react';

const TextAria = ({ label, state ,setState, height="100px"}) => {
    return (
        <div>
            <div className="form-floating">
                <textarea
                    className="form-control my-2"
                    placeholder={label}
                    id="floatingTextarea2"
                    style={{height: height}}></textarea>
                <label htmlFor="floatingTextarea2">{label}</label>
            </div>
        </div>
    );
}

export default TextAria;
