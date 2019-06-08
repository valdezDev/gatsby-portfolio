import React from 'react'
import {
  Card,
  CardTitle,
  CardBody,
} from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

const Sidebar = () => (
  <div>  
    <Card className="sidecard">
      <CardTitle className="text-center text-uppercase mb-3 sidecard__title">
        Recent Posts
      </CardTitle>
      <CardBody className="sidecard__body">
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Link to={node.fields.slug} >
                  <Card className="sidecard__querycard" key={node.id}>
                    <Img
                      className="card-image-top sidecard__img"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                    <CardBody className="sidecard__minibody">
                      <CardTitle>
                        <Link className="sidecard__link" to={node.fields.slug}>
                          {node.frontmatter.title}
                        </Link>
                      </CardTitle>
                    </CardBody>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        />
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
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
`

export default Sidebar;