import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from '../containers/post';
import Posts from '../containers/posts';
import NewPost from '../containers/new_post';
import Nav from './nav';

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:postID" component={Post} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
