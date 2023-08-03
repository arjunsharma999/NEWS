import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link ,withRouter } from 'react-router-dom'
// import Login from './components/AdminPage/Login'
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
import PageMain from './Pages/PageMain'
import Navbar from './components/AdminPage/Navbar'
import About from './Pages/About'
import Modify from './Pages/Modify'
import Footer from './components/AdminPage/Footer'
import Manthan from './Pages/Manthan'
import Video from './Pages/Video'
import Pahad from './Pages/Pahad'
import Sampadk from './Pages/Sampadk'
import Sahitya from './Pages/Sahitya'
import Test from './Pages/Test'
import Sort from './components/Sort'



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
              <Route path="/News/:category" element={<LatestNews/>}/>   
              <Route path="/news-article/:slug" element={<NewsArticle/>} /> 
              <Route path="/admin/Log-in" element={<LoginWrapper />} />
              <Route path="/admin/Sign-up" element={<Signup />} />
              <Route path="/admin/Dashboard" element={<Dashboard/>}/>
              <Route path="/admin/edit/:slug" element={<Dashboard/>}/>
              <Route path="/Modify-post" element={<Modify/>}/>
              <Route path="/Article" element={<PageMain/>}/>   
              <Route path="/Navbar" element={<Navbar/>}/>
              <Route path="/Footer"  element={<Footer/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Manthan" element={<Manthan/>}/>
              <Route path="/Sahitya" element={<Sahitya/>}/>
              <Route path="/Sampadk" element={<Sampadk/>}/>
              <Route path="/Padah-rabar" element={<Pahad/>}/>
              <Route path="/Video" element={<Video/>}/>
              <Route path="/Shernama" element={<shernama/>}/>
              <Route path="/dasfdsg" element={<Test/>}/>
              <Route path="/gdd" element={<Sort/>}/>
            </Routes>
      
      
    </Router>
  )
}

export default App
