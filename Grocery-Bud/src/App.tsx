import { useState } from 'react';
import Alert from './Components/Alert';
import List from './Components/List';

export type alertType = {
  show: boolean;
  msg: string;
  type: string;
}

export type itemType = {
  id: string;
  title: string;
}

function App() {
  const [name, setName] = useState<string>('');
  const [list, setList] = useState<itemType[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState<alertType>({ show: false, msg: '', type: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!name){
      // Display Alert
    } else if(name && isEditing){
      // deal with editing
    } else {
      // show alert
      const newItem = {id : new Date().getTime().toString(), title : name};
      // const newList = list.push(newItem)
      // console.log(newItem);
      
      setList(...list,newItem);
      setName('');
    }
  } 

  const handleClear = () => {
    console.log('Clear');
  }

  return (
    <>
      <section className='section-center'>
        <form className='grocery-form' onSubmit={handleSubmit}>
          {alert.show && <Alert />}
          <h3>Grocery Bud</h3>
          <div className="form-control">
            <input 
              type="text" 
              className='grocery' 
              placeholder='e.g. Sweets' 
              value={name} 
              onChange={(e) =>setName(e.target.value)}
            />
            <button type='submit' className='submit-btn'>
              {isEditing? 'edit' : 'submit'}
            </button>
          </div>
        </form>
        <div className='grocery-container'>
          <List items={list}/>
          <button className='clear-btn' onClick={handleClear}>Clear Items </button>
        </div>
      </section>
    </>
  )
}

export default App
