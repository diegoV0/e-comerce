import React, { useContext } from "react"; //tarbjar el 404 not found, poner en el nimero de items en el carrito 9+, mostar mi orden solo si hay mas d eun item,
import AppContext from "../context/AppContext"; //cuando se agreag mas de un mismo item, borrar todos al darle X
import OrderItem from "@components/OrderItem";
import "@styles/MyOrder.scss";
import arrow from "@icons/flechita.svg";

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
