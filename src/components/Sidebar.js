import React from "react"
import { Card, CardTitle, CardBody } from "reactstrap"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

/**
 * changes made to this component
 * rework on the graphql query as it will fetch the images  and the markdown through alias (allImages,allPageInfo )
 * the markdown result is then iterated and based on the featuredImage field will filter the image array and injects the corresponding one
 * this was implemented as the way you were importing the image in the frontmatter field inside each markdown could lead to issues down the line.
 * Gatsby when resolves the image filed in there, if a image and a markdown are sibglings, they are inside the same folder, it will resolve the file to a File node.
 * Otherwise it will resolve it to a String node. And will lead to issues while you're trying to work with some fragments.
 * 
 */
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
