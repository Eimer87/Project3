import React from 'react';
import { Link } from 'react-scroll';
import '../css/MenuNavbar.css';
const MenuNavbar = ({ navlinks }) => {
  return (
    <>
      <ul className='menuNavbar'>
        {navlinks.map((item) => {
          return (
            <li key={item.id}>
              <Link
                activeClass='active'
                to={item.categoryName}
                spy={true}
                smooth={true}
          
              >
                {item.categoryName}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default MenuNavbar;
