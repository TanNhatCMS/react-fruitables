import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './scss/bootstrap.scss'
import './fontawesome'
import './App.css'
import Home from './components/Home'


const App: React.FC = () => (
  <BrowserRouter>

    <Routes>
      <Route path="/index.html" element={<Home />} />
      <Route path="/" element={<Navigate to="/index.html" />} />
    </Routes>
  </BrowserRouter>
)


export default App