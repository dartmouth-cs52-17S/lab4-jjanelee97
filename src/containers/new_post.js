import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
        <input placeholder="title" onChange={this.onTitleChange} value={this.state.title} />
        <input placeholder="tags" onChange={this.onTagsChange} value={this.state.tags} />
        <input placeholder="content" onChange={this.onContentChange} value={this.state.content} />
        <input placeholder="cover_url" onChange={this.onCoverURLChange} value={this.state.cover_url} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default withRouter(connect(null, { createPost })(NewPost));
