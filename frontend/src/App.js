import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/AdminPage/Login'
import Signup from './components/AdminPage/Signup'
import Dashboard from './Pages/Dashboard'
import Homepage from './Pages/Homepage'
import Contact from './Pages/Contact'
import News from './Pages/News'
import Health from './Pages/Health'
import ScienceTech from './Pages/ScienceTech'
import LatestNews from './Pages/LatestNews'



function App() {
  return (
    <Router>
    

        
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/Sign-in" element={<Login />} />
              <Route path="/Sign-up" element={<Signup />} />
              <Route path="/Dashboard" element={<Dashboard/>}/>   
              <Route path="/Home" element={<Homepage/>}/> 
              <Route path="/Contact-us" element={<Contact/>}/> 
              <Route path="/News" element={<News/>}/>  
              <Route path="/Health" element={<Health/>}/> 
              <Route path="/Science&Tech" element={<ScienceTech/>}/>   
              <Route path="/LatestNews" element={<LatestNews/>}/>     
            </Routes>
      
      
    </Router>
  )
}

export default App
