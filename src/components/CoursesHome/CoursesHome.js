import React, { useEffect, useState } from 'react';
import HomeCourseCard from '../HomeCourseCard/HomeCourseCard';
import { Row } from 'react-bootstrap';

const CoursesHome = () => {
  const [homeCourses, setHomeCourses] = useState([]);
  useEffect(() => {
    fetch('course.json')
      .then((res) => res.json())
      .then((data) => setHomeCourses(data));
  }, []);
  // console.log(homeCourses);
  return (
    <div className='mx-5 pb-5'>
      <h1 className='text-danger-50  my-5 py-2 border-bottom border-1'>
        COURSES
      </h1>
      <Row xs={1} md={3} lg={4} className='g-5'>
        {homeCourses.map((course) => {
          if (homeCourses.indexOf(course) < 4) {
            return (
              <HomeCourseCard key={course.id} course={course}></HomeCourseCard>
            );
          }
        })}
      </Row>
    </div>
  );
};

export default CoursesHome;
