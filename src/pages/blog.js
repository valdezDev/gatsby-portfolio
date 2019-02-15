import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, StaticQuery } from 'gatsby';
import Post from '../components/Post';

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" keywords={[`paul valdez`, `valdezdev`, `developer`]} />
    <h1 className="page-header">Blog</h1>
    <StaticQuery
      query={blogQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.frontmatter.title}
                slug={node.fields.slug}
                author={node.frontmatter.author}
                body={node.excerpt}
                date={node.frontmatter.date}
                fluid={node.frontmatter.image.childImageSharp.fluid}
              />
            ))}
          </div>
        )
      }}
    />
  </Layout>
)

const blogQuery = graphql`
  query blogQuery {
    allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage;