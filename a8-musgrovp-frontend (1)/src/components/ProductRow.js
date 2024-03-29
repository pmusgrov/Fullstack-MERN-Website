import React from 'react';
import ProductQuantity from './ProductQuantity';     

function ProductRow({ item }) {
    return (
        <tr>
            <td>{item.product} from {item.company}</td>
            <td>{item.price.toLocaleString('en-US', {style: 'currency', currency: 'USD', currencyDisplay: 'symbol'})}    </td>
            <td><ProductQuantity/></td>
        </tr>
    );
}
export default ProductRow;