import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.modules.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Slider = ({ New, title, isRelevant }) => {
  return (
    <div className="Slider_item">
      <div className="Slider">
        <div className="Slider_list">
          <div className="Slider_New">{title}</div>
          <div className="Slider_item_Next">
            <div>
              <img
                src="https://cassiopeia.store/svgs/line-left-arrow-black.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cassiopeia.store/svgs/line-right-arrow-black.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          slidesPerGroup={1}
          // loop={true}
          // loopFillGroupWithBlank={true}
          // pagination={{
          //   clickable: true
          // }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {New.map((x) => (
            <SwiperSlide key={x.id}>
              <div href="" className="product">
                <div className="slider_list-img">
                  <img className="slider_img" src={x.imageUrl} alt="" />

                  <div className="cart_seachr">
                    <div className="cart">
                      <img
                        src="https://cassiopeia.store/svgs/cart-btn.svg"
                        alt=""
                      />
                    </div>
                    <Link to={`/${x.category}/${x.id}`}>
                      <div className="a">
                        <img
                          src="https://cassiopeia.store/svgs/view-btn.svg"
                          alt=""
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="introduce">
                  <a href="">{x.name}</a>
                  <p>
                    <span>${x.price}</span>
                    <span className="sale">{x.originalPrice}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {isRelevant && <SwiperSlide>sadasdasd</SwiperSlide>}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
