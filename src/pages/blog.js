import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"

/**
 * changes ade to this component/page
 * rework on the graphql query as it will fetch the images  and the markdown through alias (allPosts,allPictures )
 * see detailed explanation inside /src/components/SideBar. Same logic applies here
 * 
 */
const BlogPage = () => (
  <Layout>
    <SEO title="Blog" keywords={[`paul valdez`, `valdezdev`, `developer`]} />
    <h1 className="page-header">Blog</h1>
    <StaticQuery
      query={blogQuery}
      render={data => {
        return (
          <div>
            {/* {data.allMarkdownRemark.edges.map(({ node }) => ( */}
            {data.allPosts.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.frontmatter.title}
                slug={node.fields.slug}
                author={node.frontmatter.author}
                body={node.excerpt}
                date={node.frontmatter.date}
                /* fluid={node.frontmatter.image.childImageSharp.fluid} */
                fluid={data.allPictures.edges.filter(
                  x =>
                    x.node.fluid.originalName === node.frontmatter.featuredImage
                )}
              />
            ))}
          </div>
        )
      }}
    />
  </Layout>
)

/* const blogQuery = graphql`
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
` */

const blogQuery = graphql`
  query blogQuery {
    allPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM Do YYYY")
            author
            featuredImage
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    allPictures: allImageSharp {
      edges {
        node {
          fluid(maxWidth: 700) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default BlogPage
