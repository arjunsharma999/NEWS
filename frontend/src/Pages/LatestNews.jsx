// This is the page for the list of news
import { Link, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/AdminPage/Navbar';
import Footer from '../components/AdminPage/Footer';
import { baseUrl } from '../Constants';
import Sort from '../components/Sort'
import { showAlert } from './DialogBox';

function LatestNews() {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { category } = useParams();
  const [sortOption, setSortOption] = useState('date');
  const [loading, setLoading] = useState(false);

  const handleSort = (selectedOption) => {
    setSortOption(selectedOption);

    if (selectedOption) {
      if (selectedOption.value === 'sort by date') {
        // Sort by date
        console.log("date");
        setSortOption('date')
        setCurrentPage(1);

      } else if (selectedOption.value === 'sort by views') {
        // Sort by views
        console.log('views');
        setSortOption('views');
        setCurrentPage(1);
      }
    } else {
      // Reset to original list
      console.log('reset');
    }
  };

  const renderFormattedContent = (htmlContent) => {
    if (typeof htmlContent !== 'string') {
      return null;
    }
    return { __html: htmlContent };
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    setLoading(true);
    // Make the API call to fetch news data
    axios.get(`${baseUrl}/news/getNews?category=${category}&sortBy=${sortOption}&pageSize=5&page=${currentPage}`)
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
        showAlert('error', 'Error!!', 'Error fetchting news Data');
      }).finally(() => {
        setLoading(false);
      });
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Use smooth scrolling animation
    });
    console.log("END");
  }, [currentPage, category, sortOption]);
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
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Navbar />

          <div className=' container ' >

            <div class=' free col-md-7  '>
              <Sort onChange={handleSort} marginTop={100} />
            </div>


            {newsData.map(newsItem => (
              // <Link to={`/news-article/${newsItem.slug}`} key={newsItem._id}>
               
              <div className="card pt-1 my-4 " key={newsItem._id} style={{ marginRight: '20%' }} >
                <div className="row no-gutters ">
                  <div className="col-sm-3 ">
                    <img className="card-img" height="200px" width="50%" src={newsItem.imageUrl} alt={newsItem.title} />
                  </div>
                  <div className="col-sm-9">
                    <div className="card-body">
                      <h5 className="card-title">{newsItem.title}</h5>
                      <p className="card-text truncate m-0">
                        <div dangerouslySetInnerHTML={renderFormattedContent(newsItem.content)} />
                      </p>
                      <Link to={`/news-article/${newsItem.slug}`}>
                        <button className="btn btn-primary">Know More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              

              

            

            ))}
             
             <div class="col d-flex  ">
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              </div>
            
            {/* <div class="col-sm-4 m-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div> */}
          </div>


          </div>

         



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
      )}

      <Footer />

    </>

  );
}

export default LatestNews;