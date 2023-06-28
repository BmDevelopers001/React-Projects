import { useState, useEffect } from 'react';
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

const getItemfromLS = () : [] => {
  let list = localStorage.getItem('list');

  if(list){
    return JSON.parse(list);
  } else {
    return [];
  }

}

function App() {
  const [name, setName] = useState<string>('');
  const [list, setList] = useState<itemType[]>(getItemfromLS);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editID, setEditID] = useState<string | null>(null);
  const [alert, setAlert] = useState<alertType>({ show: false, msg: '', type: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      showAlert(true,"Please enter value","danger");
    } else if (name && isEditing) {
      showAlert(true, "item edited successfully", "success");
      setList(
        list.map((item) => {
          if(item.id === editID){
            return {...item, title: name}
          }
          return item;
        })
      )
      setName('');
      setEditID(null);
      setIsEditing(false);
    } else {
      showAlert(true,"item added successfully","success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      // const newList = list.push(newItem)
      // console.log(newItem);

      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show: boolean = false, msg: string = "", type: string = "") => {
    setAlert({
      show,
      type,
      msg
    })
  }

  const handleClear = () => {
    showAlert(true,"Empty List","danger");
    setList([]);
  }

  const removeItem = (id: string) => {
    showAlert(true,"Item removed","danger");
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id: string) => {
    const selectedItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(selectedItem!.title);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  },[list])

  return (
    <>
      <section className='section-center'>
        <form className='grocery-form' onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
          <h3>Grocery Bud</h3>
          <div className="form-control">
            <input
              type="text"
              className='grocery'
              placeholder='e.g. Sweets'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type='submit' className='submit-btn'>
              {isEditing ? 'edit' : 'submit'}
            </button>
          </div>
        </form>
        {
          list.length > 0 &&
          <div className='grocery-container'>
            <List items={list} removeItem={removeItem} editItem={editItem}/>
            <button className='clear-btn' onClick={handleClear}>Clear Items </button>
          </div>
        }

      </section>
    </>
  )
}

export default App
