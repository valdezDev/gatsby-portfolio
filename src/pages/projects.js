import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Project from '../components/Project';

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="page-title">Projects</h1>
    <Project />
  </Layout>
)

export default ProjectsPage;