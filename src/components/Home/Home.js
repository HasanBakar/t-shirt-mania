import React from 'react';
import { useLoaderData } from "react-router-dom";
import TShirts from './../TShirts/TShirts';
import './Home.css';
const Home = () => {
    const tshirts = useLoaderData();

    return (
        <div className ="home-container">
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <TShirts
                    key={tshirt._id}
                    tshirt = {tshirt}
                    ></TShirts>)
                }
            </div>
            <div className="cart-container">
                <h2>Orders Summary</h2>
            </div>
        </div>
    );
};

export default Home;