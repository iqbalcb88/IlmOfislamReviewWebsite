import React from 'react';
import Courses from '../Courses/Courses';
import Facilities from '../Facilities/Facilities';
import ServicesHome from '../ServicesHome/ServicesHome';
const Home = () => {
  return (
    <div>
      <ServicesHome></ServicesHome>
      <Facilities></Facilities>
      <Courses></Courses>
    </div>
  );
};

export default Home;
