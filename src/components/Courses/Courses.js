import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    fetch('course.json')
      .then((res) => res.json())
      .then((data) => setCourseData(data));
  }, []);
  return (
    <div className='mx-5'>
      <h1 className='text-danger-50  my-5 py-2 border-bottom border-1'>
        COURSES
      </h1>
      <Row xs={1} md={3} lg={4} className='g-5'>
        {courseData.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </Row>
    </div>
  );
};

export default Courses;
