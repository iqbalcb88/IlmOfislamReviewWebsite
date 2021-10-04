import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import FacilityCard from '../FacilityCard/FacilityCard';

const Facilities = () => {
  const [facilityData, setFacilityData] = useState([]);
  useEffect(() => {
    fetch('facilities.json')
      .then((res) => res.json())
      .then((data) => setFacilityData(data));
  }, []);
  // console.log(facilityData);
  return (
    <div className='px-5 my-5'>
      <h1>Facilities</h1>
      <hr />
      <Row xs={1} md={4} className='g-4 p-5'>
        {facilityData.map((fd) => (
          <FacilityCard key={fd.id} fcd={fd} />
        ))}
      </Row>
    </div>
  );
};

export default Facilities;
