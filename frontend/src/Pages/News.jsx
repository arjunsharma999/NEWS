import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/AdminPage/Navbar';
import Footer from '../components/AdminPage/Footer';
const {baseUrl} = require("../Constants");
import Sort from '../components/Sort'

function News() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        // Make the API call to fetch news data
        axios.get(`${baseUrl}/news/get/football`)
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

           <Navbar/>
           <div className=' container '>
                <div class=' free col-md-7  '>
                    <h2> विज्ञान और </h2>
                    <Sort />
                </div>
            <Link to={`/news/${newsData.slug}`} key={newsData._id}>
                {/* <div class="card my-4 pt-1" >
                    <div class="row no-gutters">
                        <div class="col-sm-3">
                            <img class="card-img" src={newsData.imageUrl}  alt={newsData.title} />
                        </div>
                        <div class="col-sm-9">
                            <div class="card-body">
                                <h5 class="card-title">{newsData.title}</h5>
                                <p class="card-text">{newsData.content} </p>
                                <a href="#" class="btn btn-primary">Know More</a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </Link>


            <div class="card my-5" >
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

            <div class="card my-5" >
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
            </div>

            </div>


<Footer/>
        </>

    )
}

export default News;