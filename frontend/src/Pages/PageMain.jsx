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
          <div className=' mainn img-fluid d-flex'>
            <img src="/images/img2.jpg" alt="" />



            <div class="recent row-lg-7 m-5">
              <div class="row">
                <div class="card ">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text truncate m-0 ">With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sequi aspernatur quae veniam magnam qui eum quidem a unde, cupiditate tempora! Tempore facilis placeat culpa quaerat, rerum molestiae rem? Eaque nulla non, quidem corporis ad aut adipisci nisi, facere dicta tenetur quibusdam, iusto repellendus? Hic, nesciunt labore ducimus amet commodi animi quod quam fugit ullam dolorem.</p>
                    <a href="#" class="btn btn-primary">Read Now..</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=' social '>
            <a className='fbb me-2 ' href="https://www.facebook.com/profile.php?id=100009491612655">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>

            <a className='ytt me-2 ' href="https://www.facebook.com/profile.php?id=100009491612655">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>

            <a className='ig me-2 ' href="https://www.facebook.com/profile.php?id=100009491612655">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>

            <a className='pin me-2 ' href="https://www.facebook.com/profile.php?id=100009491612655">
              <ion-icon name="logo-pinterest"></ion-icon>
            </a>
          </div>








          <div>
            <h2 className='my-3'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo tempora aliquam doloremque doloribus voluptate, illum, illo amet quasi architecto sapiente dignissimos. Perspiciatis reiciendis vitae, blanditiis eius earum adipisci hic quia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti itaque fugit eius perferendis veritatis mollitia rem quae, delectus minima, ea sint laudantium nobis eveniet? Est adipisci cumque quisquam molestias amet.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloremque temporibus eaque, voluptatum hic quis maxime ad earum tenetur iste fuga, laboriosam consequatur dicta, iusto iure vel ea fugit quaerat voluptatem expedita fugiat quod! Earum molestias voluptate exercitationem distinctio facere odit libero voluptatibus ad perferendis.
            </p>
            <div> <h5>लेखक - </h5></div>
          </div>
        </div>
      </div>


      <Footer />

    </>
  )
}

export default PageMain