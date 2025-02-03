import Answer from "./Answer";

export default function Question({
  questionTarget,
  answers,
  onSelectAnswer,
  correctScore,
  selectedAnswer,
  answerState,
}) {
  return (
    <div className="question">
      <div data-testid="colorBox" className="target" style={{ backgroundColor: `${questionTarget}` }}>
        &nbsp;
      </div>
      {/* <p>Correct score: {correctScore}</p> */}
      <Answer
        answers={answers}
        onSelectAnswer={onSelectAnswer}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
      />
    </div>
  );
}
