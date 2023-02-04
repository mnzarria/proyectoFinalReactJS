import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
// import productJson from '../../data/stickers.json';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import Spinner from 'react-bootstrap/Spinner';


const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({});

  const {id} = useParams();

    //Este effect se ejecuta cuando se monta el componente
    useEffect(()=> {
      
      //Caso DB desde Firebase
      const getProduct = async () => {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef); 

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          const productDetail = {
            id: docSnap.id,
            ...docSnap.data()
          }
          setDetail(productDetail);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }

      }
      
      getProduct();
      
      
    //   //CASO JSON propio
    //   const getProductDetail = () => {
  
    //     const obtenerProducto = new Promise((res, rej) => {
    //       setTimeout(()=> {
    //         res(productJson)
    //       }, 1000)
    //     })
  
    //     obtenerProducto
    //     .then( productos => {
    //       if (id) { 
    //         const detalleProducto = productos.find(producto => producto.id.toString() === id) 
    //         console.log(detalleProducto) 
    //         setDetail(detalleProducto) 
    //       }
    //     })
    //     .catch(error => console.log(error))
    //   }
    //   getProductDetail()
    }, [id])

  return (
    <div>
        {
          Object.keys(detail).length === 0 ? 
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
          <ItemDetail detail={detail}/>
        }
    </div>
  )
}

export default ItemDetailContainer