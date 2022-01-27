import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'
import './slider.css'

import SwiperCore, {
  EffectFade, Navigation,
} from 'swiper';

SwiperCore.use([EffectFade, Navigation,]);

const Slider = () => {
  return (
    <>
      <Swiper spaceBetween={30} effect={'fade'} navigation={true} className="mySwiper">
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;