import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, StaticQuery } from 'gatsby';
import Project from '../components/Project';

const ProjectsPage = () => {
  return (
  <Layout pageTitle="Projects">
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
      <StaticQuery query={projectQuery} render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Project
                key={node.id}
                title={node.frontmatter.title}
                path={node.frontmatter.path}
                slug={node.fields.slug}
                body={node.excerpt}
              />
            ))}
          </div>
        )
      }}/>
  </Layout>
  )  
};

const projectQuery = graphql`
query projectQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 600){
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
export default ProjectsPage;