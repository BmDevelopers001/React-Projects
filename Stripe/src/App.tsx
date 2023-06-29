import { useState } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Hero from './Components/Hero';
import Submenu from './Components/Submenu';

function App() {

  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  )
}

export default App
