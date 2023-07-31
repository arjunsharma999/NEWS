import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/AdminPage/Navbar'
import Footer from '../components/AdminPage/Footer'

function PageMain() {
  return (
    <>
    <Navbar />




    <div className='col-ms-4 text-center'>

    <img className='mainpg-img' src="/images/logo.jpeg" alt="" />
     
     <div className='Mainhead'>

        <h2> Heading </h2>   


     </div>
 

         <div className='Maintopic'>

        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellat blanditiis deserunt eos totam cupiditate quis nulla fugiat nostrum hic non asperiores, ipsa iusto illum recusandae expedita sapiente error. Voluptatem, suscipit temporibus, nesciunt odit quod necessitatibus commodi et saepe explicabo voluptatum expedita est, porro reprehenderit.</h3>

         </div>


    </div>
    
    
    
    <Footer/>
    
    </>
  )
}

export default PageMain