import React, { useEffect, useState } from 'react';
import "./Cart.css";

const Cart = ({ cart }) => {
    console.log(cart);
    const [carts, setCarts] = useState([]);


    let cartList = [];
    for (const product of cart) {
        if (cartList.length < 4) {
            cartList.push(product.name);
            console.log(cartList.name);
        }
        else {
            // alert('Ops, You can`t add more than 4 items !');
        }
    }
    const random = Math.ceil(Math.random() * cartList.length) + 0;
    // console.log(random);

    const ranFun = () => {


    }
    let randomArr = (cartList[random]);
    function ranFun2() {

        console.log(randomArr);
        return randomArr;

    }
    //random number
    // const [cartListItem, setCartListItem] = useState([]);
    const saveCart = [];
    const randomItem = (cartListItem) => {
        // const random = Math.floor(Math.random() * cartList.length - 1)
        const random = Math.ceil(Math.random() * cartList.length) + 0;
        console.log(random);
        // console.log(cartListItem[random]);

        // saveCart.push(cartListItem[random]);
        // setCartListItem(saveCart);
        // console.log(cartListItem, "random");
        console.log(saveCart, " savvee random");
    }



    const removeItems = () => {
        cart = [];
    }

    return (
        <div className='cart'>
            <div>
                <h2>Selected Items Are Here </h2>
                {
                    cartList.map((pro) => (<h4>{pro.toUpperCase()}</h4>))
                }
                {
                    <p>Random Mobile: {randomArr.toUpperCase()}</p>
                }

            </div>
            <div>
                <button onClick={ranFun2()} className='btn-choose-1'>CHOOSE 1 FOR ME</button>  <br />
                <button onClick={removeItems} className='btn-reset'>RESET</button>
            </div>


        </div>
    );
};

export default Cart;