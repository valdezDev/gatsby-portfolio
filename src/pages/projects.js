import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
//import Project from '../components/Project';

const ProjectsPage = () => (
  <Layout pageTitle="Projects">
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="page-header">Projects</h1>
  </Layout>  
);

export default ProjectsPage;