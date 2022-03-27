import React from "react";
import "./Meal.css";

function Meal({ meal, addBtnHandler }) {
  //   console.log(meal);
  const { idMeal, strMeal, strMealThumb, strInstructions } = meal;
  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <div className="details">
        <p>Id: {idMeal}</p>
        <p>Name: {strMeal}</p>
        <p>Details: {strInstructions.slice(0, 150)}</p>
      </div>
      <button onClick={() => addBtnHandler(meal)}>Add to cart</button>
    </div>
  );
}

export default Meal;
