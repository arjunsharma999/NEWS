import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/AdminPage/Navbar'
import Footer from '../components/AdminPage/Footer'

function PageMain() {
  return (
    <>
    <Navbar />

<div className="container my-5">
    <div className="d-flex flex-column justify-centent-center my-5">
      <div className='mainn mt-5 mb-2 border rounded'>
        <img src="/images/logo.jpeg" alt="" />
      </div>
      <div>
        <h2 className='my-3'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
      </div>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo tempora aliquam doloremque doloribus voluptate, illum, illo amet quasi architecto sapiente dignissimos. Perspiciatis reiciendis vitae, blanditiis eius earum adipisci hic quia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti itaque fugit eius perferendis veritatis mollitia rem quae, delectus minima, ea sint laudantium nobis eveniet? Est adipisci cumque quisquam molestias amet. 
        </p>
      </div>
    </div>
    </div>
    
    
    <Footer/>
    
    </>
  )
}

export default PageMain