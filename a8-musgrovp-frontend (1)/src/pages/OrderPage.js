import React from 'react';
import ProductRow from '../components/ProductRow.js'

function OrderPage({ products}) {
    return (
        <div>
        <h2>Order From Among the Products Below</h2>
            <article>

            <h3>Here are our products for today</h3>
            <p>You may select up to 10 of each item</p>
            
            
            <table id="productTable">
                <caption>Our Items for Today</caption>
                <thead>
                    <tr>
                        <th>Product and Company</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((currentProduct, index) =>
                    <ProductRow
                        item = {currentProduct}
                        key= {index}
                        />
                    )}
                </tbody>
            </table>
            </article>
        </div>
    )
}
export default OrderPage;