import React from "react"
import { Card, CardTitle, CardBody } from "reactstrap"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const Sidebar = () => (
  <div>
    <Card className="sidecard">
      <CardTitle className="text-center text-uppercase mb-3 sidecard__title">
        Recent Posts
      </CardTitle>
      <CardBody className="sidecard__body">
        <StaticQuery
          query={sidebarQuery}
          /* render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card className="sidecard__querycard" key={node.id}>
                  <Link to={node.fields.slug} >
                    <Img
                      className="card-image-top sidecard__img"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  </Link>
                  <CardBody className="sidecard__minibody">
                    <CardTitle>
                      <Link className="sidecard__link" to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>
          )} */
          render={data => {
            const { allPageInfo, allImages } = data
            return (
              <div>
                {allPageInfo.edges.map(({ node }) => (
                  <Card className="sidecard__querycard" key={node.id}>
                    <Link to={node.fields.slug}>
                      <Img
                        className="card-image-top sidecard__img"
                        fluid={allImages.edges.filter(
                          x =>
                            x.node.fluid.originalName ===
                            node.frontmatter.featuredImage
                        )}
                      />
                    </Link>
                    <CardBody className="sidecard__minibody">
                      <CardTitle>
                        <Link className="sidecard__link" to={node.fields.slug}>
                          {node.frontmatter.title}
                        </Link>
                      </CardTitle>
                    </CardBody>
                  </Card>
                ))}
              </div>
            )
          }}
        />
      </CardBody>
    </Card>
  </div>
)

/* const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
` */
const sidebarQuery = graphql`
  query sidebarQuery {
    allPageInfo: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            featuredImage
          }
          fields {
            slug
          }
        }
      }
    }
    allImages: allImageSharp {
      edges {
        node {
          fluid(maxWidth: 300) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default Sidebar
