import React, { useState } from "react";

export default function CounterHook() {
  const [counter, setCounter] = useState(5);
  return (
    <div>
      <h1>CounterHook : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}
