import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link ,withRouter } from 'react-router-dom'
import Login from './components/AdminPage/Login'
import Signup from './components/AdminPage/Signup'
import Dashboard from './Pages/Dashboard'
import Homepage from './Pages/Homepage'
import Contact from './Pages/Contact'
import News from './Pages/News'
import Health from './Pages/Health'
import ScienceTech from './Pages/ScienceTech'
import LatestNews from './Pages/LatestNews'
import NewsArticle from './Pages/NewsArticle'
import LoginWrapper from './components/AdminPage/Login'



function App() {
  return (
    <Router>
    

        
            <Routes>
              <Route exact path="/" element={<Homepage/>} />
              <Route path="/Home" element={<Homepage/>}/> 
              <Route path="/Contact-us" element={<Contact/>}/> 
              <Route path="/News" element={<News/>}/>  
              <Route path="/Health" element={<Health/>}/> 
              <Route path="/Science&Tech" element={<ScienceTech/>}/>   
              <Route path="/LatestNews" element={<LatestNews/>}/>   
              <Route path="/news/:slug" component={<NewsArticle/>} /> 
              <Route path="/admin/Log-in" element={<LoginWrapper  />} />
              <Route path="/admin/Sign-up" element={<Signup />} />
              <Route path="/admin/Dashboard" element={<Dashboard/>}/>
            </Routes>
      
      
    </Router>
  )
}

export default App
