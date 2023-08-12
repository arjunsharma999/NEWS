import Navbar from "../components/AdminPage/Navbar";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import Footer from "../components/AdminPage/Footer";
import axios from "axios";
import { baseUrl, popularUrl, trendingUrl, ytUrl } from "../Constants";
import Headlines from "./Headlines";
import { Link } from "react-router-dom";
import { showAlert } from "./DialogBox";


function Homepage() {
  const [trendingNewsData, setTrendingNewsData] = useState([]);
  const [popularNewsData, setPopularNewsData] = useState([]);
  const [ytData, setYtData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [carousel, setCarousel] = useState([]);

  const getTrendingNews = async () => {
    const response = await axios.get(`${baseUrl}${trendingUrl}`);
    setTrendingNewsData(response.data);
  };
  const getPupularNews = async () => {
    const response = await axios.get(`${baseUrl}${popularUrl}`);
    setPopularNewsData(response.data);
  };

  const getYtData = async () => {
    const response = await axios.get(`${baseUrl}${ytUrl}`);
    setYtData(response.data);
    console.log(response.data);
  }

  const handleCardClick = (videoId) => {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(url, '_blank');
  };

  const getHeadlines = async () => {
    try {
      const response = await axios.get(`${baseUrl}/news/headlines`);
      setHeadlines(response.data);
      console.log("headlines", response.data);
    }
    catch (error) {
      console.error(error.response.data.message);
    }
  }

  const getCarousel = async () => {
    try {
      const response = await axios.get(`${baseUrl}/news/carousel`);
      setCarousel(response.data);
      console.log("carousel", response.data);
    }
    catch (error) {
      console.error(error.response.data.message);
    }
  }

  useState(() => {
    try {
      Promise.all([
        getTrendingNews(),
        getPupularNews(),
        getYtData(),
        getHeadlines(),
        getCarousel()
      ])
        .then(() => {
          setIsLoading(false);
          console.log('All data fetched successfully');
        })
        .catch(() => {
          showAlert('error', 'Error!', 'Error while fetching the news data');
          setIsLoading(false);
        })

    }
    catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  }, []);

  const renderFormattedContent = (htmlContent) => {
    if (typeof htmlContent !== 'string') {
      return null;
    }
    return { __html: htmlContent };
  };



  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Navbar />
          <div className="swiper-container">
            <Swiper
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              effect="fade"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper my-5"
              style={{ maxWidth: '100%', maxHeight: '94vh' }}
            >{carousel.map((newsItem) => (
              <SwiperSlide>
                <Link to={`/news-article/${newsItem.slug}`}>
                  <img
                    className="pillarboxed-image"
                    src={newsItem.imageUrl}
                    alt="" />
                  <h3 className="carousel-news-title">{newsItem.title}</h3>
                </Link>
              </SwiperSlide>
            ))}
              {/* <SwiperSlide>
                <Link to={`/news-article/${carousel[0].slug}`}>
                  <img
                    className="pillarboxed-image"
                    src={carousel[0].imageUrl}
                    alt="" />
                  <h3 className="carousel-news-title">{carousel[0].title}</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={`/news-article/${carousel[1].slug}`}>
                  <img className="pillarboxed-image" src={carousel[1].imageUrl} alt="" />
                  <h3 className="carousel-news-title">{carousel[1].title}</h3>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={`/news-article/${carousel[2].slug}`}>
                  <img className="pillarboxed-image" src={carousel[2].imageUrl} alt="" />
                  <h3 className="carousel-news-title">{carousel[2].title}</h3>
                </Link>
              </SwiperSlide> */}
            </Swiper>
          </div>

          <div className="container">
            <h2 className="my-4">Trending News</h2>

            <Swiper
              breakpoints={{
                740: { slidesPerView: 4 },
                320: { slidesPerView: 1 }
              }}
              slidesPerView={4}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[FreeMode, Autoplay, Pagination]}
              className="mySwipr"
            >
              {trendingNewsData.map(newsItem => (
                <SwiperSlide> <div className="cards">
                  <div className="cards-body border rounded p-2">

                    <img
                      width="100%"
                      height="180px"
                      src={newsItem.imageUrl}
                      className="cards-img-top rounded"
                      alt="..."
                    ></img>
                    <p className="truncate-title">
                      <h5 className="cards-title my-2" style={{ lineHeight: '1.5' }}>{newsItem.title}</h5>
                    </p>
                    <p className="my-2 truncate">
                      <div dangerouslySetInnerHTML={renderFormattedContent(newsItem.content)} />
                    </p>
                    <Link to={`/news-article/${newsItem.slug}`}>
                      <a href="" className=" position-static btn btn-outline-success btn-sm ">
                        Read More
                      </a>
                    </Link>
                  </div>
                </div></SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="container" >
            <h2 className="my-4">Headlines</h2>
            {headlines.length > 0 ? (
              headlines.slice(0, 3).map((newsItem, index) => (
                <Headlines key={index} newsItem={newsItem} />
              ))
            ) : (
              <p>No headlines available.</p>
            )}
          </div>


          <div className="container">
            <h2 className="my-4">Top News</h2>

            <Swiper
              breakpoints={{
                740: { slidesPerView: 4 },
                320: { slidesPerView: 1 }
              }}
              slidesPerView={4}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[FreeMode, Autoplay, Pagination]}
              className="mySwipr"
            >
              {popularNewsData.map(newsItem => (
                <SwiperSlide> <div className="cards">
                  <div className="cards-body border rounded p-2">
                    <img
                      width="100%"
                      height="180px"
                      src={newsItem.imageUrl}
                      className="cards-img-top rounded"
                      alt="..."
                    ></img>

                    <p className="truncate-title">
                      <h5 className="cards-title my-2" style={{ lineHeight: '1.5' }}>{newsItem.title}</h5>
                    </p>
                    <p className="my-2 truncate">
                      <div dangerouslySetInnerHTML={renderFormattedContent(newsItem.content)} />
                    </p>
                    <Link to={`/news-article/${newsItem.slug}`}>
                      <a href="" className="  position-static btn btn-outline-success btn-sm ">
                        Read More
                      </a>
                    </Link>
                    {/* <a href="" className="btn btn-outline-danger btn-sm mx-2">

                      Like
                    </a> */}
                  </div>
                </div></SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="container">
            <h2 className="my-4">Headlines</h2>
            {headlines.length > 0 ? (
              headlines.slice(3, 6).map((newsItem, index) => (
                <Headlines key={index} newsItem={newsItem} />
              ))
            ) : null}
          </div>

          <div className="container">
            <h2 className="my-4">Videos</h2>

            <Swiper
              breakpoints={{
                740: { slidesPerView: 4 },
                320: { slidesPerView: 1 }
              }}
              slidesPerView={4}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              modules={[FreeMode, Autoplay, Pagination]}
              className="mySwiper my-5"
            >
              {ytData.map((ytItem) => (
                <SwiperSlide key={ytItem._id}>
                  <div className="card" >
                    <div className="video-container">
                      <iframe
                        src={`https://www.youtube.com/embed/${ytItem.videoId}`}
                        title={ytItem.title}
                        width="100%"
                        height="200px"
                        allowFullScreen
                        className="card-img-top rounded"
                      ></iframe>
                      <div className="card-body d-flex flex-column justify-content-between">
                        <h5 className="card-title my-2 card-title-fixed-length" style={{ marginTop: "10px" }}>
                          {ytItem.title}
                        </h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* <div className="container">
            <h2 className="my-4">Videos</h2>

            <Swiper
              breakpoints={{
                740: { slidesPerView: 4 },
                320: { slidesPerView: 1 }
              }}
              slidesPerView={4}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[FreeMode, Autoplay, Pagination]}
              className="mySwipr"
            >
              {ytData.map(ytItem => (
                <SwiperSlide key={ytItem.id}>
                  <div className="card" onClick={() => handleCardClick(ytItem.videoId)}>
                    <img
                      src={ytItem.thumbnail}
                      className="card-img-top rounded"
                      alt="..."
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title my-2 card-title-fixed-length" style={{ marginTop: "10px" }}>
                        {ytItem.title}
                      </h5>
                    </div>
                  </div>

                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}

          <Footer />
          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        </>
      )}
    </div>
  );
}

export default Homepage;
