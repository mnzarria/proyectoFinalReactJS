import React from 'react'
import './cartContainer.css'
import {FaTrashAlt} from 'react-icons/fa'

const TableRow = ({product}) => {
  return (
    <tr id="table-row">
          <td><img src={product.image} alt="table-row" /></td>
          <td>{product.name}</td>
          <td>$ {product.price}</td>
          <td>{product.quantity}</td>
          <td>$ {product.quantity*product.price}</td>
          <td><button class="btn btn-dark" id="btn-remove"><FaTrashAlt/></button></td>
    </tr>
  )
}

export default TableRow