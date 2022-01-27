import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import './information.css'

const Information = () => {
  return (
    <Box className='container imformation' id='about'>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
        <Grid item md={6}>
          <Typography variant='h4'>Information</Typography>
          <ul>
            <li>Amet nesciunt eius tempore laboriosam odio a qui eos porro perferendis quo.</li>
            <li>Culpa mollitia voluptates. Vero optio eius eveniet, obcaecati eligendi</li>
            <li>Dolor voluptate alias, qui tempora perspiciatis libero, quam maxime eaque</li>
            <li>Quidem dolorem deleniti ratione libero nostrum quo dicta quasi eius culpa mollitia voluptates. Vero optio eius eveniet, obcaecati eligendi ipsa</li>
            <li>Nisi aliquam totam animi rem tempore nostrum numquam accusamus delectus eos.</li>
          </ul>
        </Grid>
        <Grid item md={6}>
          <Typography variant='h4'>About Us</Typography>
          <Typography sx={{ mt: 2 }} variant='h5'>Team</Typography>
          <Typography variant='p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat sunt molestias velit mollitia fugiat ipsa dolores nihil doloribus, incidunt facilis, aliquid praesentium fugit asperiores autem reprehenderit aspernatur possimus! Maxime, corporis!</Typography>
          <Typography sx={{ mt: 2 }} variant='h5'>Package</Typography>
          <Typography variant='p'>Dolor sit amet consectetur adipisicing elit. Repellat sunt molestias velit mollitia fugiat ipsa dolores nihil doloribus, incidunt facilis, aliquid praesentium fugit asperiores autem reprehenderit aspernatur possimus! Maxime, corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ea.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Information;