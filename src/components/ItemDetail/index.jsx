import React from 'react'
import { useContext, useState } from 'react'
import './styles.css'
import {TfiBackLeft, TfiTruck} from 'react-icons/tfi'
import ItemCount from '../ItemCount'
import { Shop } from "../../context/ShopProvider";
import { Link } from 'react-router-dom'

const ItemDetail = ({detail}) => {

  const [quantity, setQuantity] = useState(0)

  const {addProduct} = useContext(Shop)

  const onAdd = (cantidad) => {
    console.log(`Se agregó una cantidad de productos: ${cantidad}`)
    setQuantity(cantidad);
    addProduct({...detail, quantity: cantidad});
}
  console.log("ItemDetail: Detail")  
  console.log(detail)
  return (
    <div className="card flex-row shadow-lg position-absolute translate-middle top-50 start-50 bg-light" id="detail-cards">
      <img src={detail.image} className="card-img-left img-fluid" id="img-detail" alt="foto sticker"/>
      <div className="card-body">
        <h1 className="card-title">{detail.name}</h1>
        <br />
        <div style={{textAlign: "left"}}>    
            <h2 className="card-text">$ {detail.price}</h2>
            <p className="card-text">COD: {detail.cod}</p>
            <hr />  
            <p className="card-text txt-aux"><TfiTruck/>   Llega entre el lunes y el jueves por $1.769</p>
            <p className="card-text txt-aux"><TfiBackLeft/>  Devolución gratis</p>
          </div>
          <hr />
          <p className="card-text">Stock disponible: {detail.stock}</p>
          {
                    quantity === 0 ?
                    <ItemCount 
                        stock={detail.stock} 
                        initial={1} 
                        onAdd={onAdd}    
                    />
                    :
                    <div>
                      <br />
                      <br />
                      <br />
                      <button className="btn p-2" id="btn-go-cart">
                        <Link style={{textDecoration: "none", color: "white"}} to="/cart">
                            Ver carrito
                        </Link>
                      </button>
                    </div>
                }
      </div>
    </div>
  )
}

export default ItemDetail

//Son las cards cuando navego a un Detail