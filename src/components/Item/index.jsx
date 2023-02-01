import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

const Item = ({product}) => {
  return (
    <div className="card" style={{width: '13rem'}}>
      <img src={product.image} style={{maxHeight:'265px'}}className="card-img-top" alt="foto jugador"/>
      <div className="card-body bg-light">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-subtitle text-muted">{product.country.charAt(0).toUpperCase()+product.country.slice(1)}</p>
        <Link to={`/detail/${product.id}`} className="btn btn-primary">Ver info</Link>
      </div>
    </div>
  )
}
export default Item


//Son los items (cards) de la pantalla principal