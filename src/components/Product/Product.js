import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props.product)
    const { name, price, img, brand } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name.toUpperCase()}</p>
                <p>Price:{price}</p>
                <p>Brand:{brand.toUpperCase()}</p>
            </div>

        </div>
    );
};

export default Product;