import $ from 'jquery';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import '../src/style.scss';


const Welcome = (props) => {
  return <div>Welcome</div>;
};
const About = (props) => {
  return <div> All there is to know about me </div>;
};
const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Welcome} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
};
