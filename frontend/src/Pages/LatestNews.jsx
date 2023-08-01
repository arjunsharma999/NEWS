
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  Navbar  from '../components/AdminPage/Navbar';
import Footer from '../components/AdminPage/Footer';




function LatestNews() {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Make the API call to fetch news data
    axios.get(`http://localhost:8085/news/getNews?category=Sports&pageSize=2&page=${currentPage}`)
      .then(response => {
        setNewsData(response.data.paginatedNewsArticles); // Update the state with the fetched news data
        console.log(response.data.paginatedNewsArticles);
        setTotalPages(response.data.totalPages);
        console.log(totalPages);
        console.log(response.data);
        console.log(response.data.page);
      })
      .catch(error => {
        console.log('Error fetching news:', error);
      });
  }, [currentPage]);
  return (

    <>

      {/* <div>
    {newsData.map(item => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    ))}
  </div> */}

     <Navbar/>

     <div className="container my-5">
            <div class='col-sm-7 my-5 '>
                <h2> ख़बरों की ख़बर </h2>
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

     


      
            <div>
      {newsData.map(newsItem => (

          <Link to={`/news/${newsItem.slug}`} key={newsData._id}>
            <div className="card pt-4" key={newsItem._id}>
              <div className="row no-gutters">
                <div className="col-sm-3">
                  <img className="card-img" src={newsItem.imageUrl} alt={newsItem.title} />
                </div>
                <div className="col-sm-7">
                  <div className="card-body">
                    <h5 className="card-title">{newsItem.title}</h5>
                    <p className="card-text">{newsItem.content}</p>
                    <a href="#" className="btn btn-primary">Know More</a>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          ))}
          <div className="container my-5 d-flex gap-4 justify-content-center">
          <button onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
            disabled={currentPage === 1}
            className='btn '
          >
            Previous
          </button>
          <button onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
            disabled={currentPage === totalPages}
            className='btn '
          >
            Next
          </button>
        
          </div>
      
      </div>

    <Footer/>

    </>

  );
}

export default LatestNews;