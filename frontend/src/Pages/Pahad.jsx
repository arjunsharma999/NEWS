import React from 'react'
import Navbar from '../components/AdminPage/Navbar'
import Footer from '../components/AdminPage/Footer'

function Pahad() {
  return (
   <>
     <Navbar/>

     <div className=' container m-5'>
            <div class=' free col-md-7 m-5'>
           <h2> ख़बरों की ख़बर </h2>
        </div>            
       <div class="card pt-2 my-4" >
           <div class="row no-gutters">
               <div class="col-sm-3">
                   <img class="card-img" height="200px" width="100px" src="/images/image2.jpg" alt="Suresh Dasari Card" />
               </div>
               <div class="col-sm-7">
                   <div class="card-body">
                       <h6 class="card-title">TOPIC</h6>
                       <p class="card-text truncate m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi earum quasi ratione obcaecati sit ad assumenda praesentium ea fugit repellat, ullam facilis numquam sed temporibus. Deserunt assumenda necessitatibus molestias adipisci maiores corporis omnis, minus dignissimos ipsam exercitationem eligendi? Cupiditate atque recusandae alias neque ab!</p>
                       <a href="#" class="btn btn-primary mt-2">Know More</a>
                   </div>
               </div>
           </div>
       </div>

       <div class="card my-4" >
           <div class="row no-gutters">
               <div class="col-sm-3">
                   <img class="card-img" height="200px" width="100px" src="/images/image2.jpg" alt="Suresh Dasari Card" />
               </div>
               <div class="col-sm-7">
                   <div class="card-body">
                       <h6 class="card-title">TOPIC</h6>
                       <p class="card-text truncate m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi earum quasi ratione obcaecati sit ad assumenda praesentium ea fugit repellat, ullam facilis numquam sed temporibus. Deserunt assumenda necessitatibus molestias adipisci maiores corporis omnis, minus dignissimos ipsam exercitationem eligendi? Cupiditate atque recusandae alias neque ab!</p>
                       <a href="#" class="btn btn-primary mt-2">Know More</a>
                   </div>
               </div>
           </div>
       </div>
       <div class="card my-4" >
           <div class="row no-gutters">
               <div class="col-sm-3">
                   <img class="card-img center" height="200px" width="100px" src="/images/logo.jpeg" alt="Suresh Dasari Card" />
               </div>
               <div class="col-sm-7">
                   <div class="card-body">
                       <h6 class="card-title">TOPIC</h6>
                       <p class="card-text truncate m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi earum quasi ratione obcaecati sit ad assumenda praesentium ea fugit repellat, ullam facilis numquam sed temporibus. Deserunt assumenda necessitatibus molestias adipisci maiores corporis omnis, minus dignissimos ipsam exercitationem eligendi? Cupiditate atque recusandae alias neque ab!</p>
                       <a href="#" class="btn btn-primary mt-2">Know More</a>
                   </div>
               </div>
           </div>
       </div>
       </div>

       <Footer/>
   
   </>
  )
}

export default Pahad