import React from 'react'
import Navbar from '../components/AdminPage/Navbar'
import Footer from '../components/AdminPage/Footer'


function Contact() {
  return (
    <>

    <Navbar/>
      
<div className="container justify-content-center d-flex contectheight">
      <div className="row">
        <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center ">
          <img className="img mx-5 w-50" src="/images/contect.jpeg" alt="" />
        </div>
        <div className="col-lg-6 col-12 d-flex justify-content-center ">
          <div className="d-flex flex-column center gap-3 align-items-center justify-content-center">
            <h2 className="center">रीजनल रिपोर्टर</h2>
            <h4 className="center mx-5">76 अप्पर बाजार शंकर निवास श्रीनगर गढ़वाल</h4>
          <h4 className="center mx-5 p-0">9412079290,7455089290 </h4>
          </div>
        </div>
      </div>
</div>
       
       <Footer/>

    </>
  )
}

export default Contact