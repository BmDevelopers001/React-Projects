import { useState } from 'react';
import data, { dataType } from './data';
import List from './Components/List';

function App() {
  const [list, setList] = useState<dataType[]>(data);

  const handleClearList = () => {
    setList([])
  }

  return (
    <>
      <main>
        <section className="container">
          <h3>{list.length} Birthdays today</h3>
          <List list={list}/>
          <button onClick={handleClearList}>Clear All</button>
        </section>
      </main>
    </>
  )
}

export default App
