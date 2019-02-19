import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row
} from 'reactstrap';
import Contact from '../components/Contact';
import '../styles/index.scss';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="page-header">Contact</h1>
    <Contact />
  </Layout>
)

export default ContactPage;