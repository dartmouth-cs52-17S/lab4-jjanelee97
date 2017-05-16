import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { signoutUser } from '../actions';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.onSignOut = this.onSignOut.bind(this);
  }

  onSignOut() {
    this.props.signoutUser(this.props.history);
  }
  render() {
    return (
      <nav>
        <NavLink exact to="/">Musings</NavLink>
        {this.props.authenticated ?
          <div>
            <button><NavLink to="/posts/new">Add</NavLink></button>
            <button onClick={this.onSignOut}>Sign Out</button>
          </div> :
          <div>
            <button><NavLink to="/posts/new">Add</NavLink></button>
            <button><NavLink to="/signup">Sign Up</NavLink></button>
            <button><NavLink to="/signin">Sign In</NavLink></button>
          </div>
        }
      </nav>
    );
  }
}

const mapStateToProps = state => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, { signoutUser })(Nav));
