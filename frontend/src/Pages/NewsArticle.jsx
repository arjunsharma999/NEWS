// This page is for showing a particular news
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { EmailIcon, EmailShareButton, FacebookIcon ,  FacebookShareButton,  PinterestIcon,  PinterestShareButton,  TelegramIcon,  TelegramShareButton,  WhatsappIcon, WhatsappShareButton } from 'react-share' ;
import { useParams } from 'react-router-dom';
import Navbar from '../components/AdminPage/Navbar';
import Footer from '../components/AdminPage/Footer';
import { baseUrl } from '../Constants';
import { showAlert } from './DialogBox';
import Cards from './Cards';


function NewsArticle({ match }) {
  const [newsData, setNewsData] = useState({});
  const [ralatedNewsData, setRelatedNewsData] = useState([]);

  const { slug } = useParams();

  const getData = async () => {
    await axios.get(`${baseUrl}/news/get/${slug}`)
      .then(response => {
        setNewsData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log('Error fetching news:', error);
        showAlert('error', 'Error!!', 'Error while fetching the news Data');
      });
  }

  const getRelatedNews = async () => {
    try {
      const response = await axios.get(`${baseUrl}/news/related-news/${slug}`)
      setRelatedNewsData(response.data);
      console.log("realated data fetched");
    }
    catch (error) {
      console.log('Error fetching news:', error);
      showAlert('error', 'Error!!', 'Error while fetching the related news Data');
    }

  }

  useEffect(() => {
    // Fetch the news data by its slug from the backend API
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Use smooth scrolling animation
    });
    console.log(slug);
    getData();
    getRelatedNews();

  }, [slug]);

  const renderFormattedContent = (htmlContent) => {
    if (typeof htmlContent !== 'string') {
      return null;
    }
    return { __html: htmlContent };
  };

  const shareUrl = "http://localhost:3000/news-article/testing"

  return (
    // <>

    //   <Navbar />
    //   <div className=' container '>

    //     {/* <div className="card pt-1 my-4" key={newsData._id}>
    //       <div className="row no-gutters">
    //         <div className="col-sm-3">
    //           <img className="card-img" src={newsData.imageUrl} alt={newsData.title} />
    //         </div>
    //         <div className="col-sm-9">
    //           <div className="card-body">
    //             <h5 className="card-title">{newsData.title}</h5>
    //             <div dangerouslySetInnerHTML={renderFormattedContent(newsData.content)} />
    //             <a href="#" className="btn btn-primary">Know More</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div> */}


    //     <div className="d-flex flex-column justify-centent-center my-5">
    //       <div className='mt-5 mb-2 pagemain-img border rounded'>
    //         <img src={newsData.imageUrl} alt="" />
    //       </div>
    //       <div>
    //         <h2 className='my-3'>
    //           {newsData.title}
    //         </h2>
    //       </div>
    //       <div>
    //         <p>
    //           <div dangerouslySetInnerHTML={renderFormattedContent(newsData.content)} />
    //           {newsData.content}
    //         </p>
    //       </div>
    //       <div>
    //         {newsData.authorDetails && (
    //           <h2 className='my-3'>
    //             {newsData.authorDetails}
    //           </h2>
    //         )}
    //       </div>
    //     </div>
    //     <div className="list-group-item my-3">
    //       {/* Check if ytVideoId is present */}
    //       {newsData.ytVideoId && (
    //         <iframe
    //           src={`https://www.youtube.com/embed/${newsData.ytVideoId}`}
    //           width="100%"
    //           height="600px"
    //           title=" "
    //           frameBorder="0"
    //           allowFullScreen
    //         ></iframe>
    //       )}
    //       {/* Add other content related to ytItem here */}
    //       {/* <h5 className="card-title my-2 card-title-fixed-length">{ytItem.title}</h5>
    //     <p className="card-text">{ytItem.description}</p> */}
    //       {/* Add any other content you want to display */}
    //     </div>
    //   </div>

    //   <Cards newsData={ralatedNewsData}/>
    //   <Footer />
    // </>

    <>
      <Navbar />

      <div className="container my-5">
        <div className="d-flex flex-column justify-centent-center my-5">
          <div className=' mainn img-fluid d-flex'>
            <img className="news-article-image" src={newsData.imageUrl} alt="" />



             <div class="recent row-lg-7 m-5">
              <div class="row">
                <h2 className='my-3'>
                  {newsData.title}
                </h2>
              </div>
              <div className=' social '>
              
              <div 
             
             style={{
              background: '#0003',
              height: '0vh'
              

             }}
            
            >
             <FacebookShareButton url={shareUrl}>
                 <FacebookIcon size={40}/>
             </FacebookShareButton>
             
             <WhatsappShareButton url={shareUrl}>
                 <WhatsappIcon size={40}/>
             </WhatsappShareButton>

             <TelegramShareButton url={shareUrl}>
                 <TelegramIcon size={40}/>
             </TelegramShareButton>

             <EmailShareButton url={shareUrl}>
                 <EmailIcon size={40}/>
             </EmailShareButton>

             
             <PinterestShareButton url={shareUrl}>
                 <PinterestIcon size={40}/>
             </PinterestShareButton>


            </div>

               

                
              </div>
            </div> 
          </div>

          

          <div>
            {/* <h3 className='my-3'>
              {newsData.title}
            </h3> */}
          </div>
          {/* <div className=' social '>
            <a className='fbb me-2 ' href="https://www.facebook.com">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>

            <a className='ytt me-2 ' href="https://www.facebook.com">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>

            <a className='ig me-2 ' href="https://www.facebook.com">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>

            <a className='pin me-2 ' href="https://www.facebook.com">
              <ion-icon name="logo-pinterest"></ion-icon>
            </a>
          </div> */}
          <div>
            <p>
              <div dangerouslySetInnerHTML={renderFormattedContent(newsData.content)} />
            </p>
            <div> <h5>लेखक - {newsData.authorDetails} </h5></div>
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

        <Cards newsData={ralatedNewsData} />

      </div>


      <Footer />

    </>

  );
}

export default NewsArticle;