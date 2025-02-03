// import { useState } from 'react'
import Header from "./component/Header";
import Quiz from "./component/Quiz"; 

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main> 
    </>
  );
}

export default App;
