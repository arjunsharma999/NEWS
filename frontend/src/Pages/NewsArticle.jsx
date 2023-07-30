import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function NewsArticle({ match }) {
  const [newsData, setNewsData] = useState({});
  
  const { slug } = useParams();

  useEffect(() => {
    // Fetch the news data by its ID from the backend API
    
    //console.log(slug);
    axios.get(`http://localhost:8085/news/get/${slug}`)
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
      <div className="card pt-4" key={newsData._id}>
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
      </div>
    </>
  );
}

export default NewsArticle;