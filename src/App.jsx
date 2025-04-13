// src/App.jsx
import BurgerStack from "./components/BurgerStack";
import IngredientList from "./components/IngredientList";
import "./App.css";
import React, { useState } from "react";

const App = () => {
  const availableIngredients = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
    { name: "Cheddar Cheese", color: "#FDE18B" },
    { name: "Swiss Cheese", color: "#F1E1A8" },
  ];

  const [stack, setStack] = useState([]);

  const handleAddIngredient = (ingredient) => {
    setStack((prevStack) => [...prevStack, ingredient]);
  };

  const handleRemoveIngredient = (ingredient) => {
    setStack((prevStack) => prevStack.filter((_, i) => i !== index));
    //_ is to refer to current element in prev array, i is the current index of the element
  };

  return (
    <main>
      <div className="burger-stacker">
        <h1>Burger Stacker</h1>
        <div className="burger-container">
          <IngredientList
            ingredients={availableIngredients}
            onAdd={handleAddIngredient}
          />
          <BurgerStack stack={stack} onRemove={handleRemoveIngredient} />
        </div>
      </div>
    </main>
  );
};

export default App;
