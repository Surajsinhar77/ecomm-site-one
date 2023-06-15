import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AllRoutes from './common/AllRoutes'
import Home from './Home'


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
    </div>
  )
}

export default App
