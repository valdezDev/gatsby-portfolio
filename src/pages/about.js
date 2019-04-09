import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import Img from 'gatsby-image'; come back to this.
import PaulImage from "../images/paul.jpg"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Col,
  Container,
  Row,
} from "reactstrap"
import "../styles/index.scss"

const AboutPage = () => (
  <Layout>
    <SEO
      title="Paul Valdez"
      keywords={[`paul valdez`, `developer`, `javascript`, `valdezdev`]}
    />
    <h1 className="page-header">About Paul</h1>
    <Card className="about-card">
      <Row>
        <Col sm="12">
          <Card className="about-img">
            <CardImg
              top
              src={PaulImage}
              alt="Card image cap"
              className="about-img__img"
            />
          </Card>
        </Col>
        <Col sm="12">
          <Card className="about-me">
            <CardBody className="about-me__body">
              <CardTitle className="about-me__title text-center">
                Who is Paul Valdez?
              </CardTitle>
              <CardText className="about-me__text col-md-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt provident quae ipsam dolores eaque eveniet.
                Voluptatibus animi excepturi optio earum consectetur eaque rem
                quisquam accusantium atque, enim dolorum hic! Sint?
              </CardText>
              <CardText className="about-me__text col-md-10">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
                fuga ab aliquid libero temporibus. Labore unde maxime nisi
                adipisci reprehenderit.
              </CardText>
              <CardText className="about-me__text col-md-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                ipsum, temporibus saepe unde minus quisquam porro quod eos enim
                blanditiis corrupti minima quas debitis quis beatae, vitae,
                neque nemo distinctio perspiciatis eum facilis. Praesentium
                accusantium voluptate quis ea amet corrupti quo iure fugit
                voluptatum possimus?
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card className="skills col-md-11">
            <CardTitle className="skills__title text-center">
              # Skills
            </CardTitle>
            <CardText className="skills__list-wrapper">
              <ul className="skills__list">
                <li>// React, ES6, Gatsby, Redux</li>
                <li>// jQuery</li>
                <li>// Python, Django</li>
                <li>// Sass, Bootstrap</li>
                <li>// MongoDB, GraphQL</li>
                <li>// ExpressJS</li>
                <li>// NodeJS</li>
                <li>// REST APIs</li>
              </ul>
            </CardText>
          </Card>
        </Col>
        <Col sm="6">
          <Card className="tools col-md-11">
            <CardTitle className="tools__title text-center">
              # Tools & Soft Skills
            </CardTitle>
            <CardText className="tools__list-wrapper">
              <ul className="tools__list">
                <li>
                  Git (Bash),{" "}
                  <a
                    href="https://github.com/valdezDev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>Visual Studio Code</li>
                <li>PostMan</li>
                <li>Enzyme, JEST</li>
                <li>mLab</li>
                <li>Heroku, Digital Ocean, Netlify</li>
                <li>KanbanFlow, WakaTime, Strict Time Management</li>
                <li>
                  Excellent Team Communication and Customer Service Experience
                </li>
              </ul>
            </CardText>
          </Card>
        </Col>
      </Row>
    </Card>
  </Layout>
)
export default AboutPage
