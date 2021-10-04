import React from 'react';
import { Card, Col } from 'react-bootstrap';

const FacilityCard = (props) => {
  const { name, description, img } = props.fcd;
  return (
    <Col>
      <Card>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 200)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FacilityCard;
