import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({ id, title, image, price, rating }) {
    const [, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }

    return (
        <div className="product">
            <p>{title}</p>
            <p className="product_price">
                <small>£</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {
                    Array(rating)
                        .fill(0)
                        .map(() => {
                            return (
                                <span key={Math.random()} role="img" aria-label="star">⭐</span>
                            )
                        })
                }
            </div>
            <img src={image} alt={title} />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;