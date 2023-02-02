import React from 'react'
import './styles.css'
import {TfiBackLeft, TfiTruck} from 'react-icons/tfi'


const ItemDetail = ({detail}) => {
  // console.log("ItemDetail: Detail")  
  // console.log(detail)
  return (
    <div className="card flex-row shadow-lg position-absolute translate-middle top-50 start-50 bg-light" id="detail-cards">
      <img src={detail.image} className="card-img-left img-fluid" id="img-detail" alt="foto sticker"/>
      <div className="card-body">
        <h1 className="card-title">{detail.name}</h1>
        <br />
        <div style={{textAlign: "left"}}>    
            <h2 className="card-text">$ {detail.price}</h2>
            <p className="card-text">ID: {detail.id}</p>
            <hr />  
            <p className="card-text txt-aux"><TfiTruck/>   Llega entre el lunes y el jueves por $1.769</p>
            <p className="card-text txt-aux"><TfiBackLeft/>  Devolución gratis</p>
          </div>
          <hr />
          <p className="card-text">Stock disponible: {detail.stock}</p>
          <a href={detail.url} target="_blank" className="btn" id="btn-addToCart">Agregar al carrito</a>
      </div>
    </div>
  )
}

export default ItemDetail

//Son las cards cuando navego a un Detail