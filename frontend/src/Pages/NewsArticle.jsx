import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewsArticle({ match }) {
  const [newsData, setNewsData] = useState({});

  useEffect(() => {
    // Fetch the news data by its ID from the backend API
    const slug = match.params.newsId;
    axios.get(`http://localhost:8085/news/get/${slug}`)
      .then(response => {
        setNewsData(response.data);
      })
      .catch(error => {
        console.log('Error fetching news:', error);
      });
  }, [match.params.newsId]);

  return (
    <div>
      {/* Display the full news along with its content */}
      <h2>{newsData.title}</h2>
      <p>{newsData.content}</p>
      {/* Add any other news details you want to display */}
    </div>
  );
}

export default NewsArticle;