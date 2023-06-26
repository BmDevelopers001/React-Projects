import { useState, useEffect} from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const URL = 'https://course-api.com/react-tabs-project';

export type jobsType = {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

function App() {
  const [loading, setLoading]=  useState<boolean>(true);
  const [jobs, setJobs] = useState<jobsType[]>([]);
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

  const {company,dates,duties,title} = jobs[value];

  return (
    <section className='section'>
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job,index) =>{
            return (
              <button key={job.id} onClick={() => {
                setValue(index)
                
              }} className={`job-btn ${index === value && 'active-btn'}`}>
                {job.company}
              </button>
            )
          } )}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty,index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className="job-icon">

                </FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App
