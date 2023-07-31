import React from 'react'
import Footer from '../components/AdminPage/Footer'
import  Navbar  from '../components/AdminPage/Navbar'

function Video() {
  return (
    <>
    
   <Navbar/>

    <div className="container justify-content-center d-flex contectheight">
      <div className="d-flex gap-5 ">
        <div className=" d-flex align-items-center justify-content-center ">
        <iframe src="https://www.youtube.com/embed/QH2-TGUlwu4" width="100%" height="50%" title="Nyan Cat [original]" frameborder="0" allowfullscreen></iframe>
      </div>

      <div className="d-flex align-items-center justify-content-center ">
        <iframe src="https://www.youtube.com/embed/QH2-TGUlwu4" width="300px" height="50%" title="Nyan Cat [original]" frameborder="0" allowfullscreen></iframe>
      </div>

      <div className="d-flex align-items-center justify-content-center ">
        <iframe src="https://www.youtube.com/embed/QH2-TGUlwu4" width="300px" height="50%" title="Nyan Cat [original]" frameborder="0" allowfullscreen></iframe>
      </div>

        
      </div>
</div>
       
      <Footer/>

    </>
  )


}

export default Video