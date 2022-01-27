import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { GoLocation } from "react-icons/go"
import { AiTwotonePhone } from "react-icons/ai"
import { BiEnvelope } from "react-icons/bi"
import './footer.css'

const Footer = () => {
  return (
    <Box className='footer'>
      <Box className='container'>
        <Grid container sx={{ mb: 3 }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item sm={6} md={4} lg={3}>
            <Typography sx={{ mb: 1 }} variant='h5'>Travele</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis assumenda, tempore magni deleniti atque quo voluptatum minus quam aut eum!</Typography>
          </Grid>
          <Grid item sm={6} md={4} lg={3}>
            <Typography variant='h5'>Contact</Typography>
            <ul>
              <li style={{ margin: "10px 0px" }}><BiEnvelope style={{ marginRight: "5px" }} />khayrul@gmail.com</li>
              <li style={{ margin: "10px 0px" }}><AiTwotonePhone style={{ marginRight: "5px" }} />+8801763155578</li>
              <li style={{ margin: "10px 0px" }}><GoLocation style={{ marginRight: "5px" }} />Rangpur, Bangladesh</li>
            </ul>
          </Grid>
          <Grid item sm={6} md={4} lg={3}>
            <Typography variant='h5'>Important Links</Typography>
            <ul>
              <li style={{ margin: "10px 0px" }}><a style={{ color: "#ffffff" }} href="/">About</a></li>
              <li style={{ margin: "10px 0px" }}><a style={{ color: "#ffffff" }} href="/">Privecy & Policy</a></li>
              <li style={{ margin: "10px 0px" }}><a style={{ color: "#ffffff" }} href="/">Service</a></li>
              <li style={{ margin: "10px 0px" }}><a style={{ color: "#ffffff" }} href="/">Terms</a></li>
            </ul>
          </Grid>
          <Grid item sm={6} md={4} lg={3}>
            <Typography variant='h5'>Travele</Typography>
            <input style={{ padding: "15px 10px", outline: "none", width: "100%", margin: "10px 0" }} type="text" />
            <Button sx={{ py: 1 }} variant='outlined'>Subscribe</Button>
          </Grid>
        </Grid>
        <hr />
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Typography variant='p'>Made with Love By Khayrul Islam</Typography>
        </div>
      </Box>
    </Box>
  );
};

export default Footer;