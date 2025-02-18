import { useState } from 'react'
import React from 'react'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/userData'
import Testing from './components/testing'
import Loginpage from './pages/loginPage'
import Homepage from './pages/homePage'

import { BrowserRouter, Route, Routes, } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      
      <Routes path="/*" >
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/*" element={<h1>404 error</h1>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
