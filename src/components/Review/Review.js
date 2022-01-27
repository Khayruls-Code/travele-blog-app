import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import './Review.css'
import SwiperCore, {
  Pagination, Autoplay
} from 'swiper';
import { Box, Typography } from "@mui/material";

SwiperCore.use([Pagination, Autoplay]);

const Review = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('/review.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <Box id='review' className="review" sx={{ my: 5, textAlign: "center" }}>
      <Typography variant='h4' sx={{ mb: 5 }}>What People Says</Typography>
      <Swiper spaceBetween={30} autoplay={{
        "delay": 2500,
        "disableOnInteraction": false
      }} pagination={{
        "clickable": true
      }} className="mySwiper container">
        {
          reviews?.map(review => <SwiperSlide key={review.id}>
            <img style={{ width: "100px", height: "100px", borderRadius: "50%" }} src={review.img} alt="" />
            <Typography sx={{ width: "100%", maxWidth: "800px", mx: "auto", fontSize: "1.1rem", fontStyle: "italic", my: 2 }}>{review.desc}</Typography>
            <Typography variant='h5'>{review.name}</Typography>
            <Typography>{review.email}</Typography>
          </SwiperSlide>)
        }
      </Swiper>
    </Box>
  );
};

export default Review;