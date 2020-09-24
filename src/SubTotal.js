import React from "react";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import "./SubTotal.css";
import {getBasketTotal} from "./reducer";

function SubTotal() {
    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">

            <CurrencyFormat

                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items) : <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}

            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal;