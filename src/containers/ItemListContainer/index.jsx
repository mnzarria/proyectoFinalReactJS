import React, { useEffect, useState } from 'react'
// import productos from '../../data/stickers.json';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner'
// import saveFromJSONToFirebase from '../../services/saveFromJSONToFirebase';
import useFirebase from '../../hooks/useFirebase';
import Spinner from 'react-bootstrap/Spinner';


const ItemListContainer = ({}) => {
  
  //Obtengo categoría para el filtro
  const {categoryId} = useParams()

  const [products, loading, error] = useFirebase(categoryId);

  /* Carga de datos desde JSON a Firebase */
  // useEffect(()=>{
  //   saveFromJSONToFirebase()
  // },[])
  

  /* Logica para filtrar productos si uso el JSON */
    // const promesa = new Promise((acc,rej) =>{
  //   setTimeout(() => {
  //     acc(productos);
  //   }, 3000);
  // });
  // promesa
  //   .then((result) =>{
  //     //Filtrado por categorías
  //     if (categoryId) {
  //       const productosFiltradosPorCategoria = result.filter(producto => producto.category === categoryId)
  //       setProducts(productosFiltradosPorCategoria);
  //     } else {
  //       setProducts(result);
  //     }
  //   })
  //   .catch((err) => {
  //     alert("Hubo un error");
  //   });

  return (
    <>
      {/* Mensaje de error */}
      {error &&
        <div className='container-fluid' style={{textAlign:"center"}}>
              <div class="row">
                <div className="col-12">
                  <h1>Lo siento! Hubo un error: {error}</h1>
                </div>
              </div>
        </div>
      }
      {/* Carga de la pagina principal */}
      {
        loading ?
          <div className='container-fluid' style={{textAlign:"center"}}>
              <div class="row">
                <div className="col-12">
                  <br />
                  <br />
                  <Spinner animation="border" variant="danger"/>
                </div>
              </div>
          </div>
        :
          <div className='item-list-container'>
              <Banner />
              <ItemList productos={products}/>
          </div>
      }
    </>
  )
}

export default ItemListContainer