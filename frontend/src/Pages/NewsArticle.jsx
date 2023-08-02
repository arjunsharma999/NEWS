import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/AdminPage/Navbar';
import Footer from '../components/AdminPage/Footer';
import { baseUrl } from '../Constants';


function NewsArticle({ match }) {
  const [newsData, setNewsData] = useState({});

  const { slug } = useParams();

  useEffect(() => {
    // Fetch the news data by its ID from the backend API

    //console.log(slug);
    axios.get(`${baseUrl}/news/get/${slug}`)
      .then(response => {
        setNewsData(response.data);
        //console.log(response.data);
      })
      .catch(error => {
        console.log('Error fetching news:', error);
      });
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

      {/* <div className="card pt-4" key={newsData._id}>
        <div className="row no-gutters">
          <div className="col-sm-3">
            <img className="card-img" src={newsData.imageUrl} alt={newsData.title} />
          </div>
          <div className="col-sm-7">
            <div className="card-body">
              <h5 className="card-title">{newsData.title}</h5>
              <div dangerouslySetInnerHTML={renderFormattedContent(newsData.content)} />
              <a href="#" className="btn btn-primary">Know More</a>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container my-5">
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
              {/* <div dangerouslySetInnerHTML={renderFormattedContent(newsData.content)} /> */}
              {newsData.content}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default NewsArticle;