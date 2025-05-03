// src/components/IngredientList/IngredientList.jsx
import React from "react";

const IngredientList = (props) => {
  return (
    <div className="ingredient-list">
      <h2>Ingredient List</h2>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li
            key={ingredient.id}
            style={{
              backgroundColor: ingredient.color, // Using ingredient color as background
              color: "white", // text color
              padding: "8px",
              borderRadius: "5px",
            }}
          >
            {ingredient.name}
            <button onClick={() => props.onAdd(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
