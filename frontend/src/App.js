import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link ,withRouter } from 'react-router-dom'
// import Login from './components/AdminPage/Login'
import Signup from './components/AdminPage/Signup'
import Dashboard from './Pages/Dashboard'
import Homepage from './Pages/Homepage'
import Contact from './Pages/Contact'
import LatestNews from './Pages/LatestNews'
import NewsArticle from './Pages/NewsArticle'
import LoginWrapper from './components/AdminPage/Login'
import Navbar from './components/AdminPage/Navbar'
import About from './Pages/About'
import Modify from './Pages/Modify'
import Footer from './components/AdminPage/Footer'
import Video from './Pages/Video'
import Test from './Pages/Test'
import Sort from './components/Sort'



function App() {
  return (
    
    <Router>        
            <Routes>
              
              {/* User Routes */}
              <Route exact path="/" element={<Homepage/>} />
              <Route path="/Home" element={<Homepage/>}/> 
              <Route path="/Contact-us" element={<Contact/>}/> 
              <Route path="/News/:category" element={<LatestNews/>}/>   
              <Route path="/news-article/:slug" element={<NewsArticle/>} /> 
              <Route path="/Navbar" element={<Navbar/>}/>
              <Route path="/Footer"  element={<Footer/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Video" element={<Video/>}/>
              <Route path="/dasfdsg" element={<Test/>}/>
              <Route path="/gdd" element={<Sort/>}/>

              {/* Admin routes */}

              <Route path="/admin/Log-in" element={<LoginWrapper />} />
              <Route path="/admin/Sign-up" element={<Signup />} />
              <Route path="/admin/Dashboard" element={<Dashboard/>}/>
              <Route path="/admin/edit/:slug" element={<Dashboard/>}/>
              <Route path="/Modify-post" element={<Modify/>}/>

            </Routes>
      
      
    </Router>
  )
}

export default App
