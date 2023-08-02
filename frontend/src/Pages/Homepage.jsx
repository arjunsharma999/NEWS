import Navbar from "../components/AdminPage/Navbar";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, FreeMode, Pagination } from 'swiper/modules';
import Footer from "../components/AdminPage/Footer";
function Homepage() {
  return (
    <>
      <Navbar />
     <div className="container-fluid my-5 pt-sm-2">
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper my-5"
      >
        <SwiperSlide>
          <img width="100%"
  height="50%" src="/images/img1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img width="100%"
  height="50%" src="/images/img2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img width="100%"
  height="50%" src="/images/img3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img width="100%"
  height="50%" src="/images/image2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img width="100%"
  height="50%" src="/images/reliimage.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img width="100%"
  height="50%" src="/images/image2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img width="100%"
  height="50%" src="/images/image2.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      </div>

<div className="container">
<h2 className="my-4">Top News</h2>

      <Swiper
       breakpoints={{
        740: { slidesPerView: 4},
        320:    { slidesPerView: 1}
      }}
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay,Pagination]}
        className="mySwipr"
      >
        <SwiperSlide> <div className="card">
              <div class="card-body border rounded p-2">
                <h5 class="card-title my-2">Title Text</h5>
                <img
                width="100%"
                height="180px"
                  src="/images/img1.jpg"
                  className="card-img-top rounded"
                  alt="..."
                ></img>
                <p class="my-2 truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                  Like
                </a>
              </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="card">
              <div class="card-body border rounded p-2">
                <h5 class="card-title my-2">Title Text</h5>
                <img
                width="100%"
                height="180px"
                  src="/images/img1.jpg"
                  className="card-img-top rounded"
                  alt="..."
                ></img>
                <p class="my-2 truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                  Like
                </a>
              </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="card">
              <div class="card-body border rounded p-2">
                <h5 class="card-title my-2">Title Text</h5>
                <img
                width="100%"
                height="180px"
                  src="/images/img1.jpg"
                  className="card-img-top rounded"
                  alt="..."
                ></img>
                <p class="my-2 truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                  Like
                </a>
              </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="card">
              <div class="card-body border rounded p-2">
                <h5 class="card-title my-2">Title Text</h5>
                <img
                width="100%"
                height="180px"
                  src="/images/img1.jpg"
                  className="card-img-top rounded"
                  alt="..."
                ></img>
                <p class="my-2 truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                  Like
                </a>
              </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="card">
              <div class="card-body border rounded p-2">
                <h5 class="card-title my-2">Title Text</h5>
                <img
                width="100%"
                height="180px"
                  src="/images/img1.jpg"
                  className="card-img-top rounded"
                  alt="..."
                ></img>
                <p class="my-2 truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                  Like
                </a>
              </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className="card">
              <div class="card-body border rounded p-2">
                <h5 class="card-title my-2">Title Text</h5>
                <img
                width="100%"
                height="180px"
                  src="/images/img1.jpg"
                  className="card-img-top rounded"
                  alt="..."
                ></img>
                <p class="my-2 truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                  Like
                </a>
              </div>
            </div></SwiperSlide>
      </Swiper>
      </div>
      <div className="container my-3">
        <h2>Featured News </h2>
        <div className="row my-4">
          <div className="col-lg-3 col-sm-12 col-md-6 my-2 ">
            <div className="card">
              <div class="card-body border rounded p-2">
                <h5 class="card-title my-2">Title Text</h5>
                <img
                  src="/images/img1.jpg" 
                  className="card-img-top rounded"
                  alt="..."
                ></img>
                <p class="my-2 truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                
                  Like
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12  col-md-6 my-2">
            <div className="card">
              <div class="card-body border rounded p-2">
                <h5 class="card-title my-2">Title Text</h5>
                <img
                  src="/images/img1.jpg"
                  className="card-img-top rounded"
                  alt="..."
                ></img>
                <p class="my-2 truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                  
                  Like
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6 my-2">
            <div className="card">
              <div class="card-body border rounded p-2">
                <h5 class="card-title my-2">Title Text</h5>
                <img
                  src="/images/img1.jpg"
                  className="card-img-top rounded"
                  alt="..."
                ></img>
                <p class="my-2 truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
          
                  Like
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6 my-2">
            <div className="card">
              <div class="card-body border rounded p-2">
                <h5 class="card-title my-2">Title Text</h5>
                <img
                  src="/images/img1.jpg"
                  className="card-img-top rounded"
                  alt="..."
                ></img>
                <p class="my-2 truncate">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                  
                  Like
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div class=" ccar card my-4" >
                <div class="row no-gutters">
                    <div class="col-sm-3">
                        <img class="card-img" height="200px" width="50%" src="/images/image2.jpg" alt="Suresh Dasari Card" />
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

             
      <div class="  ccar card my-4 " >
                <div class="row no-gutters">
                    <div class="col-sm-3">
                        <img class="card-img" height="200px" width="1000%" src="/images/image2.jpg" alt="Suresh Dasari Card" />
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
            

      
    <Footer/>
      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </>
  );
}

export default Homepage;
