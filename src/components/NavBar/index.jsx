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
                <Link className="navbar-brand" to="/">    <GiSoccerBall style={{height: 40, width: 40, marginLeft: "20px"}}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/category/paises">JUGADORES</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/escudos">ESCUDOS</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-item" to="/category/especial">ESPECIAL</Link>
                    </li>
                </ul>
                </div>
                <div>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    </>
  )
}