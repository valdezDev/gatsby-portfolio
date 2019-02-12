import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import { Card, CardBody } from 'reactstrap';
import Img from 'gatsby-image';
//import { slugify } from '../util/utilityFunctions';

const SingleProject = ({ data }) => {
  const project = data.markdownRemark.frontmatter

  return (
    <Layout
      pageTitle={project.title}
      projectImageFluid={data.file.childImageSharp.fluid}>

      <SEO title={project.title} />
      <Card>
        <Img
          className="card-image-top"
          fluid={project.image.childImageSharp.fluid}
        />
        <CardBody>
          <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti eligendi nemo tempora hic nesciunt quidem voluptate facere? Quis, nihil aperiam.</h1>
        </CardBody>
      </Card>
    </Layout>
  )
}
/*
export const projQuery = graphql`
  query projectBySlug($slug: String!, $imageUrl: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter{
        title
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    file(relativePath: { eq: $imageUrl } ) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`*/

export default SingleProject;
