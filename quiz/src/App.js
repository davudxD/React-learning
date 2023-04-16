import React, { useState } from "react";
import "./App.css";

function App() {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);



  const questions = [
    {
      text: "How many goals were scored at the 2022 Qatar FIFA World Cup?",
      options: [
        { id: 0, text: "157", isCorrect: false },
        { id: 1, text: "160", isCorrect: false },
        { id: 2, text: "143", isCorrect: false },
        { id: 3, text: "172", isCorrect: true },
        { id: 4, text: "184", isCorrect: false },
      ],
    },
    {
      text: "Who holds the record for most UEFA Champions League goals of all time?",
      options: [
        { id: 0, text: "Lionel Messi", isCorrect: false },
        { id: 1, text: "Karim Benzema", isCorrect: false },
        { id: 2, text: "Cristiano Ronaldo", isCorrect: true },
        { id: 3, text: "Robert Lewandowski", isCorrect: false },
        { id: 4, text: "Raul", isCorrect: false },
      ],
    },
    {
      text: "Who is the most capped Germany International of all time?",
      options: [
        { id: 0, text: "Franz Beckenbauer", isCorrect: false },
        { id: 1, text: "Lothar Matthaus", isCorrect: true },
        { id: 2, text: "Philpp Lahm", isCorrect: false },
        { id: 3, text: "Manuel Neuer", isCorrect: false },
        { id: 4, text: "Miroslav Klose", isCorrect: false },
      ],
    },
    {
      text: "Who was the best football player in Europe in 1998?",
      options: [
        { id: 0, text: "Thierry Henry", isCorrect: false },
        { id: 1, text: "Rivaldo", isCorrect: false },
        { id: 2, text: "Ronaldo Nazario", isCorrect: false },
        { id: 3, text: "Michael Owen", isCorrect: false },
        { id: 4, text: "Zinedine Zidane", isCorrect: true },
      ],
    },
    {
      text: "Which country hosted the 2006 FIFA World Cup?",
      options: [
        { id: 0, text: "Germany", isCorrect: true },
        { id: 1, text: "England", isCorrect: false },
        { id: 2, text: "Netherlands", isCorrect: false },
        { id: 3, text: "Korea", isCorrect: false },
        { id: 4, text: "South Africa", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (opt) => {
    if (opt) {
      setScore(score + 1);
      
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
     
    } else {
      setFinalResults(true);
      
    }
  };



  const restartGame = () => {
    setScore(0);
    setFinalResults(false);
    setCurrentQuestion(0);
  };

  return (
    <div className="App">
      <h1 style={{ fontWeight: "bold", color: "white" }}>Football Quiz</h1>

      {showFinalResults ? (
        <div className="final-result">
          <h1 style={{color:"green"}}>Final result</h1>
          <h2 style={{color:"white"}}>
            {score} out of {questions.length} correct -{" "}
            {(score / questions.length) * 100}%
          </h2>
          <button onClick={() => restartGame()}>Restart Game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2 style={{ color: "white" }}>
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
