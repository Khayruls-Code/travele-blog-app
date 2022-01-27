import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { BsStarFill, BsStar } from 'react-icons/bs'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const BlogDetails = () => {
  const { blogId } = useParams()
  const [blog, setBlog] = useState({})
  useEffect(() => {
    fetch(`https://powerful-coast-12866.herokuapp.com/blogs/${blogId}`)
      .then(res => res.json())
      .then(data => setBlog(data))
  }, [blogId])
  return (
    <>
      <Navbar />
      <Box sx={{ mb: 5, mt: 15 }} className='smallContainer blogDetails'>
        <Typography sx={{ textAlign: "center", mb: 2 }} variant='h5'>{blog?.title}</Typography>
        <img src={blog?.img} alt="" />
        <Box sx={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }}>
          <p className='date'>Posted: {blog?.date}</p>
          <div>
            <Rating
              emptySymbol={<BsStar style={{ fontSize: "20px", color: "#f44a56", marginLeft: "3px" }} />}
              fullSymbol={<BsStarFill style={{ fontSize: "20px", color: "#f44a56", marginLeft: "3px" }} />}
              initialRating={blog.rating}
              readonly
            />
          </div>
        </Box>
        <h1>Place: {blog?.location}</h1>
        <h2>Package Type: {blog?.category}</h2>
        <p className='cost'>Total Cost: ${blog?.cost}</p>
        <blockquote className='description'>{blog?.description} </blockquote>
        <cite className='visitorName'>{blog?.traveledBy}</cite>
        <TextField
          id="filled-multiline-static"
          label="Comment"
          multiline
          rows={4}
          variant="filled"
          sx={{ width: "100%", mt: 3, mb: 2 }}
        />
        <Button sx={{ py: 1 }} variant='outlined'>Send</Button>
      </Box>
      <Footer />
    </>
  );
};

export default BlogDetails;