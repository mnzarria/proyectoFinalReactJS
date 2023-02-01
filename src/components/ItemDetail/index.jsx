import React from 'react'

const ItemDetail = ({detail}) => {
  // console.log("ItemDetail: Detail")  
  // console.log(detail)
  return (
    <div className="card flex-row shadow-lg position-absolute translate-middle top-50 start-50" style={{width: '50rem'}}>
      <img src={detail.image} style={{maxWidth:'25rem'}} className="card-img-left" alt="foto jugador"/>
      <div className="card-body bg-light">
          <h3 className="card-title">{detail.name}</h3>
          <p className="card-text">ID: {detail.id}</p>
          <p className="card-text">País: {detail.country}</p>
          <p className="card-text">Stock: {detail.stock}</p>
          <p className="card-text">Precio: {detail.price}$</p>
          <a href={detail.url} target="_blank" className="btn btn-primary">Agregar al carrito</a>
      </div>
    </div>
  )
}

export default ItemDetail

//Son las cards cuando navego a un Detail