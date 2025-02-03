import { useRef } from "react";
import wrongSound from "../sounds/wrong.mp3";
import correctSound from "../sounds/correct.mp3";

export default function Answer({
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
}) {
  // const shuffledAnswers = [...answers];
  // shuffledAnswers.sort(() => Math.random() - 0.5);

  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul className="answer__list">
      {shuffledAnswers.current.map((answer) => {
        const isSeleted = selectedAnswer === answer;
        let cssClass = "";
        if (answerState === "answered" && isSeleted) {
          cssClass = "selected";
        }
        if (answerState === "wrong" && isSeleted) {
          const audio = new Audio(wrongSound);
          audio.play();
        }
        if (answerState === "correct" && isSeleted) {
          const audio = new Audio(correctSound);
          audio.play();
        }

        return (
          <li key={answer} className="answer__item">
            <button
              onClick={() => onSelectAnswer(answer)}
              style={{ backgroundColor: `${answer}` }}
              className={cssClass}
              data-testid="colorOption"
            >
              &nbsp;
            </button>
          </li>
        );
      })}
    </ul>
  );
}
