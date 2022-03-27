import React, { useEffect, useState } from "react";
import "./Main.css";
import Meal from "../meal/Meal";
import Cart from "../cart/Cart";
import {
  getSavedData,
  removeSavedData,
  saveToLocal,
} from "../../utilities/fakedb";

function Main() {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("meals.json")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);

  useEffect(() => {
    const savedData = getSavedData("cart");
    // console.log(savedData);
    const saved = [];
    for (const data in savedData) {
      const matched = meals.find((meal) => meal.idMeal === data);
      //   console.log(matched);
      if (matched) {
        saved.push(matched);
      }
    }
    setCart(saved);
  }, [meals]);

  const addBtnHandler = (meal) => {
    saveToLocal("cart", meal.idMeal);
    // console.log(meal);
    let newCart = [];
    const exist = cart.find((m) => m.idMeal === meal.idMeal);
    if (exist) {
      const quantity = exist.quantity;
      exist.quantity = +quantity + 1;
      const restMeal = cart.filter((m) => m.idMeal !== meal.idMeal);
      newCart = [...restMeal, meal];
    } else {
      meal.quantity = 1;
      newCart = [...cart, meal];
    }
    setCart(newCart);
  };

  const closeBtnFromCart = (meal) => {
    // console.log(meal);
    const restMeal = cart.filter((m) => m.idMeal !== meal);
    setCart(restMeal);
    removeSavedData("cart", meal);
  };

  const resetBtnHandle = () => {
    setCart([]);
  };

  return (
    <div className="main">
      <div className="meals">
        {meals.map((meal, key) => (
          <Meal key={key} meal={meal} addBtnHandler={addBtnHandler}></Meal>
        ))}
      </div>
      <Cart
        cart={cart}
        closeBtnFromCart={closeBtnFromCart}
        resetBtnHandle={resetBtnHandle}
      ></Cart>
    </div>
  );
}

export default Main;
