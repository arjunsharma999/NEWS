import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/AdminPage/Navbar'

function Health() {
  return (
    
<>

   <Navbar/>
            <div class='col-sm-7 m-4'>
                <h2> स्वस्थ्य </h2>
             </div>
            <div class="card pt-4" >
                <div class="row no-gutters">
                    <div class="col-sm-3">
                        <img class="card-img" src="/images/image2.jpg" alt="Suresh Dasari Card" />
                    </div>
                    <div class="col-sm-7">
                        <div class="card-body">
                            <h5 class="card-title">TOPIC</h5>
                            <p class="card-text">orem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi earum quasi ratione obcaecati sit ad assumenda praesentium ea fugit repellat, ullam facilis numquam sed temporibus. Deserunt assumenda necessitatibus molestias adipisci maiores corporis omnis, minus dignissimos ipsam exercitationem eligendi? Cupiditate atque recusandae alias neque ab</p>
                            <a href="#" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card pt-5 w-80" >
                <div class="row no-gutters">
                    <div class="col-sm-3">
                        <img class="card-img" src="/images/relimage.jpg" alt="Suresh Dasari Card" />
                    </div>
                    <div class="col-sm-7">
                        <div class="card-body">
                            <h5 class="card-title">Suresh Dasari</h5>
                            <p class="card-text">orem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi earum quasi ratione obcaecati sit ad assumenda praesentium ea fugit repellat, ullam facilis numquam sed temporibus. Deserunt assumenda necessitatibus molestias adipisci maiores corporis omnis, minus dignissimos ipsam exercitationem eligendi? Cupiditate atque recusandae alias neque ab</p>
                            <a href="#" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card pt-5" >
                <div class="row no-gutters">
                    <div class="col-sm-3">
                        <img class="card-img" src="/images/image2.jpg" alt="Suresh Dasari Card" />
                    </div>
                    <div class="col-sm-7">
                        <div class="card-body">
                            <h5 class="card-title">Suresh Dasari</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi earum quasi ratione obcaecati sit ad assumenda praesentium ea fugit repellat, ullam facilis numquam sed temporibus. Deserunt assumenda necessitatibus molestias adipisci maiores corporis omnis, minus dignissimos ipsam exercitationem eligendi? Cupiditate atque recusandae alias neque ab!</p>
                            <a href="#" class="btn btn-primary">Know More</a>
                        </div>
                    </div>
                </div>
            </div>



</>

  )
}

export default Health