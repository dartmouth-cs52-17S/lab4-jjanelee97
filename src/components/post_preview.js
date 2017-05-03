import React from 'react';

const PostsPreview = (props) => {
  return (
    <div className="postbox">
      <h1>{props.title}</h1>
      {props.cover_url}
      {props.tags}
    </div>
  );
};

export default PostsPreview;
