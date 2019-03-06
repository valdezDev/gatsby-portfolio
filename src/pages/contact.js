import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Contact from '../components/Contact';
import '../styles/index.scss';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <Contact />
  </Layout>
);

export default ContactPage;