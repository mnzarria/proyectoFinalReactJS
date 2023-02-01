import React from 'react'
import Item from '../Item'

const ItemList = ({productos}) => {
  return (
    <div style={{
        padding: 10,
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    }}>
        {productos.map(producto => {
            return <Item product={producto} key={producto.id}/>
        })}
    </div>
  )
}

export default ItemList

//Genera una card por cada producto en la pantalla principal