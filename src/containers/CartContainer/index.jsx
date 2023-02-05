import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopProvider';
import generateOrderObject from '../../services/generateOrderObject';
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"; 
import TableRow from './TableRow';
import './cartContainer.css';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/config';
import { useState } from 'react';
import FormComp from '../../components/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Cart = () => {
  
  const {products, total, cleanCart} = useContext(Shop);
  const [loader, setLoader] = useState(false);
  const [formVis, setFormVis] = useState(false);
  const [ order, setOrder ] = useState(null);


  const confirmPurchase = async (dataDelForm) => {
    const {phone: telefono, nombre, apellido, email} = dataDelForm
    try{
      setLoader(true);
      setFormVis(false);

      const order = generateOrderObject({
        nombre,
        apellido,
        email,
        telefono,
        cart: products,
        total: total()
      })
      console.log("Order:");
      console.log(order);
  
      //Almaceno orden en firebase y confirmo la compra
        const docRef = await addDoc(collection(db, "orders"), order);
        setOrder(docRef.id);
      cleanCart();
  
      //Actualizo el stock

      for (const productCart of products) {
        const productRef = doc(db, "products", productCart.id);
        await updateDoc(productRef, {
          stock: productCart.stock - productCart.quantity
        });
      }

      }
      catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      } 
    }

  return (
    //Solo muestro el carrito si hay algún producto
    <>
       {
      order?
      <div className='container-fluid' id="div-empty-cart">
            <div class="row">
              <div className="col-12">
                <h3>El pedido fue ingresado con éxito</h3><br />
                <h3>Tu código de compra es '{order}'</h3><br />
                <button class="btn btn-dark">
                  <Link to = "/" id="link-home">Ir al inicio</Link>
                </button> 
              </div>
            </div>
          </div>
      :
      <>
            {
        products.length !== 0?
        <>
          <table class="table table-light table-striped">
          <thead id="table-head">
            <tr>
              <th scope="col"></th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Subtotal</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map(product =>{
              return <TableRow key={product.id} product={product}/>
            }
              )}
            <tr id="table-row">
              <td></td>
              <td></td>
              <td></td>
              <td>TOTAL: </td>
              <td>$ {total()}</td>
              <td></td>
            </tr>
          </tbody>
          </table>
          {
            loader ?
            <ToastContainer className="p-3" position={'bottom-end'}>
              <Toast>
                <Toast.Header closeButton={false}>
                  <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                  <strong className="me-auto">Aguarde un momento</strong>
                </Toast.Header>
                <Toast.Body>Estamos confirmando su compra...</Toast.Body>
              </Toast>
            </ToastContainer>
            :
            <div className='container-fluid' id="div-empty-cart">
              <div class="row">
                <div className="col-12">
                  <button class="btn btn-dark"><Link to = "/" id="link-home">Agregar más productos</Link></button> <br /><br />
                  <button class="btn btn-success" onClick={()=> setFormVis(true)}>Finalizar compra</button>
                </div>
              </div>
            </div>
          }
        </>
        :
        <>
          <div className='container-fluid' id="div-empty-cart">
            <div class="row">
              <div className="col-12">
                <h3>No hay productos en el carrito.</h3>
                <button class="btn btn-dark">
                  <Link to = "/" id="link-home">Ir al inicio</Link>
                </button> 
              </div>
            </div>
          </div>
          
        </>
      }
      </>
      }

      { formVis ?  //Decido si mostrar el formulario de compra o no
        <FormComp 
          confirmPurchase = {confirmPurchase}
          formVis = {formVis}
          setFormVis = {setFormVis}
        />
        : null
      }
     
    </>
  )
}

export default Cart