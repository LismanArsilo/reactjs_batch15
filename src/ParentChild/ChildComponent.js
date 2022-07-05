import React from "react";

export default function ChildComponent(props) {
  return (
    <div>
      <h1>Quiz Programming</h1>
      <p>What programming for build croos-platfrom app ?</p>
      <button onClick={() => props.onQuiz("React")}>React</button>
      <button onClick={() => props.onQuiz("Pyhton")}>Pyhton</button>
      <button onClick={() => props.onQuiz("Golang")}>Golang</button>
      <h2>{props.Answers}</h2>
    </div>
  );
}
