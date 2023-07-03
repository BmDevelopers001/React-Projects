import { useGlobalContext } from './context';

import Navbar from './Components/Navbar'
import CartContainer from './Components/CartContainer';

function App() {

  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )

}

export default App