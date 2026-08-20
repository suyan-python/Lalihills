import { useState } from 'react'

import './index.css'
import Landing from './pages/home/HeroLanding'
import Navbar from './constant/Navbar'
import Banner from './constant/Banner'


function App()
{

  return (
    <>
      <section>
        <Banner />
        <Navbar />
        <Landing />
      </section>
    </>
  )
}

export default App
