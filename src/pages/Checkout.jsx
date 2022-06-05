import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import OrderItem from "@components/OrderItem";
import "@styles/Checkout.scss";

const Checkout = () => {
  const { state } = useContext(AppContext);
  console.log(state);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <h1 className="title">My order</h1>
        <div className="Checkout-content">
          <div className="order">
            <p>
              <span>03.25.21</span>
              <span>{state.cart.length} articles</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
        </div>
        <div>
          {state.cart.map((product) => (
            <OrderItem product={product} key={`checkout-${product.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
