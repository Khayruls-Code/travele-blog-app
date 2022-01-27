import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import './blogs.css'
import { NavLink } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('https://powerful-coast-12866.herokuapp.com/blogs?status=Approved')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  return (
    <Box sx={{ flexGrow: 1, my: 5 }} id='blogs' className='container'>
      <Typography sx={{ textAlign: "center", mb: 5 }} variant='h4'>Recent Blogs</Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {blogs?.map(blog => <Grid className='blog-box' item sm={6} md={4} lg={3} key={blog._id}>
          <img src={blog.img} alt="" />
          <p>Posted: {blog.date}</p>
          <NavLink to={`/blogs/${blog._id}`}><h1>{blog.title}</h1></NavLink>
        </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Blogs;