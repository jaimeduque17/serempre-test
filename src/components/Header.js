import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1><Link to={'/'} className="text-light">Prueba Serempre - TODO List</Link></h1>
            </div>
            <Link to={'/tasks/new'} className="btn btn-danger new-post d-block d-md-inline-block"
            >Agregar Tarea &#43;</Link>
        </nav>
    );
}

export default Header;