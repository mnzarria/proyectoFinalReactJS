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

const Cart = () => {
  
  const {products, total, cleanCart} = useContext(Shop);
  const [loader, setLoader] = useState(false);
  const [formVis, setFormVis] = useState(false);

  const confirmPurchase = async (dataDelForm) => {
    const {phone: telefono, nombre, email} = dataDelForm
    try{
      setLoader(true);

      const order = generateOrderObject({
        nombre,
        email,
        telefono,
        cart: products,
        total: total()
      })
      console.log("Order:");
      console.log(order);
  
      //Almaceno orden en firebase y confirmo la compra
        const docRef = await addDoc(collection(db, "orders"), order);
      cleanCart();
  
      //Actualizo el stock

      for (const productCart of products) {
        const productRef = doc(db, "products", productCart.id);
        await updateDoc(productRef, {
          stock: productCart.stock - productCart.quantity
        });
      }
      alert("Código de compra: " + docRef.id);

    }
    catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
      setFormVis(false);
    } 
  }

  return (
    //Solo muestro el carrito si hay algún producto
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
            <div className='container-fluid' id="div-empty-cart">
              <div class="row">
                <div className="col-12">
                  <h3>Confirmando compra...</h3> 
                </div>
              </div>
            </div>
            :
            <button onClick={()=> setFormVis(true)}>Confirmar compra</button> //
          }
        </>
        :
        <>
          <div className='container-fluid' id="div-empty-cart">
            <div class="row">
              <div className="col-12">
                <h3>No hay productos en el carrito.</h3>
                <button class="btn btn-dark" id="btn-home">
                  <Link to = "/" id="link-home">Ir al inicio</Link>
                </button> 
              </div>
            </div>
          </div>
          
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