// This page is for showing a particular news
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/AdminPage/Navbar';
import Footer from '../components/AdminPage/Footer';
import { baseUrl } from '../Constants';

function NewsArticle({ match }) {
  const [newsData, setNewsData] = useState({});

  const { slug } = useParams();

  const getData = async ()=>{
    axios.get(`${baseUrl}/news/get/${slug}`)
      .then(response => {
        setNewsData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log('Error fetching news:', error);
      });
  }

  useEffect(() => {
    // Fetch the news data by its slug from the backend API

    console.log(slug);
    getData();
    
  }, [slug]);

  const renderFormattedContent = (htmlContent) => {
    if (typeof htmlContent !== 'string') {
      return null;
    }
    return { __html: htmlContent };
  };

  return (
    <>

      <Navbar />
      <div className=' container '>
        
        {/* <div className="card pt-1 my-4" key={newsData._id}>
          <div className="row no-gutters">
            <div className="col-sm-3">
              <img className="card-img" src={newsData.imageUrl} alt={newsData.title} />
            </div>
            <div className="col-sm-9">
              <div className="card-body">
                <h5 className="card-title">{newsData.title}</h5>
                <div dangerouslySetInnerHTML={renderFormattedContent(newsData.content)} />
                <a href="#" className="btn btn-primary">Know More</a>
              </div>
            </div>
          </div>
        </div> */}


        <div className="d-flex flex-column justify-centent-center my-5">
          <div className='mt-5 mb-2 pagemain-img border rounded'>
            <img src={newsData.imageUrl} alt="" />
          </div>
          <div>
            <h2 className='my-3'>
              {newsData.title}
            </h2>
          </div>
          <div>
            <p>
              <div dangerouslySetInnerHTML={renderFormattedContent(newsData.content)} />
              {newsData.content}
            </p>
          </div>
          <div>
            {newsData.authorDetails&&(
              <h2 className='my-3'>
              {newsData.authorDetails}
            </h2>
            )}
          </div>
        </div>
        <div className="list-group-item my-3">
         {/* Check if ytVideoId is present */}
         {newsData.ytVideoId && (
          <iframe
            src={`https://www.youtube.com/embed/${newsData.ytVideoId}`}
            width="100%"
            height="600px"
            title=" "
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
        {/* Add other content related to ytItem here */}
        {/* <h5 className="card-title my-2 card-title-fixed-length">{ytItem.title}</h5>
        <p className="card-text">{ytItem.description}</p> */}
        {/* Add any other content you want to display */}
      </div>
      </div>


      <Footer />
    </>
  );
}

export default NewsArticle;