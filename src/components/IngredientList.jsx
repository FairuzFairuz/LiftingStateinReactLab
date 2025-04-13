// src/components/IngredientList/IngredientList.jsx
import React from "react";

const IngredientList = (props) => {
  return (
    <div className="ingredient-list">
      <h2>Ingredient List</h2>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li key={ingredient.id} style={{ color: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => props.onAdd(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
