import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, StaticQuery } from 'gatsby';
import Project from '../components/Project';

const ProjectsPage = () => (
  <Layout pageTitle="Projects">
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Projects</h1>
    <StaticQuery
      query={projectQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Project
                title={node.frontmatter.title}
                path={node.frontmatter.path}
                body={node.excerpt}
              />
            ))}
          </div>
        )
      }}
    />
  </Layout>  
);

const projectQuery = graphql`
  query projectQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
          excerpt
        }
      }
    }
  }
`
export default ProjectsPage;