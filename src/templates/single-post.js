import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import { Card, CardBody, CardSubtitle } from 'reactstrap';
import Img from 'gatsby-image';
//import { slugify } from '../util/utilityFunctions';
//import authors from '../util/authors';
//import { DiscussionEmbed } from 'disqus-react';

const SinglePost = ({ data }) => {
  
  const post = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={post.title} />
      <h1 className="page-header">{post.title}</h1>
      <Card className="post-card">
        <Img
          className="card-image-top"
          fluid={post.image.childImageSharp.fluid}
        />
        <CardBody className="post-card__body">
          <CardSubtitle className="post-card__info">
            <span className="text-info">Posted on {post.date}</span> by {' '}
            <span className="text-info">{post.author}</span>
          </CardSubtitle>
          <div className="post-card__text" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          {/*<ul className="post-tags">
            {post.tags.map(tag => (
              <li key={tag}>
                <Link to={`/tag/${slugify(tag)}`}>
                  <Badge color="primary">{tag}</Badge>
                </Link>
              </li>
            ))}
            </ul>*/}
        </CardBody>
      </Card>
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