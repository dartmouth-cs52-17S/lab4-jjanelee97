import React from 'react';
import marked from 'marked';


const PostsPreview = (props) => {
  return (
    <div className="preview_post">
      <div className="preview_coverurl" dangerouslySetInnerHTML={{ __html: marked(props.cover_url || '') }} />
      <div className="preview_title" dangerouslySetInnerHTML={{ __html: marked(props.title || '') }} />
      <div className="preview_tags">{props.tags}</div>
    </div>
  );
};

export default PostsPreview;
