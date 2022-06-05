import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import Menu from "@components/Menu";
import MyOrder from "../containers/MyOrder";
import "@styles/Header.scss";
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingcart from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const checkNumItemsInCart = () => {
    let itemsInCart = "9+";
    if (state.cart.length > 0 && state.cart.length <= 9) {
      itemsInCart = state.cart.length.toString();
    }
    return itemsInCart;
  };

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img
              src={shoppingcart}
              alt="shopping cart"
              onClick={() => setToggleOrder(!toggleOrder)}
            />
            {state.cart.length > 0 ? <div>{checkNumItemsInCart()}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrder && state.cart.length > 0 && <MyOrder />}
    </nav>
  );
};

export default Header;
