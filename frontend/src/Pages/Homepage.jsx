import React from 'react'
import { Link } from 'react-router-dom'



function Homepage() {
    return (

        <>

            <nav class="nav">
                <i class="uil uil-bars navOpenBtn"></i>
                <a href="#" class="logo"> <img src="/images/logo.jpeg" alt="" /></a>
                <ul class="nav-links">
                    <i class="uil uil-times navCloseBtn"></i>
                    <Link to={'/LatestNews'}><a href="#">ख़बरों की ख़बर</a></Link>  
                    
                    <Link to={'/Home'}><a href="#">$$$</a></Link>
                    <li><a href="#">मंथन</a></li>
                    <Link to={'/News'}><a href="#">खबरे</a></Link>
                    <li><a href="#">साहित्य</a></li>
                    <li><a href="#">संपदकी</a></li>
                    <li><a href="#">पहाड़ रैबार</a></li>
                    <Link to={'/Science&Tech'}><a href="#">विज्ञान और तकनीक</a></Link>
                    <li><a href="#">वीडियो</a></li>
                    <Link to={'/Health'}><a href="#">स्वस्थ्य</a></Link>
                    <li><a href="#">शहरनामा</a></li>
                    <li><a href="#">हमारे बारे में</a></li>
                    <Link  to={'/Contact-us'}><a href="#">संपर्क</a></Link>
                </ul>
                <i class="uil uil-search search-icon" id="searchIcon"></i>
                <div class="search-box">
                    <i class="uil uil-search search-icon"></i>
                    <input type="text" placeholder="Search here..." />
                </div>
            </nav>



            <section className='container'>
                <div className='slider-wrapper'>
                    <div className='slider'>
                        <img id='slide-1' src="/images/logo.jpeg" alt="" />

                        <img id='slide-2' src="/images/relimage.jpg" alt="" />

                        <img id='slide-3' src="/images/image2.jpg" alt="" />

                    </div>
                    {/* <div className='slider-nav'>
                              <a href="#slider-1"></a>
                              <a href="#slider-2"></a>
                              <a href="#slider-3"></a>
                        </div> */}
                </div>
            </section>


             <div class='col-sm-7  m-4'>
                <h2> Trending </h2>
             </div>
      <div class="d-flex flex-row bd-highlight mb-3">
              
            <div class="card w-25 m-5">
                <img src="/images/image2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Know More</a>
                </div>
            </div>

            <div class="card w-25 m-5">
                <img src="/images/image2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Know More</a>
                </div>
            </div>

            <div class="card w-25 m-5">
                <img src="/images/image2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Know More</a>
                </div>
            </div>

            </div>


            <div class='col-sm-7  m-4'>
                <h2> Featured </h2>
             </div>
      <div class="d-flex flex-row bd-highlight mb-3">
              
            <div class="card w-25 m-5">
                <img src="/images/image2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Know More</a>
                </div>
            </div>

            <div class="card w-25 m-5">
                <img src="/images/image2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Know More</a>
                </div>
            </div>

            <div class="card w-25 m-5">
                <img src="/images/image2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Know More</a>
                </div>
            </div>

            </div>


            <div class='col-sm-7 m-4'>
                <h2> Headlines </h2>
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


            {/* <!-- Footer --> */}
            <footer class="bg-dark text-center text-white">
                {/* <!-- Grid container --> */}
                <div class="container p-4">
                    {/* <!-- Section: Social media --> */}
                    <section class="mb-4">
                        {/* <!-- Facebook --> */}
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-facebook-f"></i
                        ></a>
                        {/* 
      <!-- Twitter --> */}
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-twitter"></i
                        ></a>
                        {/* 
      <!-- Google --> */}
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-google"></i
                        ></a>
                        {/* 
      <!-- Instagram --> */}
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-instagram"></i
                        ></a>

                        {/* <!-- Linkedin --> */}
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-linkedin-in"></i
                        ></a>

                        {/* <!-- Github --> */}
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-github"></i
                        ></a>
                    </section>
                    {/* <!-- Section: Social media -->

    <!-- Section: Form --> */}
                    <section class="">
                        <form action="">
                            {/* <!--Grid row--> */}
                            <div class="row d-flex justify-content-center">
                                {/* <!--Grid column--> */}
                                <div class="col-auto">
                                    <p class="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                {/* <!--Grid column-->

          <!--Grid column--> */}
                                <div class="col-md-5 col-12">
                                    {/* <!-- Email input --> */}
                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" class="form-control" />
                                        <label class="form-label" for="form5Example21">Email address</label>
                                    </div>
                                </div>
                                {/* <!--Grid column-->

          <!--Grid column--> */}
                                <div class="col-auto">
                                    {/* <!-- Submit button --> */}
                                    <button type="submit" class="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                                {/* <!--Grid column--> */}
                            </div>
                            {/* <!--Grid row--> */}
                        </form>
                    </section>
                    {/* <!-- Section: Form -->

    <!-- Section: Text --> */}
                    <section class="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                            eum harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
                    </section>
                    {/* <!-- Section: Text -->

    <!-- Section: Links --> */}
                    <section class="">
                        {/* <!--Grid row--> */}
                        <div class="row">
                            {/* <!--Grid column--> */}
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Links</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column-->

        <!--Grid column--> */}
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Links</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column-->

        <!--Grid column--> */}
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Links</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column-->

        <!--Grid column--> */}
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase">Links</h5>

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" class="text-white">Link 1</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 2</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 3</a>
                                    </li>
                                    <li>
                                        <a href="#!" class="text-white">Link 4</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column--> */}
                        </div>
                        {/* <!--Grid row--> */}
                    </section>
                    {/* <!-- Section: Links --> */}
                </div>
                {/* <!-- Grid container -->

  <!-- Copyright --> */}

                {/* <!-- Copyright --> */}
            </footer>





        </>


    )
}

export default Homepage