import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

function Cards ({newsData}) {

    const renderFormattedContent = (htmlContent) => {
        if (typeof htmlContent !== 'string') {
          return null;
        }
        return { __html: htmlContent };
      };

    if(!newsData){
        return null;
    }
    return (
        <>
            <div className="container">
            <h2 className="my-4">Also Read</h2>
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
              {newsData.map(newsItem => (
                <SwiperSlide> <div className="cards">
                  <div class="cards-body border rounded p-2">

                    <img
                      width="100%"
                      height="180px"
                      src={newsItem.imageUrl}
                      className="cards-img-top rounded"
                      alt="..."
                    ></img>
                    <h5 class="cards-title my-2">{newsItem.title}</h5>
                    <p class="my-2 truncate">
                      <div dangerouslySetInnerHTML={renderFormattedContent(newsItem.content)} />
                    </p>
                    <Link to={`/news-article/${newsItem.slug}`}>
                      <a href="" class="btn btn-outline-success btn-sm ">
                        Read More
                      </a>
                    </Link>
                    {/* <a href="" class="btn btn-outline-danger btn-sm mx-2">
                      Like
                    </a> */}
                  </div>
                </div></SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
    )
}
export default Cards;