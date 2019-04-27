import React from 'react';
import Layout from '../components/layout';
import Sidebar from '../components/Sidebar';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import { Card, CardBody, CardSubtitle, Row, Col } from 'reactstrap';
import Img from 'gatsby-image';
//import { slugify } from '../util/utilityFunctions';
import { DiscussionEmbed } from 'disqus-react';

const SinglePost = ({ data, pageContext }) => {
  
  const post = data.markdownRemark.frontmatter;
  const baseUrl = 'https://valdezdev.com/';
  const disqusShortname = 'https-valdezdev-com';
  const disqusConfig = {
    identifier: data.markdownRemark.id,
    title: post.title,
    url: baseUrl + pageContext.slug
  };

  return (
    <Layout>
      <SEO title={post.title} />
      <h1 className="page-header" id="test">{post.title}</h1>
      <Row>
        <Col md="8">
          <Card className="single-post-card">
            <Img
              className="card-image-top"
              fluid={post.image.childImageSharp.fluid}
            />
            <CardBody className="single-post-card__body">
              <CardSubtitle className="single-post-card__info">
                <span className="text-info single-post-card__info">Posted on {post.date}</span> by {' '}
                <span className="text-info single-post-card__info">{post.author}</span>
              </CardSubtitle>
              <div className="single-post-card__text" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Sidebar/>
        </Col>
      </Row>

      <h3 className="text-center share-header">
              Share this post
      </h3>
      <div className="text-center social-share-links">
        <ul>
          <li>
            <a
              href={ 'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl + pageContext.slug }
              className="facebook"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-facebook-f fa-2x"/>
            </a>
          </li>
          <li>
            <a
              href={ 'https://twitter.com/share?url=' + baseUrl + pageContext.slug + '&text=' + post.title + '&via' + 'twitterHandle'}
              className="twitter"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"/>
            </a>
          </li>
          <li>
            <a
              href={ 'https://plus.google.com/share?url=' + baseUrl + pageContext.slug }
              className="google"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-google fa-2x"/>
            </a>
          </li>
          <li>
            <a
              href={ 'https://www.linkedin.com/shareArticle?url=' + baseUrl + pageContext.slug }
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"/>
            </a>
          </li>
        </ul>
      </div>
      <DiscussionEmbed className="disqus-section text-white" shortname={disqusShortname} config={disqusConfig} />

    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter{
        title
        author
        date(formatString: "MMM Do YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default SinglePost;