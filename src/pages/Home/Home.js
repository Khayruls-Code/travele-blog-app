import React from 'react';
import Blogs from '../../components/Blogs/Blogs';
import FeaturedPackage from '../../components/FeaturedPackage/FeaturedPackage';
import Footer from '../../components/Footer/Footer';
import Information from '../../components/Information/Information';
import Navbar from '../../components/Navbar/Navbar';
import Review from '../../components/Review/Review';
import Slider from '../../components/Slider/Slider';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Information />
      <Blogs />
      <Review />
      <FeaturedPackage />
      <Footer />
    </div>
  );
};

export default Home;