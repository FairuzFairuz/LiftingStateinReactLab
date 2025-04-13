// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return (
    <div className="burger-stack">
      <h2>Your Burger</h2>
      <ul>
        {props.stack.map((ingredient, index) => (
          <li key={index} style={{ color: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => props.onRemove(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;
