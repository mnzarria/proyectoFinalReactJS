import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import productJson from '../../data/stickers.json';

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({});

  const {id} = useParams();

    //Este effect se ejecuta cuando se monta el componente
    useEffect(()=> {

      //CASO JSON propio
      const getProductDetail = () => {
  
        const obtenerProducto = new Promise((res, rej) => {
          setTimeout(()=> {
            res(productJson)
          }, 3000)
        })
  
        obtenerProducto
        .then( productos => {
          if (id) { 
            const detalleProducto = productos.find(producto => producto.id.toString() === id) 
            console.log(detalleProducto) 
            setDetail(detalleProducto) 
          }
        })
        .catch(error => console.log(error))
      }
      getProductDetail()
    }, [id])

  return (
    <div>
        <ItemDetail detail={detail}/>
    </div>
  )
}

export default ItemDetailContainer