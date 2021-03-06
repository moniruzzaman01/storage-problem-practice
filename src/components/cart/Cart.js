import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

function Cart({ cart, closeBtnFromCart, resetBtnHandle }) {
  //   console.log("cart", cart);

  return (
    <div className="cart-container">
      <div className="cart">
        <h2>----Cart----</h2>
        {cart.map((meal, key) => (
          <div key={key} className="content">
            <img src={meal.strMealThumb} alt="" />
            {meal.strMeal}
            <FontAwesomeIcon
              onClick={() => closeBtnFromCart(meal.idMeal)}
              icon={faXmarkCircle}
              className="font-awesome"
            />
          </div>
        ))}
        {/* <button>Choose Randomly</button>
        <br /> */}
        <button onClick={resetBtnHandle}>Reset</button>
      </div>
    </div>
  );
}

export default Cart;
