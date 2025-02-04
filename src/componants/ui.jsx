import React, { useEffect, useState } from "react";

const CalculatorUI = () => {
  const [state, setState] = useState("");

  const [result, setResult] = useState(null);

  const type = (value) => {
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      setState("");
      setResult(null);
    } else {
      setState((prev) => prev + value);
    }
  };
  const calculate = () => {
    try {
      const finalResult = eval(state.replace("x", "*"));
      setResult(finalResult);
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder=""
        className="input"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <input
        type="text"
        className="input1"
        value={result !== null ? ` ${result}` : ""}
        onChange={(e) => e.target.value}
      />
      <div className="btn">
        <button onClick={() => type("C")}>C</button>
        <button>Hs</button>
        <button onClick={() => type("%")}>%</button>
        <button onClick={() => type("/")}>/</button>
      </div>
      <div className="btn">
        <button onClick={() => type(7)}>7</button>
        <button onClick={() => type(8)}>8</button>
        <button onClick={() => type(9)}>9</button>
        <button
          onClick={() => {
            type("x");
          }}
        >
          x
        </button>
      </div>
      <div className="btn">
        <button onClick={() => type(4)}>4</button>
        <button onClick={() => type(5)}>5</button>
        <button onClick={() => type(6)}>6</button>
        <button onClick={() => type("-")}>-</button>
      </div>
      <div className="btn">
        <button onClick={() => type(1)}>1</button>
        <button onClick={() => type(2)}>2</button>
        <button onClick={() => type(3)}>3</button>
        <button onClick={() => type("+")}>+</button>
      </div>
      <div className="btn">
        <button onClick={() => type(0)}>0</button>
        <button onClick={() => type(".")}>.</button>
        <button onClick={() => setState(state.slice(0, -1).trim())}>Del</button>
        <button onClick={() => type("=")}>=</button>
      </div>
    </div>
  );
};

export default CalculatorUI;
