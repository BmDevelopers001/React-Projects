import { useState } from 'react';

import loremText from './data';

function App() {
  const [count, setCount] = useState<number>(0);
  const [text,setText] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    let amount : number = count;
    
    if(count <= 0){
      amount = 1
    }
    if(count >= 8){
      amount = 8
    }

    setText(loremText.slice(0,amount))
    
  }

  return (
    <>
      <section className="section-center">
        <h3>Tired of boring Lorem-Ipsum ?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs :</label>
          <input type="number" name='amount' id='amount' onChange={(e) => setCount(+(e.target.value))}/>
          <button className="btn">generate</button>
        </form>

        <article className='lorem-text'>
          {text.map((t,index) => {
            return (
              <p key={index}>{t}</p>
            )
          })}
        </article>

      </section>
    </>
  )
}

export default App
