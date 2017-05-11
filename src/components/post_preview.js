import React from 'react';
import marked from 'marked';


const PostsPreview = (props) => {
  return (
    <div className="preview_post">
      <img alt="" className="preview_coverurl" src={props.cover_url} />
      <div className="preview_title" dangerouslySetInnerHTML={{ __html: marked(props.title || '') }} />
      <div className="preview_tags">{props.tags}</div>
    </div>
  );
};

export default PostsPreview;
