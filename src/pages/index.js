import React from "react";
import Layout from "../components/layout";
import SocialButtons from "../components/SocialButtons";
import SEO from "../components/seo";
import { Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row} from "reactstrap";
import '../styles/index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Paul Valdez" keywords={[`paul valdez`, `developer`, `react`, `web developer`, `fullstack`,`javascript`]} />
    
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
          <CardTitle className="contact-card__title text-center">Get in Touch!</CardTitle>
          <CardSubtitle className="contact-card__subtitle text-center">
            All messages will be sent to my personal email at pvaldezdev@gmail.com.
          </CardSubtitle>
          <CardBody className="col-md-8 contact-card__body">
            <form method="POST" action="/success" className="contact-card__form" data-netlify="true" data-netlify-honeypot="bot-field" name="contact">
              <input type="hidden" name="bot-field" />
              <div className="contact-card__fields">
                <div className="contact-card__field half">
                  <input className="contact-card__name col-md-6" type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="contact-card__field half">
                  <input className="contact-card__email col-md-6" type="email" name="email" id="email" placeholder="example@email.com" />
                </div>
                <div className="contact-card__field">
                  <textarea className="contact-card__message col-md-10" name="message" id="message" rows="8" placeholder="Start typing..." ></textarea>
                </div>
                <div className="contact-card__field">
                  <div data-netlify-recaptcha="true"></div>
                </div>
              </div>
              <ul className="contact-card__actions">
                <li><input className="contact-card__send-message btn btn-outline" type="submit" value="Send Message" /></li>
              </ul>
            </form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;