import React, { useState } from "react";

const InputControl = ({ onUpdate }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter value"
      />
      <button onClick={() => onUpdate("percentage", parseFloat(inputValue))}>
        Allocation %
      </button>
      <button onClick={() => onUpdate("value", parseFloat(inputValue))}>
        Allocation Value
      </button>
    </div>
  );
};

export default InputControl;
