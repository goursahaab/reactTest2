import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return (
   <nav>
   <NavLink to='/Gallery'>  Gallery</NavLink>
   <NavLink to='/About'>  About</NavLink>
   <NavLink to='/Home'>  Home</NavLink>
   
    
   </nav>
  );
}

export default Nav;
