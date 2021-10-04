import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../resources/images/logo.png';
import '../customStyle.css';

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt='' />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              className='px-5 py-3 border-end  text-decoration-none text-white border-dark '
              to='/home'
              activeStyle={{
                fontWeight: 'bold',
                backgroundColor: 'rgb(255, 193, 7)',
              }}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className='px-5  py-3 text-decoration-none border-end text-white  border-dark'
              to='/courses'
              activeStyle={{
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: 'rgb(255, 193, 7)',
              }}
            >
              COURSES
            </NavLink>
          </li>
          <li>
            <NavLink
              className='px-5  py-3 text-decoration-none border-end text-white  border-dark'
              to='/services'
              activeStyle={{
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: 'rgb(255, 193, 7)',
              }}
            >
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink
              className='px-5 py-3 text-decoration-none border-end text-white   border-dark'
              to='/facilities'
              activeStyle={{
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: 'rgb(255, 193, 7)',
              }}
            >
              FACILITIES
            </NavLink>
          </li>
          <li>
            <NavLink
              className='px-5 py-3   text-decoration-none text-white '
              to='/about'
              activeStyle={{
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: 'rgb(255, 193, 7)',
              }}
            >
              ABOUT US
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
