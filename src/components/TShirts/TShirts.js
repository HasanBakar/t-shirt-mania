import React from 'react';
import './TShirts.css';
const TShirts = ({tshirt,handleAddToCart}) => {
    const {name, picture, price} = tshirt;
    return (
        <div className ="tshirt-item">
            <img src={picture} alt="" />
            <h3>{name} </h3>
            <h4>Price: ${price} </h4>
            <button onClick={ () => handleAddToCart(tshirt) }>Buy Now</button>
        </div>
    );
};

export default TShirts;