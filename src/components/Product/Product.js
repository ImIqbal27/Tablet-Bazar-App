import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props.product)
    const { id, name, price, img } = props.product;
    return (
        <div className='product'>
            <img src={img}></img>
            <p className='product-name'>{name.toUpperCase()}</p>
        </div>
    );
};

export default Product;