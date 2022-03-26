import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data))

    }, [])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">

                {
                    products.map(product => <Product key={product.id} product={product}
                        handleAddToCart={handleAddToCart}></Product>)
                }
                <p> <h2>How react works ?</h2>
                    ReactJS is one of the most popular JavaScript libraries for mobile and web application development.
                    In React there is a function named useState() thats mean Returns a stateful value and a function to update it.
                    Thats special name is hook who make connection with React.In UI if there is change then React updates UI by using hook , and changes UI via connection .There is another hook named useEffect .Its only responsible for rendering the components of an applications view layer.One of the biggest advantages of using React is that we can infuse HTML code with JS code.We  can create a representation of a DOM node by declaring the Element function in React. The code below contains a combination of HTML and JS.WE may have noticed that the syntax of the HTML code above is similar to XML.  Instead of using the traditional DOM class, React uses className.JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The ""(quotation) marks in JSX attributes represent strings, similarly to JS code .In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.


                </p>
                <p> <h2>Props vs State Difference?</h2>
                    In Props , The data is passed from one component to another component.In State, The data is passed within the component only.In Props, have better performance.In state, has worse performance.In props are used to pass data down from view-controller.In state should be managed in view-controller.A Component cannot change its props, but it is responsible for putting together the props of its child Components. Props do not have to just be data -- callback functions may be passed in as props.A Component manages its own state internally. Besides setting an initial state, it has no business fiddling with the state of its children. You might conceptualize state as private to that component.
                    In Props, it is immutable thats means cannot be modified.In State, it is mutable thats means can be modified. Props  can be used with state and functional components. State  can be used only with the state components/class component. Props  are read-only.State is both read and write.Props are used to pass data from one component to another.The this.setState property is used to update the state values in the component.The state is a local data storage that is local to the component only and cannot be passed to other components.



                </p>

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;