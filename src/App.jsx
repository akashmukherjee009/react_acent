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
      <p>This is for conflict</p>
      <p>This is change</p>
      <p>This is branch akash</p>
      <p>this is pull request</p>
    </>

  )
}

export default App
