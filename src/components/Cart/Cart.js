import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    return (
        <div>
            <h2>Orders Summary: {cart.length} </h2>
            <div>
                {
                    cart.map(tshirt => <p
                    key={tshirt._id}
                    >
                    <div className="cart-item">
                        <div className="cart-item-info">
                            <h4>{tshirt.name} </h4>
                            <p>Price: ${tshirt.price} </p>
                        </div>
                        <button>Remove</button>
                    </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Cart;