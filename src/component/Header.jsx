export default function Header() {
  return (
    <header>
      <h1 className="header">Color Quiz</h1>
      <p data-testid="gameInstructions" className="sub-header">
        Guess the right shades that matches the target color!
      </p>
    </header>
  );
}
