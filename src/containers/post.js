import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import marked from 'marked';
import { fetchPost, deletePost, updatePost } from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTitleEditing: false,
      isContentEditing: false,
      isTagsEditing: false,
      isCoverURLEditing: false,
      title: props.title,
      tags: props.tags,
      content: props.content,
      cover_url: props.cover_url,
    };
    this.renderPost = this.renderPost.bind(this);
    this.onDelete = this.onDelete.bind(this);

    this.onTitleBlur = this.onTitleBlur.bind(this);
    this.onContentBlur = this.onContentBlur.bind(this);
    this.onTagsBlur = this.onTagsBlur.bind(this);
    this.onCoverURLBlur = this.onCoverURLBlur.bind(this);

    this.onTitleFocus = this.onTitleFocus.bind(this);
    this.onContentFocus = this.onContentFocus.bind(this);
    this.onTagsFocus = this.onTagsFocus.bind(this);
    this.onCoverURLFocus = this.onCoverURLFocus.bind(this);

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onCoverURLChange = this.onCoverURLChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  onDelete(event) {
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }

  // Blur functions
  onTitleBlur(event) {
    event.preventDefault();
    this.setState({ isTitleEditing: !this.state.isTitleEditing });
    this.props.updatePost(this.props.match.params.postID, this.state);
  }
  onContentBlur(event) {
    event.preventDefault();
    this.setState({ isContentEditing: !this.state.isContentEditing });
    this.props.updatePost(this.props.match.params.postID, this.state);
  }
  onTagsBlur(event) {
    event.preventDefault();
    this.setState({ isTagsEditing: !this.state.isTagsEditing });
    this.props.updatePost(this.props.match.params.postID, this.state);
  }
  onCoverURLBlur(event) {
    event.preventDefault();
    this.setState({ isCoverURLEditing: !this.state.isCoverURLEditing });
    this.props.updatePost(this.props.match.params.postID, this.state);
  }

  // Focus functions
  onTitleFocus(event) {
    event.preventDefault();
    this.setState({ isTitleEditing: !this.state.isTitleEditing, title: this.props.post.title });
  }
  onContentFocus(event) {
    event.preventDefault();
    this.setState({ isContentEditing: !this.state.isContentEditing, content: this.props.post.content });
  }
  onTagsFocus(event) {
    event.preventDefault();
    this.setState({ isTagsEditing: !this.state.isTagsEditing, tags: this.props.post.tags });
  }
  onCoverURLFocus(event) {
    event.preventDefault();
    this.setState({ isCoverURLEditing: !this.state.isCoverURLEditing, cover_url: this.props.post.cover_url });
  }

  // onChange functions
  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  onContentChange(event) {
    this.setState({ content: event.target.value });
  }
  onTagsChange(event) {
    this.setState({ tags: event.target.value });
  }
  onCoverURLChange(event) {
    this.setState({ cover_url: event.target.value });
  }


  renderPost() {
    if (this.props.post) {
      return (
        // ref input code referred to http://stackoverflow.com/questions/28889826/react-set-focus-on-input-after-render
        <div className="post">
          { this.state.isTitleEditing ?
            <input className="edit" onBlur={this.onTitleBlur} ref={input => input && input.focus()} onChange={this.onTitleChange} value={this.state.title} /> :
            <div className="title" onClick={this.onTitleFocus} dangerouslySetInnerHTML={{ __html: marked(this.props.post.title || '') }} />}
          { this.state.isContentEditing ?
            <input className="edit" onBlur={this.onContentBlur} ref={input => input && input.focus()} onChange={this.onContentChange} value={this.state.content} /> :
            <div className="content" onClick={this.onContentFocus} dangerouslySetInnerHTML={{ __html: marked(this.props.post.content || '') }} />}
          { this.state.isTagsEditing ?
            <input className="edit" onBlur={this.onTagsBlur} ref={input => input && input.focus()} onChange={this.onTagsChange} value={this.state.tags} /> :
            <div className="tags" onClick={this.onTagsFocus} dangerouslySetInnerHTML={{ __html: marked(this.props.post.tags || '') }} />}
          { this.state.isCoverURLEditing ?
            <input className="edit" onBlur={this.onCoverURLBlur} ref={input => input && input.focus()} onChange={this.onCoverURLChange} value={this.state.cover_url} /> :
            <img alt="" className="cover_url" onClick={this.onCoverURLFocus} src={this.props.post.cover_url} />}
          <button onClick={this.onDelete}> Delete </button>
        </div>
      );
    } else {
      return (<p>No Post to Show</p>);
    }
  }

  render() {
    return (
      <div>{ this.renderPost() }</div>
    );
  }
}

const mapStateToProps = state => (
  {
    post: state.posts.post,
  }
);

export default withRouter(connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Post));
