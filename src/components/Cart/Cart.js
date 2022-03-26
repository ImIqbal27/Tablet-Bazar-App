import React from 'react';
import "./Cart.css";
const Cart = ({ cart }) => {
    // console.log(cart);
    let cartList = [];
    for (const product of cart) {
        if (cartList.length < 4) {
            cartList.push(product.name)
        }
        else {
            // alert("Ops, You cant add more than 4 items !")
        }
    }

    return (
        <div className='cart'>
            <div>
                <h2>Order Summary</h2>
                <p>Selected Items:  {cart.length}</p>
                <p> {cartList}</p>
            </div>
            <div>
                <button className='btn-choose-1'>CHOOSE 1 FOR ME</button>  <br />
                <button className='btn-reset'>RESET</button>
            </div>


        </div>
    );
};

export default Cart;