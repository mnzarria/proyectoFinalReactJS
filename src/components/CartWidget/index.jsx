import React from 'react'
import { useContext } from 'react'
import {HiShoppingCart} from 'react-icons/hi'
import { Shop } from '../../context/ShopProvider'
import { Link } from 'react-router-dom'


//Consumo el context para tener la cant de productos del cart

const CartWidget = () => {

const {countCart} = useContext(Shop)

  return (
    <>
      <Link to="/cart">
        <HiShoppingCart style={{height: 40, width: 40, color: "white", marginRight:"20px"}}/>
      </Link>
      <span style={{color: "white", marginRight:"20px"}}>{countCart()}</span>
    </>  
  )
}

export default CartWidget

