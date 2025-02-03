import { useCallback, useState } from "react";

import QUESTION from "../Question";
import Question from "./Question";
import Restart from "./Restart";

let correctScore = 0;

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswer, setUserAnswer] = useState([]);

  let activeQuestionIndex =
    answerState === "" ? userAnswer.length : userAnswer.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTION.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setUserAnswer((prevAnswer) => {
        setAnswerState("answered");
        return [...prevAnswer, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTION[activeQuestionIndex].answers[1]) {
          setAnswerState("correct");
          correctScore += 1;
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleReset = () => {
    activeQuestionIndex = 0;
    correctScore = 0;
    setUserAnswer([]);
    setAnswerState("");
  };

  if (quizIsComplete) {
    return (
      <div className="quiz">
        <h2 className="game__over">Game over: Press restart to start game</h2>
        <p className="totalscore">Total score: {correctScore} / {QUESTION.length}</p>
        <Restart handleReset={handleReset} />
      </div>
    );
  }

  return (
    <div className="quiz">
      <h4 data-testid="score" className="score">score: {correctScore}</h4>
      <Question
        key={activeQuestionIndex}
        questionTarget={QUESTION[activeQuestionIndex].target}
        answers={QUESTION[activeQuestionIndex].answers}
        selectedAnswer={userAnswer[userAnswer.length - 1]}
        onSelectAnswer={handleSelectAnswer}
        answerState={answerState}
        correctScore={correctScore}
      />
      <Restart handleReset={handleReset} />
    </div>
  );
}
