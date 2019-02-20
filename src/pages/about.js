import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
//import Img from 'gatsby-image'; come back to this.
import PaulImage from '../images/paul.jpg';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle, Col, Container, Row} from "reactstrap";
import '../styles/index.scss';

const AboutPage = () => (

  <Layout>
    <SEO title="Paul Valdez" keywords={[`paul valdez`, `developer`, `javascript`]} />
    <Card>
      <Row>
        <Col sm="6">
          <Card className="about-img">
            <CardImg top width="100%" src={PaulImage} alt="Card image cap" />
            <CardSubtitle>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</CardSubtitle>
          </Card>
        </Col>
        <Col sm="6">
          <Card className="about-me">
            <CardBody className="about-me__body">
              <CardTitle className="about-me__title text-center">Who is Paul Valdez?</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident quae ipsam dolores eaque eveniet. Voluptatibus animi excepturi optio earum consectetur eaque rem quisquam accusantium atque, enim dolorum hic! Sint?
              </CardText>
              <CardText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque fuga ab aliquid libero temporibus. Labore unde maxime nisi adipisci reprehenderit.
              </CardText>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum, temporibus saepe unde minus quisquam porro quod eos enim blanditiis corrupti minima quas debitis quis beatae, vitae, neque nemo distinctio perspiciatis eum facilis. Praesentium accusantium voluptate quis ea amet corrupti quo iure fugit voluptatum possimus?
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card>
            <CardTitle>Skills</CardTitle>
            <CardText>
              <ul>
                <li>React</li>
                <li>ExpressJS</li>
                <li>MongoDB</li>
                <li>NodeJS</li>
                <li>Gatsby</li>
              </ul>
            </CardText>
          </Card>
        </Col>
      </Row>
    </Card>
    {/*<Container>
      <Row>
        
          <Card>
            <CardImg top width="100%" src={PaulImage} alt="Card image cap" />
            <CardSubtitle>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, illum.</CardSubtitle>
          </Card>
        
      </Row>
      <Row>
        <Col>
          <Card>
            <CardTitle>Who is Paul Valdez?</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident quae ipsam dolores eaque eveniet. Voluptatibus animi excepturi optio earum consectetur eaque rem quisquam accusantium atque, enim dolorum hic! Sint?
            </CardText>
            <CardText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque fuga ab aliquid libero temporibus. Labore unde maxime nisi adipisci reprehenderit.
            </CardText>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum, temporibus saepe unde minus quisquam porro quod eos enim blanditiis corrupti minima quas debitis quis beatae, vitae, neque nemo distinctio perspiciatis eum facilis. Praesentium accusantium voluptate quis ea amet corrupti quo iure fugit voluptatum possimus?
            </CardText>
          </Card>
        </Col>
      </Row>
    </Container>*/}
  </Layout>
);
export default AboutPage;