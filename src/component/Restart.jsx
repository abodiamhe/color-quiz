export default function Restart({ handleReset }) {
  return (
    <button
      data-testid="newGameButton"
      onClick={handleReset}
      className="restart"
    >
      Restart
    </button>
  );
}
