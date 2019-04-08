import React from 'react';
import Helmet from 'react-helmet';
import SocialButtons from "../components/SocialButtons";
import Layout from '../components/layout';
import SEO from "../components/seo";
import SuccessEmail from '../images/success.gif';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, NavItem, NavLink, Row} from "reactstrap";
import '../styles/index.scss';

const Success = () => (
  <Layout>
    <Helmet>
      <title>Success! Thank You.</title>
      <meta name="description" content="Success Page" />
    </Helmet>

    <Container>
      <div className="hero-background-0"></div>
      <div className="hero-background-1"></div>
    </Container>

    <Row>
      <Col sm="12">
        <Card className="index-intro">
          <CardTitle className="index-intro__page-header text-center">Paul Valdez</CardTitle>
          <CardSubtitle className="index-intro__profession text-center">Full Stack MERN Developer</CardSubtitle>
          <SocialButtons/>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm="12">
        <Card className="contact-card">
          <CardTitle className="contact-card__title text-center">Thank You! 📫</CardTitle>
          <CardSubtitle className="contact-card__success-subtitle text-center">
            Your message has successfully been sent to pvaldezdev@gmail.com. I appreciate you taking the time to reach out to me and I will be sure to give you a speedy response.
          </CardSubtitle>
          <CardBody>
            <img className="email-gif" src={SuccessEmail} alt="email-gif" />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Layout>
);

export default Success;