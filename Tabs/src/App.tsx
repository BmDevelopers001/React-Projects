import { useState, useEffect} from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const URL = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading]=  useState<boolean>(true);
  const [jobs, setJobs] = useState<[]>([]);
  const [value, setValue] = useState<number>(0);

  const fetchJobs = async () => {
    const response = await fetch(URL);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs()
  },[])

  if(loading){
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }

  return (
    <>
      <h2>jobs</h2>
    </>
  )
}

export default App
