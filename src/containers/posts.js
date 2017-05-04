import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import PostsPreview from '../components/post_preview';

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    if (this.props.posts.all) {
      return this.props.posts.all.map((post) => {
        return (
          <Link className="link" to={`/posts/${post.id}`} key={post.id}>
            <div>
              <PostsPreview id={post.id} cover_url={post.cover_url} title={post.title} tags={post.tags} content={post.content} />
            </div>
          </Link>
        );
      });
    } else {
      return (
        <p>Loading...</p>
      );
    }
  }

  render() {
    return (
      <div className="main-layout">
        <h1>Posts</h1>
        <div className="posts-layout">
          { this.renderPosts() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    posts: state.posts,
  }
);

export default withRouter(connect(mapStateToProps, { fetchPosts })(Posts));
