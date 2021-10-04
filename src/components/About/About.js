import React from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap';

const About = () => {
  return (
    <div className='py-4'>
      <Row xs={1} md={2} className='g-4 profile-section'>
        <Col>
          <div>
            <img
              className='rounded-circle  border-2 border-light border m-5'
              src='https://i.ibb.co/RNrLDDq/pp.png'
              alt=''
            />
          </div>
        </Col>
        <Col className='text-white-50 p-5 '>
          <h1>About Me</h1>
          <p>
            Hello, This is Iqbal. I am from Cumilla, Bangladesh. I have done my
            diploma in CSE and BSc in CE. Being able to code gives me enormous
            happiness. I am always energetic and eager to learn new skill's. I
            always finish my work at time and I'm a creative thinker. I always
            complete my work with 100% dedication. I instil confidence in others
            and approach new challenges with an open mind. The best thing about
            me is I am consistent and I do have a good sense of humor.
          </p>
          <div>
            <h1>I'm Learning ?</h1>
            <h3>Languages:</h3>
            <p>
              HTML
              <ProgressBar variant='success' animated now={65} />
            </p>
            <p>
              CSS
              <ProgressBar striped variant='warning' animated now={55} />
            </p>
            <p>
              JavaScript
              <ProgressBar striped variant='info' animated now={40} />
            </p>
            <h3>Frameworks and Libraries:</h3>
            <p>
              React Libraries
              <ProgressBar variant='danger' animated now={50} />
            </p>
            <p>
              React Bootstrap, Bootstrap, TailWind
              <ProgressBar striped variant='secondary' animated now={75} />
            </p>
            <p>
              React Router, React FontAwesome and Other utilities.
              <ProgressBar striped variant='primary' animated now={60} />
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
