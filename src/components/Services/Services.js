import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
  const [serviceCardData, setServiceCard] = useState([]);
  useEffect(() => {
    fetch('serviceCard.json')
      .then((res) => res.json())
      .then((data) => setServiceCard(data));
  }, []);
  return (
    <div className='mx-5 service-section'>
      <h1 className='mb-5 text-white bg-info py-2'>Services</h1>
      <Row xs={1} md={4} className='g-4 px-4'>
        {serviceCardData.map((cd) => (
          <ServiceCard key={cd.id} cardData={cd}></ServiceCard>
        ))}
      </Row>
    </div>
  );
};

export default Services;
