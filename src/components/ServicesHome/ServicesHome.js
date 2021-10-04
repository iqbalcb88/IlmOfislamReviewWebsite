import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceHomeCard from '../ServiceHomeCard/ServiceHomeCard';

const ServicesHome = () => {
  const [fourCardData, setFourCardData] = useState([]);
  useEffect(() => {
    fetch('serviceCard.json')
      .then((res) => res.json())
      .then((data) => setFourCardData(data));
  }, []);
  return (
    <div className='mx-5 service-section'>
      <h1 className='mb-5 text-white bg-info py-2'>Services</h1>
      <Row xs={1} md={4} className='g-4 px-4'>
        {fourCardData.map((cardData) => {
          if (fourCardData.indexOf(cardData) > 3) {
            return false;
          }
          return (
            <ServiceHomeCard key={cardData.id} fcd={cardData}></ServiceHomeCard>
          );
        })}
      </Row>
    </div>
  );
};

export default ServicesHome;
