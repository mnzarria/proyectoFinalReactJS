import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget'
import {GiSoccerBall} from 'react-icons/gi'



export default function NavBar() {
  return (
    <>     
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">    <GiSoccerBall style={{height: 40, width: 40}}/>
</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className='nav-item'>
                            <Link className="nav-link navbar-dropdown-menu" to="/category/paises">PAISES</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-link" to="/category/escudos">ESCUDOS</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="nav-item" to="/category/especial">ESPECIAL</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Qué estas buscando?" aria-label="Search"/>
                        <button className="btn btn-dark" type="submit">Buscar</button>
                    </form>
                <div>
                    <CartWidget/>
                </div>
                </div>
            </div>
        </nav>
    </>
  )
}