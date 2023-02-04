import React, { useState } from "react";
import './styles.css';

const ItemCount = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial);

    const onPlus = () => {
        if (count < stock) setCount(count + 1);
    };

    const onDecrement = () => {
        if (count > initial) setCount(count - 1);
    };

    return (
        <div className="count-container">
            <button className="btn" id="btn-decrement" onClick={onDecrement}>-</button>
            <span>{count}</span>
            <button className="btn" id="btn-plus" onClick={onPlus}>+</button>
            <br/>
            <br />
            <button className="btn" id="btn-addToCart" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;