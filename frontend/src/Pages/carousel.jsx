import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/css';
//import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
function Carousel(){
    return (
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
            >
              <SwiperSlide>
                <img 
                className="pillarboxed-image"
                src="/images/image2.jpg"
                alt="" />
                {/* <div className="pillarboxed-image" style={{ backgroundImage: `url(${carousel[0].imageUrl})` }}>
                  <h5>carousel[0].title</h5>
                </div> */}
              </SwiperSlide>
              <SwiperSlide>
                <img className="pillarboxed-image" src="/images/image2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
              <img className="pillarboxed-image" src="/images/image2.jpg" alt="" />
                {/* <div className="pillarboxed-image"
                  style={{
                    backgroundImage: `url(${carousel[2].imageUrl})`,
                    // width: '100%',
                    // height: "auto",
                    // backgroundSize: 'cover',
                  }}></div> */}
              </SwiperSlide>
              {/* <SwiperSlide>
                <img width="100%"
                  height="50%" src="/images/image2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img width="100%"
                  height="50%" src="/images/reliimage.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img width="100%"
                  height="50%" src="/images/image2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img width="100%"
                  height="50%" src="/images/image2.jpg" alt="" />
              </SwiperSlide> */}

            </Swiper>
          </div>
    );
}
export default Carousel;