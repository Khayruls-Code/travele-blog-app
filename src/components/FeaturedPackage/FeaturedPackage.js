import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from '../../images/featured/1.jpg'
import img2 from '../../images/featured/2.jpg'
import img3 from '../../images/featured/3.jpg'
import img4 from '../../images/featured/4.jpg'
import { Box, Typography } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const FeaturedPackage = () => {
  return (
    <Box className='container'>
      <Typography sx={{ textAlign: "center", py: 5 }} variant='h4'>Todays Happyness</Typography>
      <ImageList
        sx={{ width: "100%" }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

const itemData = [
  {
    img: img1,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: img2,
    title: 'Burger',
  },
  {
    img: img3,
    title: 'Camera',
  },
  {
    img: img4,
    title: 'Coffee',
    cols: 2,
  },
];

export default FeaturedPackage;