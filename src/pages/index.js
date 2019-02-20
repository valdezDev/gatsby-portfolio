import React from "react";
import Layout from "../components/layout";
import SocialButtons from "../components/SocialButtons";
import SEO from "../components/seo";
//import Img from 'gatsby-image'; come back to this.
import PaulImage from '../images/paul.jpg';
import { Button, Card, CardTitle, CardSubtitle, Col, Container, NavItem, NavLink, Row} from "reactstrap";
import '../styles/index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Paul Valdez" keywords={[`paul valdez`, `developer`, `javascript`]} />
    <Container>
      <div className="hero-background-0"></div>
      <div className="hero-background-1"></div>
    </Container>
    
      <Card className="index-intro">
        <CardTitle className="index-intro__page-header text-center">Paul Valdez</CardTitle>
        <CardSubtitle className="index-intro__profession text-center">Full Stack MERN Developer</CardSubtitle>
        <NavItem>
          <Button className="col-md-3 index-intro__button">
            <NavLink className="index-intro__link" href="/contact">Get in Touch!</NavLink>
          </Button>
        </NavItem>
        <SocialButtons/>
      </Card>
      {/*<h1 className="index-intro__page-header">Paul Valdez</h1>
      <img src={PaulImage} className="col-md-4 index-intro__paul-img" alt="paul-img" />
      <h2 className="index-intro__profession text-center">Full Stack MERN Developer</h2>
      <NavItem>
        <Button className="col-md-3 index-intro__button">
          <NavLink className="index-intro__link" href="/contact">Get in Touch!</NavLink>
        </Button>
      </NavItem>*/}
  </Layout>
);

export default IndexPage;
