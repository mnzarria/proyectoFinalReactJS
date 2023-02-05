import React, { useContext } from 'react'
import './cartContainer.css'
import {FaTrashAlt} from 'react-icons/fa'
import { Shop } from '../../context/ShopProvider';

const TableRow = ({product}) => {

  const {removeProduct} = useContext(Shop);

  return (
    <tr id="table-row">
          <td><img src={product.image} alt="table-row" /></td>
          <td>{product.name}</td>
          <td>$ {product.price}</td>
          <td>{product.quantity}</td>
          <td>$ {product.quantity*product.price}</td>
          <td><button class="btn btn-dark" id="btn-remove" onClick={()=>removeProduct(product.id)}><FaTrashAlt/></button></td>
    </tr>
  )
}

export default TableRow