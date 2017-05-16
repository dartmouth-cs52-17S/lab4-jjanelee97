import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { createPost } from '../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      content: '',
      cover_url: '',
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onCoverURLChange = this.onCoverURLChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  onTagsChange(event) {
    this.setState({ tags: event.target.value });
  }
  onContentChange(event) {
    this.setState({ content: event.target.value });
  }
  onCoverURLChange(event) {
    this.setState({ cover_url: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createPost(this.state, this.props.history);
  }

  render() {
    return (
      <div>
        <h1>Create a New Post</h1>
        <input className="newInput" placeholder="title" onChange={this.onTitleChange} value={this.state.title} />
        <input className="newInput" placeholder="tags" onChange={this.onTagsChange} value={this.state.tags} />
        <input className="newInput" placeholder="content" onChange={this.onContentChange} value={this.state.content} />
        <input className="newInput" placeholder="cover_url" onChange={this.onCoverURLChange} value={this.state.cover_url} />
        <button onClick={this.handleSubmit}>Submit</button>
        <Link className="link" to={'/'}>
          <div>
            <button>Cancel</button>
          </div>
        </Link>
      </div>
    );
  }
}

export default withRouter(connect(null, { createPost })(NewPost));
