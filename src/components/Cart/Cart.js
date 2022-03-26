import React, { useState } from 'react';
import "./Cart.css";

const Cart = ({ cart }) => {
    const [carts, setCarts] = useState([])

    let cartList = [];
    for (const product of cart) {
        if (cartList.length < 4) {
            cartList.push(product.name)
        }
        else {
            alert('Ops, You can`t add more than 4 items !');
        }
    }
    //random number
    const [cartListItem, setCartListItem] = useState([]);
    const saveCart = [];
    const randomItem = (cartListItem) => {
        const random = Math.floor(Math.random() * cartList.length - 1)
        saveCart.push(cartListItem[random]);
        setCartListItem(saveCart);
        console.log(cartListItem, "random");
    }



    const removeItems = () => {
        cartList.find()
    }

    return (
        <div className='cart'>
            <div>
                <h2>Selected Items Are Here </h2>
                {
                    cartList.map((pro) => (<h4>{pro.toUpperCase()}</h4>))
                }

            </div>
            <div>
                <button onClick={randomItem} className='btn-choose-1'>CHOOSE 1 FOR ME</button>  <br />
                <button onClick={removeItems} className='btn-reset'>RESET</button>
            </div>


        </div>
    );
};

export default Cart;