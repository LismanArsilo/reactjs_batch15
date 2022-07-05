import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  const [Answer, setAnswer] = useState("");
  const setQuiz = (quiz) => {
    if (quiz === "React") {
      setAnswer(`your answer ${quiz} is true`);
    } else {
      setAnswer(`your answer ${quiz} is false`);
    }
  };
  return (
    <div>
      <ChildComponent Answers={Answer} onQuiz={setQuiz} />
    </div>
  );
}
