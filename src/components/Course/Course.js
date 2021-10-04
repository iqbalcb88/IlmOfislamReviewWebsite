import {
  faBookReader,
  faChalkboardTeacher,
  faClock,
  faDollarSign,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = (props) => {
  const { name, duration, tutor, certificate, fee, img } = props.course;
  return (
    <Col>
      <Card>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title className='text-start text-danger text-bold'>
            <FontAwesomeIcon className='mx-3' icon={faBookReader} />
            {name}
          </Card.Title>
          <Card.Title className='text-start'>
            <span className='text-info'>
              <FontAwesomeIcon className='mx-3' icon={faClock} />
              Course Duration:
            </span>{' '}
            {duration}
          </Card.Title>
          <Card.Title className='text-start'>
            <span className='text-info'>
              <FontAwesomeIcon className='mx-3' icon={faChalkboardTeacher} />
              Tutor:{' '}
            </span>{' '}
            {tutor}
          </Card.Title>
          <Card.Text className='text-start fw-bolder'>
            <span className='text-info'>
              <FontAwesomeIcon className='mx-3' icon={faGraduationCap} />
              Certification:
            </span>{' '}
            {certificate}
          </Card.Text>
          <Card.Title className='text-start'>
            <span className='text-warning'>
              <FontAwesomeIcon className='mx-3' icon={faDollarSign} />
              Course Fee:
            </span>{' '}
            {fee}
          </Card.Title>
          <hr />
          <Link to='/home'>
            <button type='submit' className='btn btn-close-danger border'>
              Enroll Course
            </button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Course;
