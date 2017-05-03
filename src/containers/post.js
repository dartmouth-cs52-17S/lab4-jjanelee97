import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
    this.renderSomething = this.renderSomething.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onTitleBlur = this.onTitleBlur.bind(this);
    this.onContentBlur = this.onContentBlur.bind(this);
    this.onTitleFocus = this.onTitleFocus.bind(this);
    this.onContentFocus = this.onContentFocus.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onCoverURLChange = this.onCoverURLChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postID);
  }

  onDelete(event) {
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }

  onTitleBlur(event) {
    this.setState({ isTitleEditing: !this.state.isTitleEditing });
    this.props.updatePost(this.props.match.params.postID, this.state);
  }

  onContentBlur(event) {
    this.setState({ isContentEditing: !this.state.isContentEditing });
    this.props.updatePost(this.props.match.params.postID, this.state);
  }


  onTitleFocus(event) {
    this.setState({ isTitleEditing: !this.state.isTitleEditing });
  }

  onContentFocus(event) {
    this.setState({ isContentEditing: !this.state.isContentEditing });
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onContentChange(event) {
    this.setState({ content: event.target.value });
  }
  onCoverURLChange(event) {
    this.setState({ cover_url: event.target.value });
  }
  onTagsChange(event) {
    this.setState({ tags: event.target.value });
  }


  renderSomething() {
    if (this.props.post) {
      return (
        <div >
          { this.state.isTitleEditing ?
            <div>
              <input onBlur={this.onTitleBlur} onChange={this.onTitleChange} placeholder={this.props.post.title} value={this.state.title} />
            </div> :
            <div className="title">
              <i onClick={this.onTitleFocus}>{this.props.post.title}</i>
            </div>}
            { this.state.isContentEditing ?
              <div>
                <form onBlur={this.onContentBlur} onChange={this.onContentChange} value={this.state.content} />
              </div> :
              <div className="content">
                <i onClick={this.onContentFocus}>{this.props.post.content}</i>
              </div>}

              <input onBlur={this.onBlur} onChange={this.onTagsChange} value={this.state.tags} />
              <input onBlur={this.onBlur} onChange={this.onCoverURLChange} value={this.state.cover_url} />
            </div>
            :
            <div>
              <div className="coverpic">
                <i onClick={this.onFocus}>{this.props.post.cover_url}</i>
              </div>
              <div className="tags">
                <i onClick={this.onFocus}>{this.props.post.tags}</i>
              </div>
            </div>
          }
          <button type="button" onClick={this.onDelete}> Delete </button>
        </div>
      );
    } else {
      return (<p>No Post to Show</p>);
    }
  }

  render() {
    return (
      <div>{ this.renderSomething() }</div>
    );
  }
}

const mapStateToProps = state => (
  {
    post: state.posts.post,
  }
);

export default withRouter(connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Post));
