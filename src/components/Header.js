import React from 'react';

const Header = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1>Prueba Serempre - TODO List</h1>
            </div>
            <a href="/tareas/nuevo"
                className="btn btn-danger nuevo-post d-block d-md-inline-block"
            >Agregar Tarea &#43;</a>
        </nav>
    );
}
 
export default Header;