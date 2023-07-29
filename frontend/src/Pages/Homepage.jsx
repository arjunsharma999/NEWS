import React from "react";
import { Link } from "react-router-dom";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Navbar from "../components/AdminPage/Navbar";
import Footer from "../Pages/Footer";

function Homepage() {
  // console.log(showMenu);
  return (
    <>
      <Navbar />
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Next Steps
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Contact us
                </a>
                <a className="dropdown-item" href="#">
                  Subscribe to the blog
                </a>
                <a className="dropdown-item" href="#">
                  Sign up for our newsletter
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav> */}

      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
          alt="..."
        >
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
          alt="..."
        >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem>

        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
          alt="..."
        >
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </MDBCarouselItem>
      </MDBCarousel>

      <div className="container my-3">
        <h2>Top News</h2>
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
                <p class="my-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                  {/* <i class="far fa-heart"></i> */}
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
                <p class="my-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                  {/* <i class="far fa-heart"></i> */}
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
                <p class="my-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                  {/* <i class="far fa-heart"></i> */}
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
                <p class="my-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                  {/* <i class="far fa-heart"></i> */}
                  Like
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured News */}
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
                <p class="my-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                  {/* <i class="far fa-heart"></i> */}
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
                <p class="my-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                  {/* <i class="far fa-heart"></i> */}
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
                <p class="my-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                  {/* <i class="far fa-heart"></i> */}
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
                <p class="my-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
                <a href="" class="btn btn-outline-success btn-sm ">
                  Read More
                </a>
                <a href="" class="btn btn-outline-danger btn-sm mx-2">
                  {/* <i class="far fa-heart"></i> */}
                  Like
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* slide news */}
      <div className="container my-3">
        <h2>Featured News </h2>
        <div className="row my-4">
          <div className="col-12 ">
            <div className="card d-flex flex-sm-row flex-column align-items-center  gap-4">
              <img
                src="/images/img1.jpg"
                className="card-img-top rounded w-25 h-25"
                alt="..."
              ></img>
              <div className="text-wrapper">
                <h2>Title Text</h2>
                <p class="m-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </>
  );
}

export default Homepage;
