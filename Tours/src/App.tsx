import { useState, useEffect } from 'react';
import Loading from './Components/Loading';
import Tours from './Components/Tours';

const url = 'https://course-api.com/react-tours-project';

export type toursType = {
  id: number,
  name: string,
  info: string,
  image: string,
  price: number
}

function App() {
  const [loading,setLoading] = useState<boolean>(false);
  const [tours,setTours] = useState<toursType[]>([]);

  const removeTour : any = (id : number) => {
    const newTours = tours.filter(tour => tour.id!== id);
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      // console.log(tours);
      setTours(tours);
    }
    catch(err){
      console.log(err);
    }
    setLoading(false)
    
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if(loading){
    return <main>
      <Loading />
    </main>
  }

  if(tours.length === 0){
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className='btn' onClick={() => fetchTours()}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour}/>
      </main>
    </>
  )
}

export default App
