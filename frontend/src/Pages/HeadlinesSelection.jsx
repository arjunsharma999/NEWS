// This is the page for the list of news
import { Link, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/AdminPage/Navbar';
import Footer from '../components/AdminPage/Footer';
import { baseUrl } from '../Constants';
import Sort from '../components/Sort'

function HeadlinesSelection() {
    const [newsData, setNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    //const { category } = useParams();
    const [selectedNews, setSelectedNews] = useState([]);

    const handleNewsSelection = (slug) => {
        if (selectedNews.includes(slug)) {
            setSelectedNews(selectedNews.filter(id => id !== slug));
        } else {
            if (selectedNews.length < 6) {
                setSelectedNews([...selectedNews, slug]);
            } else {
                // You can show a message here indicating that the maximum selection limit has been reached
                console.log('Maximum selection limit reached');
            }
        }
    };

    const saveHeadlines = ()=>{
        if(selectedNews.length<6){
            console.log("Select exactly 6 headlines to continue");
        }
        const slugs = {
            slugs : selectedNews
        }
        try{ 
        const response = axios.post(`${baseUrl}/news/insertHeadlines`, slugs, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          console.log(response.data);
        }
        catch(error){
            console.log("Error ",error);
        }
    }

    useEffect(() => {
        // Make the API call to fetch news data
        axios.get(`${baseUrl}/news/getNews?pageSize=5&page=${currentPage}`)
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

            <Navbar />

            <div className=' container '>
                <div class=' free col-md-7  '>
                    <h2> विज्ञान और </h2>
                    <Sort />
                </div>
                {newsData.map(newsItem => (
                    <div key={newsItem._id}>
                        {/* <input
                            type="checkbox"
                            checked={selectedNews.includes(newsItem._id)}
                            onChange={() => handleNewsSelection(newsItem._id)}
                        /> */}
                        <div class="card my-4" >
                            <div class="row no-gutters">
                                <div class="col-sm-3">
                                    <img class="card-img" height="200px" width="100px" src={newsItem.imageUrl} alt="Suresh Dasari Card" />
                                </div>
                                <div class="col-sm-7">
                                    <div class="card-body">
                                        <h6 class="card-title">{newsItem.title}</h6>
                                        <p class="card-text truncate m-0">{newsItem.content}</p>
                                        {/* <a href="#" class="btn btn-primary mt-2">Know More</a> */}
                                        <input
                                            type="checkbox"
                                            checked={selectedNews.includes(newsItem.slug)}
                                            onChange={() => handleNewsSelection(newsItem.slug)}
                                            className="position-absolute top-0 end-0 m-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
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
            <div className='container my-5 d-flex gap-4 justify-content-center'>
                <button onClick={() => saveHeadlines()}
                    disabled={currentPage === 1}
                    className='btn '
                >
                    Save Headlines
                </button>
            </div>




            <Footer />

        </>

    );
}

export default HeadlinesSelection;