import React, { useEffect, useState } from 'react'
import productos from '../../data/stickers.json';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner'


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);

  //Obtengo categoría para el filtro
  const {categoryId} = useParams()

  // console.log('Categoría:')
  // console.log(categoryId)

  //Este effect se ejecuta cuando se monta el componente
  useEffect(()=>{
    const promesa = new Promise((acc,rej) =>{
      setTimeout(() => {
        acc(productos);
      }, 3000);
    });
    promesa
      .then((result) =>{
        //Filtrado por categorías
        if (categoryId) {
          const productosFiltradosPorCategoria = result.filter(producto => producto.category === categoryId)
          // console.log("Productos:");
          // console.log(productos);
          // console.log("Productos filtrados por categoria");
          // console.log(productosFiltradosPorCategoria)
          setProducts(productosFiltradosPorCategoria);
        } else {
          setProducts(result);
        }
      })
      .catch((err) => {
        alert("Hubo un error");
      });
  }, [categoryId])
  
  console.log(products);

  return (
    <div className='item-list-container'>
        <Banner />
        <ItemList productos={products}/>
    </div>
  )
}

export default ItemListContainer