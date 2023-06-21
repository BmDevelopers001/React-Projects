import { useState } from 'react'
import data,{ dataType } from './data'
import Question from './Components/Question';

function App() {
  const [questions, setQuestions] = useState<dataType[]>(data);

  return (
    <main>
      <div className="container">
        <h3>Questions Answers about LogIn</h3>
        <section className="info">
          {questions.map(question => (
            <Question key={question.id} {...question}/>
          ))}
        </section>
      </div>
      
    </main>
  )
}

export default App
