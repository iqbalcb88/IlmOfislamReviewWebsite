import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServiceCard = (props) => {
  console.log(props.cardData);
  const { name, description, img } = props.cardData;
  return (
    <Col>
      <Card className='service-card'>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 150)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceCard;
