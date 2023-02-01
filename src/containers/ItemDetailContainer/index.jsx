import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import productJson from '../../data/stickers.json';

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({});
  const [products, setProducts] = useState([]);

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

  // console.log("id:");
  // console.log(id);

//Me traigo todos los stickers
// useEffect(()=>{
//   const promesa = new Promise((acc,rej) =>{
//     setTimeout(() => {
//       acc(productos);
//     }, 3000);
//   });
//   promesa
//     .then((result) =>{
//       setDetail(result);
//       console.log(result);
//     })
//     .catch((err) => {
//       alert("Hubo un error");
//     });
// }, [id])

// //Quiero buscar solo el del id seleccionado
// let nombreJugador = "";
// let idSticker = "";

//   for (let i=0; i < products.length; i++){
//     if(products[i].id == id){
//       console.log("Lo encontre")
//       console.log(i)
//       nombreJugador = products[i].name;
//       idSticker = i;
//       // console.log(products[i])
//     }
//   }
//   console.log(nombreJugador);
//   console.log(idSticker)

  //Consumo API de noticias
  //Este effect se ejecuta cuando se monta el componente
  // useEffect(()=> {

  //   //Obtengo las noticias sobre un determinado jugador
  //   fetch(`https://newsapi.org/v2/everything?q=${id}&sortBy=relevancy&apiKey=978ade26be2945bd976300bb81543ad9&language=es`)
  //     .then(response => {
  //       console.log("Response:");
  //       console.log(response);
  //       return response.json()
  //     })
  //     .then(json => {
  //       //Traigo solo el primer artículo
  //       console.log(json.articles[10])
  //       setDetail(json.articles[10])
  //     })
  //     .catch((err) => {
  //       alert("Hubo un error")
  //     });

  // }, [id])

  //Consumo API de noticias
  //Este effect se ejecuta cuando se monta el componente
  // useEffect(()=> {

  // //   //Obtengo las noticias sobre un determinado jugador
  //   fetch('../../data/stickers.json')
  //     .then(response => {
  //       console.log("Response:");
  //       console.log(response);
  //       return response.json()
  //     })
  //     .then(json => {
  //       //Traigo solo el primer artículo
  //       console.log(json)
  //       setDetail(json)
  //     })
  //     .catch((err) => {
  //       alert("Hubo un error")
  //     });

  // }, [id])

  return (
    <div>
        <ItemDetail detail={detail}/>
    </div>
  )
}

export default ItemDetailContainer