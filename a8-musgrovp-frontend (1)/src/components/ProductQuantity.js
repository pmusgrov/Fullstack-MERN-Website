import React, { useState } from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

function ProductQuantity() {    
    const [quantity, setQuantity] = useState(0);

    const increment = () => setQuantity(quantity === 10 ? quantity : quantity+1);
    const decrement = () => setQuantity(quantity === 0 ? 0 : quantity- 1);
    return (
        <div class ="">
            <FiArrowDown onClick={decrement} class ="bigger" />
            <span class = "qv">{quantity}</span>
            <FiArrowUp onClick={increment} class ="bigger" />
        </div>
    )
}

export default ProductQuantity;