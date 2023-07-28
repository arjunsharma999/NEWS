
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';




function  LatestNews() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
      // Make the API call to fetch news data
      axios.get('http://localhost:8085/news/get/demo-title')
        .then(response => {
          setNewsData(response.data); // Update the state with the fetched news data
          console.log(response.data);
        })
        .catch(error => {
          console.log('Error fetching news:', error);
        });
    }, []);
  return (
    
<>

<div>
    {newsData.map(item => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    ))}
  </div>

<nav class="nav">
                <i class="uil uil-bars navOpenBtn"></i>
                <a href="#" class="logo"> <img src="/images/logo.jpeg" alt="" /></a>
                <ul class="nav-links">
                    <i class="uil uil-times navCloseBtn"></i>
                    <li><a href="#">ख़बरों की ख़बर</a></li> 
                    <Link to={'/Home'}><a href="#">$$$</a></Link>
                    <li><a href="#">मंथन</a></li>
                    <Link to={'/News'}><a href="#">खबरे</a></Link>
                    <li><a href="#">साहित्य</a></li>
                    <li><a href="#">संपदकी</a></li>
                    <li><a href="#">पहाड़ रैबार</a></li>
                    <li><a href="#">विज्ञान और तकनीक</a></li>
                    <li><a href="#">वीडियो</a></li>
                    <li><a href="#">स्वस्थ्य</a></li>
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


            <div class='col-sm-7 m-4'>
                <h2> ख़बरों की ख़बर </h2>
             </div>
          feature/admin-dashboard-login-protection
            {/* <div class="card pt-4" >

            
            <div class="card pt-4" >
         master
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
            </div> */}
            {newsData.map(newsItem => (
        <div className="card pt-4" key={newsItem._id}>
          <div className="row no-gutters">
            <div className="col-sm-3">
              <img className="card-img" src={`data:image/jpeg;base64,${newsItem.imageData}`} alt={newsItem.title} />
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
      ))}



</>

  );
}

export default LatestNews;