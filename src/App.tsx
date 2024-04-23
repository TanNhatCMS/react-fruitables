import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './scss/bootstrap.scss'
import './fontawesome'
import './App.css'
import Home from './components/Home'
import NoPage from './components/NoPage'


const App: React.FC = () => (
  <BrowserRouter>

    <Routes>
      <Route path="/index.html" element={<Home />} />
      <Route path="/" element={<Navigate to="/index.html" />} />
      <Route path="/404.html" element={<NoPage />} />
      <Route path="*" element={<Navigate to="/404.html" />} />
    </Routes>
  </BrowserRouter>
)


export default App