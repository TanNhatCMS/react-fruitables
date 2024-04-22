import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './scss/bootstrap.scss'
import './App.css'
import Home from './components/Home'

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)


export default App