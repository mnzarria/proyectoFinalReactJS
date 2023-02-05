import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

const Item = ({product}) => {
  return (
    <div className="card shadow-lg" id="main-cards" style={{width: '13rem'}}>
      <img src={product.image} style={{height:'270px', width:'100%', objectFit: 'contain', backgroundColor:'lightgrey'}} className="card-img-top" alt="foto jugador"/>
      <div className="card-body bg-light" style={{height: '170px'}}>
        <h5 className="card-title">{product.name}</h5>
        <p className="card-subtitle text-muted">{product.country.charAt(0).toUpperCase()+product.country.slice(1)}</p>
        <Link to={`/detail/${product.id}`} className="btn">Ver info</Link>
      </div>
    </div>
  )
}
export default Item

//Son los items (cards) de la pantalla principal