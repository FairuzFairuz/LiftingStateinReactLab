// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return (
    <div className="burger-stack">
      <h2>Your Burger</h2>
      <ul>
        {props.stack.map((ingredient) => (
          <li
            key={ingredient.uniqueId}
            style={{
              backgroundColor: ingredient.color, // Using ingredient color as background
              color: "white", // text color
              padding: "8px",
              borderRadius: "5px",
            }}
          >
            {ingredient.name}
            <button onClick={() => props.onRemove(ingredient.uniqueId)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;
