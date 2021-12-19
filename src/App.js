import React from 'react'
import Header from "./component/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import HomeScreen from "./component/HomeScreen"
// import Footer from "./component/Footer"


const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
      {/* <Footer/> */}
      </Router>
  )
}

export default App
