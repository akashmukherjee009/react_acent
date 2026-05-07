import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Query from './pages/Query'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/query" element={<Query />} />
        </Routes>
      </Router>
      <p>This is change</p>
    </>

  )
}

export default App
