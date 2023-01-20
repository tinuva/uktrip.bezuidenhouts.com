import React from "react";
import PropTypes from "prop-types";
import Disqus from 'gatsby-plugin-disqus'

import config from "../../../content/meta/config";

const Comments = props => {
  const {
    post: {
      id,
      frontmatter: { title }
    },
    slug,
    theme
  } = props;

  return (
    <React.Fragment>
      <div id="post-comments" className="comments">
        <Disqus 
          identifier={id}
          title={title}
          url={`${config.siteUrl}${slug}`}
        />
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .comments {
          margin: 0 -8px ${theme.space.default};
        }
      `}</style>
    </React.Fragment>
  );
};

Comments.propTypes = {
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Comments;
