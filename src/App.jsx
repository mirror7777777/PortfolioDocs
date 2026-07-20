import { useState } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home.jsx'

function App() {

  return (
    <> 
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/> 
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
