import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setResult((prevResult) => prevResult + value);
  };

  const handleClear = () => {
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = Function(`"use strict"; return (${result});`)();
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div>
        <input
          type="text"
          className="calculator__input"
          value={result}
          readOnly
        />
        <br />

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <br />
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <br />
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <br />
        <button
          onClick={() => handleClear()}
          className="calculator__clear-button"
        >
          Clear
        </button>
        <button onClick={() => handleClick("0")}>0</button>
        <button
          onClick={() => handleCalculate()}
          className="calculator__calculate-button"
        >
          =
        </button>
        <button
          onClick={() => handleClick("/")}
          className="calculator__operator-button"
        >
          /
        </button>
      </div>
    </div>
  );
};

export default Calculator;
