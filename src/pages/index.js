/*import React from "react";
import Layout from "../components/layout";
import SocialButtons from "../components/SocialButtons";
import SEO from "../components/seo";
//import Img from 'gatsby-image'; come back to this.
import { Button, Card, CardTitle, CardSubtitle, Col, Container, NavItem, NavLink, Row} from "reactstrap";
import '../styles/index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Paul Valdez" keywords={[`paul valdez`, `developer`, `javascript`]} />
    <Container>
      <div className="hero-background-0"></div>
      <div className="hero-background-1"></div>
    </Container>
    <Row>
      <Col sm="12">
      <Card className="index-intro">
        <CardTitle className="index-intro__page-header text-center">Paul Valdez</CardTitle>
        <CardSubtitle className="index-intro__profession text-center">Full Stack MERN Developer</CardSubtitle>
        <NavItem>
          <Button className="col-md-2 index-intro__button">
            <NavLink className="index-intro__link" href="/contact">Get in Touch!</NavLink>
          </Button>
        </NavItem>
        <SocialButtons/>
        </Card>
        </Col>
    </Row>
  </Layout>
);

export default IndexPage;*/

import React from "react"
import ContactForm from "../components/ContactForm"
export default () => (
  <div>
    <h2>Send me a line</h2>
    <ContactForm/>
  </div>
)
