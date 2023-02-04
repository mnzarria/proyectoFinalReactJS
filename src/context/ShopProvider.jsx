import React, { useState } from 'react'
import { createContext } from "react";

export const Shop = createContext()

//HOC / High order component / Componente de orden superior
const ShopProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const addProduct = (product) => {
        const isInCart = isProductInCart(product.id);
        if (isInCart) {
            //Busco el producto repetido
            const productoRepetido = products.find(element => element.id === product.id)
            //Agrego la nueva cant a la cant existente del producto repetido
            productoRepetido.quantity += product.quantity
            setProducts([...products])
        } else {
            setProducts([...products, product])
        }
    }

     const countCart = () => {
        //Uso let ya que la cantidad va a ir cambiando
        let cantidadTotal = 0;
        for (const product of products) {
            cantidadTotal += product.quantity
        }
        return cantidadTotal
    }

    const isProductInCart = (id) => {
        //Uso some para devolver true o false según se cumpla la condición o no
        return products.some(product => product.id === id)
    }

    const total = () => {
        let total = 0;
        for (const product of products) {
            total += product.price * product.quantity
        }
        return total;
    }

    const cleanCart = () => {
        setProducts([])
    }
     
    return (
        <Shop.Provider value = {{products, addProduct, countCart, total, cleanCart}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider