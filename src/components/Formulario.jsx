import React, { Component } from 'react';

function Formulario () {
    return (
        <div className="container" >
            <form className="form-group">
                <input type="text"
                    className="form-control mb-3"
                />
                <input type="text"
                className="form-control mb-3"
                />
                <input type="submit"
                className="btn btn-info btn-block mb-3"
                />
            </form>
        </div>
    );
}

export default Formulario;