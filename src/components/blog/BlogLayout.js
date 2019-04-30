import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import BlogHeader from "./BlogHeader";

import '../../styles/index.scss';

const BlogLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query BlogSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous"/>
        <BlogHeader siteTitle={data.site.siteMetadata.title} />
        <div className="container" id="content">
          {children}
        </div>
        
      </>
    )}
  />
)

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout;
