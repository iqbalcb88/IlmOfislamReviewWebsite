import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faSync, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../resources/images/img3.jpg';

const Footer = () => {
  return (
    <div className='footer-style'>
      <Row xs={2} md={3} gap={5}>
        <Col>
          <div>
            <img
              className='w-50 rounded-circle border border-white border-2'
              src={logo}
              alt=''
            />
            <p>all Right reserved by &copy; ILM OF ISLAM</p>
          </div>
        </Col>
        <Col>
          <Card.Title className='text-start'>
            <FontAwesomeIcon icon={faSync} size='2x' spin />
            <span className='ms-2'>Informative Link's</span>
          </Card.Title>
          <Card.Body>
            <ul className='mt-3 d-flex justify-content-center align-items-start flex-column'>
              <li>
                <a className='text-decoration-none text-info ' href='/home'>
                  Home
                </a>
              </li>
              <li>
                <a className='text-decoration-none text-info ' href='/services'>
                  Services
                </a>
              </li>
              <li>
                <a
                  className='text-decoration-none text-info '
                  href='/facilities'
                >
                  Facilities
                </a>
              </li>
              <li>
                <a className='text-decoration-none text-info ' href='/courses'>
                  Courses
                </a>
              </li>
            </ul>
          </Card.Body>
          <Card.Title className='mt-1'>
            <FontAwesomeIcon
              className='text-info'
              icon={faUserAstronaut}
              size='3x'
            />
            <span className='ms-2'>About</span>
          </Card.Title>
          <Card.Body>
            <p>
              The Ilm Of Islam Academy, founded in 2021, is a 501(c)(3)
              non-profit and non-political organization operating exclusively
              for religious, charitable, educational, and literary purposes.The
              Islamic Institute aspires to educate Muslims and non-Muslims alike
              with the basic knowledge of Islam, and to contribute towards
              betterment of the society.
            </p>
          </Card.Body>
        </Col>
        <Col>
          <Form>
            <Form.Group
              className='mb-3 text-start w-75'
              controlId='formBasicEmail'
            >
              <Form.Label>Do Subscribe to get update's</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-info'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group
              className='mb-3 text-start'
              controlId='formBasicCheckbox'
            >
              <Form.Check type='checkbox' label='Check me out' />
              <Button
                className='btn fw-bolder text-danger btn-warning'
                variant='secondary'
                type='submit'
              >
                Submit
              </Button>
            </Form.Group>
          </Form>
          <div className='w-50'>
            <div className='social-links'>
              <Link
                to={{ pathname: 'https://www.facebook.com/iqbal.cb88' }}
                target='_blank'
              >
                <FontAwesomeIcon icon={faFacebookSquare} size='3x' />
              </Link>
              <Link
                to={{ pathname: 'https://twitter.com/Iqbal_IT_BD' }}
                target='_blank'
              >
                <FontAwesomeIcon icon={faTwitterSquare} size='3x' />
              </Link>
              <Link
                to={{ pathname: 'https://www.instagram.com/ihkhan_cumilla/' }}
                target='_blank'
              >
                <FontAwesomeIcon icon={faInstagramSquare} size='3x' />
              </Link>
              <Link
                to={{
                  pathname:
                    'https://www.linkedin.com/in/iqbal-hossain-60437750/',
                }}
              >
                <FontAwesomeIcon icon={faLinkedin} size='3x' />
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
