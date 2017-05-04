import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = (props) => {
  return (
    <nav>
      <NavLink exact to="/">My Super Awesome Blog</NavLink>
      <button><NavLink to="/posts/new">Add</NavLink></button>

    </nav>
  );
};

export default Nav;
