import {useState} from 'react';
import { fetchQuizQuesions } from './API';
import QuestionCard from "./components/QuestionCard";
import { QuestionState,Difficulty } from './API';

// import { GlobalStyle } from './App.style';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number,setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(questions);
  

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuesions(TOTAL_QUESIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);

  }

  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {

    if(!gameOver){
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if(correct){
        setScore(prev => prev+1);
      }

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }

      setUserAnswer(prev => [...prev, answerObject]);
      
    }

  }

  const nextQuestion = () => {
    const nextQuestion = number+1;

    if(nextQuestion === TOTAL_QUESIONS){
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <>
    {/* <GlobalStyle /> */}
      <div className="app">
        <h1>YodaPlus Quiz</h1>
        
        {gameOver || userAnswer.length === TOTAL_QUESIONS ? 
          <button className="start" onClick={startTrivia}>Start</button> : null  
      }
        
        {!gameOver ? <p className="score">Score : {score}</p> : null}
        {loading ? <p className="">Loading Questions...</p> : null}

        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswer ? userAnswer[number] : undefined}
            callback={checkAnswer}
          />
        )}
        
        {!gameOver && !loading && userAnswer.length === number+1 && number !== TOTAL_QUESIONS-1 ? (
          <button className="next" onClick={nextQuestion}>Next Question</button>
        ) : null}
        
      </div>
    </>
  )
}

export default App
