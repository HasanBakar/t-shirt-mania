import React from 'react';
import './Cart.css';
const Cart = ({cart,handleRemoveItem}) => {
    return (
        <div>
            <h2 className = {cart.length === 0 ? "red":'blue' }>Orders Summary: {cart.length} </h2>
            <div>
                {
                    cart.map(tshirt => <div
                    key={tshirt._id}
                    >
                    <div className="cart-item">
                        <div className="cart-item-info">
                            <h4>{tshirt.name} </h4>
                            <p>Price: ${tshirt.price} </p>
                        </div>
                        <button className="remove-btn" onClick= {() => handleRemoveItem(tshirt._id)} >Remove</button>
                    </div>
                    </div>)
                }
                {
                    cart.length === 3 && <h2>Thanks for buying!!</h2>
                }
            </div>
        </div>
    );
};

export default Cart;