import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import '../App.css' 
export default function () {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
      {""}
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}
