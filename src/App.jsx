import { useState } from 'react'
import React from 'react'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/userData'
import Testing from './components/testing'
import Loginpage from './pages/loginPage'
import Homepage from './pages/homePage'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHomePage from './pages/AdminHomePage'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<UserData />} />
          <Route path="/admin/*" element={<AdminHomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
