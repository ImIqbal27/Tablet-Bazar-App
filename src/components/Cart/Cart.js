import React from 'react';
import "./Cart.css";
const Cart = ({ cart }) => {
    // console.log(cart);
    let cartList = [];
    for (const product of cart) {
        cartList.push(product.name)
    }
    // cartList.map()
    // console.log(cartList);
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items:  {cart.length}</p>
            <p> {cartList}</p>


        </div>
    );
};

export default Cart;