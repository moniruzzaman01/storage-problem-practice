import React, { useEffect, useState } from "react";
import "./Main.css";
import Meal from "../meal/Meal";
import Cart from "../cart/Cart";

function Main() {
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("meals.json")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);

  const addBtnHandler = (meal) => {
    // console.log(meal);
    let newCart = [];
    const exist = cart.find((m) => m.idMeal === meal.idMeal);
    if (exist) {
      const quantity = exist.quantity;
      exist.quantity = +quantity + 1;
      const restMeal = cart.filter((m) => m.idMeal !== meal.idMeal);
      newCart = [meal, ...restMeal];
    } else {
      meal.quantity = 1;
      newCart = [...cart, meal];
    }
    setCart(newCart);
  };

  return (
    <div className="main">
      <div className="meals">
        {meals.map((meal, key) => (
          <Meal key={key} meal={meal} addBtnHandler={addBtnHandler}></Meal>
        ))}
      </div>
      <Cart cart={cart}></Cart>
    </div>
  );
}

export default Main;
