import React from 'react';
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import TShirts from './../TShirts/TShirts';
import Swal from 'sweetalert2';
import './Home.css';
import Cart from './../Cart/Cart';
const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt =>{
        const exist = cart.find(ts => ts._id === tshirt._id);
        if(exist){
            Swal.fire('This item is already added!');
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

    const handleRemoveItem = id =>{
       
        const remainingItem = cart.filter(ts =>ts._id !== id);
        setCart(remainingItem);
        Swal.fire('Item successfully removed!!');
    }

    return (
        <div className ="home-container">
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <TShirts
                    key={tshirt._id}
                    tshirt = {tshirt}
                    handleAddToCart={handleAddToCart}
                    ></TShirts>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;