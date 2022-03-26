import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({ handleAddToCart, product }) => {
    const { name, price, img, brand, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name.toUpperCase()}</p>
                <p>Price: ${price}</p>
                <p>Brand: {brand.toUpperCase()}</p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'> <p className='btn-text'>Add To Cart </p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            {/* ekhane ami product click koorle product ta ke pacchi Shop.js theke  */}

        </div>
    );
};

export default Product;