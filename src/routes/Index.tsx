import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Countrypage from '../pages/Countrypage'
import Errorpage from '../pages/Errorpage'
import Favouritepage from '../pages/Favouritepage'
import Homepage from '../pages/Homepage'

const Index = () => {
  return (
<BrowserRouter>
    <nav>
      <Navbar />
    </nav>

    <main>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/favouritepage' element={<Favouritepage />}/>
        <Route path='/country/:id' element={<Countrypage />}/>
        <Route path='*' element={<Errorpage />}/>
      </Routes>
    </main>
</BrowserRouter>
  )
}

export default Index
