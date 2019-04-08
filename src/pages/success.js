import React from 'react';
import Helmet from 'react-helmet';
import SocialButtons from "../components/SocialButtons";
import Layout from '../components/layout';
import SEO from "../components/seo";
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
      <Col sm="5">
        <Card className="index-intro">
          <CardTitle className="index-intro__page-header text-center">Paul Valdez</CardTitle>
          <CardSubtitle className="index-intro__profession text-center">Full Stack MERN Developer</CardSubtitle>
          <SocialButtons/>
        </Card>
      </Col>
      <Col sm="7">
        <Card className="contact-card">
          <CardTitle className="contact-card__title text-center">Thank You! 📫</CardTitle>
          <CardSubtitle className="contact-card__success-subtitle text-center">
            Your message has successfully been sent to pvaldezdev@gmail.com. I appreciate you taking the time to reach out to me. I will be sure to get back to you as soon as I can.
          </CardSubtitle>
          <CardBody>
            {/*<div className="email-gif"></div>*/}
            <img className="email-gif" src={'https://media.giphy.com/media/3sbiWejYVIGuX1thyq/giphy.gif'} alt="email-gif" />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Layout>
);

export default Success;