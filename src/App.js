import React from 'react'
import Header from "./component/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import HomeScreen from "./component/HomeScreen"


const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>

      </Router>
  )
}

export default App
