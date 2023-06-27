import { useState } from 'react';
import Values from 'values.js';
import SingleColor from './Components/SingleColor';

function App() {
  const [color,setColor] = useState<string>('');
  const [error,setError] = useState<boolean>(false);
  const [list, setList] = useState(new Values('#ffa500').all(10));
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      let colors = new Values(color).all(10);
      setList(colors);
    } catch(err){
      setError(true);
      console.log(err);
    }
  }

  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder='#ffa500' 
          className={error ? 'error' : 'null'}/>
          <button className='btn' type='submit'>Submit</button>
        </form>
      </section>
      <section className='colors'>
        {
          list.map((color,index) => {
            
            return (
              <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
            )
          })
        }
      </section>
    </>
  )
}

export default App
